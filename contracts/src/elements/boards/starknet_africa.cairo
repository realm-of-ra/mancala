use mancala::elements::boards::interface::BoardTrait;

impl StarknetAfrica of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Starknet community in Africa."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'Community'
    }
}
