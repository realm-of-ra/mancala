//! Store struct and component management methods.
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use starknet::ContractAddress;

// Models imports
use mancala::models::player::Player;
use mancala::models::mancala_board::MancalaBoard;
use mancala::models::seed::Seed;
use mancala::models::pit::Pit;
use mancala::models::game_counter::GameCounter;

// Structs
#[derive(Copy, Drop)]
struct Store {
    world: IWorldDispatcher,
}

// Implementations

#[generate_trait]
impl StoreImpl of StoreTrait {
    #[inline]
    fn new(world: IWorldDispatcher) -> Store {
        Store { world: world }
    }

    #[inline]
    fn set_state(self: Store, game_board: MancalaBoard, count: GameCounter, player: Player) {
        set!(self.world, (game_board, count, player))
    }

    #[inline]
    fn set_player(self: Store, player: Player) {
        set!(self.world, (player))
    }

    #[inline]
    fn set_mancala_board(self: Store, game_board: MancalaBoard) {
        set!(self.world, (game_board))
    }

    #[inline]
    fn set_seed(self: Store, seed: Seed) {
        set!(self.world, (seed))
    }

    #[inline]
    fn set_game_counter(self: Store, count: GameCounter) {
        set!(self.world, (count))
    }

    #[inline]
    fn set_pit(self: Store, pit: Pit) {
        set!(self.world, (pit))
    }

    #[inline]
    fn get_mancala_board(self: Store, game_id: u128) -> MancalaBoard {
        get!(self.world, game_id, (MancalaBoard))
    }

    #[inline]
    fn get_player(self: Store, game_id: u128, player_address: ContractAddress) -> Player {
        get!(self.world, (game_id, player_address), (Player))
    }

    #[inline]
    fn get_seed(self: Store, game_id: u128, player: ContractAddress, pit_number: u8, seed_number: u8) -> Seed {
        get!(self.world, (game_id, player, pit_number, seed_number), (Seed))
    }

    #[inline]
    fn get_game_counter(self: Store, id: u32) -> GameCounter {
        get!(self.world, id, (GameCounter))
    }

    #[inline]
    fn get_pit(self: Store, game_id: u128, player_address: ContractAddress, pit_number: u8) -> Pit {
        get!(self.world, (game_id, player_address, pit_number), (Pit))
    }


}
