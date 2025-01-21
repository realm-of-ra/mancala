use mancala::types::board::Board;

trait BoardTrait {
    fn description() -> ByteArray;
    fn address(address: felt252) -> felt252;
    fn group() -> felt252;
}
