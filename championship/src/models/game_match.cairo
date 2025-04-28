use starknet::ContractAddress;

#[derive(Serde, Copy, Drop, Introspect)]
enum MatchStatus {
    Scheduled,
    InProgress,
    Completed,
    Cancelled,
}

#[derive(Serde, Copy, Drop, Introspect)]
enum MatchResult {
    Player1Win,
    Player2Win,
    Draw,
    Pending,
}

// TODO: Private Mancala Game
#[dojo::model]
#[derive(Copy, Drop, Serde)]
pub struct Match {
    #[key]
    id: u64,
    championship_id: u32,
    game_id: u32,
    player1: ContractAddress,
    player2: ContractAddress,
    status: MatchStatus,
    result: MatchResult,
    round: u8,
}
