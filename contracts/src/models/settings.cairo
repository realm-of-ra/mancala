use starknet::ContractAddress;

pub use mancala::models::index::Settings;

pub mod errors {}

#[generate_trait]
pub impl SettingsImpl of SettingsTrait {
    #[inline]
    fn initialize(
        id: u8, mancala_pass_address: ContractAddress, gate_keeper_address: ContractAddress,
    ) -> Settings {
        Settings { id, mancala_pass_address, gate_keeper_address }
    }
}
