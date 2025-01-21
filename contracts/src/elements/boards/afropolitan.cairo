use mancala::elements::boards::interface::BoardTrait;

impl Afropolitan of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "A network state for Africans and Africans in Diaspora."
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
