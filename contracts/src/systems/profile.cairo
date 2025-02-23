#[starknet::interface]
pub(crate) trait IPlayerProfile<TState> {
    fn create_player_profile(self: @TState, name: felt252);
    fn update_player_profile(self: @TState, name: felt252, new_uri: ByteArray);
}

#[dojo::contract]
pub mod PlayerProfile {
    use super::{IPlayerProfile};

    //use starknet::ContractAddress;

    //use mancala::models::profile::Profile;
    use mancala::components::profile::ProfileComponent;
    use mancala::constants::NAMESPACE;

    use dojo::world::WorldStorage;

    component!(path: ProfileComponent, storage: profile, event: ProfileEvent);
    impl ProfileImpl = ProfileComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        #[substorage(v0)]
        profile: ProfileComponent::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        ProfileEvent: ProfileComponent::Event,
    }

    #[abi(embed_v0)]
    pub impl PlayerProfileImpl of IPlayerProfile<ContractState> {
        fn create_player_profile(self: @ContractState, name: felt252) {
            let world = self.world_storage();
            self.profile.new_profile(world, name)
        }

        fn update_player_profile(self: @ContractState, name: felt252, new_uri: ByteArray) {
            let world = self.world_storage();
            self.profile.update_player_profile(world, name, new_uri)
        }
    }

    #[generate_trait]
    impl Private of PrivateTrait {
        fn world_storage(self: @ContractState) -> WorldStorage {
            self.world(@NAMESPACE())
        }
    }
}
