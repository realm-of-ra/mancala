use starknet::ContractAddress;

use mancala::models::player::Player;

#[starknet::interface]
pub(crate) trait IMancalaSystem<TState> {
    fn new_game(ref self: TState, settings_id: u8);
    fn join_game(ref self: TState, game_id: u128, settings_id: u8);
    fn timeout(ref self: TState, game_id: u128, opponent_address: ContractAddress);
    fn create_private_game(ref self: TState, opponent_address: ContractAddress, settings_id: u8);
    fn get_players(ref self: TState, game_id: u128) -> (Player, Player);
    fn move(ref self: TState, game_id: u128, selected_pit: u8);
    fn get_score(ref self: TState, game_id: u128) -> (u8, u8);
    fn is_game_over(ref self: TState, game_id: u128) -> bool;
    fn forfeited(ref self: TState, game_id: u128);
    fn request_restart_game(ref self: TState, game_id: u128);
    fn restart_current_game(ref self: TState, game_id: u128);
}

#[dojo::contract]
pub mod Mancala {
    use super::{ContractAddress, Player, IMancalaSystem};
    use mancala::components::playable::PlayableComponent;
    use mancala::components::initializable::InitializableComponent;
    use achievement::components::achievable::AchievableComponent;
    use mancala::types::trophy::{Trophy, TrophyTrait, TROPHY_COUNT};
    use mancala::constants::NAMESPACE;

    use dojo::world::WorldStorage;

    component!(path: PlayableComponent, storage: playable, event: PlayableEvent);
    impl PlayableInternalImpl = PlayableComponent::InternalImpl<ContractState>;
    component!(path: InitializableComponent, storage: initializable, event: InitializableEvent);
    impl InitializableImpl = InitializableComponent::InternalImpl<ContractState>;
    component!(path: AchievableComponent, storage: achievable, event: AchievableEvent);
    impl AchievableInternalImpl = AchievableComponent::InternalImpl<ContractState>;

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

    fn dojo_init(
        self: @ContractState,
        mancala_pass_address: ContractAddress,
        gate_keeper_address: ContractAddress,
    ) {
        self
            .initializable
            .initialize(self.world_storage(), mancala_pass_address, gate_keeper_address);
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
    pub impl MancalaImpl of IMancalaSystem<ContractState> {
        fn new_game(ref self: ContractState, settings_id: u8) {
            let world = self.world_storage();
            self.playable.new_game(world, settings_id);
        }

        fn join_game(ref self: ContractState, game_id: u128, settings_id: u8) {
            let world = self.world_storage();
            self.playable.join_game(world, game_id, settings_id)
        }

        fn timeout(ref self: ContractState, game_id: u128, opponent_address: ContractAddress) {
            let world = self.world_storage();
            self.playable.timeout(world, game_id, opponent_address)
        }

        fn create_private_game(
            ref self: ContractState, opponent_address: ContractAddress, settings_id: u8,
        ) {
            let world = self.world_storage();
            self.playable.create_private_game(world, opponent_address, settings_id)
        }

        fn get_players(ref self: ContractState, game_id: u128) -> (Player, Player) {
            let world = self.world_storage();
            self.playable.get_players(world, game_id)
        }

        fn move(ref self: ContractState, game_id: u128, selected_pit: u8) {
            let world = self.world_storage();
            self.playable.move(world, game_id, selected_pit)
        }

        fn get_score(ref self: ContractState, game_id: u128) -> (u8, u8) {
            let world = self.world_storage();
            self.playable.get_score(world, game_id)
        }

        fn is_game_over(ref self: ContractState, game_id: u128) -> bool {
            let world = self.world_storage();
            self.playable.is_game_over(world, game_id)
        }

        fn forfeited(ref self: ContractState, game_id: u128) {
            let world = self.world_storage();
            self.playable.forfeited(world, game_id)
        }

        fn request_restart_game(ref self: ContractState, game_id: u128) {
            let world = self.world_storage();
            self.playable.request_restart_game(world, game_id)
        }

        fn restart_current_game(ref self: ContractState, game_id: u128) {
            let world = self.world_storage();
            self.playable.restart_current_game(world, game_id)
        }
    }

    #[generate_trait]
    impl Private of PrivateTrait {
        fn world_storage(self: @ContractState) -> WorldStorage {
            self.world(@NAMESPACE())
        }
    }
}
