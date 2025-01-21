use mancala::elements::boards::interface::BoardTrait;

impl RealmOfRa of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Fully onchain games development studio on Starknet."
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
