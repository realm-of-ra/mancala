use starknet::ContractAddress;

#[starknet::interface]
trait ISeasonERC721<TState> {
    fn balance_of(self: @TState, account: ContractAddress) -> u256;
    fn mint(ref self: TState, recipient: ContractAddress);
}
