use starknet::ContractAddress;

#[starknet::interface]
pub(crate) trait IConfig<TState> {
    fn update_gate_pass(ref self: TState, settings_id: u8, mancala_pass_address: ContractAddress);
}

#[dojo::contract]
pub mod MancalaConfig {
    use dojo::world::WorldStorage;
    use mancala::components::config::ConfigComponent;
    use mancala::constants::NAMESPACE;
    use super::*;

    component!(path: ConfigComponent, storage: config, event: ConfigEvent);
    impl ConfigImpl = ConfigComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        #[substorage(v0)]
        config: ConfigComponent::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        ConfigEvent: ConfigComponent::Event,
    }

    #[abi(embed_v0)]
    pub impl MancalaConfigImpl of IConfig<ContractState> {
        fn update_gate_pass(
            ref self: ContractState, settings_id: u8, mancala_pass_address: ContractAddress,
        ) {
            let world = self.world_storage();
            self.config.update_gate_pass(world, settings_id, mancala_pass_address)
        }
    }

    #[generate_trait]
    impl Private of PrivateTrait {
        fn world_storage(self: @ContractState) -> WorldStorage {
            self.world(@NAMESPACE())
        }
    }
}
