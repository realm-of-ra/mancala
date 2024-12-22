#[starknet::component]
mod InitializableComponent {
    // Dojo imports

    use dojo::world::WorldStorage;

    // Internal imports

    use mancala::store::{Store, StoreTrait};
    use mancala::models::game_counter::GameCounterTrait;

    // Storage

    #[storage]
    struct Storage {}

    // Events

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {}

    #[generate_trait]
    impl InternalImpl<
        TContractState, +HasComponent<TContractState>,
    > of InternalTrait<TContractState> {
        /// Initializes the game counter
        ///
        /// # Arguments
        /// * `self` - Reference to the component state
        /// * `world` - The World dispatcher
        ///
        /// # Effects
        /// * Sets up the initial game counter in the world state
        fn initialize(self: @ComponentState<TContractState>, world: WorldStorage) {
            // [Effect] Initialize component
            let mut store = StoreTrait::new(world);
            let current_game_counter = store.get_game_counter(1);

            assert(current_game_counter.count == 0, 'Counter already initialized');

            // [Effect] Create GameCounter
            let mut game_counter = GameCounterTrait::new();

            // [Effect] GameCounter increment
            game_counter.increment();

            store.set_game_counter(game_counter);
        }
    }
}
