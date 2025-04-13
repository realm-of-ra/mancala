#[starknet::component]
pub mod ConfigComponent {
    // Dojo imports
    use dojo::world::WorldStorage;
    use mancala::models::settings::{Settings, SettingsTrait};

    // Internal imports
    use mancala::store::{Store, StoreTrait};
    use starknet::ContractAddress;

    // Storage
    #[storage]
    pub struct Storage {}

    // Events
    #[event]
    #[derive(Drop, starknet::Event)]
    pub enum Event {}

    #[generate_trait]
    pub impl InternalImpl<TState, +HasComponent<TState>> of InternalTrait<TState> {
        fn update_gate_pass(
            ref self: ComponentState<TState>,
            world: WorldStorage,
            settings_id: u8,
            mancala_pass_address: ContractAddress,
        ) {
            let mut store: Store = StoreTrait::new(world);
            let mut settings: Settings = store.get_settings(settings_id);

            settings.update_gate_pass(mancala_pass_address);
            store.set_settings(settings);
        }
    }
}
