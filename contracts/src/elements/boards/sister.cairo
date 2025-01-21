use mancala::elements::boards::interface::BoardTrait;

impl Sister of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Fair launch meme on Starknet."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'Memecoin'
    }
}
