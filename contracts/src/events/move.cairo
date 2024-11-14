use mancala::events::index::PlayerMove;

pub mod errors {}

#[generate_trait]
impl PlayerMoveImpl of PlayerMoveTrait {
    #[inline]
    fn new(game_id: u128, pit_number: u8, seed_number: u8) -> PlayerMove {
        PlayerMove { game_id, pit_number, seed_number, }
    }
}
