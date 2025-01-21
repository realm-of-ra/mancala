use starknet::ContractAddress;
use mancala::types::board::Board;

#[derive(Copy, Drop, Serde)]
#[dojo::event(historical: true)]
struct PlayerMove {
    #[key]
    game_id: u128,
    pit_number: u8,
    seed_number: u8,
}

#[derive(Copy, Drop, Serde)]
#[dojo::event(historical: true)]
struct PlayerExtraTurn {
    #[key]
    game_id: u128,
    player: ContractAddress,
}

#[derive(Copy, Drop, Serde)]
#[dojo::event(historical: true)]
struct EndTurn {
    #[key]
    game_id: u128,
    current_player: ContractAddress,
    next_player: ContractAddress,
}

#[derive(Copy, Drop, Serde)]
#[dojo::event(historical: true)]
struct Capture {
    #[key]
    game_id: u128,
    player: ContractAddress,
    pit_number: u8,
    seed_count: u8,
}

#[derive(Clone, Drop, Serde)]
#[dojo::event]
pub struct BoardMinted {
    #[key]
    profile_id: felt252,
    description: ByteArray,
    address: felt252,
    group: felt252,
    board: Board,
}
