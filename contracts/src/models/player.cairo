use starknet::ContractAddress;
use mancala::models::index::Player;

mod errors {}

#[generate_trait]
impl PlayerImpl of PlayerTrait {
    #[inline]
    fn new(game_id: u128, address: ContractAddress) -> Player {
        // [Return] Player
        Player {
            game_id,
            address,
            len_pits: 6,
            boost_use_count: 0,
            boost_extra_turn: false,
            restart_requested: false,
        }
    }
}
