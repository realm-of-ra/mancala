use mancala::elements::boards::interface::BoardTrait;

impl Nethermind of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Blockchain research and engineering organization."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'Engineering'
    }
}
