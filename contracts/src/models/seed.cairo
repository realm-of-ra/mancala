use starknet::ContractAddress;
pub use mancala::models::index::{Seed, SeedColor};

mod errors {}

#[generate_trait]
pub impl SeedImpl of SeedTrait {
    #[inline]
    fn new(
        game_id: u128,
        player: ContractAddress,
        pit_number: u8,
        seed_number: u8,
        seed_id: u128,
        color: SeedColor,
    ) -> Seed {
        Seed { game_id, player, pit_number, seed_number, seed_id, color }
    }
}
