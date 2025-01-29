use starknet::ContractAddress;
use mancala::models::index::Sponsor;

mod errors {}

#[generate_trait]
impl SponsorImpl of SponsorTrait {
    #[inline]
    fn new(
        season_id: u32, address: ContractAddress, name: felt252, social: felt252, amount: u256,
    ) -> Sponsor {
        // [Return] Sponsor
        Sponsor { season_id, address, name, social, amount }
    }
}
