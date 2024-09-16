use starknet::ContractAddress;
use mancala::models::index::{Seed, SeedColor};

mod errors {}

#[generate_trait]
impl SeedImpl of SeedTrait {
    #[inline]
    fn new(game_id: u128, player: ContractAddress, pit_number: u8, seed_number: u8, color: SeedColor) -> Seed {
        Seed { game_id, player, pit_number, seed_number, color }
    }
}
