use dojo::world::{WorldStorage, WorldStorageTrait};

use mancala::store::{Store, StoreTrait};
use mancala::models::player::Player;


pub fn move_player_seeds_to_store(world: WorldStorage, player: @Player) {
    let mut store: Store = StoreTrait::new(world);
    let mut player_store = store.get_pit(*player.game_id, *player.address, 7);
    let store_start_count = player_store.seed_count;
    let mut total_moved_seeds = 0;

    let mut idx = 1;
    loop {
        if idx > *player.len_pits {
            break;
        }
        let mut pit = store.get_pit(*player.game_id, *player.address, idx);
        let pit_seed_count = pit.seed_count;
        let mut seeds_idx = 1;
        loop {
            if seeds_idx > pit_seed_count {
                break;
            }
            let mut seed = store.get_seed(*player.game_id, *player.address, idx, seeds_idx);
            seed.pit_number = 7;
            seed.seed_number = store_start_count + total_moved_seeds + seeds_idx;
            store.set_seed(seed);
            seeds_idx += 1;
        };
        total_moved_seeds += pit_seed_count;
        pit.seed_count = 0;
        store.set_pit(pit);
        idx += 1;
    };
    // Update store pit count once at the end
    player_store.seed_count += total_moved_seeds;
    store.set_pit(player_store);
}
