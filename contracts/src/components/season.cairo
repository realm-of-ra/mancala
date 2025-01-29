#[starknet::component]
mod SeasonComponent {
    use dojo::model::ModelStorage;
    use dojo::world::WorldStorage;
    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
    use starknet::{ContractAddress, get_tx_info, get_caller_address};
    use openzeppelin_token::erc20::interface::{IERC20Dispatcher, IERC20DispatcherTrait};
    use openzeppelin_token::erc721::interface::{IERC721Dispatcher, IERC721DispatcherTrait};

    use mancala::constants::{PRIZES};
    use mancala::models::season::{Season, SeasonTrait, SeasonAssert};
    use mancala::models::sponsor::Sponsor;
    use mancala::helpers::address_resolver::AddressResolver;
    use mancala::store::{Store, StoreTrait};

    #[storage]
    struct Storage {}

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {}

    #[generate_trait]
    impl InternalImpl<TState, +HasComponent<TState>> of InternalTrait<TState> {
        fn sponsor_season(
            self: @ComponentState<TState>,
            world: WorldStorage,
            season_id: usize,
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
            payment_dispatcher.transfer_from(get_caller_address(), season.season_address, amount_with_decimals);
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
