//! Inspired by/Based on work by Await-0x
//! Original: https://github.com/Provable-Games/dark-shuffle
#[starknet::component]
mod SeasonComponent {
    use dojo::model::ModelStorage;
    use dojo::world::WorldStorage;
    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
    use starknet::{ContractAddress, get_tx_info, get_caller_address, get_contract_address};
    use openzeppelin_token::erc20::interface::{IERC20Dispatcher, IERC20DispatcherTrait};
    use openzeppelin_token::erc721::interface::{IERC721Dispatcher, IERC721DispatcherTrait};

    use mancala::constants::{PRIZES};
    use mancala::models::season::{Season, SeasonTrait, SeasonAssert};
    use mancala::models::settings::{Settings, SettingsTrait, SettingsAssert};
    use mancala::models::leaderboard::{Leaderboard};
    use mancala::models::sponsor::Sponsor;
    use mancala::helpers::address_resolver::AddressResolver;
    use mancala::helpers::prize_distribution::PrizeDistribution;
    use mancala::store::{Store, StoreTrait};

    #[storage]
    struct Storage {}

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {}

    #[generate_trait]
    impl InternalImpl<TState, +HasComponent<TState>> of InternalTrait<TState> {
        fn start_season(
            self: @ComponentState<TState>,
            world: WorldStorage,
            start_time: u64,
            duration: u64,
            entry_amount: u256,
            settings_id: u32,
        ) {
            let mut store: Store = StoreTrait::new(world);

            let settings = store.get_settings(settings_id);
            settings.assert_game_pass_is_set();

            let mut season: Season = SeasonTrait::new(
                season_id: world.dispatcher.uuid() + 1,
                season_address: get_contract_address(),
                settings_id: settings_id,
                start: start_time,
                end: start_time + duration,
                entry_amount: entry_amount,
            );

            store.set_season(season);
        }

        fn end_season(
            self: @ComponentState<TState>, world: WorldStorage, settings_id: u32, season_id: u32,
        ) {
            let mut store: Store = StoreTrait::new(world);

            let settings = store.get_settings(settings_id);
            let game_token = IERC721Dispatcher { contract_address: settings.game_pass_address };

            let mut season: Season = store.get_season(settings_id);
            season.assert_end_season();

            let chain_id = get_tx_info().unbox().chain_id;
            let payment_dispatcher = IERC20Dispatcher {
                contract_address: AddressResolver::get_lords_address(chain_id),
            };
            payment_dispatcher.approve(season.season_address, season.reward_pool);

            let mut i = 1;
            while i <= PRIZES {
                let position: Leaderboard = store.get_leaderboard(season_id, i);
                if position.score == 0 {
                    break;
                }

                let reward = season.reward_pool
                    / 100
                    * PrizeDistribution::get_rank_reward_percentage(i).into();

                let receiever_address = game_token.owner_of(position.game_id.into());
                payment_dispatcher.transfer_from(season.season_address, receiever_address, reward);

                // TODO: [Achievement] Legend
                i += 1;
            };

            season.finalized = true;
            store.set_season(season);
        }

        fn sponsor_season(
            self: @ComponentState<TState>,
            world: WorldStorage,
            season_id: u32,
            amount: u32,
            name: felt252,
            social: felt252,
        ) {
            let mut store: Store = StoreTrait::new(world);

            let mut season: Season = store.get_season(season_id);
            season.assert_sponsor(amount.into());

            let chain_id = get_tx_info().unbox().chain_id;
            let address = get_caller_address();

            let payment_dispatcher = IERC20Dispatcher {
                contract_address: AddressResolver::get_lords_address(chain_id),
            };
            let amount_with_decimals: u256 = amount.into() * 1000000000000000000;
            payment_dispatcher
                .transfer_from(get_caller_address(), season.season_address, amount_with_decimals);
            season.reward_pool += amount_with_decimals;

            let mut sponsor: Sponsor = store.get_sponsor(season_id, address);
            sponsor.name = name;
            sponsor.social = social;
            sponsor.amount += amount_with_decimals;

            store.set_sponsor(sponsor);
            store.set_season(season);
        }
    }
}
