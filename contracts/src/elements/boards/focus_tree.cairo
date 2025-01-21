use mancala::elements::boards::interface::BoardTrait;

impl FocusTree of BoardTrait {
    #[inline]
    fn description() -> ByteArray {
        "Focus Tree is a web3 productivity app that helps people spend less time
        on their phone."
    }

    #[inline]
    fn address(address: felt252) -> felt252 {
        address
    }

    #[inline]
    fn group() -> felt252 {
        'Productivity'
    }
}
