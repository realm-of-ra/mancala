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
