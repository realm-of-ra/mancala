mod test_init_game {
    use starknet::{ContractAddress, get_caller_address};
    use starknet::testing::{set_block_number, set_caller_address, set_contract_address};
    use dojo::world::{WorldStorage, WorldStorageTrait};
    use dojo_cairo_test::spawn_test_world;

    use mancala::store::{Store, StoreTrait};
    use mancala::systems::actions::{actions, IActionsDispatcher, IActionsDispatcherTrait};
    use mancala::tests::setup::setup;
    use mancala::models::seed::SeedColor;
    use mancala::models::index::GameStatus;

    #[test]
    #[available_gas(300000000000)]
    fn test_new_game() {
        let (world, systems) = setup::spawn_game();
        let mut store: Store = StoreTrait::new(world);
        systems.actions.initialize_game_counter();

        systems.actions.new_game();
        let game_counter = store.get_game_counter(1);
        let game_id = game_counter.count - 1;

        // Check player 1 exists
        let player_1 = store.get_player(game_id, setup::OWNER());
        assert(player_1.len_pits == 6, 'Player 1 pits length is wrong');

        // Check mancala board exists
        let mancala_board = store.get_mancala_board(game_id);
        assert(mancala_board.player_one == setup::OWNER(), 'Player one address is wrong');
        assert(mancala_board.status == GameStatus::Pending, 'Game status is wrong');
    }

    #[test]
    #[available_gas(300000000000)]
    fn test_join_game() {
        let (world, systems) = setup::spawn_game();
        let mut store: Store = StoreTrait::new(world);
        systems.actions.initialize_game_counter();

        systems.actions.new_game();

        let game_counter = store.get_game_counter(1);
        let game_id = game_counter.count - 1;

        // Change caller to player 2
        let ANYONE = starknet::contract_address_const::<'ANYONE'>();
        set_contract_address(ANYONE);

        systems.actions.join_game(game_id);

        let mancala_board_after = store.get_mancala_board(game_id);
        assert(mancala_board_after.player_one == setup::OWNER(), 'Player one address is wrong');
        assert(mancala_board_after.player_two == ANYONE, 'Player two address is wrong');

        // Check player 1 pits are correctly initialized
        let mut pit_idx = 1;
        let mut seeds_seen = 0;
        loop {
            if pit_idx > 6 {
                break;
            }
            let player_1_pit = store.get_pit(game_id, setup::OWNER(), pit_idx);
            assert(player_1_pit.seeds.len() == 4, 'P1 pit seed count is wrong');
            let mut seed_idx = 0;
            loop {
                if seed_idx == 4 {
                    break;
                }
                let seed_id = *player_1_pit.seeds.at(seed_idx);
                let seed = store.get_seed(game_id, setup::OWNER(), seed_id);
                assert(seed.color == SeedColor::Green, 'P1 Seed color is wrong');
                seed_idx += 1;
                seeds_seen += 1;
            };
            pit_idx += 1;
        };

        // Check player 2 pits are correctly initialized
        pit_idx = 1;
        loop {
            if pit_idx > 6 {
                break;
            }
            let player_1_pit = store.get_pit(game_id, ANYONE, pit_idx);
            assert(player_1_pit.seeds.len() == 4, 'P2 pit seed count is wrong');
            let mut seed_idx = 0;
            loop {
                if seed_idx == 4 {
                    break;
                }
                let seed_id = *player_1_pit.seeds.at(seed_idx);
                let seed = store.get_seed(game_id, ANYONE, seed_id);
                assert(seed.color == SeedColor::Blue, 'P2 Seed color is wrong');
                seed_idx += 1;
                seeds_seen += 1;
            };
            pit_idx += 1;
        };

        assert(seeds_seen == 48, 'Wrong seed count');
    }

    #[test]
    #[available_gas(300000000000)]
    fn test_create_private_game() {
        let (world, systems) = setup::spawn_game();
        let mut store: Store = StoreTrait::new(world);
        systems.actions.initialize_game_counter();

        let OPPONENT = starknet::contract_address_const::<'ANYONE'>();
        systems.actions.create_private_game(OPPONENT);

        let game_counter = store.get_game_counter(1);
        let game_id = game_counter.count - 1;

        let mancala_board_after = store.get_mancala_board(game_id);
        assert(mancala_board_after.player_one == setup::OWNER(), 'Player one address is wrong');
        assert(mancala_board_after.player_two == OPPONENT, 'Player two address is wrong');
        assert(mancala_board_after.is_private == true, 'Game is not private');

        // Check player 1 pits are correctly initialized
        let mut pit_idx = 1;
        loop {
            if pit_idx > 6 {
                break;
            }
            let player_1_pit = store.get_pit(game_id, setup::OWNER(), pit_idx);
            assert(player_1_pit.seeds.len() == 4, 'P1 pit seed count is wrong');
            let mut seed_idx = 0;
            loop {
                if seed_idx == 4 {
                    break;
                }
                let seed_id = *player_1_pit.seeds.at(seed_idx);
                let seed = store.get_seed(game_id, setup::OWNER(), seed_id);
                assert(seed.color == SeedColor::Green, 'P1 Seed color is wrong');
                assert(seed.pit_number == pit_idx, 'P1 Seed pit number is wrong');
                seed_idx += 1;
            };
            pit_idx += 1;
        };

        // Check player 2 pits are correctly initialized
        pit_idx = 1;
        loop {
            if pit_idx > 6 {
                break;
            }
            let player_1_pit = store.get_pit(game_id, OPPONENT, pit_idx);
            assert(player_1_pit.seeds.len() == 4, 'P2 pit seed count is wrong');
            let mut seed_idx = 0;
            loop {
                if seed_idx == 4 {
                    break;
                }
                let seed_id = *player_1_pit.seeds.at(seed_idx);
                let seed = store.get_seed(game_id, OPPONENT, seed_id);
                assert(seed.color == SeedColor::Blue, 'P2 Seed color is wrong');
                assert(seed.pit_number == pit_idx, 'P2 Seed pit number is wrong');
                seed_idx += 1;
            };
            pit_idx += 1;
        };
    }
}

mod test_play {
    use starknet::{ContractAddress, get_caller_address};
    use starknet::testing::{set_block_number, set_caller_address, set_contract_address};
    use dojo::world::{WorldStorage, WorldStorageTrait};
    use dojo_cairo_test::spawn_test_world;

    use mancala::store::{Store, StoreTrait};
    use mancala::systems::actions::{actions, IActionsDispatcher, IActionsDispatcherTrait};
    use mancala::tests::setup::setup;
    use mancala::models::seed::SeedColor;
    use mancala::models::index::GameStatus;

    use mancala::tests::utils::{move_player_seeds_to_store};

    #[test]
    #[available_gas(300000000000)]
    fn test_get_players() {
        let (world, systems) = setup::spawn_game();
        let mut store: Store = StoreTrait::new(world);
        systems.actions.initialize_game_counter();

        let OPPONENT = starknet::contract_address_const::<'ANYONE'>();
        systems.actions.create_private_game(OPPONENT);

        let game_counter = store.get_game_counter(1);
        let game_id = game_counter.count - 1;

        let (player_one, player_two) = systems.actions.get_players(game_id);
        assert(player_one.address == setup::OWNER(), 'Player one address is wrong');
        assert(player_two.address == OPPONENT, 'Player two address is wrong');
    }

    #[test]
    #[available_gas(300000000000)]
    fn test_move() {
        let (world, systems) = setup::spawn_game();
        let mut store: Store = StoreTrait::new(world);
        systems.actions.initialize_game_counter();

        systems.actions.new_game();

        let game_counter = store.get_game_counter(1);
        let game_id = game_counter.count - 1;

        // Change caller to player 2
        let ANYONE = starknet::contract_address_const::<'ANYONE'>();
        set_contract_address(ANYONE);
        systems.actions.join_game(game_id);

        // Go back to player 1 to start the game
        set_contract_address(setup::OWNER());

        // Move the seeds from pit 4. Means pit 5, 6, 7 should now have seeds and also one in the
        // opponent pit 1
        systems.actions.move(game_id, 4);

        // Pit 4 of player 1 should be empty
        let p1_pit_4 = store.get_pit(game_id, setup::OWNER(), 4);
        assert(p1_pit_4.seeds.len() == 0, 'P1 pit 4 seed count is wrong');

        // Pit 4, 5, 6 of player 1 should have 5 seeds
        let p1_pit_5 = store.get_pit(game_id, setup::OWNER(), 5);
        let p1_pit_6 = store.get_pit(game_id, setup::OWNER(), 6);
        assert(p1_pit_5.seeds.len() == 5, 'P1 pit 5 seed count is wrong');
        assert(p1_pit_6.seeds.len() == 5, 'P1 pit 6 seed count is wrong');

        // Store pit should have 1 seed
        let p1_store = store.get_pit(game_id, setup::OWNER(), 7);
        assert(p1_store.seeds.len() == 1, 'P1 store seed count is wrong');

        // Player2 pit 1 should have 1 extra seed
        let p2_pit_1 = store.get_pit(game_id, ANYONE, 1);
        assert(p2_pit_1.seeds.len() == 5, 'P2 pit 1 seed count is wrong');

        // Player 2 turn
        set_contract_address(ANYONE);

        // Move the seeds from pit 4. Means pit 5, 6, 7 should now have seeds and also one in other
        // player pit 1
        systems.actions.move(game_id, 4);
        // Pit 3 of player 1 should be empty
        let p2_pit_4 = store.get_pit(game_id, ANYONE, 4);
        assert(p2_pit_4.seeds.len() == 0, 'P2 pit 4 seed count is wrong');

        let p2_pit_5 = store.get_pit(game_id, ANYONE, 5);
        let p2_pit_6 = store.get_pit(game_id, ANYONE, 6);
        let p2_pit_store = store.get_pit(game_id, ANYONE, 7);
        assert(p2_pit_5.seeds.len() == 5, 'P2 pit 5 seed count is wrong');
        assert(p2_pit_6.seeds.len() == 5, 'P2 pit 6 seed count is wrong');
        assert(p2_pit_store.seeds.len() == 1, 'P2 store seed count is wrong');
    }

    #[test]
    #[available_gas(300000000000)]
    fn test_capture_seeds() {
        let (world, systems) = setup::spawn_game();
        let mut store: Store = StoreTrait::new(world);
        systems.actions.initialize_game_counter();

        systems.actions.new_game();

        let game_counter = store.get_game_counter(1);
        let game_id = game_counter.count - 1;

        // Change caller to player 2
        let ANYONE = starknet::contract_address_const::<'ANYONE'>();
        set_contract_address(ANYONE);
        systems.actions.join_game(game_id);

        // Player 1 turn, empty pit 6
        set_contract_address(setup::OWNER());
        systems.actions.move(game_id, 6);

        // Player 2 turn, move seeds from pit 4
        set_contract_address(ANYONE);
        systems.actions.move(game_id, 4);

        // Check player 1 store before capturing
        let p1_store_before = store.get_pit(game_id, setup::OWNER(), 7);

        // Check player 2 pit 1 before capturing
        let p2_pit_1_before = store.get_pit(game_id, ANYONE, 1);

        // Player 1 turn, move seeds from pit 2, last seed should be on pit 6, capture other player
        // seeds on pit 1
        set_contract_address(setup::OWNER());
        systems.actions.move(game_id, 2);

        let p2_pit_1 = store.get_pit(game_id, ANYONE, 1);
        assert(p2_pit_1.seeds.len() == 0, 'P2 pit 1 seed count is wrong');

        let p1_store_after = store.get_pit(game_id, setup::OWNER(), 7);
        let expected_seeds_in_store = p1_store_before.seeds.len() + p2_pit_1_before.seeds.len() + 1;
        assert(
            p1_store_after.seeds.len() == expected_seeds_in_store, 'P1 store seed count is wrong'
        );
    }

    #[test]
    #[available_gas(300000000000)]
    fn test_timeout() {
        let (world, systems) = setup::spawn_game();
        let mut store: Store = StoreTrait::new(world);
        systems.actions.initialize_game_counter();

        systems.actions.new_game();
        let game_counter = store.get_game_counter(1);
        let game_id = game_counter.count - 1;

        // Change caller to player 2
        let ANYONE = starknet::contract_address_const::<'ANYONE'>();
        set_contract_address(ANYONE);

        systems.actions.join_game(game_id);

        // Set initial block number
        set_block_number(14);

        systems.actions.timeout(game_id, setup::OWNER());

        let mancala_board_after = store.get_mancala_board(game_id);

        assert(mancala_board_after.status == GameStatus::TimeOut, 'Game not timeout');
    }

    #[test]
    #[available_gas(300000000000)]
    fn test_end_game() {
        let (world, systems) = setup::spawn_game();
        let mut store: Store = StoreTrait::new(world);
        systems.actions.initialize_game_counter();

        systems.actions.new_game();

        let game_counter = store.get_game_counter(1);
        let game_id = game_counter.count - 1;

        // Change caller to player 2
        let ANYONE = starknet::contract_address_const::<'ANYONE'>();
        set_contract_address(ANYONE);
        systems.actions.join_game(game_id);

        // Player 1 turn
        set_contract_address(setup::OWNER());
        systems.actions.move(game_id, 5);

        // Player 2 turn
        set_contract_address(ANYONE);
        systems.actions.move(game_id, 4);

        // Player 1 turn
        set_contract_address(setup::OWNER());

        // Move all player 2 seeds to store to finish the game
        let player_2 = store.get_player(game_id, ANYONE);
        move_player_seeds_to_store(world, @player_2);

        systems.actions.move(game_id, 3);

        let mancala_board = store.get_mancala_board(game_id);
        assert(mancala_board.status == GameStatus::Finished, 'Game status is wrong');

        // Player 2 should win because has all its seeds in the store
        assert(mancala_board.winner == ANYONE, 'Game winner is wrong');

        let (p1_score, p2_score) = systems.actions.get_score(game_id);
        assert(p1_score == 23, 'Player 1 score is wrong');
        assert(p2_score == 25, 'Player 2 score is wrong');

        // Check that there is the correct amount of seeds in the store
        let p1_store = store.get_pit(game_id, setup::OWNER(), 7);
        assert(p1_store.seeds.len().try_into().unwrap() == p1_score, 'P1 store seed count is wrong');
        let mut p1_index = 0;
        loop {
            if p1_index == p1_store.seeds.len() {
                break;
            }
            let seed_id = *p1_store.seeds.at(p1_index);
            let p1_seed = store.get_seed(game_id, setup::OWNER(), seed_id);
            assert(p1_seed.pit_number == 7, 'P1 Seed not in store');
            p1_index += 1;
        };

        let p2_store = store.get_pit(game_id, ANYONE, 7);
        assert(p2_store.seeds.len().try_into().unwrap() == p2_score, 'P2 store seed count is wrong');
        let mut p2_index = 0;
        loop {
            if p2_index == p2_store.seeds.len() {
                break;
            }
            let seed_id = *p2_store.seeds.at(p2_index);
            let p2_seed = store.get_seed(game_id, ANYONE, seed_id);
            assert(p2_seed.color != SeedColor::None, 'P2 seed not exist');
            assert(p2_seed.pit_number == 7, 'P2 Seed not in store');
            p2_index += 1;
        };
    }
}

mod test_validations {
    use starknet::{ContractAddress, get_caller_address};
    use starknet::testing::{set_block_number, set_caller_address, set_contract_address};
    use dojo::world::{WorldStorage, WorldStorageTrait};
    use dojo_cairo_test::spawn_test_world;

    use mancala::store::{Store, StoreTrait};
    use mancala::systems::actions::{actions, IActionsDispatcher, IActionsDispatcherTrait};
    use mancala::tests::setup::setup;
    use mancala::models::game_counter::{GameCounter, GameCounterTrait};

    #[test]
    #[available_gas(300000000000)]
    fn test_initialize_game_counter() {
        let (world, systems) = setup::spawn_game();
        let mut store: Store = StoreTrait::new(world);

        systems.actions.initialize_game_counter();
        let mut game_counter = store.get_game_counter(1);
        assert(game_counter.count == 1, 'Wrong game counter');

        game_counter.increment();
        assert(game_counter.count == 2, 'Wrong game counter after');
    }

    #[test]
    #[available_gas(300000000000)]
    #[should_panic]
    fn test_initialize_game_counter_error() {
        let (world, systems) = setup::spawn_game();
        let mut store: Store = StoreTrait::new(world);

        systems.actions.initialize_game_counter();
        let game_counter = store.get_game_counter(1);
        assert(game_counter.count == 1, 'Wrong game counter');

        systems.actions.initialize_game_counter();
    }
}
