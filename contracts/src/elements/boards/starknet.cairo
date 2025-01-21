use mancala::elements::boards::interface::BoardTrait;

impl Starknet of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Secure scaling technology for blockchain."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'Blockchain'
    }
}
