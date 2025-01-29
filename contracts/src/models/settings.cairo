use starknet::ContractAddress;
use mancala::models::index::Settings;

mod errors {
    const GAME_PASS_NOT_SET: felt252 = 'Game pass not set';
}

#[generate_trait]
impl SettingsImpl of SettingsTrait {
    #[inline]
    fn new(settings_id: u32, game_pass_address: ContractAddress) -> Settings {
        Settings { settings_id, game_pass_address }
    }
}

#[generate_trait]
impl SettingsAssert of AssertTrait {
    fn assert_game_pass_is_set(self: Settings) {
        assert(self.game_pass_address.is_non_zero(), errors::GAME_PASS_NOT_SET);
    }
}
