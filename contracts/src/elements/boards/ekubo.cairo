use mancala::elements::boards::interface::BoardTrait;

impl Ekubo of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "The most advanced AMM ever."
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
