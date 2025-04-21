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

#[dojo::model]
#[derive(Copy, Drop, Serde)]
struct Match {
    #[key]
    id: u64,
    player1: ContractAddress,
    player2: ContractAddress,
    status: MatchStatus,
    result: MatchResult,
}
