use starknet::ContractAddress;
use mancala::models::index::Profile;
use core::byte_array::ByteArray;

mod errors {
    const PROFILE_NOT_CREATED: felt252 = 'Profile does not exist';
    const PROFILE_ALEADY_CREATED: felt252 = 'Profile already exists';
    const PLAYER_INVALID_NAME: felt252 = 'Player name invalid';
    const PROFILE_INVALID_IMAGE_URL: felt252 = 'Profile image url invalid';
}

#[generate_trait]
impl ProfileImpl of ProfileTrait {
    #[inline]
    fn new(
        profile_id: felt252, name: felt252, profile_image_url: ByteArray,
    ) -> Profile {
        // [Return] Profile
        Profile { profile_id, name, profile_image_url }
    }


    #[inline]
    fn update_profile_name(ref self: Profile, name: felt252) {
        assert(name !=0, errors::PLAYER_INVALID_NAME);
        self.name = name
    }

    #[inline]
    fn update_profile_image_url(ref self: Profile, profile_image_url: ByteArray) {
        // assert(profile_image_url !=0, errors::PROFILE_INVALID_IMAGE_URL);
        self.profile_image_url = profile_image_url;
    }
}

#[generate_trait]
impl ProfileAssert of AssertTrait {
    #[inline]
    fn assert_is_created(self: Profile) {
        assert(self.profile_id != 0, errors::PROFILE_NOT_CREATED);
    }

    #[inline]
    fn assert_not_created(self: Profile) {
        assert(self.profile_id == 0, errors::PROFILE_ALEADY_CREATED);
    }
}