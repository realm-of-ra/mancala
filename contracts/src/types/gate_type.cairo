use starknet::ContractAddress;
use starknet::contract_address::contract_address_const;

#[derive(Serde, Copy, Drop, Introspect, PartialEq)]
pub enum GateType {
    Unrestricted,
    Token: starknet::ContractAddress,
}

pub impl IntoMethodContractAddress of core::traits::Into<GateType, ContractAddress> {
    #[inline]
    fn into(self: GateType) -> ContractAddress {
        match self {
            GateType::Unrestricted => contract_address_const::<
                0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d,
            >(),
            GateType::Token(contract_address) => contract_address,
        }
    }
}

pub impl IntoContractAddressMethod of core::traits::Into<ContractAddress, GateType> {
    #[inline]
    fn into(self: ContractAddress) -> GateType {
        let zero_address: ContractAddress = contract_address_const::<
            0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d,
        >();

        if self == zero_address {
            GateType::Unrestricted
        } else {
            GateType::Token(self)
        }
    }
}
