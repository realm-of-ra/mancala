#[starknet::component]
mod PlayableComponent {
    use core::debug::PrintTrait;

    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
    use starknet::ContractAddress;
    use starknet::info::{get_caller_address};

    use mancala::store::{Store, StoreTrait};
    use mancala::models::index::{GameStatus};
    use mancala::models::player::{Player, PlayerTrait};
    use mancala::models::mancala_board::{MancalaBoard, MancalaBoardTrait};
    use mancala::models::game_counter::{GameCounter, GameCounterTrait};
    use mancala::models::seed::SeedColor;
    use mancala::utils::board::{
        get_player_seeds, distribute_seeds, capture_seeds, capture_remaining_seeds, restart_player_pits
    };

    mod errors {
        const GAME_NOT_IN_PROGRESS: felt252 = 'Game: not in progress';
        const GAME_PLAYER_TWO_NOT_SET: felt252 = 'Game: player two not set';
        const PLAYER_NOT_IN_GAME: felt252 = 'Not a game player';
        const PLAYER_DID_NOT_REQUEST_RESTART: felt252 = 'Player did not request restart';
    }

    #[storage]
    struct Storage {}

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {}

    #[generate_trait]
    impl InternalImpl<
        TContractState, +HasComponent<TContractState>
    > of InternalTrait<TContractState> {
        /// Initializes the game counter
        ///
        /// # Arguments
        /// * `self` - Reference to the component state
        /// * `world` - The World dispatcher
        ///
        /// # Effects
        /// * Sets up the initial game counter in the world state
        fn initialize_game_counter(self: @ComponentState<TContractState>, world: IWorldDispatcher) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let current_game_counter = store.get_game_counter(1);
            assert(current_game_counter.count == 0, 'Counter already initialized');

            // [Effect] Create GameCounter
            let mut game_counter = GameCounterTrait::new();

            // [Effect] GameCounter increment
            game_counter.increment();

            store.set_game_counter(game_counter);
        }

        /// Creates a new game
        ///
        /// # Arguments
        /// * `self` - Reference to the component state
        /// * `world` - The World dispatcher
        ///
        /// # Returns
        /// * `MancalaBoard` - The newly created MancalaBoard instance
        fn new_game(
            self: @ComponentState<TContractState>, world: IWorldDispatcher
        ) -> MancalaBoard {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let player_one_address = get_caller_address();
            let mut game_id = store.get_game_counter(1);
            let mut player_one: Player = PlayerTrait::new(game_id.count, player_one_address);
            let mancala_game: MancalaBoard = MancalaBoardTrait::new(
                game_id.count, player_one_address
            );
            restart_player_pits(world, @player_one, SeedColor::Green);
            game_id.increment();

            store.set_state(mancala_game, game_id, player_one);

            mancala_game
        }

        /// Allows a second player to join an existing game
        ///
        /// # Arguments
        /// * `self` - Reference to the component state
        /// * `world` - The World dispatcher
        /// * `game_id` - The ID of the game to join
        fn join_game(
            self: @ComponentState<TContractState>, world: IWorldDispatcher, game_id: u128
        ) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let player_two_address = get_caller_address();
            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            let mut player_two: Player = PlayerTrait::new(mancala_game.game_id, player_two_address);
            mancala_game.join_game(player_two);

            restart_player_pits(world, @player_two, SeedColor::Blue);
            store.set_mancala_board(mancala_game);
            store.set_player(player_two);
        }

        /// Creates a private game with a specified second player
        ///
        /// # Arguments
        /// * `self` - Reference to the component state
        /// * `world` - The World dispatcher
        /// * `player_two_address` - The address of the second player
        ///
        /// # Returns
        /// * `MancalaBoard` - The newly created MancalaBoard instance
        fn create_private_game(
            self: @ComponentState<TContractState>,
            world: IWorldDispatcher,
            opponent_address: ContractAddress
        ) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let player_one_address = get_caller_address();
            let mut game_id = store.get_game_counter(1);
            let player_one: Player = PlayerTrait::new(game_id.count, player_one_address);
            let player_two: Player = PlayerTrait::new(game_id.count, opponent_address);
            let mut mancala_game: MancalaBoard = MancalaBoardTrait::private_mancala(
                game_id.count, player_one_address, opponent_address
            );
            game_id.increment();

            store.set_state(mancala_game, game_id, player_one);

            restart_player_pits(world, @player_one, SeedColor::Green);
            restart_player_pits(world, @player_two, SeedColor::Blue);
            store.set_player(player_two);
        }

        /// Retrieves both players for a given game, with the current player first
        ///
        /// # Arguments
        /// * `self` - Reference to the component state
        /// * `world` - The World dispatcher
        /// * `game_id` - The ID of the game
        ///
        /// # Returns
        /// * `(Player, Player)` - A tuple containing the current player and the opponent
        fn get_players(
            self: @ComponentState<TContractState>, world: IWorldDispatcher, game_id: u128
        ) -> (Player, Player) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let mancala_game: MancalaBoard = store.get_mancala_board(game_id);

            let player_one: Player = store.get_player(mancala_game.game_id, mancala_game.player_one);
            let player_two: Player = store.get_player(mancala_game.game_id, mancala_game.player_two);
            // the first player in the tupple is the current player
            if (mancala_game.current_player == player_one.address) {
                (player_one, player_two)
            } else {
                (player_two, player_one)
            }
        }

        /// Executes a move in the game
        ///
        /// # Arguments
        /// * `world` - The World dispatcher
        /// * `game_id` - The ID of the game
        /// * `selected_pit` - The pit selected for the move
        ///
        /// # Returns
        /// * `(ContractAddress, GameStatus)` - The address of the current player and the game
        /// status
        fn move(
            self: @ComponentState<TContractState>,
            world: IWorldDispatcher,
            game_id: u128,
            selected_pit: u8
        ) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);

            assert(mancala_game.status == GameStatus::InProgress, errors::GAME_NOT_IN_PROGRESS);
            assert(
                mancala_game.player_two != core::num::traits::Zero::<ContractAddress>::zero(),
                errors::GAME_PLAYER_TWO_NOT_SET
            );
            assert(mancala_game.status == GameStatus::InProgress, 'Game is not in progress');

            let player: ContractAddress = get_caller_address();

            mancala_game.validate_move(player, selected_pit);

            let (mut current_player, mut opponent) = self.get_players(world, game_id);
            let mut current_player_pit = store.get_pit(current_player.game_id, current_player.address, selected_pit);
            if current_player_pit.seed_count == 0 {
                panic!("Selected pit is empty. Choose another pit.");
            }

            // Distribute seeds and get last pit
            let last_pit = distribute_seeds(world, ref current_player, ref opponent, selected_pit);

            mancala_game.handle_player_switch(last_pit, opponent);
            capture_seeds(world, last_pit, ref current_player, ref opponent);

            let current_player_seeds = get_player_seeds(world, @current_player);
            let opponent_seeds = get_player_seeds(world, @opponent);
            if current_player_seeds.len() == 0 || opponent_seeds.len() == 0 {
                if current_player_seeds.len() == 0 {
                    capture_remaining_seeds(world, ref opponent);
                }

                if opponent_seeds.len() == 0 {
                    capture_remaining_seeds(world, ref current_player);
                }
                mancala_game.status = GameStatus::Finished;
                let mut current_player_store = store.get_pit(current_player.game_id, current_player.address, 7);
                let mut opponet_store = store.get_pit(opponent.game_id, opponent.address, 7);

                if current_player_store.seed_count > opponet_store.seed_count {
                    mancala_game.winner = current_player.address;
                } else if current_player_store.seed_count < opponet_store.seed_count {
                    mancala_game.winner = opponent.address;
                }
            }
            set!(world, (mancala_game, current_player, opponent));
        }

        /// Retrieves the current score for both players
        ///
        /// # Arguments
        /// * `world` - The World dispatcher
        /// * `game_id` - The ID of the game
        ///
        /// # Returns
        /// * `(u8, u8)` - The scores of player one and player two respectively
        fn get_score(
            self: @ComponentState<TContractState>, world: IWorldDispatcher, game_id: u128
        ) -> (u8, u8) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            let player_one: Player = store.get_player(mancala_game.game_id, mancala_game.player_one);
            let player_two: Player = store.get_player(mancala_game.game_id, mancala_game.player_two);
            
            let player_one_store = store.get_pit(player_one.game_id, player_one.address, 7);
            let player_two_store = store.get_pit(player_one.game_id, player_two.address, 7);
            (player_one_store.seed_count, player_two_store.seed_count)
        }

        /// Checks if the game is over
        ///
        /// # Arguments
        /// * `world` - The World dispatcher
        /// * `game_id` - The ID of the game
        ///
        /// # Returns
        /// * `bool` - True if the game is finished, false otherwise
        fn is_game_over(
            self: @ComponentState<TContractState>, world: IWorldDispatcher, game_id: u128
        ) -> bool {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            let player_one: Player = store.get_player(mancala_game.game_id, mancala_game.player_one);
            let player_two: Player = store.get_player(mancala_game.game_id, mancala_game.player_two);
            
            let player_one_seeds = get_player_seeds(world, @player_one);
            let player_two_seeds = get_player_seeds(world, @player_two);
            player_one_seeds.len() == 0 || player_two_seeds.len() == 0
        }

        /// Handles a player forfeiting the game
        ///
        /// # Arguments
        /// * `world` - The World dispatcher
        /// * `game_id` - The ID of the game
        ///
        /// # Effects
        /// * Updates the game status to forfeited and sets the winner
        fn forfeited(
            self: @ComponentState<TContractState>, world: IWorldDispatcher, game_id: u128
        ) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            let player_address: ContractAddress = get_caller_address();
            let is_player: bool = mancala_game.player_one == player_address
                || mancala_game.player_two == player_address;
            assert(is_player == true, errors::PLAYER_NOT_IN_GAME);

            // Determine the winner (the player who didn't forfeit)
            let winner_address: ContractAddress = if player_address == mancala_game.player_one {
                mancala_game.player_two
            } else {
                mancala_game.player_one
            };

            mancala_game.status = GameStatus::Forfeited;
            mancala_game.winner = winner_address;
            store.set_mancala_board(mancala_game);
        }

        /// Requests to restart the game
        ///
        /// # Arguments
        /// * `world` - The World dispatcher
        ///
        /// # Effects
        /// * Sets the restart_requested flag for the calling player
        fn request_restart_game(self: @ComponentState<TContractState>, world: IWorldDispatcher, game_id: u128) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let player_address: ContractAddress = get_caller_address();
            let mut player: Player = store.get_player(game_id, player_address);

            player.restart_requested = true;
            store.set_player(player);
        }

        /// Restarts the game if both players have requested it
        ///
        /// # Arguments
        /// * `self` - Reference to the component state
        /// * `world` - The World dispatcher
        /// * `game_id` - The ID of the game to restart
        ///
        /// # Returns
        /// * `MancalaBoard` - The newly restarted MancalaBoard instance
        ///
        /// # Panics
        /// * If either player has not requested a restart
        fn restart_current_game(
            self: @ComponentState<TContractState>, world: IWorldDispatcher, game_id: u128
        ) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            let player_one: Player = store.get_player(mancala_game.game_id, mancala_game.player_one);
            let player_two: Player = store.get_player(mancala_game.game_id, mancala_game.player_two);

            assert(player_one.restart_requested == true, errors::PLAYER_DID_NOT_REQUEST_RESTART);
            if (player_two.address != core::num::traits::Zero::<ContractAddress>::zero()) {
                assert(
                    player_two.restart_requested == true, errors::PLAYER_DID_NOT_REQUEST_RESTART
                );
            }

            let mut player_one: Player = PlayerTrait::new(mancala_game.game_id, mancala_game.player_one);
            let mut player_two: Player = PlayerTrait::new(mancala_game.game_id, mancala_game.player_two);
            let mancala_game: MancalaBoard = MancalaBoardTrait::restart_game(
                game_id, mancala_game.player_one, mancala_game.player_two, mancala_game.is_private
            );
            store.set_player(player_one);
            store.set_player(player_two);
            store.set_mancala_board(mancala_game);

            restart_player_pits(world, @player_one, SeedColor::Green);
            restart_player_pits(world, @player_two, SeedColor::Blue);
        }
    }
}
