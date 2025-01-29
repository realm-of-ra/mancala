use starknet::{ContractAddress, contract_address_const};
use mancala::constants::{MAINNET_CHAIN_ID, SEPOLIA_CHAIN_ID};

#[generate_trait]
impl AddressResolver of AddressResolverTrait {
    #[inline]
    fn get_ror_address(chain_id: felt252) -> ContractAddress {
        if chain_id == SEPOLIA_CHAIN_ID {
            contract_address_const::<
                0x07837a565c98505A88338Ceb8245494af97C6caC2d0A23D9B08db5C052d7afA9,
            >()
        } else if chain_id == MAINNET_CHAIN_ID {
            contract_address_const::<
                0x07b2a259363f9984a8073175c38b726c502c05eade7ce4753ca6cecd3ec7f603,
            >()
        } else {
            panic_with_felt252('Chain not supported')
        }
    }

    #[inline]
    fn get_lords_address(chain_id: felt252) -> ContractAddress {
        if chain_id == SEPOLIA_CHAIN_ID {
            contract_address_const::<
                0x019c92fa87f4d5e3be25c3dd6a284f30282a07e87cd782f5fd387b82c8142017,
            >()
        } else if chain_id == MAINNET_CHAIN_ID {
            contract_address_const::<
                0x0124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49,
            >()
        } else {
            panic_with_felt252('Chain not supported')
        }
    }
}
