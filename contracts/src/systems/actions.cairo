use core::starknet::ContractAddress;
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use mancala::models::{mancala_game::{MancalaGame, GameStatus}};
use mancala::models::player::{GamePlayer, GamePlayerTrait, Player};

#[dojo::interface]
trait IActions {
    fn create_initial_game_id(ref world: IWorldDispatcher);
    fn create_game(ref world: IWorldDispatcher) -> MancalaGame;
    fn join_game(ref world: IWorldDispatcher, game_id: u128, player_two_address: ContractAddress);
    fn create_private_game(
        ref world: IWorldDispatcher, player_two_address: ContractAddress
    ) -> MancalaGame;
    fn move(
        ref world: IWorldDispatcher, game_id: u128, selected_pit: u8
    ) -> (ContractAddress, GameStatus);
    fn time_out(ref world: IWorldDispatcher, game_id: u128);
    fn get_score(ref world: IWorldDispatcher, game_id: u128) -> (u8, u8);
    fn is_game_finished(ref world: IWorldDispatcher, game_id: u128) -> bool;
    fn initialize_player(ref world: IWorldDispatcher, player_address: ContractAddress);
    fn get_player_history(
        world: @IWorldDispatcher, player_address: ContractAddress
    ) -> (Array<u128>, Array<u128>);
    fn forfeited(ref world: IWorldDispatcher, game_id: u128, player_address: ContractAddress);
    fn request_restart_game(ref world: IWorldDispatcher, game_id: u128);
    fn restart_game(ref world: IWorldDispatcher, game_id: u128, private: bool) -> MancalaGame;
}

#[dojo::contract]
mod actions {
    use core::starknet::{ContractAddress, get_caller_address, SyscallResultTrait};
    use core::starknet::contract_address::ContractAddressZeroable;
    use core::starknet::info::get_execution_info_syscall;
    use mancala::models::{mancala_game::{MancalaGame, MancalaGameTrait, GameId, GameStatus}};
    use mancala::models::{player::{GamePlayer, GamePlayerTrait, Player}};
    use super::IActions;

    #[abi(embed_v0)]
    impl ActionsImpl of IActions<ContractState> {
        fn create_initial_game_id(ref world: IWorldDispatcher) {
            let existing_game_id = get!(world, 1, (GameId));
            if (existing_game_id.game_id > 0) {
                panic!("error global game id already created");
            }
            let game_id: GameId = GameId { id: 1, game_id: 1 };
            set!(world, (game_id));
        }

        fn create_game(ref world: IWorldDispatcher) -> MancalaGame {
            let player_one_address = get_caller_address();
            let mut game_id: GameId = get!(world, 1, (GameId));
            let player_one = GamePlayerTrait::new(game_id.game_id, player_one_address);
            let mancala_game: MancalaGame = MancalaGameTrait::new(
                game_id.game_id, player_one_address
            );
            game_id.game_id += 1;
            set!(world, (player_one, mancala_game, game_id));
            mancala_game
        }

        fn join_game(
            ref world: IWorldDispatcher, game_id: u128, player_two_address: ContractAddress
        ) {
            let mut mancala_game = get!(world, game_id, (MancalaGame));
            assert!(
                mancala_game.player_two == ContractAddressZeroable::zero(), "player_2 already set"
            );
            let player_two = GamePlayerTrait::new(mancala_game.game_id, player_two_address);
            mancala_game.join_game(player_two);
            set!(world, (player_two, mancala_game));
        }

        fn create_private_game(
            ref world: IWorldDispatcher, player_two_address: ContractAddress
        ) -> MancalaGame {
            let player_one_address = get_caller_address();
            let mut game_id: GameId = get!(world, 1, (GameId));
            let mut mancala_game: MancalaGame = MancalaGameTrait::new(
                game_id.game_id, player_one_address
            );
            let player_one = GamePlayerTrait::new(mancala_game.game_id, player_one_address);
            let player_two = GamePlayerTrait::new(mancala_game.game_id, player_two_address);
            mancala_game.join_game(player_two);
            mancala_game.is_private = true;
            game_id.game_id += 1;
            set!(world, (player_one, player_two, mancala_game, game_id));
            mancala_game
        }

        fn move(
            ref world: IWorldDispatcher, game_id: u128, selected_pit: u8
        ) -> (ContractAddress, GameStatus) {
            let mut mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));

            assert!(mancala_game.status == GameStatus::InProgress, "Game is not in progress");
            assert!(
                mancala_game.player_two != ContractAddressZeroable::zero(),
                "Player two not yet set."
            );

            let player: ContractAddress = get_caller_address();

            mancala_game.validate_move(player, selected_pit);
            mancala_game.validate_time_out(player);

            if mancala_game.status == GameStatus::InProgress {
                let (mut current_player, mut opponent) = mancala_game.get_players(world);
                let mut seeds = mancala_game.get_seeds(current_player, selected_pit);
                if seeds == 0 {
                    panic!("Selected pit is empty. Choose another pit.");
                }
                mancala_game.clear_pit(ref current_player, selected_pit);
                mancala_game
                    .distribute_seeds(ref current_player, ref opponent, ref seeds, selected_pit);

                if mancala_game.is_game_finished(current_player, opponent) {
                    mancala_game.final_capture(ref current_player, ref opponent);
                    mancala_game.set_winner(current_player, opponent);
                    set!(world, (mancala_game, current_player, opponent));

                    // Call finish_game to update player records
                    let (loser, winner) = mancala_game.finish_game(world, game_id);
                    set!(world, (loser, winner));
                    (mancala_game.current_player, mancala_game.status)
                } else {
                    set!(world, (mancala_game, current_player, opponent));
                    (mancala_game.current_player, mancala_game.status)
                }
            } else {
                set!(world, (mancala_game));
                (mancala_game.current_player, mancala_game.status)
            }
        }

        fn time_out(ref world: IWorldDispatcher, game_id: u128) {
            let mut mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));
            assert!(mancala_game.status == GameStatus::InProgress, "Game is not in progress");

            let (_, mut opponent) = mancala_game.get_players(world);
            let execution_info = get_execution_info_syscall().unwrap_syscall().unbox();
            let block_info = execution_info.block_info.unbox();
            assert!(
                block_info.block_number >= mancala_game.last_move + mancala_game.time_between_move,
                "Game is in progress"
            );

            mancala_game.status = GameStatus::TimeOut;
            mancala_game.winner = opponent.address;

            set!(world, (mancala_game));
            // Call finish_game to update player records
            mancala_game.finish_game(world, game_id);
            let (loser, winner) = mancala_game.finish_game(world, game_id);
            set!(world, (loser, winner));
        }

        fn get_score(ref world: IWorldDispatcher, game_id: u128) -> (u8, u8) {
            let mut mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));
            let player_one: GamePlayer = get!(
                world, (mancala_game.player_one, mancala_game.game_id), (GamePlayer)
            );
            let player_two: GamePlayer = get!(
                world, (mancala_game.player_two, mancala_game.game_id), (GamePlayer)
            );
            mancala_game.get_score(player_one, player_two)
        }

        fn is_game_finished(ref world: IWorldDispatcher, game_id: u128) -> bool {
            let mut mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));
            let player_one: GamePlayer = get!(
                world, (mancala_game.player_one, mancala_game.game_id), (GamePlayer)
            );
            let player_two: GamePlayer = get!(
                world, (mancala_game.player_two, mancala_game.game_id), (GamePlayer)
            );
            mancala_game.is_game_finished(player_one, player_two)
        }


        fn initialize_player(ref world: IWorldDispatcher, player_address: ContractAddress) {
            let player = Player {
                address: player_address, games_won: ArrayTrait::new(), games_lost: ArrayTrait::new()
            };
            set!(world, (player));
        }

        fn get_player_history(
            world: @IWorldDispatcher, player_address: ContractAddress
        ) -> (Array<u128>, Array<u128>) {
            let player = get!(world, player_address, (Player));
            (player.games_won, player.games_lost)
        }

        // todo this function is not a production ready function
        // the player_address should not be passed. The current caller should be used
        fn forfeited(ref world: IWorldDispatcher, game_id: u128, player_address: ContractAddress) {
            let mut mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));
            let is_a_game_player: bool = mancala_game.player_one == player_address
                || mancala_game.player_two == player_address;
            assert!(is_a_game_player == true, "the passed address is not a game player");
            let player_one: GamePlayer = get!(
                world, (mancala_game.player_one, mancala_game.game_id), (GamePlayer)
            );
            let player_two: GamePlayer = get!(
                world, (mancala_game.player_two, mancala_game.game_id), (GamePlayer)
            );
            if player_address == player_one.address {
                mancala_game.forfeit_game(player_one.address);
            } else {
                mancala_game.forfeit_game(player_two.address);
            }
            set!(world, (mancala_game));
        }

        fn request_restart_game(ref world: IWorldDispatcher, game_id: u128) {
            let player: ContractAddress = get_caller_address();

            let mut player_info: GamePlayer = get!(world, (player, game_id), (GamePlayer));

            player_info.restart_requested = true;
            set!(world, (player_info));
        }

        fn restart_game(ref world: IWorldDispatcher, game_id: u128, private: bool) -> MancalaGame {
            let mut mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));
            let player_one_info: GamePlayer = get!(
                world, (mancala_game.player_one, mancala_game.game_id), (GamePlayer)
            );
            let player_two_info: GamePlayer = get!(
                world, (mancala_game.player_two, mancala_game.game_id), (GamePlayer)
            );

            assert(player_one_info.restart_requested == true, 'player one did not restart');
            if (player_two_info.address != ContractAddressZeroable::zero()) {
                assert(player_two_info.restart_requested == true, 'player two did not restart');
            }

            let player_one: GamePlayer = GamePlayerTrait::restart_game(
                game_id, mancala_game.player_one
            );
            let player_two: GamePlayer = GamePlayerTrait::restart_game(
                game_id, mancala_game.player_two
            );
            let mancala_game: MancalaGame = MancalaGameTrait::restart_game(
                game_id, mancala_game.player_one, mancala_game.player_two, private
            );
            set!(world, (player_one, player_two, mancala_game));
            mancala_game
        }
    }
}

