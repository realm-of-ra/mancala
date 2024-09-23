use dojo::world::{IWorld, IWorldDispatcher, IWorldDispatcherTrait};

use mancala::store::{Store, StoreTrait};
use mancala::models::player::Player;

fn move_player_seeds_to_store(world: IWorldDispatcher, player: @Player) {
    let mut store: Store = StoreTrait::new(world);
    let mut player_store = store.get_pit(*player.game_id, *player.address, 7);

    let mut idx = 1;
    loop {
        if idx > *player.len_pits {
            break;
        }
        let mut pit = store.get_pit(*player.game_id, *player.address, idx);
        let mut seeds_idx = 1;
        loop {
            if seeds_idx > pit.seed_count {
                break;
            }
            let mut seed = store.get_seed(*player.game_id, *player.address, idx, seeds_idx);
            seed.pit_number = 7;
            player_store.seed_count += 1;
            seed.seed_number = player_store.seed_count;
            store.set_seed(seed);
            seeds_idx += 1;
        };
        pit.seed_count = 0;
        store.set_pit(pit);
        idx += 1;
    };
    store.set_pit(player_store);
}
