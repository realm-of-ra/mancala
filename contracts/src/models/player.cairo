use starknet::ContractAddress;
pub use mancala::models::index::Player;

mod errors {}

#[generate_trait]
pub impl PlayerImpl of PlayerTrait {
    #[inline]
    fn new(game_id: u128, address: ContractAddress) -> Player {
        // [Return] Player
        Player { game_id, address, len_pits: 6, restart_requested: false }
    }
}
