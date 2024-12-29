use starknet::ContractAddress;

use dojo::world::IWorldDispatcher;
use mancala::models::player::Player;

#[starknet::interface]
trait IActions<TContractState> {
    fn new_game(self: @TContractState);
    fn join_game(self: @TContractState, game_id: u128);
    fn timeout(self: @TContractState, game_id: u128, opponent_address: ContractAddress);
    fn create_private_game(self: @TContractState, opponent_address: ContractAddress);
    fn get_players(self: @TContractState, game_id: u128) -> (Player, Player);
    fn move(self: @TContractState, game_id: u128, selected_pit: u8);
    fn get_score(self: @TContractState, game_id: u128) -> (u8, u8);
    fn is_game_over(self: @TContractState, game_id: u128) -> bool;
    fn forfeited(self: @TContractState, game_id: u128);
    fn request_restart_game(self: @TContractState, game_id: u128);
    fn restart_current_game(self: @TContractState, game_id: u128);
    fn create_player_profile(self: @TContractState, name: felt252);
    fn update_player_profile(self: @TContractState, name: felt252, new_uri: ByteArray);
}

#[dojo::contract]
mod actions {
    use super::{ContractAddress, Player, IActions};
    use mancala::models::profile::Profile;
    use mancala::models::mancala_board::MancalaBoard;
    use mancala::components::initializable::InitializableComponent;
    use mancala::components::playable::PlayableComponent;
    use achievement::components::achievable::{
        AchievableComponent, AchievableComponent::InternalImpl as AchievableInternalImpl,
    };
    use mancala::types::task::{Task, TaskTrait};
    use mancala::types::trophy::{Trophy, TrophyTrait, TROPHY_COUNT};
    use mancala::constants::NAMESPACE;


    use dojo::world::WorldStorage;

    component!(path: InitializableComponent, storage: initializable, event: InitializableEvent);
    impl InitializableImpl = InitializableComponent::InternalImpl<ContractState>;
    component!(path: PlayableComponent, storage: playable, event: PlayableEvent);
    impl PlayableInternalImpl = PlayableComponent::InternalImpl<ContractState>;
    component!(path: AchievableComponent, storage: achievable, event: AchievableEvent);

    #[storage]
    struct Storage {
        #[substorage(v0)]
        initializable: InitializableComponent::Storage,
        #[substorage(v0)]
        playable: PlayableComponent::Storage,
        #[substorage(v0)]
        achievable: AchievableComponent::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        InitializableEvent: InitializableComponent::Event,
        #[flat]
        PlayableEvent: PlayableComponent::Event,
        #[flat]
        AchievableEvent: AchievableComponent::Event,
    }

    fn dojo_init(self: @ContractState) {
        self.initializable.initialize(self.world_storage());
        // [Event] Emit all Trophy events
        let world = self.world(@NAMESPACE());
        let mut trophy_id: u8 = TROPHY_COUNT;
        while trophy_id > 0 {
            let trophy: Trophy = trophy_id.into();
            self
                .achievable
                .create(
                    world,
                    id: trophy.identifier(),
                    hidden: trophy.hidden(),
                    index: trophy.index(),
                    points: trophy.points(),
                    start: trophy.start(),
                    end: trophy.end(),
                    group: trophy.group(),
                    icon: trophy.icon(),
                    title: trophy.title(),
                    description: trophy.description(),
                    tasks: trophy.tasks(),
                    data: trophy.data(),
                );
            trophy_id -= 1;
        }
    }

    #[abi(embed_v0)]
    impl ActionsImpl of IActions<ContractState> {
        fn new_game(self: @ContractState) {
            let world = self.world_storage();
            self.playable.new_game(world)
        }

        fn join_game(self: @ContractState, game_id: u128) {
            let world = self.world_storage();
            self.playable.join_game(world, game_id)
        }

        fn timeout(self: @ContractState, game_id: u128, opponent_address: ContractAddress) {
            let world = self.world_storage();
            self.playable.timeout(world, game_id, opponent_address)
        }

        fn create_private_game(self: @ContractState, opponent_address: ContractAddress) {
            let world = self.world_storage();
            self.playable.create_private_game(world, opponent_address)
        }

        fn get_players(self: @ContractState, game_id: u128) -> (Player, Player) {
            let world = self.world_storage();
            self.playable.get_players(world, game_id)
        }

        fn move(self: @ContractState, game_id: u128, selected_pit: u8) {
            let world = self.world_storage();
            self.playable.move(world, game_id, selected_pit)
        }

        fn get_score(self: @ContractState, game_id: u128) -> (u8, u8) {
            let world = self.world_storage();
            self.playable.get_score(world, game_id)
        }

        fn is_game_over(self: @ContractState, game_id: u128) -> bool {
            let world = self.world_storage();
            self.playable.is_game_over(world, game_id)
        }

        fn forfeited(self: @ContractState, game_id: u128) {
            let world = self.world_storage();
            self.playable.forfeited(world, game_id)
        }

        fn request_restart_game(self: @ContractState, game_id: u128) {
            let world = self.world_storage();
            self.playable.request_restart_game(world, game_id)
        }

        fn restart_current_game(self: @ContractState, game_id: u128) {
            let world = self.world_storage();
            self.playable.restart_current_game(world, game_id)
        }

        fn create_player_profile(self: @ContractState, name: felt252) {
            let world = self.world_storage();
            self.playable.new_profile(world, name)
        }

        fn update_player_profile(self: @ContractState, name: felt252, new_uri: ByteArray) {
            let world = self.world_storage();
            self.playable.update_player_profile(world, name, new_uri)
        }
    }

    #[generate_trait]
    impl Private of PrivateTrait {
        fn world_storage(self: @ContractState) -> WorldStorage {
            self.world(@NAMESPACE())
        }
    }
}
