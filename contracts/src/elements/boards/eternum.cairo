use mancala::elements::boards::interface::BoardTrait;

impl Eternum of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "MMORPG game on Starknet."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'FOCG'
    }
}
