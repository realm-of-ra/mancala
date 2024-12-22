use starknet::{ContractAddress, get_block_timestamp};
use mancala::models::index::Profile;

mod errors {
    const INVALID_NAME: felt252 = 'Invalid Profile Name';
    const INVALID_URI: felt252 = 'Invalid Profile URI';
}

#[generate_trait]
impl ProfileImpl of ProfileTrait {
    #[inline]
    fn new(address: ContractAddress, name: ByteArray) -> Profile {
        // [Return] Player
        assert(name.len() != 0, errors::INVALID_NAME);

        let creation_time: u64 = get_block_timestamp();

        Profile { address, name, profile_uri: "#", is_initialized: false, creation_time }
    }

    #[inline]
    fn update_profile_uri(ref self: Profile, new_uri: ByteArray) {
        assert(new_uri.len() != 0, errors::INVALID_URI);
        self.profile_uri = new_uri;
    }
}
