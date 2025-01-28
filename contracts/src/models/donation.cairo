use starknet::ContractAddress;
use mancala::models::index::Donation;

mod errors {}

#[generate_trait]
impl DonationImpl of DonationTrait {
    #[inline]
    fn new(
        season_id: u32, address: ContractAddress, name: felt252, social: felt252, amount: u256,
    ) -> Donation {
        // [Return] Donation
        Donation { season_id, address, name, social, amount }
    }
}
