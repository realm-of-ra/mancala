use starknet::ContractAddress;
use mancala::models::index::{Seed, SeedColor};

mod errors {}

#[generate_trait]
impl SeedImpl of SeedTrait {
    #[inline]
    fn new(game_id: u128, player: ContractAddress, current_pit: u8, seed_number: u8, color: SeedColor, seed_id: u8) -> Seed {
        Seed { game_id, player, current_pit, seed_number, color, seed_id, previous_pit: 0 }
    }
}