use starknet::{ContractAddress};
use mancala::models::{mancala_game::{MancalaGame, GameStatus}};
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use mancala::models::player::{GamePlayer, GamePlayerTrait};

// define the interface
#[dojo::interface]
trait IActions {
    fn create_initial_game_id();
    fn create_game() -> MancalaGame;
    fn join_game(game_id: u128, player_two_address: ContractAddress);
    fn create_private_game(player_two_address: ContractAddress) -> MancalaGame;
    fn move(game_id: u128, selected_pit: u8) -> (ContractAddress, GameStatus);
    fn get_score(game_id: u128) -> (u8, u8);
    fn is_game_finished(game_id: u128) -> bool;
    fn test_func(game_id: u128) -> bool;
}

// dojo decorator
#[dojo::contract]
mod actions {
    use super::{IActions};
    use starknet::{ContractAddress, get_caller_address};
    use starknet::contract_address::ContractAddressZeroable;
    use mancala::models::{mancala_game::{MancalaGame, MancalaGameTrait, GameId, GameStatus}};
    use mancala::models::{player::{GamePlayer, GamePlayerTrait}};
    use core::array::Array;

    #[abi(embed_v0)]
    impl ActionsImpl of IActions<ContractState> {
        // logic to create the global game id tracker
        // this function should only be run once
        fn create_initial_game_id(world: IWorldDispatcher) {
            let existing_game_id = get!(world, 1, (GameId));
            if (existing_game_id.game_id > 0) {
                panic!("error global game id already created");
            }
            let game_id: GameId = GameId { id: 1, game_id: 1 };
            set!(world, (game_id));
        }

        // caller creates the initial game
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

        // player two can join the game
        // todo in the unit tests using the set_caller_address was not working so for now passing in the player_two_address
        fn join_game(world: IWorldDispatcher, game_id: u128, player_two_address: ContractAddress) {
            let mut mancala_game = get!(world, game_id, (MancalaGame));
            assert!(
                mancala_game.player_two == ContractAddressZeroable::zero(), "player_2 already set"
            );
            let player_two = GamePlayerTrait::new(mancala_game.game_id, player_two_address);
            mancala_game.join_game(player_two);
            set!(world, (player_two, mancala_game));
        }

        // this is logic to create a private game
        // a user will be able to create the game supplying another users address
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

        // taking in the game id and the players selected pit, make the move performing all logic
        fn move(
            world: IWorldDispatcher, game_id: u128, selected_pit: u8
        ) -> (ContractAddress, GameStatus) {
            let mut mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));

            // need to create validation for this status
            assert!(mancala_game.status != GameStatus::Finished, "Game is already finished");
            assert!(mancala_game.status == GameStatus::InProgress, "Game is not in progress");
            assert!(
                mancala_game.player_two != ContractAddressZeroable::zero(),
                "Player two not yet set."
            );

            let player: ContractAddress = get_caller_address();

            mancala_game.validate_move(player, selected_pit);
            let (mut current_player, mut opponent) = mancala_game.get_players(world);
            // Get seeds from the selected pit and validate it's not empty
            let mut seeds = mancala_game.get_seeds(current_player, selected_pit);
            if seeds == 0 {
                panic!("Selected pit is empty. Choose another pit.");
            }
            mancala_game.clear_pit(ref current_player, selected_pit);
            mancala_game
                .distribute_seeds(ref current_player, ref opponent, ref seeds, selected_pit);
            if mancala_game.is_game_finished(current_player, opponent) {
                mancala_game.set_winner(current_player, opponent);
            }
            set!(world, (mancala_game, current_player, opponent));
            // return the current player so client has ability to know
            (mancala_game.current_player, mancala_game.status)
        }

        // read function to get the score of a game taking in the game
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

        fn test_func(world: IWorldDispatcher, game_id: u128) -> bool{
            let _mancala_game: MancalaGame = get!(world, game_id, (MancalaGame));
            true
        }
    }
}
