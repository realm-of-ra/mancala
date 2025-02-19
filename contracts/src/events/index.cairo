use starknet::ContractAddress;

#[derive(Copy, Drop, Serde)]
#[dojo::event(historical: true)]
pub struct PlayerMove {
    #[key]
    pub game_id: u128,
    pub pit_number: u8,
    pub seed_number: u8,
}

#[derive(Copy, Drop, Serde)]
#[dojo::event(historical: true)]
pub struct PlayerExtraTurn {
    #[key]
    pub game_id: u128,
    pub player: ContractAddress,
}

#[derive(Copy, Drop, Serde)]
#[dojo::event(historical: true)]
pub struct EndTurn {
    #[key]
    pub game_id: u128,
    pub current_player: ContractAddress,
    pub next_player: ContractAddress,
}

#[derive(Copy, Drop, Serde)]
#[dojo::event(historical: true)]
pub struct Capture {
    #[key]
    pub game_id: u128,
    pub player: ContractAddress,
    pub pit_number: u8,
    pub seed_count: u8,
}
