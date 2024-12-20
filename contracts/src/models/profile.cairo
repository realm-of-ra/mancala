use starknet::ContractAddress;
use mancala::models::index::Profile;

mod errors {}

#[generate_trait]
impl ProfileImpl of ProfileTrait {
    #[inline]
    fn new(address: ContractAddress, name: ByteArray) -> Profile {
        // [Return] Player
        Profile { address, name, profile_uri: "https://#" }
    }
}
