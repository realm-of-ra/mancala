use mancala::elements::boards::interface::BoardTrait;

impl Akash of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Decentralized compute market place."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'DePin'
    }
}
