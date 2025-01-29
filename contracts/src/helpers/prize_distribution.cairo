#[generate_trait]
impl PrizeDistribution of PrizeDistributionTrait {
    fn get_rank_reward_percentage(rank: u8) -> u8 {
        if rank == 1 {
            return 35;
        }

        if rank == 2 {
            return 20;
        }

        if rank == 3 {
            return 15;
        }

        if rank == 4 {
            return 10;
        }

        if rank == 5 {
            return 8;
        }

        if rank < 11 {
            return 2;
        }

        0
    }
}
