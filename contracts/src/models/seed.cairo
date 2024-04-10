use mancala::models::player::PlayerSide;
use starknet::ContractAddress;

#[derive(Model, Drop, Serde)]
struct Seed {
    #[key]
    game_id: u32,
    #[key]
    position: Vec2,
    player_side: PlayerSide,
}

#[derive(Copy, Drop, Serde, Introspect)]
struct Vec2 {
    x: u32,
    y: u32
}
