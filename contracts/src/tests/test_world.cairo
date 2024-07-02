#[cfg(test)]
mod tests {
    use core::starknet::{ContractAddress, get_caller_address};
    use core::starknet::class_hash::Felt252TryIntoClassHash;
    use core::starknet::testing::{set_block_number, set_caller_address, set_contract_address};
    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
    use dojo::test_utils::{spawn_test_world, deploy_contract};

    use mancala::{
        systems::{actions::{actions, IActionsDispatcher, IActionsDispatcherTrait}},
        models::{mancala_game::{MancalaGame, GameId, mancala_game, GameStatus, MancalaImpl}},
        models::{player::{GamePlayer, Player}}
    };

    fn setup_game() -> (
        GamePlayer, GamePlayer, IWorldDispatcher, IActionsDispatcher, MancalaGame, ContractAddress
    ) {
        let player_one_address = starknet::contract_address_const::<0x0>();
        let player_two_address = starknet::contract_address_const::<0x456>();
        let mut models = array![mancala_game::TEST_CLASS_HASH];
        let mut world = spawn_test_world(models);
        let init_calldata: Span<felt252> = array![].span();
        let contract_address = world
            .deploy_contract('salt', actions::TEST_CLASS_HASH.try_into().unwrap(), init_calldata);
        let actions_system = IActionsDispatcher { contract_address: contract_address };
        actions_system.create_initial_game_id();
        let game: MancalaGame = actions_system.create_game();
        actions_system.join_game(game.game_id, player_two_address);
        let player_one: GamePlayer = get!(world, (player_one_address, game.game_id), (GamePlayer));
        let player_two: GamePlayer = get!(world, (player_two_address, game.game_id), (GamePlayer));

        (player_one, player_two, world, actions_system, game, contract_address)
    }

    #[test]
    #[available_gas(3000000000000)]
    fn test_create_game() {
        let (player_one, player_two, _, _, _, _) = setup_game();
        assert(player_one.pit1 == 4, 'p1 pit 1 not init correctly');
        assert(player_one.pit2 == 4, 'p1 pit 2 not init correctly');
        assert(player_one.pit3 == 4, 'p1 pit 3 not init correctly');
        assert(player_one.pit4 == 4, 'p1 pit 4 not init correctly');
        assert(player_one.pit5 == 4, 'p1 pit 5 not init correctly');
        assert(player_one.pit6 == 4, 'p1 pit 6 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 1 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 2 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 3 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 4 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 5 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 6 not init correctly');
    }

    #[test]
    #[available_gas(3000000000000)]
    fn test_create_private_game() {
        let init_calldata: Span<felt252> = array![].span();
        let _player_one_address = starknet::contract_address_const::<0x0>();
        let player_two_address = starknet::contract_address_const::<0x456>();
        let mut models = array![mancala_game::TEST_CLASS_HASH];
        let world = spawn_test_world(models);
        let contract_address = world
            .deploy_contract('salt', actions::TEST_CLASS_HASH.try_into().unwrap(), init_calldata);

        let actions_system = IActionsDispatcher { contract_address: contract_address };
        actions_system.create_initial_game_id();
        let mancala_game: MancalaGame = actions_system.create_private_game(player_two_address);

        let player_one: GamePlayer = get!(
            world, (mancala_game.player_one, mancala_game.game_id), (GamePlayer)
        );
        let player_two: GamePlayer = get!(
            world, (mancala_game.player_two, mancala_game.game_id), (GamePlayer)
        );
        let mancala_game: MancalaGame = get!(world, (mancala_game.game_id), (MancalaGame));

        assert(mancala_game.is_private == true, 'mancala game is not private');
        assert(player_one.pit1 == 4, 'p1 pit 1 not init correctly');
        assert(player_one.pit2 == 4, 'p1 pit 2 not init correctly');
        assert(player_one.pit3 == 4, 'p1 pit 3 not init correctly');
        assert(player_one.pit4 == 4, 'p1 pit 4 not init correctly');
        assert(player_one.pit5 == 4, 'p1 pit 5 not init correctly');
        assert(player_one.pit6 == 4, 'p1 pit 6 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 1 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 2 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 3 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 4 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 5 not init correctly');
        assert(player_two.pit6 == 4, 'p2 pit 6 not init correctly');
    }

    #[test]
    #[available_gas(3000000000000)]
    fn test_game_id_increments() {
        let (_player_one, _player_two, _, _, _, contract_address) = setup_game();

        let actions_system = IActionsDispatcher { contract_address: contract_address };
        let game_two: MancalaGame = actions_system.create_game();
        assert!(game_two.game_id == 2, "incorrect id set");
        let game_three: MancalaGame = actions_system.create_game();
        assert!(game_three.game_id == 3, "incorrect id set");
    }

    #[test]
    #[available_gas(3000000000000)]
    fn test_move_pit1() {
        let (player_one, player_two, world, actions_system, game, _) = setup_game();
        let selected_pit: u8 = 1;
        actions_system.move(game.game_id, selected_pit);
        let game_after_move: MancalaGame = get!(world, game.game_id, (MancalaGame));
        let player_one: GamePlayer = get!(world, (player_one.address, game.game_id), (GamePlayer));

        assert!(player_one.game_id == game.game_id, "player_one game id not correct");
        assert!(player_two.game_id == game.game_id, "player_two game id not correct");
        assert!(player_one.pit1 == 0, "pit1 not cleared");
        assert!(player_one.pit2 == 5, "pit2 does not have correct count");
        assert!(player_one.pit3 == 5, "pit3 does not have correct count");
        assert!(player_one.pit4 == 5, "pit4 does not have correct count");
        assert!(player_one.pit5 == 5, "pit5 does not have correct count");
        assert!(player_one.pit6 == 4, "pit5 does not have correct count");
        assert!(
            game_after_move.current_player == player_two.address, "current player did not switch"
        );
        assert!(
            actions_system.is_game_finished(game.game_id) == false, "game should not be finished"
        );
    }

    #[test]
    #[available_gas(3000000000000)]
    fn test_move_pit3() {
        let (player_one, _, world, actions_system, game, _) = setup_game();
        let selected_pit: u8 = 3;
        let (_, game_status_after_move) = actions_system.move(game.game_id, selected_pit);
        let game_after_move: MancalaGame = get!(world, game.game_id, (MancalaGame));
        let player_one: GamePlayer = get!(world, (player_one.address, game.game_id), (GamePlayer));

        assert!(player_one.pit1 == 4, "pit1 not cleared");
        assert!(player_one.pit2 == 4, "pit2 does not have correct count");
        assert!(player_one.pit3 == 0, "pit3 does not have correct count");
        assert!(player_one.pit4 == 5, "pit4 does not have correct count");
        assert!(player_one.pit5 == 5, "pit5 does not have correct count");
        assert!(player_one.pit6 == 5, "pit5 does not have correct count");
        assert!(player_one.mancala == 1, "mancala should have 1 seed");
        assert!(
            game_after_move.current_player == player_one.address,
            "current player should remain the same"
        );
        assert!(
            actions_system.is_game_finished(game.game_id) == false, "game should not be finished"
        );
        assert!(game_status_after_move == GameStatus::InProgress, "game is not in progress");
    }


    // todo this test needs to be implemented
    #[test]
    #[available_gas(3000000000000)]
    fn test_capture() {
        let (mut player1, mut player2, _, _, mut game, _) = setup_game();
        game.status = GameStatus::InProgress;
        let last_pit: u8 = 3;
        assert!(game.status == GameStatus::InProgress, "Game is not in progress");
        player1.pit3 = 1;
        let pit4 = player2.pit4;
        assert!(player1.mancala == 0, "incorrect initial mancala count");
        MancalaImpl::capture(game, last_pit, ref player1, ref player2);
        assert!(player1.pit3 == 0, "pit3 does not have correct count");
        assert!(player1.mancala == pit4 + 1, "pit not captured");
    }

    #[test]
    #[should_panic]
    fn test_cannot_move_if_game_finished() {
        let (_, _, world, actions_system, mut mancala_game, _) = setup_game();
        mancala_game.status = GameStatus::Finished;
        set!(world, (mancala_game));
        let selected_pit: u8 = 1;
        actions_system.move(mancala_game.game_id, selected_pit);
    }

    #[test]
    #[should_panic(expected: ("Game is not in progress", 0x454e545259504f494e545f4641494c4544))]
    fn test_cannot_move_if_game_timeout() {
        let (_, _, world, actions_system, mut mancala_game, _) = setup_game();
        mancala_game.status = GameStatus::TimeOut;
        set!(world, (mancala_game));
        let selected_pit: u8 = 1;
        actions_system.move(mancala_game.game_id, selected_pit);
    }

    #[test]
    #[should_panic(expected: ("Game is in progress", 0x454e545259504f494e545f4641494c4544))]
    fn test_cannot_call_timeout_if_move_is_allowed() {
        let (_, _, _, actions_system, game, _) = setup_game();
        actions_system.time_out(game.game_id);
    }

    #[test]
    fn test_can_call_timeout_once_enough_time_has_passed() {
        let (_, player_two, world, actions_system, game, _) = setup_game();
        set_block_number(10000);
        actions_system.time_out(game.game_id);
        let mancala_game_after_move = get!(world, (game.game_id), (MancalaGame));
        assert!(mancala_game_after_move.status == GameStatus::TimeOut, "Game is not timed out");
        assert!(mancala_game_after_move.winner == player_two.address, "winner is not player two");
    }

    #[test]
    fn test_game_should_be_finished() {
        let (mut player_one, mut player_two, world, actions_system, mancala_game, _) = setup_game();
        player_one.pit1 = 0;
        player_one.pit2 = 0;
        player_one.pit3 = 0;
        player_one.pit4 = 0;
        player_one.pit5 = 0;
        player_one.pit6 = 1;
        set!(world, (player_one));

        let selected_pit: u8 = 6;
        actions_system.move(mancala_game.game_id, selected_pit);
        let mancala_game_after_move = get!(world, (mancala_game.game_id), (MancalaGame));
        assert!(
            actions_system.is_game_finished(mancala_game_after_move.game_id) == true,
            "game is not finished"
        );
        assert!(
            mancala_game_after_move.status == GameStatus::Finished, "game status is not Finished"
        );
        assert!(mancala_game_after_move.winner == player_two.address, "winner is not player two");
    }

    // New tests for the updated Player model

    #[test]
    #[available_gas(3000000000000)]
    fn test_initialize_player() {
        let init_calldata: Span<felt252> = array![].span();
        let world = spawn_test_world(array![mancala_game::TEST_CLASS_HASH]);
        let contract_address = world
            .deploy_contract('salt', actions::TEST_CLASS_HASH.try_into().unwrap(), init_calldata);
        let actions_system = IActionsDispatcher { contract_address: contract_address };

        let player_address = starknet::contract_address_const::<0x123>();
        actions_system.initialize_player(player_address);

        let player: Player = get!(world, player_address, (Player));
        assert!(player.address == player_address, "Player address not set correctly");
        assert!(player.games_won.len() == 0, "Games won should be empty");
        assert!(player.games_lost.len() == 0, "Games lost should be empty");
    }

    #[test]
    #[available_gas(3000000000000)]
    fn test_finish_game() {
        let (player_one, player_two, mut world, actions_system, game, _) = setup_game();

        // Initialize players
        actions_system.initialize_player(player_one.address);
        actions_system.initialize_player(player_two.address);

        // Set game as finished with player_one as winner
        let mut mancala_game: MancalaGame = get!(world, game.game_id, (MancalaGame));
        mancala_game.status = GameStatus::Finished;
        mancala_game.winner = player_one.address;
        set!(world, (mancala_game));

        let (loser, winner) = mancala_game.finish_game(world, game.game_id);

        set!(world, (loser, winner));

        let winner: Player = get!(world, player_one.address, (Player));
        let loser: Player = get!(world, player_two.address, (Player));

        assert!(winner.games_won.len() == 1, "Winner should have 1 game won");
        assert!(*winner.games_won.at(0) == game.game_id, "Winner's game ID should match");
        assert!(winner.games_lost.len() == 0, "Winner should have 0 games lost");

        assert!(loser.games_lost.len() == 1, "Loser should have 1 game lost");
        assert!(*loser.games_lost.at(0) == game.game_id, "Loser's game ID should match");
        assert!(loser.games_won.len() == 0, "Loser should have 0 games won");
    }

    #[test]
    #[available_gas(3000000000000)]
    fn test_get_player_history() {
        let init_calldata: Span<felt252> = array![].span();
        let world = spawn_test_world(array![mancala_game::TEST_CLASS_HASH]);
        let contract_address = world
            .deploy_contract('salt', actions::TEST_CLASS_HASH.try_into().unwrap(), init_calldata);
        let actions_system = IActionsDispatcher { contract_address: contract_address };

        let player_address = starknet::contract_address_const::<0x123>();
        actions_system.initialize_player(player_address);

        // Manually add some game IDs to the player's history
        let mut player: Player = get!(world, player_address, (Player));
        player.games_won.append(1);
        player.games_won.append(2);
        player.games_lost.append(3);
        set!(world, (player));

        let (games_won, games_lost) = actions_system.get_player_history(player_address);

        assert!(games_won.len() == 2, "Should have 2 games won");
        // assert!(games_won[0] == 1, "First won game should be 1");
        // assert!(games_won[1] == 2, "Second won game should be 2");
        assert!(games_lost.len() == 1, "Should have 1 game lost");
    // assert!(games_lost[0] == 3, "Lost game should be 3");
    }

    #[test]
    #[available_gas(3000000000000)]
    fn test_move_updates_player_history() {
        let (player_one, player_two, world, actions_system, game, _) = setup_game();

        // Initialize players
        actions_system.initialize_player(player_one.address);
        actions_system.initialize_player(player_two.address);

        // Set up the game so it will finish after one move
        let mut mancala_game: MancalaGame = get!(world, game.game_id, (MancalaGame));
        let mut p1: GamePlayer = get!(world, (player_one.address, game.game_id), (GamePlayer));
        let mut p2: GamePlayer = get!(world, (player_two.address, game.game_id), (GamePlayer));
        p1.pit1 = 1;
        p1.pit2 = 0;
        p1.pit3 = 0;
        p1.pit4 = 0;
        p1.pit5 = 0;
        p1.pit6 = 0;
        p2.pit1 = 0;
        p2.pit2 = 0;
        p2.pit3 = 0;
        p2.pit4 = 0;
        p2.pit5 = 0;
        p2.pit6 = 0;
        set!(world, (mancala_game, p1));
        set!(world, (mancala_game, p2));

        // Make the move that should finish the game
        actions_system.move(game.game_id, 1);

        // Check player histories
        let (p1_won, p1_lost) = actions_system.get_player_history(player_one.address);
        let (p2_won, p2_lost) = actions_system.get_player_history(player_two.address);

        assert!(p1_won.len() == 1, "Player one should have won 1 game");
        // assert!(p1_won[0] == game.game_id, "Player one's won game should match");
        assert!(p1_lost.len() == 0, "Player one should have lost 0 games");

        assert!(p2_won.len() == 0, "Player two should have won 0 games");
        assert!(p2_lost.len() == 1, "Player two should have lost 1 game");
    // assert!(p2_lost[0] == game.game_id, "Player two's lost game should match");
    }


    #[test]
    #[available_gas(3000000000000)]
    fn test_forfeited() {
        let (player_one, player_two, world, actions_system, game, _) = setup_game();

        // Initialize players
        actions_system.initialize_player(player_one.address);
        actions_system.initialize_player(player_two.address);

        //player_one forfeits
        actions_system.forfeited(game.game_id, player_one.address);
        let mancala_game_after = get!(world, (game.game_id), (MancalaGame));
        assert!(mancala_game_after.status == GameStatus::Forfeited, "Game is forfeited");
        assert!(mancala_game_after.winner == player_two.address, "player_two is the winner");
    }

    #[test]
    #[available_gas(3000000000000)]
    fn test_final_capture() {
        let (player_one, player_two, world, actions_system, game, _) = setup_game();

        // Initialize players
        actions_system.initialize_player(player_one.address);
        actions_system.initialize_player(player_two.address);

        // Set up the game so it will finish after one move
        let mut mancala_game: MancalaGame = get!(world, game.game_id, (MancalaGame));
        let mut p1: GamePlayer = get!(world, (player_one.address, game.game_id), (GamePlayer));
        let mut p2: GamePlayer = get!(world, (player_two.address, game.game_id), (GamePlayer));
        p1.pit1 = 1;
        p1.pit2 = 0;
        p1.pit3 = 0;
        p1.pit4 = 0;
        p1.pit5 = 0;
        p1.pit6 = 0;
        set!(world, (mancala_game, p1));
        set!(world, (mancala_game, p2));

        let selected_pit: u8 = 1;
        actions_system.move(game.game_id, selected_pit);

        let mancala_game_after = get!(world, (game.game_id), (MancalaGame));
        let player_two: GamePlayer = get!(world, (player_two.address, game.game_id), (GamePlayer));

        assert!(player_one.game_id == game.game_id, "player_one game id not correct");
        assert!(player_two.game_id == game.game_id, "player_two game id not correct");

        // assert all pits are cleared on the board
        assert!(player_two.pit1 == 0, "pit1 not cleared");
        assert!(player_two.pit2 == 0, "pit2 does not have correct count");
        assert!(player_two.pit3 == 0, "pit3 does not have correct count");
        assert!(player_two.pit4 == 0, "pit4 does not have correct count");
        assert!(player_two.pit5 == 0, "pit5 does not have correct count");
        assert!(player_two.pit6 == 0, "pit5 does not have correct count");

        assert!(mancala_game_after.winner == player_two.address, "player_two is the winner");
    }

    #[test]
    #[available_gas(3000000000000)]
    #[should_panic(expected: ('player two did not restart', 'ENTRYPOINT_FAILED'))]
    fn test_should_revert_if_only_player_one_has_requested_to_restart() {
        let (_player_one, _player_two, _, _, _, contract_address) = setup_game();
        let player_one_address = starknet::contract_address_const::<0x456>();
        let player_two_address = starknet::contract_address_const::<0x455>();

        let actions_system = IActionsDispatcher { contract_address: contract_address };

        set_contract_address(player_one_address);
        let game_two: MancalaGame = actions_system.create_game();

        set_contract_address(player_two_address);
        actions_system.join_game(game_two.game_id, player_two_address);
        // player 1 requests to restart
        set_contract_address(player_one_address);
        actions_system.request_restart_game(2);

        actions_system.restart_game(2, true);
    }
    #[test]
    #[available_gas(3000000000000)]
    #[should_panic(expected: ('player one did not restart', 'ENTRYPOINT_FAILED'))]
    fn test_should_revert_if_only_player_two_has_requested_to_restart() {
        let (_player_one, _player_two, _, _, _, contract_address) = setup_game();
        let player_one_address = starknet::contract_address_const::<0x456>();
        let player_two_address = starknet::contract_address_const::<0x455>();

        let actions_system = IActionsDispatcher { contract_address: contract_address };

        set_contract_address(player_one_address);
        let game_two: MancalaGame = actions_system.create_game();

        set_contract_address(player_two_address);
        actions_system.join_game(game_two.game_id, player_two_address);
        // player 1 requests to restart
        set_contract_address(player_two_address);
        actions_system.request_restart_game(2);

        actions_system.restart_game(2, true);
    }

    #[test]
    #[available_gas(3000000000000)]
    fn test_restart_function_with_two_players() {
        let (_player_one, _player_two, world, _, _, contract_address) = setup_game();
        let player_one_address = starknet::contract_address_const::<0x456>();
        let player_two_address = starknet::contract_address_const::<0x455>();

        let actions_system = IActionsDispatcher { contract_address: contract_address };

        set_contract_address(player_one_address);
        let game_two: MancalaGame = actions_system.create_game();

        set_contract_address(player_two_address);
        actions_system.join_game(game_two.game_id, player_two_address);

        //  player one moves
        let selected_pit: u8 = 1;
        set_contract_address(player_one_address);
        actions_system.move(game_two.game_id, selected_pit);
        let player_one_game: GamePlayer = get!(
            world, (player_one_address, game_two.game_id), (GamePlayer)
        );

        assert!(player_one_game.pit1 == 0, "pit1 not cleared");

        // player two moves
        set_contract_address(player_two_address);
        actions_system.move(game_two.game_id, selected_pit);
        let player_two_game: GamePlayer = get!(
            world, (player_one_address, game_two.game_id), (GamePlayer)
        );

        assert!(player_two_game.pit1 == 0, "pit1 b not cleared");

        // player 1 requests to restart
        set_contract_address(player_one_address);
        actions_system.request_restart_game(2);

        // player 2 requests to restart
        set_contract_address(player_two_address);
        actions_system.request_restart_game(2);

        let mancala_game: MancalaGame = actions_system.restart_game(2, true);
        let player_one_game: GamePlayer = get!(
            world, (player_one_address, game_two.game_id), (GamePlayer)
        );
        let player_two_game: GamePlayer = get!(
            world, (player_one_address, game_two.game_id), (GamePlayer)
        );

        assert(mancala_game.is_private == true, 'mancala game is not private');
        assert(player_one_game.pit1 == 4, 'p1 pit 1 not init correctly');
        assert(player_one_game.pit2 == 4, 'p1 pit 2 not init correctly');
        assert(player_one_game.pit3 == 4, 'p1 pit 3 not init correctly');
        assert(player_one_game.pit4 == 4, 'p1 pit 4 not init correctly');
        assert(player_one_game.pit5 == 4, 'p1 pit 5 not init correctly');
        assert(player_one_game.pit6 == 4, 'p1 pit 6 not init correctly');
        assert(player_two_game.pit6 == 4, 'p2 pit 1 not init correctly');
        assert(player_two_game.pit6 == 4, 'p2 pit 2 not init correctly');
        assert(player_two_game.pit6 == 4, 'p2 pit 3 not init correctly');
        assert(player_two_game.pit6 == 4, 'p2 pit 4 not init correctly');
        assert(player_two_game.pit6 == 4, 'p2 pit 5 not init correctly');
        assert(player_two_game.pit6 == 4, 'p2 pit 6 not init correctly');
    }
}

