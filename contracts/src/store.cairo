//! Store struct and component management methods.
use dojo::world::WorldStorage;
use dojo::model::ModelStorage;
use dojo::event::EventStorage;

use starknet::ContractAddress;

// Models imports
use mancala::models::player::Player;
use mancala::models::mancala_board::MancalaBoard;
use mancala::models::seed::Seed;
use mancala::models::pit::Pit;
use mancala::models::game_counter::GameCounter;

use mancala::events::move::{PlayerMove, PlayerMoveTrait};

// Structs
#[derive(Copy, Drop)]
struct Store {
    world: WorldStorage,
}

// Implementations

#[generate_trait]
impl StoreImpl of StoreTrait {
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
    fn set_player(ref self: Store, player: Player) {
        self.world.write_model(@player);
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
    fn get_seed(
        self: Store, game_id: u128, player: ContractAddress, pit_number: u8, seed_number: u8
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
}
