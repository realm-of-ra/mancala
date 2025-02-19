use starknet::{ContractAddress, get_block_timestamp};
pub use mancala::models::index::Profile;

pub mod Errors {
    pub const INVALID_NAME: felt252 = 'Invalid Profile Name';
    pub const INVALID_URI: felt252 = 'Invalid Profile URI';
}

#[generate_trait]
pub impl ProfileImpl of ProfileTrait {
    #[inline]
    fn new(address: ContractAddress, name: felt252) -> Profile {
        assert(name != 0, Errors::INVALID_NAME);
        let creation_time: u64 = get_block_timestamp();
        Profile { address, name, profile_uri: "#", is_initialized: true, creation_time }
    }

    #[inline]
    fn update_profile(ref self: Profile, new_name: felt252, new_uri: ByteArray) {
        assert(new_uri.len() != 0, Errors::INVALID_URI);
        assert(new_name != 0, Errors::INVALID_NAME);
        self.profile_uri = new_uri;
        self.name = new_name;
    }
}

#[cfg(test)]
mod tests {
    use super::{Profile, ProfileTrait, Errors};
    use starknet::{ContractAddress};

    const PLAYER_NAME: felt252 = 'Okhai';
    const PlAYER_NEW_NAME: felt252 = 'Victor';
    const ZERO_NAME: felt252 = 0;

    fn ADDRESS() -> ContractAddress {
        'ADDRESS'.try_into().unwrap()
    }

    #[test]
    fn test_new_profile() {
        let profile: Profile = ProfileTrait::new(ADDRESS(), PLAYER_NAME);

        assert(profile.address == ADDRESS(), 'Invalid address');
        assert_eq!(profile.name, PLAYER_NAME);
    }

    #[test]
    #[should_panic(expected: ('Invalid Profile Name',))]
    fn test_new_profile_with_zero_name() {
        ProfileTrait::new(ADDRESS(), ZERO_NAME);
    }

    #[test]
    fn test_update_profile() {
        let new_uri: ByteArray = "ipfs://QmTest";

        let mut profile: Profile = ProfileTrait::new(ADDRESS(), PLAYER_NAME);
        profile.update_profile(PlAYER_NEW_NAME, new_uri.clone());

        assert(profile.profile_uri == new_uri, Errors::INVALID_URI);
        assert(profile.name == PlAYER_NEW_NAME, Errors::INVALID_NAME);
    }
}
