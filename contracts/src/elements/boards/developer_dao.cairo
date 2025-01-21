use mancala::elements::boards::interface::BoardTrait;

impl DeveloperDAO of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "DAO for developers."
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
