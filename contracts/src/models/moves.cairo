use mancala::models::seed::Seed;
use starknet::ContractAddress;

#[derive(Model, Drop, Serde)]
#[dojo::event] // A model with `dojo::event` is able to be emitted with the `emit!` macro.
struct Moves {
    #[key]
    player: ContractAddress,
    count: u8,
    last_decision: Direction
}

#[derive(Serde, Copy, Drop, Introspect)]
enum Direction {
    None,
    Right,
}

trait MoveTrait {
    fn is_valid_turn(self: @Seed, direction: Direction) -> bool;
}

impl DirectionIntoFelt252 of Into<Direction, felt252> {
    fn into(self: Direction) -> felt252 {
        match self {
            Direction::None => 0,
            Direction::Right => 1,
        }
    }
}
