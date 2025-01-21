use mancala::elements::boards::interface::BoardTrait;

impl Nostra of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "All in one DeFi application."
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
