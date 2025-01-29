use starknet::ContractAddress;

use mancala::events::index::{PlayerMove, PlayerExtraTurn, EndTurn, Capture};

pub mod errors {}

#[generate_trait]
impl PlayerMoveImpl of PlayerMoveTrait {
    #[inline]
    fn new(game_id: u128, pit_number: u8, seed_number: u8) -> PlayerMove {
        PlayerMove { game_id, pit_number, seed_number }
    }
}

#[generate_trait]
impl PlayerExtraTurnImpl of PlayerExtraTurnTrait {
    #[inline]
    fn new(game_id: u128, player: ContractAddress) -> PlayerExtraTurn {
        PlayerExtraTurn { game_id, player }
    }
}

#[generate_trait]
impl EndTurnImpl of EndTurnTrait {
    #[inline]
    fn new(
        game_id: u128, current_player: ContractAddress, next_player: ContractAddress,
    ) -> EndTurn {
        EndTurn { game_id, current_player, next_player }
    }
}

#[generate_trait]
impl CaptureImpl of CaptureTrait {
    #[inline]
    fn new(game_id: u128, player: ContractAddress, pit_number: u8, seed_count: u8) -> Capture {
        Capture { game_id, player, pit_number, seed_count }
    }
}
