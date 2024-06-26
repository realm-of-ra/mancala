use core::starknet::ContractAddress;

#[starknet::interface]
trait IDummyGamePass<TContractState> {
    fn balanceOf (self: @TContractState, account: ContractAddress) -> u256;
    fn balance_of (self: @TContractState, account: ContractAddress) -> u256;
    fn ownerOf (self: @TContractState, token_id: u256) -> ContractAddress;
    fn owner_of (self: @TContractState, token_id: u256) -> ContractAddress;
}

#[starknet::contract]
mod DummyGamePass {
    use core::starknet::ContractAddress;
    use super::IDummyGamePass;

    #[storage]
    struct Storage {
        owner: ContractAddress,
        balance: u256
    }
    
    #[abi(embed_v0)]
    impl DummyGamePassImpl of IDummyGamePass<ContractState> {
        fn balanceOf(self: @ContractState, account: ContractAddress) -> u256 {
            assert(account.is_non_zero(), 'ERC721: address zero');
            self.balance.read()
        }

        fn balance_of(self: @ContractState, account: ContractAddress) -> u256 {
            self.balanceOf(account)
        }

        fn ownerOf(self: @ContractState, token_id: u256) -> ContractAddress {
            let owner = self.owner.read();
            assert(owner.is_non_zero(), 'ERC721: invalid token ID');
            owner
        }

        fn owner_of(self: @ContractState, token_id: u256) -> ContractAddress {
            self.ownerOf(token_id)
        }
    }
}
