#[derive(Copy, Drop, Serde)]
#[dojo::event(historical: true)]
struct PlayerMove {
    #[key]
    game_id: u128,
    pit_number: u8,
    seed_number: u8,
}
