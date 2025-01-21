use mancala::elements::boards::interface::BoardTrait;

impl Cartridge of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Provable games infrastructure provider on Starknet."
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
