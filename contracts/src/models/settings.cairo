use dojo::world::WorldStorage;

pub use mancala::models::index::Settings;
use mancala::store::{Store, StoreTrait};
use mancala::types::gate_type::GateType;
use openzeppelin_token::erc721::interface::{IERC721Dispatcher, IERC721DispatcherTrait};
use starknet::{ContractAddress, get_caller_address};

pub mod errors {
    pub const NOT_PASS_HOLDER: felt252 = 'You do not have a pass';
    pub const NOT_GATE_KEEPER: felt252 = 'You are not the gate keeper';
}

#[generate_trait]
pub impl SettingsImpl of SettingsTrait {
    #[inline]
    fn initialize(
        id: u8, gate_address: ContractAddress, gate_keeper_address: ContractAddress,
    ) -> Settings {
        let gate_address: GateType = GateType::Token(gate_address);
        Settings { id, gate_address, gate_keeper_address }
    }

    #[inline]
    fn update_gate_pass(ref self: Settings, gate_address: ContractAddress) {
        assert(self.gate_keeper_address == get_caller_address(), errors::NOT_GATE_KEEPER);
        self.gate_address = gate_address.into();
    }
}

#[generate_trait]
pub impl SettingsAsset of AssertTrait {
    #[inline]
    fn assert_is_pass_holder(world: WorldStorage, settings_id: u8) {
        let store: Store = StoreTrait::new(world);
        let settings: Settings = store.get_settings(settings_id);

        let mancala_pass_address: ContractAddress = settings.gate_address.into();
        let erc721_dispatcher = IERC721Dispatcher { contract_address: mancala_pass_address };

        assert(erc721_dispatcher.balance_of(get_caller_address()) > 0, errors::NOT_PASS_HOLDER);
    }
}
