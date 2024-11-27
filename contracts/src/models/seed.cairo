use starknet::ContractAddress;
use mancala::models::index::{Seed, SeedColor};

mod errors {}

#[generate_trait]
impl SeedImpl of SeedTrait {
    #[inline]
    fn new(
        game_id: u128,
        player: ContractAddress,
        seed_id: u8,
        pit_number: u8,
        prev_pit_number: u8,
        color: SeedColor
    ) -> Seed {
        Seed { game_id, player, seed_id, pit_number, prev_pit_number, color }
    }
}
