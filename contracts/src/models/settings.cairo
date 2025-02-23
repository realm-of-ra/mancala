use starknet::{ContractAddress, get_caller_address};
use openzeppelin_token::erc721::interface::{IERC721Dispatcher, IERC721DispatcherTrait};
use dojo::world::WorldStorage;

use mancala::store::{Store, StoreTrait};

pub use mancala::models::index::Settings;

pub mod errors {
    pub const NOT_PASS_HOLDER: felt252 = 'You do not have a pass';
    pub const NOT_GATE_KEEPER: felt252 = 'You are not the gate keeper';
}

#[generate_trait]
pub impl SettingsImpl of SettingsTrait {
    #[inline]
    fn initialize(
        id: u8, mancala_pass_address: ContractAddress, gate_keeper_address: ContractAddress,
    ) -> Settings {
        Settings { id, mancala_pass_address, gate_keeper_address }
    }

    #[inline]
    fn update_pass_address(ref self: Settings, new_address: ContractAddress) {
        assert(self.gate_keeper_address == get_caller_address(), errors::NOT_GATE_KEEPER);
        self.mancala_pass_address = new_address;
    }
}

#[generate_trait]
pub impl SettingsAsset of AssertTrait {
    #[inline]
    fn assert_is_pass_holder(world: WorldStorage, settings_id: u8) {
        let store: Store = StoreTrait::new(world);
        let settings: Settings = store.get_settings(settings_id);

        let mancala_pass_address = settings.mancala_pass_address;
        let erc721_dispatcher = IERC721Dispatcher { contract_address: mancala_pass_address };

        assert(erc721_dispatcher.balance_of(get_caller_address()) > 0, errors::NOT_PASS_HOLDER);
    }
}
