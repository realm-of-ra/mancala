use starknet::ContractAddress;
use mancala::models::index::Pit;

mod errors {}

#[generate_trait]
impl PitImpl of PitTrait {
    #[inline]
    fn new(game_id: u128, player: ContractAddress, current_pit: u8, seed_count: u8) -> Pit {
        Pit { game_id, player, current_pit, seed_count }
    }
}