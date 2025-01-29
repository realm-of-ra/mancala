#[starknet::component]
mod SeasonComponent {
    use dojo::model::ModelStorage;
    use dojo::world::WorldStorage;
    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
    use starknet::{ContractAddress, get_tx_info, get_caller_address};

    use mancala::constants::{PRIZES};
    use mancala::models::season::{Season, SeasonTrait, SeasonAssert};
    use mancala::models::sponsor::Sponsor;
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
        }
    }
}
