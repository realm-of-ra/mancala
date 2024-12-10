use starknet::ContractAddress;
use mancala::models::index::Profile;

mod errors {}

#[generate_trait]
impl ProfileImpl of ProfileTrait {
    #[inline]
    fn new(
        player_id: ContractAddress, player_name: felt252, profile_image_url: felt252,
    ) -> Profile {
        // [Return] Profile
        Profile { player_id, player_name, profile_image_url }
    }
}
