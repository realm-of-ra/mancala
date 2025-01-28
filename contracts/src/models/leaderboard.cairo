use starknet::ContractAddress;
use mancala::models::index::Leaderboard;

mod errors {}

#[generate_trait]
impl LeaderboardImpl of LeaderboardTrait {
    #[inline]
    fn new(season_id: u32, rank: u8, game_id: u128) -> Leaderboard {
        // [Return] Leaderboard
        Leaderboard { season_id, rank, game_id, score: 0 }
    }
}
