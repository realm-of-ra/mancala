//! Store struct and component management methods.
use dojo::world::WorldStorage;
use dojo::model::ModelStorage;
use dojo::event::EventStorage;

use starknet::ContractAddress;

// Models imports
use mancala::models::player::Player;
use mancala::models::profile::Profile;
use mancala::models::mancala_board::MancalaBoard;
use mancala::models::seed::Seed;
use mancala::models::pit::Pit;
use mancala::models::settings::Settings;
use mancala::models::game_counter::GameCounter;

use mancala::events::move::{
    PlayerMove, PlayerMoveTrait, PlayerExtraTurn, PlayerExtraTurnTrait, EndTurn, EndTurnTrait,
    Capture, CaptureTrait,
};

// Structs
#[derive(Copy, Drop)]
pub struct Store {
    world: WorldStorage,
}

// Implementations

#[generate_trait]
pub impl StoreImpl of StoreTrait {
    #[inline]
    fn new(world: WorldStorage) -> Store {
        Store { world: world }
    }

    #[inline]
    fn player_move(mut self: Store, id: u128, pit_number: u8, seed_number: u8) {
        let event: PlayerMove = PlayerMoveTrait::new(id, pit_number, seed_number);
        self.world.emit_event(@event);
    }

    #[inline]
    fn player_extra_turn(mut self: Store, game_id: u128, player: ContractAddress) {
        let event: PlayerExtraTurn = PlayerExtraTurnTrait::new(game_id, player);
        self.world.emit_event(@event);
    }

    #[inline]
    fn end_turn(
        mut self: Store,
        game_id: u128,
        current_player: ContractAddress,
        next_player: ContractAddress,
    ) {
        let event: EndTurn = EndTurnTrait::new(game_id, current_player, next_player);
        self.world.emit_event(@event);
    }

    #[inline]
    fn capture(
        mut self: Store, game_id: u128, player: ContractAddress, pit_number: u8, seed_count: u8,
    ) {
        let event: Capture = CaptureTrait::new(game_id, player, pit_number, seed_count);
        self.world.emit_event(@event);
    }

    #[inline]
    fn set_player(ref self: Store, player: Player) {
        self.world.write_model(@player);
    }

    #[inline]
    fn set_profile(ref self: Store, profile: Profile) {
        self.world.write_model(@profile);
    }

    #[inline]
    fn set_mancala_board(ref self: Store, game_board: MancalaBoard) {
        self.world.write_model(@game_board);
    }

    #[inline]
    fn set_seed(ref self: Store, seed: Seed) {
        self.world.write_model(@seed);
    }

    #[inline]
    fn set_game_counter(ref self: Store, count: GameCounter) {
        self.world.write_model(@count);
    }

    fn set_settings(ref self: Store, settings: Settings) {
        self.world.write_model(@settings);
    }

    #[inline]
    fn set_pit(ref self: Store, pit: Pit) {
        self.world.write_model(@pit);
    }

    #[inline]
    fn get_mancala_board(self: Store, game_id: u128) -> MancalaBoard {
        self.world.read_model(game_id)
    }

    #[inline]
    fn get_player(self: Store, game_id: u128, player_address: ContractAddress) -> Player {
        self.world.read_model((game_id, player_address))
    }

    #[inline]
    fn get_profile(self: Store, player_address: ContractAddress) -> Profile {
        self.world.read_model(player_address)
    }

    #[inline]
    fn get_seed(
        self: Store, game_id: u128, player: ContractAddress, pit_number: u8, seed_number: u8,
    ) -> Seed {
        self.world.read_model((game_id, player, pit_number, seed_number))
    }

    #[inline]
    fn get_game_counter(self: Store, id: u32) -> GameCounter {
        self.world.read_model(id)
    }

    #[inline]
    fn get_pit(self: Store, game_id: u128, player_address: ContractAddress, pit_number: u8) -> Pit {
        self.world.read_model((game_id, player_address, pit_number))
    }

    #[inline]
    fn get_settings(self: Store, game_id: u8) -> Settings {
        self.world.read_model(game_id)
    }
}
