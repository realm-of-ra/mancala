use starknet::ContractAddress;

#[derive(Model, Copy, Drop, Serde)]
struct Player {
  game_id: u32,
  #[key]
  address: ContractAddress,
  pending_seeds: u32,
  side: PlayerSide
}

#[derive(Serde, Drop, Copy, PartialEq, Introspect)]
enum PlayerSide {
  Left,
  Right,
  None,
}
