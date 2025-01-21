use mancala::elements::boards::interface::BoardTrait;

impl RealmsWorld of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "DAO building and playing fully on-chain games."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'DAO'
    }
}
