use core::integer::{U256DivRem, u256_try_as_non_zero};
use mancala::constants::{LCG_PRIME, MAINNET_CHAIN_ID, SEPOLIA_CHAIN_ID, U128_MAX};
use mancala::utils::cartridge::vrf::{IVrfProviderDispatcher, IVrfProviderDispatcherTrait, Source};
use starknet::{ContractAddress, get_block_timestamp, get_caller_address, get_tx_info};

fn get_vrf_address() -> ContractAddress {
    0x051fea4450da9d6aee758bdeba88b2f665bcbf549d2c61421aa724e9ac0ced8f.try_into().unwrap();
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

fn get_entropy(felt_to_split: felt252) -> u128 {
    let (_d, r) = U256DivRem::div_rem(
        felt_to_split.into(), u256_try_as_non_zero(U128_MAX.into()).unwrap(),
    );

    r.try_into().unwrap() % LCG_PRIME
}

fn LCG(seed: u128) -> u128 {
    let a = 25214903917;
    let c = 11;
    let m = LCG_PRIME;

    (a * seed + c) % m
}

fn get_random_number(seed: u128, range: u8) -> u8 {
    if range == 0 {
        return 0;
    }

    (seed % range.into() + 1).try_into().unwrap()
}
