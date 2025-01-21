use starknet::ContractAddress;

#[derive(Serde, Copy, Drop, Introspect, PartialEq)]
pub enum BoostType {
    None,
    ExtraTurn,
    PitFreeze,
}

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
    pub varient: u8,
    pub player_one: ContractAddress,
    pub player_two: ContractAddress,
    pub current_player: ContractAddress,
    pub last_move: u64,
    pub max_block_between_move: u64,
    pub winner: ContractAddress,
    pub status: GameStatus,
    pub is_private: bool,
}

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct Player {
    #[key]
    pub game_id: u128,
    #[key]
    pub address: ContractAddress,
    pub len_pits: u8,
    pub boost_use_count: u8,
    pub boost_extra_turn: bool,
    pub restart_requested: bool,
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
    pub seed_id: u128,
    pub color: SeedColor,
}

#[derive(Drop, Serde)]
#[dojo::model]
pub struct Profile {
    #[key]
    pub address: ContractAddress,
    pub name: felt252,
    pub profile_uri: ByteArray,
    pub is_initialized: bool,
    pub creation_time: u64,
}

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct Boost {
    #[key]
    pub boost: BoostType,
    pub address: ContractAddress,
}
