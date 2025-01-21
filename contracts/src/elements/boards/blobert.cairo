use mancala::elements::boards::interface::BoardTrait;

impl Blobert of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Blobert - Lootverse mysterious Oracle and squire for your digital Realm."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'NFT'
    }
}
