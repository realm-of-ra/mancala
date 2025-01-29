use starknet::{ContractAddress, get_block_timestamp};
use mancala::models::index::Season;

mod errors {
    const SEASON_NOT_OVER: felt252 = 'Season not over';
    const SEASON_HAS_BEEN_FINALIZED: felt252 = 'Season has been finalized';
    const MIN_SPONSORSHIP: felt252 = 'Min sponsorship is 10 $LORDS';
}

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

#[generate_trait]
impl SeasonAssert of AssertTrait {
    fn assert_is_active(self: Season) -> bool {
        let current_time = get_block_timestamp();
        current_time >= self.start && current_time < self.end
    }

    fn assert_end_season(self: Season) {
        let current_time = get_block_timestamp();
        assert(current_time > self.end, errors::SEASON_NOT_OVER);
        assert(!self.finalized, errors::SEASON_HAS_BEEN_FINALIZED);
    }

    fn assert_sponsor(self: Season, amount: u256) {
        assert(!self.finalized, errors::SEASON_HAS_BEEN_FINALIZED);
        assert(amount >= 10, errors::MIN_SPONSORSHIP);
    }
}
