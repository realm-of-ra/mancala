use starknet::ContractAddress;

use dojo::world::IWorldDispatcher;
use mancala::models::index::{Player, MancalaBoard};

#[starknet::interface]
trait IActions<TContractState> {
    fn initialize_game_counter(self: @TContractState);
    fn new_game(self: @TContractState) -> MancalaBoard;
    fn join_game(self: @TContractState, game_id: u128);
    fn create_private_game(self: @TContractState, opponent_address: ContractAddress);
    fn get_players(self: @TContractState, game_id: u128) -> (Player, Player);
    fn move(self: @TContractState, game_id: u128, selected_pit: u8);
    fn get_score(self: @TContractState, game_id: u128) -> (u8, u8);
    fn is_game_over(self: @TContractState, game_id: u128) -> bool;
    fn forfeited(self: @TContractState, game_id: u128);
    fn request_restart_game(self: @TContractState, game_id: u128);
    fn restart_current_game(self: @TContractState, game_id: u128);
}

#[dojo::contract]
mod actions {
    use super::{ContractAddress, Player, IActions, MancalaBoard};
    use mancala::components::playable::PlayableComponent;

    component!(path: PlayableComponent, storage: playable, event: PlayableEvent);
    impl PlayableInternalImpl = PlayableComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        #[substorage(v0)]
        playable: PlayableComponent::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        PlayableEvent: PlayableComponent::Event,
    }

    #[abi(embed_v0)]
    impl ActionsImpl of IActions<ContractState> {
        fn initialize_game_counter(self: @ContractState) {
            self.playable.initialize_game_counter(self.world())
        }

        fn new_game(self: @ContractState) -> MancalaBoard {
            self.playable.new_game(self.world())
        }

        fn join_game(self: @ContractState, game_id: u128) {
            self.playable.join_game(self.world(), game_id)
        }

        fn create_private_game(self: @ContractState, opponent_address: ContractAddress) {
            self.playable.create_private_game(self.world(), opponent_address)
        }

        fn get_players(self: @ContractState, game_id: u128) -> (Player, Player) {
            self.playable.get_players(self.world(), game_id)
        }

        fn move(self: @ContractState, game_id: u128, selected_pit: u8) {
            self.playable.move(self.world(), game_id, selected_pit)
        }

        fn get_score(self: @ContractState, game_id: u128) -> (u8, u8) {
            self.playable.get_score(self.world(), game_id)
        }

        fn is_game_over(self: @ContractState, game_id: u128) -> bool {
            self.playable.is_game_over(self.world(), game_id)
        }

        fn forfeited(self: @ContractState, game_id: u128) {
            self.playable.forfeited(self.world(), game_id)
        }

        fn request_restart_game(self: @ContractState, game_id: u128) {
            self.playable.request_restart_game(self.world(), game_id)
        }

        fn restart_current_game(self: @ContractState, game_id: u128) {
            self.playable.restart_current_game(self.world(), game_id)
        }
    }
}
