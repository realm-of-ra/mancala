use mancala::elements::boards::interface::BoardTrait;

impl LootSurvivor of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Play to die loot adventure game."
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
