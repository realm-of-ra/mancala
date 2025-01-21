use starknet::ContractAddress;
use mancala::models::index::{Boost, BoostType};

mod errors {}

#[generate_trait]
impl BoostImpl of BoostTrait {
    #[inline]
    fn new(boost: BoostType, address: ContractAddress) -> Boost {
        // [Return] Boost
        Boost { boost, address }
    }
}
