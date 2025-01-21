use mancala::elements::boards::interface::BoardTrait;

impl StarknetID of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Naming service on Starknet."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'DeFi'
    }
}
