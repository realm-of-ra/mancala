#[starknet::interface]
trait IBoardERC1155<TState> {
    fn balance_of(self: @TState, account: ContractAddress, token_id: u256) -> u256;
}
