use mancala::elements::boards::interface::BoardTrait;

impl OnlyDust of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Open Source contributor coordination platform."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'Open Source'
    }
}
