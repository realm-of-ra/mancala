#[starknet::component]
pub mod InitializableComponent {
    // Dojo imports
    use dojo::world::WorldStorage;
    use starknet::ContractAddress;

    // Internal imports
    use mancala::store::{Store, StoreTrait};
    use mancala::models::game_counter::GameCounterTrait;
    use mancala::models::settings::{SettingsTrait, Settings};

    // Storage
    #[storage]
    pub struct Storage {}

    // Events
    #[event]
    #[derive(Drop, starknet::Event)]
    pub enum Event {}

    #[generate_trait]
    pub impl InternalImpl<TState, +HasComponent<TState>> of InternalTrait<TState> {
        /// Initializes the game counter
        ///
        /// # Arguments
        /// * `self` - Reference to the component state
        /// * `world` - The World dispatcher
        ///
        /// # Effects
        /// * Sets up the initial game counter in the world state
        fn initialize(
            self: @ComponentState<TState>,
            world: WorldStorage,
            mancala_pass_address: ContractAddress,
            gate_keeper_address: ContractAddress,
        ) {
            // [Effect] Initialize component
            let mut store: Store = StoreTrait::new(world);
            let current_game_counter = store.get_game_counter(1);

            assert(current_game_counter.count == 0, 'Counter already initialized');

            // [Effect] Create GameCounter
            let mut game_counter = GameCounterTrait::new();
            let settings: Settings = SettingsTrait::initialize(
                1, mancala_pass_address, gate_keeper_address,
            );

            // [Effect] GameCounter increment
            game_counter.increment();

            store.set_game_counter(game_counter);
            store.set_settings(settings);
        }
    }
}
