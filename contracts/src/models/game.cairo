use mancala::models::player::PlayerSide;
use starknet::ContractAddress;

#[derive(Model, Drop, Serde)]
struct Game {
    #[key]
    game_id: u32,
    winner: PlayerSide,
    player_one: ContractAddress,
    player_two: ContractAddress,
}

#[derive(Model, Drop, Serde)]
struct GameTurn {
    #[key]
    game_id: u32,
    player_side: PlayerSide,
}

trait GameTurnTrait {
    fn next_turn(self: @GameTurn) -> PlayerSide;
}

impl GameTurnImpl of GameTurnTrait {
    fn next_turn(self: @GameTurn) -> PlayerSide {
        match self.player_side {
            PlayerSide::Left => PlayerSide::Right,
            PlayerSide::Right => PlayerSide::Left,
            PlayerSide::None => panic(array!['Illegal turn']),
        }
    }
}


// todo this is just the game model base. Something that must be refined
#[derive(Model, Copy, Drop, Serde)]
struct MancalaGame {
    #[key]
    game_id: u128,
    player_one: ContractAddress,
    player_two: ContractAddress,
    current_player: ContractAddress,
    winner: ContractAddress,
    score: u8,
    is_finished: bool,
    p1_pit1: u8,
    p1_pit2: u8,
    p1_pit3: u8,
    p1_pit4: u8,
    p1_pit5: u8,
    p1_pit6: u8,
    p2_pit1: u8,
    p2_pit2: u8,
    p2_pit3: u8,
    p2_pit4: u8,
    p2_pit5: u8,
    p2_pit6: u8,
    p1_store: u256,
    p2_store: u256
}
