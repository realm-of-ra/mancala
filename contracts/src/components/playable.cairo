#[starknet::component]
mod PlayableComponent {
    use core::debug::PrintTrait;

    use dojo::world::WorldStorage;
    use starknet::ContractAddress;
    use starknet::info::{
        get_caller_address, get_contract_address, get_block_timestamp, get_tx_info,
    };
    use achievement::store::{Store as ArcadeStore, StoreTrait as ArcadeStoreTrait};

    use mancala::store::{Store, StoreTrait};
    use mancala::models::player::{Player, PlayerTrait};
    use mancala::models::boost::{BoostType};
    use mancala::models::mancala_board::{GameStatus, MancalaBoard, MancalaBoardTrait};
    use mancala::models::game_counter::{GameCounter, GameCounterTrait};
    use mancala::models::seed::SeedColor;
    use mancala::models::settings::{Settings, SettingsTrait, SettingsAssert};
    use mancala::utils::board::{
        get_player_seeds, distribute_seeds, capture_seeds, capture_remaining_seeds,
        restart_player_pits, initialize_player_seeds,
    };
    use mancala::models::season::{Season, SeasonTrait, SeasonAssert};
    use mancala::helpers::address_resolver::AddressResolver;
    use mancala::types::task::{Task, TaskTrait};
    use mancala::types::varient::Varient;
    use mancala::interfaces::erc721::{ISeasonERC721Dispatcher, ISeasonERC721DispatcherTrait};
    use mancala::interfaces::erc20::{IBoostERC20Dispatcher, IBoostERC20DispatcherTrait};

    use openzeppelin_token::erc20::interface::{IERC20Dispatcher, IERC20DispatcherTrait};

    use mancala::constants::MAX_BOOSTS_COUNT;

    mod errors {
        const GAME_NOT_IN_PROGRESS: felt252 = 'Game: not in progress';
        const GAME_PLAYER_TWO_NOT_SET: felt252 = 'Game: player two not set';
        const PLAYER_NOT_IN_GAME: felt252 = 'Not a game player';
        const PLAYER_DID_NOT_REQUEST_RESTART: felt252 = 'Player did not request restart';
        const GAME_BOOST_NOT_ALLOWED: felt252 = 'Game: Boost not allowed';
        const MAX_BOOSTS_ALLOWED: felt252 = 'Boost limit reached';
        const STILL_HAVE_PENDING_BOOST: felt252 = 'Still have unused boost';
    }

    #[storage]
    struct Storage {}

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {}

    #[generate_trait]
    impl InternalImpl<TState, +HasComponent<TState>> of InternalTrait<TState> {
        /// Creates a new game
        ///
        /// # Arguments
        /// * `self` - Reference to the component state
        /// * `world` - The World dispatcher
        ///
        /// # Returns
        /// * `MancalaBoard` - The newly created MancalaBoard instance
        fn new_game(ref self: ComponentState<TState>, world: WorldStorage, varient: Varient) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

            let player_one_address = get_caller_address();
            let mut game_id = store.get_game_counter(1);
            let mut player_one: Player = PlayerTrait::new(game_id.count, player_one_address);
            let mancala_game: MancalaBoard = MancalaBoardTrait::new(
                game_id.count, varient.into(), player_one_address,
            );
            restart_player_pits(world, @player_one, SeedColor::Green);
            game_id.increment();

            store.set_mancala_board(mancala_game);
            store.set_game_counter(game_id);
            store.set_player(player_one);
            initialize_player_seeds(world, @player_one, 1_u128, SeedColor::Green);
        }

        /// Allows a second player to join an existing game
        ///
        /// # Arguments
        /// * `self` - Reference to the component state
        /// * `world` - The World dispatcher
        /// * `game_id` - The ID of the game to join
        fn join_game(ref self: ComponentState<TState>, world: WorldStorage, game_id: u128) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

            let player_two_address = get_caller_address();
            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            let mut player_two: Player = PlayerTrait::new(mancala_game.game_id, player_two_address);
            mancala_game.join_game(player_two);

            restart_player_pits(world, @player_two, SeedColor::Blue);
            store.set_mancala_board(mancala_game);
            store.set_player(player_two);
            initialize_player_seeds(world, @player_two, 25_u128, SeedColor::Blue);
        }

        fn timeout(
            ref self: ComponentState<TState>,
            world: WorldStorage,
            game_id: u128,
            opponent_address: ContractAddress,
        ) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);
            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            mancala_game.timeout_opponent(opponent_address);

            store.set_mancala_board(mancala_game);
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
            ref self: ComponentState<TState>,
            world: WorldStorage,
            varient: Varient,
            opponent_address: ContractAddress,
        ) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

            let player_one_address = get_caller_address();
            let mut game_id = store.get_game_counter(1);
            let player_one: Player = PlayerTrait::new(game_id.count, player_one_address);
            let player_two: Player = PlayerTrait::new(game_id.count, opponent_address);
            let mut mancala_game: MancalaBoard = MancalaBoardTrait::private_mancala(
                game_id.count, varient.into(), player_one_address, opponent_address,
            );
            game_id.increment();

            store.set_mancala_board(mancala_game);
            store.set_game_counter(game_id);
            store.set_player(player_one);

            restart_player_pits(world, @player_one, SeedColor::Green);
            restart_player_pits(world, @player_two, SeedColor::Blue);
            store.set_player(player_two);
            initialize_player_seeds(world, @player_one, 1_u128, SeedColor::Green);
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
            ref self: ComponentState<TState>, world: WorldStorage, game_id: u128,
        ) -> (Player, Player) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let mancala_game: MancalaBoard = store.get_mancala_board(game_id);

            let player_one: Player = store
                .get_player(mancala_game.game_id, mancala_game.player_one);
            let player_two: Player = store
                .get_player(mancala_game.game_id, mancala_game.player_two);
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
            ref self: ComponentState<TState>, world: WorldStorage, game_id: u128, selected_pit: u8,
        ) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);

            assert(mancala_game.status == GameStatus::InProgress, errors::GAME_NOT_IN_PROGRESS);
            assert(
                mancala_game.player_two != core::num::traits::Zero::<ContractAddress>::zero(),
                errors::GAME_PLAYER_TWO_NOT_SET,
            );
            assert(mancala_game.status == GameStatus::InProgress, 'Game is not in progress');

            let player: ContractAddress = get_caller_address();

            mancala_game.validate_move(player, selected_pit);

            let (mut current_player, mut opponent) = self.get_players(world, game_id);
            let mut current_player_pit = store
                .get_pit(current_player.game_id, current_player.address, selected_pit);
            let pit_seed_number: u8 = current_player_pit.seed_count;
            if current_player_pit.seed_count == 0 {
                panic!("Selected pit is empty. Choose another pit.");
            }

            // Distribute seeds and get last pit
            let (last_pit, is_in_current_player_side) = distribute_seeds(
                world, ref current_player, ref opponent, selected_pit,
            );

            // **Handle Player Switch and Check for Extra Turn**
            let switched: bool = mancala_game.handle_player_switch(last_pit, opponent);
            if !switched {
                // Emit extra turn
                store.player_extra_turn(mancala_game.game_id, current_player.address);
            } else {
                // Emit end turn event when player switches
                store.end_turn(mancala_game.game_id, current_player.address, opponent.address);
            }

            if is_in_current_player_side {
                let captured_seeds = capture_seeds(
                    world, last_pit, ref current_player, ref opponent,
                );
                if captured_seeds > 0 {
                    store
                        .capture(
                            mancala_game.game_id, current_player.address, last_pit, captured_seeds,
                        );

                    // [Trophy] Update Collecting task event
                    let arcade_store: ArcadeStore = ArcadeStoreTrait::new(world);
                    let task_id = Task::Collecting.identifier(0);
                    let extractor_task_id = Task::Clearing.identifier(0);
                    let time = get_block_timestamp();
                    arcade_store.progress(player.into(), task_id, captured_seeds.into(), time);
                    arcade_store
                        .progress(player.into(), extractor_task_id, captured_seeds.into(), time);
                }
            }

            let current_player_seeds = get_player_seeds(world, @current_player);
            let opponent_seeds = get_player_seeds(world, @opponent);
            if current_player_seeds.len() == 0 || opponent_seeds.len() == 0 {
                if current_player_seeds.len() == 0 {
                    let captured_seeds = capture_remaining_seeds(world, ref opponent);

                    // [Trophy] Update Collecting task event
                    let arcade_store: ArcadeStore = ArcadeStoreTrait::new(world);
                    let task_id = Task::Collecting.identifier(0);
                    let extractor_task_id = Task::Clearing.identifier(0);
                    let time = get_block_timestamp();
                    arcade_store.progress(player.into(), task_id, captured_seeds, time);
                    arcade_store
                        .progress(player.into(), extractor_task_id, captured_seeds.into(), time);
                }

                if opponent_seeds.len() == 0 {
                    let captured_seeds = capture_remaining_seeds(world, ref current_player);

                    // [Trophy] Update Collecting task event
                    let arcade_store: ArcadeStore = ArcadeStoreTrait::new(world);
                    let task_id = Task::Collecting.identifier(0);
                    let extractor_task_id = Task::Clearing.identifier(0);
                    let time = get_block_timestamp();
                    arcade_store.progress(player.into(), task_id, captured_seeds, time);
                    arcade_store
                        .progress(player.into(), extractor_task_id, captured_seeds.into(), time);
                }
                mancala_game.status = GameStatus::Finished;
                let mut current_player_store = store
                    .get_pit(current_player.game_id, current_player.address, 7);
                let mut opponet_store = store.get_pit(opponent.game_id, opponent.address, 7);

                if current_player_store.seed_count > opponet_store.seed_count {
                    mancala_game.winner = current_player.address;
                } else if current_player_store.seed_count < opponet_store.seed_count {
                    mancala_game.winner = opponent.address;
                }
            }

            if mancala_game.varient == Varient::HouseMancala.into() {
                let mut mancala_player: Player = store.get_player(mancala_game.game_id, player);
                let extra_turn_boost = mancala_player.boost_extra_turn == true;
                if extra_turn_boost {
                    mancala_game.current_player = player;
                    mancala_player.boost_extra_turn = false;
                }

                store.set_player(mancala_player);
            }

            store.set_mancala_board(mancala_game);
            store.set_player(current_player);
            store.set_player(opponent);

            store.player_move(mancala_game.game_id, selected_pit, pit_seed_number);
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
            ref self: ComponentState<TState>, world: WorldStorage, game_id: u128,
        ) -> (u8, u8) {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            let player_one: Player = store
                .get_player(mancala_game.game_id, mancala_game.player_one);
            let player_two: Player = store
                .get_player(mancala_game.game_id, mancala_game.player_two);

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
            ref self: ComponentState<TState>, world: WorldStorage, game_id: u128,
        ) -> bool {
            // [Setup] Datastore
            let store: Store = StoreTrait::new(world);

            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            let player_one: Player = store
                .get_player(mancala_game.game_id, mancala_game.player_one);
            let player_two: Player = store
                .get_player(mancala_game.game_id, mancala_game.player_two);

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
        fn forfeited(ref self: ComponentState<TState>, world: WorldStorage, game_id: u128) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

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
        fn request_restart_game(
            ref self: ComponentState<TState>, world: WorldStorage, game_id: u128,
        ) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

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
            ref self: ComponentState<TState>, world: WorldStorage, game_id: u128,
        ) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            let player_one: Player = store
                .get_player(mancala_game.game_id, mancala_game.player_one);
            let player_two: Player = store
                .get_player(mancala_game.game_id, mancala_game.player_two);

            assert(player_one.restart_requested == true, errors::PLAYER_DID_NOT_REQUEST_RESTART);
            if (player_two.address != core::num::traits::Zero::<ContractAddress>::zero()) {
                assert(
                    player_two.restart_requested == true, errors::PLAYER_DID_NOT_REQUEST_RESTART,
                );
            }

            let mut player_one: Player = PlayerTrait::new(
                mancala_game.game_id, mancala_game.player_one,
            );
            let mut player_two: Player = PlayerTrait::new(
                mancala_game.game_id, mancala_game.player_two,
            );

            let mancala_game: MancalaBoard = MancalaBoardTrait::restart_game(
                game_id,
                mancala_game.varient.into(),
                mancala_game.player_one,
                mancala_game.player_two,
                mancala_game.is_private,
            );
            store.set_player(player_one);
            store.set_player(player_two);
            store.set_mancala_board(mancala_game);

            restart_player_pits(world, @player_one, SeedColor::Green);
            restart_player_pits(world, @player_two, SeedColor::Blue);
        }

        fn use_extra_turn_boost(
            ref self: ComponentState<TState>, world: WorldStorage, game_id: u128,
        ) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

            let player_address = get_caller_address();

            let mut mancala_game: MancalaBoard = store.get_mancala_board(game_id);
            let mut player: Player = store.get_player(mancala_game.game_id, player_address);

            assert(
                mancala_game.varient == Varient::HouseMancala.into(),
                errors::GAME_BOOST_NOT_ALLOWED,
            );
            assert(player.boost_use_count <= MAX_BOOSTS_COUNT, errors::MAX_BOOSTS_ALLOWED);
            assert(player.boost_extra_turn == false, errors::STILL_HAVE_PENDING_BOOST);
            player.boost_use_count += 1;

            self._burn_boost(world, BoostType::ExtraTurn);
            player.boost_extra_turn = true;

            store.set_player(player);
        }
    }

    #[generate_trait]
    impl PrivateImpl<TState, +HasComponent<TState>> of PrivateTrait<TState> {
        #[inline]
        fn _burn_boost(self: @ComponentState<TState>, world: WorldStorage, boost: BoostType) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

            let boost = store.get_boost(boost);

            let dispatcher = IBoostERC20Dispatcher { contract_address: boost.address };

            let amount_with_decimals: u256 = 100000000000000000;
            assert(
                dispatcher.balance_of(get_caller_address()) >= amount_with_decimals,
                'Insufficient balance',
            );
            dispatcher
                .transfer_from(get_caller_address(), get_contract_address(), amount_with_decimals);
            dispatcher.burn(amount_with_decimals);
        }

        // Season Pass should get you 10 games?
        #[inline]
        fn _mint_season_pass(
            ref self: ComponentState<TState>,
            world: WorldStorage,
            game_id: u128,
            settings_id: u32,
            season_id: u32,
        ) {
            // [Setup] Datastore
            let mut store: Store = StoreTrait::new(world);

            let mut settings: Settings = store.get_settings(settings_id);
            let mut season: Season = store.get_season(season_id);
            assert(season.assert_is_active(), 'Season not active');

            let fee_distribution = season.entry_amount / 100 * 10;
            let season_distribution = season.entry_amount / 100 * 90;

            let chain_id = get_tx_info().unbox().chain_id;
            let payment_dispatcher = IERC20Dispatcher {
                contract_address: AddressResolver::get_lords_address(chain_id),
            };
            payment_dispatcher
                .transfer_from(
                    get_caller_address(),
                    AddressResolver::get_ror_address(chain_id),
                    fee_distribution,
                );
            payment_dispatcher
                .transfer_from(get_caller_address(), season.season_address, season_distribution);

            season.reward_pool += season_distribution;
            store.set_season(season);

            let game_token = ISeasonERC721Dispatcher {
                contract_address: settings.game_pass_address,
            };
            game_token.mint(get_caller_address());
            // TODO: [Achievement] Player
        }
    }
}
