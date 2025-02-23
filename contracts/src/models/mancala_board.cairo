use core::num::traits::Zero;
use starknet::{ContractAddress, get_block_timestamp};

pub use mancala::models::index::{MancalaBoard, GameStatus};
use mancala::constants::TIMEOUT_DURATION;
use mancala::models::player::{Player};

// Error messages for various game conditions
pub mod errors {
    pub const GAME_NOT_PENDING: felt252 = 'MancalaBoard: not pending';
    pub const PLAYER_TWO_ALREADY_JOINED: felt252 = 'MancalaBoard: already joined';
    pub const NOT_PLAYER_TURN: felt252 = 'MancalaBoard: not your turn';
    pub const INVALID_PIT: felt252 = 'MancalaBoard: invalid pit';
    pub const NOT_TIMEOUT: felt252 = 'MancalaBoard: invalid timeout';
    pub const CANNOT_PLAY_SELF: felt252 = 'MancalaBoard: cannot play self';
    pub const NOT_IN_PROGRESS: felt252 = 'MancalaBoard: not in progress';
}

/// Trait implementation for MancalaBoard operations
#[generate_trait]
pub impl MancalaBoardImpl of MancalaBoardTrait {
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
            last_turn_change_timestamp: 0,
            winner: core::num::traits::Zero::<ContractAddress>::zero(),
            current_player: player_one.into(),
            status: GameStatus::Pending,
            is_private: false,
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
    fn private_mancala(
        game_id: u128, player_one: ContractAddress, player_two: ContractAddress,
    ) -> MancalaBoard {
        MancalaBoard {
            game_id,
            player_one,
            player_two,
            last_turn_change_timestamp: 0,
            winner: core::num::traits::Zero::<ContractAddress>::zero(),
            current_player: player_one.into(),
            status: GameStatus::Pending,
            is_private: true,
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
    /// * If player_two is the same as player_one
    #[inline]
    fn join_game(ref self: MancalaBoard, player_two: Player) {
        assert(self.status == GameStatus::Pending, errors::GAME_NOT_PENDING);
        assert(self.player_two.is_zero(), errors::PLAYER_TWO_ALREADY_JOINED);
        assert(player_two.address != self.player_one, errors::CANNOT_PLAY_SELF);
        self.player_two = player_two.address;
        self.status = GameStatus::InProgress;
    }

    #[inline]
    fn timeout_opponent(ref self: MancalaBoard, player: ContractAddress) {
        assert(self.status == GameStatus::InProgress, errors::NOT_IN_PROGRESS);
        assert(self.current_player == player, errors::NOT_PLAYER_TURN);

        let last_turn_change_timestamp = self.last_turn_change_timestamp;
        let current_timestamp = get_block_timestamp();

        assert(
            current_timestamp > last_turn_change_timestamp + TIMEOUT_DURATION, errors::NOT_TIMEOUT,
        );

        self.status = GameStatus::TimeOut;
        self.winner = if player == self.player_one {
            self.player_two
        } else {
            self.player_one
        };
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
    fn handle_player_switch(ref self: MancalaBoard, last_pit: u8, opponent: Player) -> bool {
        if last_pit != 7 {
            self.current_player = opponent.address;
            true
        } else {
            false
        }
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
        game_id: u128, player_one: ContractAddress, player_two: ContractAddress, private: bool,
    ) -> MancalaBoard {
        MancalaBoard {
            game_id: game_id,
            player_one: player_one,
            player_two: player_two,
            current_player: player_one,
            last_turn_change_timestamp: 0,
            winner: core::num::traits::Zero::<ContractAddress>::zero(),
            status: GameStatus::InProgress,
            is_private: private,
        }
    }
}
