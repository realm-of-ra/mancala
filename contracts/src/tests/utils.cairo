use dojo::world::{WorldStorage, WorldStorageTrait};

use mancala::store::{Store, StoreTrait};
use mancala::models::player::Player;

fn move_player_seeds_to_store(world: WorldStorage, player: @Player) {
    let mut store: Store = StoreTrait::new(world);
    let mut player_store = store.get_pit(*player.game_id, *player.address, 7);

    let mut idx = 1;
    loop {
        if idx > *player.len_pits {
            break;
        }
        let mut pit = store.get_pit(*player.game_id, *player.address, idx);
        let mut seeds_idx = 0;
        loop {
            if seeds_idx == pit.seeds.len() {
                break;
            }
            let seed_id = *pit.seeds.at(seeds_idx);
            let mut seed = store.get_seed(*player.game_id, seed_id);
            seed.prev_pit_number = seed.pit_number;
            seed.pit_number = 7;
            player_store.seeds.append(seed.seed_id);
            store.set_seed(seed);
            seeds_idx += 1;
        };
        pit.seeds = array![];
        store.set_pit(pit);
        idx += 1;
    };
    store.set_pit(player_store);
}
