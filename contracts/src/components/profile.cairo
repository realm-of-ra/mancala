#[starknet::component]
mod ProfileComponent {
    use core::debug::PrintTrait;

    use dojo::world::WorldStorage;
    use starknet::ContractAddress;
    use starknet::info::{get_caller_address};

    use mancala::store::{Store, StoreTrait};
    use mancala::models::profile::{Profile, ProfileTrait};

    mod errors {
        const PROFILE_EXISTS: felt252 = 'Player profile already exists';
        const PROFILE_NOT_FOUND: felt252 = 'Player profile does not exist';
        const NOT_PROFILE_OWNER: felt252 = 'Not profile owner';
    }

    #[storage]
    struct Storage {}

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {}

    #[generate_trait]
    impl InternalImpl<TState, +HasComponent<TState>> of InternalTrait<TState> {
        fn new_profile(self: @ComponentState<TState>, world: WorldStorage, name: felt252) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

            let player = get_caller_address();

            let profile = store.get_profile(player);
            assert(!profile.is_initialized, errors::PROFILE_EXISTS);

            let mut player_profile: Profile = ProfileTrait::new(player, name);

            store.set_profile(player_profile);
        }

        fn update_player_profile(
            self: @ComponentState<TState>, world: WorldStorage, name: felt252, new_uri: ByteArray,
        ) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

            let player = get_caller_address();
            let mut player_profile = store.get_profile(player);

            assert(player_profile.is_initialized, errors::PROFILE_NOT_FOUND);
            assert(player_profile.address == player, errors::NOT_PROFILE_OWNER);

            player_profile.update_profile(name, new_uri);
            store.set_profile(player_profile);
        }
    }
}
