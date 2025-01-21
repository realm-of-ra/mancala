use mancala::elements::boards::interface::BoardTrait;

impl Avnu of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "A Liquidity Infrastructure that aims to empower traders and dApps with the best execution."
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
