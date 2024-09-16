use starknet::{get_block_number, ContractAddress, get_caller_address};

use mancala::models::index::{MancalaBoard, GameStatus};
use mancala::models::player::{Player, PlayerTrait};
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

// Error messages for various game conditions
mod errors {
    const GAME_NOT_PENDING: felt252 = 'MancalaBoard: not pending';
    const PLAYER_TWO_ALREADY_JOINED: felt252 = 'MancalaBoard: already joined';
    const NOT_PLAYER_TURN: felt252 = 'MancalaBoard: not your turn';
    const INVALID_PIT: felt252 = 'MancalaBoard: invalid pit';
}

/// Trait implementation for MancalaBoard operations
#[generate_trait]
impl MancalaBoardImpl of MancalaBoardTrait {
    /// Creates a new MancalaBoard instance
    ///
    /// # Arguments
    /// * `game_id` - Unique identifier for the game
    /// * `player_one` - Address of the first player
    ///
    /// # Returns
    /// * `MancalaBoard` - A new MancalaBoard instance with initial settings
    #[inline]
    fn new(game_id: u128, player_one: ContractAddress) -> MancalaBoard {
        MancalaBoard {
            game_id,
            player_one,
            player_two: core::num::traits::Zero::<ContractAddress>::zero(),
            last_move: get_block_number(),
            time_between_move: 100,
            winner: core::num::traits::Zero::<ContractAddress>::zero(),
            current_player: player_one.into(),
            status: GameStatus::Pending,
            is_private: false
        }
    }

    /// Creates a new MancalaBoard instance
    ///
    /// # Arguments
    /// * `game_id` - Unique identifier for the game
    /// * `player_one` - Address of the first player
    ///
    /// # Returns
    /// * `MancalaBoard` - A new MancalaBoard instance with initial settings
    #[inline]
    fn private_mancala(game_id: u128, player_one: ContractAddress, player_two: ContractAddress) -> MancalaBoard {
        MancalaBoard {
            game_id,
            player_one,
            player_two,
            last_move: get_block_number(),
            time_between_move: 100,
            winner: core::num::traits::Zero::<ContractAddress>::zero(),
            current_player: player_one.into(),
            status: GameStatus::Pending,
            is_private: true
        }
    }

    /// Allows a second player to join the game
    ///
    /// # Arguments
    /// * `self` - Mutable reference to the MancalaBoard
    /// * `player_two` - The Player object representing the second player
    ///
    /// # Panics
    /// * If the game status is not Pending
    /// * If player_two has already joined
    #[inline]
    fn join_game(ref self: MancalaBoard, player_two: Player) {
        assert(self.status == GameStatus::Pending, errors::GAME_NOT_PENDING);
        assert(self.player_two.is_zero(), errors::PLAYER_TWO_ALREADY_JOINED);
        self.player_two = player_two.address;
        self.status = GameStatus::InProgress;
    }

    /// Validates if a move is legal according to the game rules
    ///
    /// # Arguments
    /// * `self` - Mutable reference to the MancalaBoard
    /// * `player` - The ContractAddress of the player attempting the move
    /// * `selected_pit` - The pit number selected for the move (should be 1-6)
    ///
    /// # Panics
    /// * If the player is not the current player
    /// * If the selected pit is not within the valid range (1-6)
    #[inline]
    fn validate_move(ref self: MancalaBoard, player: ContractAddress, selected_pit: u8) {
        if player != self.current_player {
            panic!("You are not the current player");
        }
        if selected_pit < 1 || selected_pit > 6 {
            panic!("Invalid pit, choose between 1 and 6");
        }
    }

    /// Handles player switching after a move
    ///
    /// # Arguments
    /// * `self` - Mutable reference to the MancalaBoard
    /// * `last_pit` - The last pit where a seed was placed
    /// * `opponent` - The opponent Player
    #[inline]
    fn handle_player_switch(ref self: MancalaBoard, last_pit: u8, opponent: Player) {
        if last_pit != 7 {
            self.current_player = opponent.address;
        }
    }

    /// Gets the timestamp of the last move
    ///
    /// # Arguments
    /// * `self` - Reference to the MancalaBoard
    /// * `player_one` - Player one
    /// * `player_two` - Player two
    ///
    /// # Returns
    /// * `u64` - Timestamp of the last move
    #[inline]
    fn get_last_move(self: MancalaBoard, player_one: Player, player_two: Player) -> u64 {
        self.last_move
    }

    /// Handles game forfeit by a player
    ///
    /// # Arguments
    /// * `self` - Mutable reference to the MancalaBoard
    /// * `player` - The ContractAddress of the forfeiting player
    #[inline]
    fn forfeit_game(ref self: MancalaBoard, player: ContractAddress) {
        if player == self.player_one {
            self.winner = self.player_two;
            self.status = GameStatus::Forfeited;
        }
        if player == self.player_two {
            self.winner = self.player_one;
            self.status = GameStatus::Forfeited;
        }
    }

    /// Restarts the game with the same players
    ///
    /// # Arguments
    /// * `game_id` - Unique identifier for the new game
    /// * `player_one` - ContractAddress of player one
    /// * `player_two` - ContractAddress of player two
    /// * `private` - Boolean indicating if the game is private
    ///
    /// # Returns
    /// * `MancalaBoard` - A new MancalaBoard instance for the restarted game
    #[inline]
    fn restart_game(
        game_id: u128, player_one: ContractAddress, player_two: ContractAddress, private: bool
    ) -> MancalaBoard {
        MancalaBoard {
            game_id: game_id,
            player_one: player_one,
            player_two: player_two,
            current_player: player_one,
            last_move: get_block_number(),
            time_between_move: 100,
            winner: core::num::traits::Zero::<ContractAddress>::zero(),
            status: GameStatus::Pending,
            is_private: private
        }
    }
}
