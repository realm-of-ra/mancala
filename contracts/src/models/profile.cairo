use starknet::ContractAddress;
use mancala::models::index::Profile;

mod errors {
    const INVALID_NAME: felt252 = 'Invalid Profile Name';
}

#[generate_trait]
impl ProfileImpl of ProfileTrait {
    #[inline]
    fn new(address: ContractAddress, name: ByteArray) -> Profile {
        // [Return] Player
        assert(name.len() != 0, errors::INVALID_NAME);
        Profile { address, name, profile_uri: "#" }
    }
}
