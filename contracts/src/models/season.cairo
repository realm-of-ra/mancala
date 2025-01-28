use starknet::ContractAddress;
use mancala::models::index::Season;

mod errors {}

#[generate_trait]
impl SeasonImpl of SeasonTrait {
    #[inline]
    fn new(
        season_id: u32,
        season_address: ContractAddress,
        settings_id: u32,
        start: u64,
        end: u64,
        entry_amount: u256,
    ) -> Season {
        // [Return] Season
        Season {
            season_id,
            season_address,
            settings_id,
            start,
            end,
            entry_amount,
            reward_pool: 0,
            finalized: false,
        }
    }
}
