use starknet::ContractAddress;

#[starknet::interface]
trait BoostERC20<TContractState> {
    fn transfer_from(
        ref self: TContractState, sender: ContractAddress, recipient: ContractAddress, amount: u256,
    ) -> bool;
    fn approve(ref self: TContractState, spender: ContractAddress, amount: u256);
    fn burn(ref self: TContractState, amount: u256);
}
