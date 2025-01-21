use mancala::types::board::Board;
use mancala::events::index::BoardMinted;

use starknet::ContractAddress;

pub mod errors {}

#[generate_trait]
impl BoardMintedImpl of BoardMintedTrait {
    #[inline]
    fn new(
        profile_id: felt252, description: ByteArray, address: felt252, group: felt252, board: Board,
    ) -> BoardMinted {
        BoardMinted { profile_id, description, address, group, board }
    }
}
