#[starknet::interface]
pub(crate) trait IMancalaSeason<TState> {
    fn new_season(
        self: @TState, start_time: u64, duration: u64, entry_amount: u256, settings_id: u32,
    );
    fn end_season(self: @TState, settings_id: u32, season_id: u32);
    fn sponsor_season(self: @TState, season_id: u32, amount: u32, name: felt252, social: felt252);
}

#[dojo::contract]
mod SeasonSystems {
    use super::{IMancalaSeason};
    use dojo::world::IWorldDispatcher;

    use starknet::ContractAddress;

    use mancala::components::season::SeasonComponent;
    use mancala::constants::NAMESPACE;

    use dojo::world::WorldStorage;

    component!(path: SeasonComponent, storage: season, event: SeasonEvent);
    impl SeasonImpl = SeasonComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        #[substorage(v0)]
        season: SeasonComponent::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        SeasonEvent: SeasonComponent::Event,
    }

    #[abi(embed_v0)]
    impl SeasonSystemsImpl of IMancalaSeason<ContractState> {
        fn new_season(
            self: @ContractState,
            start_time: u64,
            duration: u64,
            entry_amount: u256,
            settings_id: u32,
        ) {
            let world = self.world_storage();
            self.season.start_season(world, start_time, duration, entry_amount, settings_id)
        }

        fn end_season(self: @ContractState, settings_id: u32, season_id: u32) {
            let world = self.world_storage();
            self.season.end_season(world, settings_id, season_id)
        }

        fn sponsor_season(
            self: @ContractState, season_id: u32, amount: u32, name: felt252, social: felt252,
        ) {
            let world = self.world_storage();
            self.season.sponsor_season(world, season_id, amount, name, social)
        }
    }

    #[generate_trait]
    impl Private of PrivateTrait {
        fn world_storage(self: @ContractState) -> WorldStorage {
            self.world(@NAMESPACE())
        }
    }
}
