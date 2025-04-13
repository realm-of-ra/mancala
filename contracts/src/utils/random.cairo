use mancala::constants::{MAINNET_CHAIN_ID, SEPOLIA_CHAIN_ID};
use mancala::utils::cartridge_vrf::VRF::{
    IVrfProviderDispatcher, IVrfProviderDispatcherTrait, Source,
};
use starknet::{
    ContractAddress, contract_address_const, get_block_timestamp, get_caller_address, get_tx_info,
};

fn get_vrf_address() -> ContractAddress {
    contract_address_const::<0x051fea4450da9d6aee758bdeba88b2f665bcbf549d2c61421aa724e9ac0ced8f>()
}

fn get_random_hash() -> felt252 {
    let chain_id = get_tx_info().unbox().chain_id;

    if chain_id == MAINNET_CHAIN_ID || chain_id == SEPOLIA_CHAIN_ID {
        let vrf_provider = IVrfProviderDispatcher { contract_address: get_vrf_address() };
        vrf_provider.consume_random(Source::Nonce(get_caller_address()))
    } else {
        get_block_timestamp().into()
    }
}

pub fn get_pseudorandom_bit() -> u8 {
    let seed: u256 = get_random_hash().into();
    (seed % 2).try_into().unwrap()
}
