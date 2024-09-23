use starknet::ContractAddress;

#[derive(Serde, Copy, Drop, Introspect, PartialEq)]
pub enum SeedColor {
    None,
    Blue,
    Green,
}

#[derive(Serde, Copy, Drop, Introspect, PartialEq)]
pub enum GameStatus {
    Pending: (),
    InProgress: (),
    Finished: (),
    Forfeited: (),
    TimeOut: (),
}

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct GameCounter {
    #[key]
    pub id: u32,
    pub count: u128,
}

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct MancalaBoard {
    #[key]
    pub game_id: u128,
    pub player_one: ContractAddress,
    pub player_two: ContractAddress,
    pub current_player: ContractAddress,
    pub last_move: u64,
    pub time_between_move: u64,
    pub winner: ContractAddress,
    pub status: GameStatus,
    pub is_private: bool
}

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct Player {
    #[key]
    pub game_id: u128,
    #[key]
    pub address: ContractAddress,
    pub len_pits: u8,
    pub restart_requested: bool
}

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct Pit {
    #[key]
    pub game_id: u128,
    #[key]
    pub player: ContractAddress,
    #[key]
    pub pit_number: u8,
    pub seed_count: u8,
}

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct Seed {
    #[key]
    pub game_id: u128,
    #[key]
    pub player: ContractAddress,
    #[key]
    pub pit_number: u8,
    #[key]
    pub seed_number: u8,
    pub color: SeedColor
}
