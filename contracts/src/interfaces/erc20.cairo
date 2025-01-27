use starknet::ContractAddress;

#[starknet::interface]
pub trait IBoostERC20<TState> {
    fn balance_of(self: @TState, account: ContractAddress) -> u256;
    fn transfer_from(
        ref self: TState, sender: ContractAddress, recipient: ContractAddress, amount: u256,
    ) -> bool;
    fn approve(ref self: TState, spender: ContractAddress, amount: u256);
    fn burn(ref self: TState, amount: u256);
}
