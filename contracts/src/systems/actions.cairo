use core::starknet::ContractAddress;
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use mancala::models::{mancala_game::{MancalaGame, GameStatus}};
use mancala::models::player::{GamePlayer, GamePlayerTrait, Player};

#[dojo::interface]
trait IActions {
    fn create_initial_game_id();
    fn create_game() -> MancalaGame;
    fn join_game(game_id: u128, player_two_address: ContractAddress);
    fn create_private_game(player_two_address: ContractAddress) -> MancalaGame;
    fn move(game_id: u128, selected_pit: u8) -> (ContractAddress, GameStatus);
    fn time_out(game_id: u128);
    fn get_score(game_id: u128) -> (u8, u8);
    fn is_game_finished(game_id: u128) -> bool;
    fn test_func(game_id: u128) -> bool;
    fn initialize_player(player_address: ContractAddress);
    fn finish_game(game_id: u128);
    fn get_player_history(player_address: ContractAddress) -> (Array<u128>, Array<u128>);
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
        fn create_initial_game_id(world: IWorldDispatcher) {
            let existing_game_id = get!(world, 1, (GameId));
            if (existing_game_id.game_id > 0) {
                panic!("error global game id already created");
            }
            let game_id: GameId = GameId { id: 1, game_id: 1 };
            set!(world, (game_id));
        }

        fn create_game(world: IWorldDispatcher) -> MancalaGame {
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

        fn join_game(world: IWorldDispatcher, game_id: u128, player_two_address: ContractAddress) {
            let mut mancala_game = get!(world, game_id, (MancalaGame));
            assert!(
                mancala_game.player_two == ContractAddressZeroable::zero(), "player_2 already set"
            );
            let player_two = GamePlayerTrait::new(mancala_game.game_id, player_two_address);
            mancala_game.join_game(player_two);
            set!(world, (player_two, mancala_game));
        }

        fn create_private_game(
            world: IWorldDispatcher, player_two_address: ContractAddress
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
            world: IWorldDispatcher, game_id: u128, selected_pit: u8
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
                    mancala_game.status = GameStatus::Finished;
                    mancala_game.set_winner(current_player, opponent);
                    set!(world, (mancala_game, current_player, opponent));
                    
                    // Call finish_game to update player records
                    ActionsImpl::finish_game(world, game_id);
                    
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

        fn time_out(world: IWorldDispatcher, game_id: u128) {
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
            ActionsImpl::finish_game(world, game_id);
        }

        fn get_score(world: IWorldDispatcher, game_id: u128) -> (u8, u8) {
            let mut mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));
            let player_one: GamePlayer = get!(
                world, (mancala_game.player_one, mancala_game.game_id), (GamePlayer)
            );
            let player_two: GamePlayer = get!(
                world, (mancala_game.player_two, mancala_game.game_id), (GamePlayer)
            );
            mancala_game.get_score(player_one, player_two)
        }

        fn is_game_finished(world: IWorldDispatcher, game_id: u128) -> bool {
            let mut mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));
            let player_one: GamePlayer = get!(
                world, (mancala_game.player_one, mancala_game.game_id), (GamePlayer)
            );
            let player_two: GamePlayer = get!(
                world, (mancala_game.player_two, mancala_game.game_id), (GamePlayer)
            );
            mancala_game.is_game_finished(player_one, player_two)
        }

        fn test_func(world: IWorldDispatcher, game_id: u128) -> bool {
            let _mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));
            true
        }

        fn initialize_player(world: IWorldDispatcher, player_address: ContractAddress) {
            let player = Player {
                address: player_address,
                games_won: ArrayTrait::new(),
                games_lost: ArrayTrait::new()
            };
            set!(world, (player));
        }

        fn finish_game(world: IWorldDispatcher, game_id: u128) {
            let mut mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));
            assert!(mancala_game.status == GameStatus::Finished || mancala_game.status == GameStatus::TimeOut, "Game is not finished");

            let winner_address = mancala_game.winner;
            let loser_address = if winner_address == mancala_game.player_one {
                mancala_game.player_two
            } else {
                mancala_game.player_one
            };

            // Update winner's record
            let mut winner = get!(world, winner_address, (Player));
            winner.games_won.append(game_id);
            set!(world, (winner));

            // Update loser's record
            let mut loser = get!(world, loser_address, (Player));
            loser.games_lost.append(game_id);
            set!(world, (loser));
        }

        fn get_player_history(world: IWorldDispatcher, player_address: ContractAddress) -> (Array<u128>, Array<u128>) {
            let player = get!(world, player_address, (Player));
            (player.games_won, player.games_lost)
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_player_history() {
        let world = IWorldDispatcher::new();
        
        // Initialize game ID
        ActionsImpl::create_initial_game_id(world);

        // Create players
        let player1 = ContractAddress::from(1u256);
        let player2 = ContractAddress::from(2u256);
        ActionsImpl::initialize_player(world, player1);
        ActionsImpl::initialize_player(world, player2);

        // Create and finish a game
        let game = ActionsImpl::create_game(world);
        ActionsImpl::join_game(world, game.game_id, player2);

        // Simulate game play and finish
        // ... (implement game play logic)

        // Finish the game
        ActionsImpl::finish_game(world, game.game_id);

        // Check player histories
        let (player1_wins, player1_losses) = ActionsImpl::get_player_history(world, player1);
        let (player2_wins, player2_losses) = ActionsImpl::get_player_history(world, player2);

        assert_eq!(player1_wins.len(), 1);
        assert_eq!(player1_wins[0], game.game_id);
        assert_eq!(player1_losses.len(), 0);

        assert_eq!(player2_wins.len(), 0);
        assert_eq!(player2_losses.len(), 1);
        assert_eq!(player2_losses[0], game.game_id);
    }
}