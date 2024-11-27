use dojo::world::WorldStorage;
use starknet::ContractAddress;

use mancala::models::player::Player;
use mancala::models::seed::{Seed, SeedColor};
use mancala::models::pit::Pit;
use mancala::store::{Store, StoreTrait};

fn get_pit_seeds(world: WorldStorage, player: @Player, pit_number: u8) -> Array<Seed> {
    assert(pit_number <= *player.len_pits, 'Pit number out of bounds');

    let mut store: Store = StoreTrait::new(world);
    let pit = store.get_pit(*player.game_id, *player.address, pit_number);

    let mut result = array![];
    let mut idx = 0;
    loop {
        if idx == pit.seeds.len() {
            break;
        }
        let seed_id = *pit.seeds.at(idx);
        let seed = store.get_seed(*player.game_id, *player.address, seed_id);
        result.append(seed);
        idx += 1;
    };
    result
}

fn add_seed_to_pit(
    world: WorldStorage, ref seed: Seed, player_address: ContractAddress, pit_number: u8
) {
    let mut store: Store = StoreTrait::new(world);

    let mut pit = store.get_pit(seed.game_id, player_address, pit_number);
    pit.seeds.append(seed.seed_id);
    
    seed.player = pit.player;
    seed.prev_pit_number = seed.pit_number;
    seed.pit_number = pit.pit_number;
    store.set_pit(pit);
    store.set_seed(seed);
}

fn distribute_seeds(
    world: WorldStorage, ref current_player: Player, ref opponent: Player, selected_pit: u8
) -> u8 {
    let mut current_pit = selected_pit + 1;
    let mut last_pit = current_pit;
    let mut seed_idx = 0_u32;
    let seeds = get_pit_seeds(world, @current_player, selected_pit);
    while seed_idx < seeds.len() {
        let mut seed = *seeds.at(seed_idx);
        match current_pit {
            0 => panic!("Invalid pit selected"),
            1 => { add_seed_to_pit(world, ref seed, current_player.address, 1); },
            2 => { add_seed_to_pit(world, ref seed, current_player.address, 2); },
            3 => { add_seed_to_pit(world, ref seed, current_player.address, 3); },
            4 => { add_seed_to_pit(world, ref seed, current_player.address, 4); },
            5 => { add_seed_to_pit(world, ref seed, current_player.address, 5); },
            6 => { add_seed_to_pit(world, ref seed, current_player.address, 6); },
            7 => { add_seed_to_pit(world, ref seed, current_player.address, 7); },
            8 => { add_seed_to_pit(world, ref seed, opponent.address, 1); },
            9 => { add_seed_to_pit(world, ref seed, opponent.address, 2); },
            10 => { add_seed_to_pit(world, ref seed, opponent.address, 3); },
            11 => { add_seed_to_pit(world, ref seed, opponent.address, 4); },
            12 => { add_seed_to_pit(world, ref seed, opponent.address, 5); },
            13 => { add_seed_to_pit(world, ref seed, opponent.address, 6); },
            _ => { current_pit = 1 }
        };
        last_pit = current_pit;
        seed_idx += 1;
        current_pit += 1;
    };

    // Empty seeds on selected pit
    let mut store: Store = StoreTrait::new(world);
    let mut selected_pit_model = store
        .get_pit(current_player.game_id, current_player.address, selected_pit);
    selected_pit_model.seeds = array![];
    store.set_pit(selected_pit_model);

    last_pit
}

fn capture_seeds(
    world: WorldStorage, last_pit: u8, ref current_player: Player, ref opponent: Player
) -> u8 {
    let mut store: Store = StoreTrait::new(world);
    let mut captured_seeds: u8 = 0;

    if last_pit >= 1 && last_pit <= 6 {
        let mut last_pit_model = store
            .get_pit(current_player.game_id, current_player.address, last_pit);
        if last_pit_model.seeds.len() == 1 {
            let mut opposite_pit = store.get_pit(opponent.game_id, opponent.address, 7 - last_pit);
            if opposite_pit.seeds.len() > 0 {
                // Calculate total seeds to be captured (opposite pit + landing seed)
                captured_seeds = opposite_pit.seeds.len().try_into().unwrap() + 1;

                // transfer seeds from other player to store
                let mut seed_idx = 0;
                loop {
                    if seed_idx == opposite_pit.seeds.len() {
                        break;
                    }
                    let seed_id = *opposite_pit.seeds.at(seed_idx);
                    let mut seed = store.get_seed(opponent.game_id, opponent.address, seed_id);
                    add_seed_to_pit(world, ref seed, current_player.address, 7);
                    seed_idx += 1;
                };

                // transfer current seed to store
                let mut seed_of_player = store
                    .get_seed(current_player.game_id, current_player.address, *last_pit_model.seeds.at(0));
                add_seed_to_pit(world, ref seed_of_player, current_player.address, 7);

                last_pit_model.seeds = array![];
                store.set_pit(last_pit_model.clone());

                // remove seeds from opposite pit
                opposite_pit.seeds = array![];
                store.set_pit(opposite_pit.clone());
            }
        }
    }

    captured_seeds
}

fn get_player_seeds(world: WorldStorage, player: @Player) -> Array<Seed> {
    let mut idx = 1;
    let mut result = array![];
    loop {
        if idx > *player.len_pits {
            break;
        }
        let mut pit_seeds = get_pit_seeds(world, player, idx);
        let mut seeds_idx = 0;
        loop {
            if seeds_idx >= pit_seeds.len() {
                break;
            }
            result.append(*pit_seeds.at(seeds_idx));
            seeds_idx += 1;
        };
        idx += 1;
    };
    result
}

fn remove_player_seeds(world: WorldStorage, player: @Player) {
    let mut store: Store = StoreTrait::new(world);

    let mut idx = 1;
    loop {
        if idx > *player.len_pits {
            break;
        }
        let mut pit = store.get_pit(*player.game_id, *player.address, idx);
        pit.seeds = array![];
        store.set_pit(pit);
        idx += 1;
    };
}

fn capture_remaining_seeds(world: WorldStorage, ref player: Player) {
    let mut store: Store = StoreTrait::new(world);

    let mut remaining_seeds = get_player_seeds(world, @player);

    // transfer seeds to store
    let mut store_pit = store.get_pit(player.game_id, player.address, 7);
    let mut idx = 0;
    loop {
        if idx >= remaining_seeds.len() {
            break;
        }
        let mut seed = *remaining_seeds.at(idx);
        store_pit.seeds.append(seed.seed_id);
        seed.prev_pit_number = seed.pit_number;
        seed.pit_number = 7;
        store.set_seed(seed);
        idx += 1;
    };
    store.set_pit(store_pit);

    // remove seeds from pits
    remove_player_seeds(world, @player);
}

fn restart_player_pits(world: WorldStorage, player: @Player, seed_color: SeedColor) {
    let mut store: Store = StoreTrait::new(world);

    let mut idx = 1;
    let mut seed_id = 1;
    loop {
        if idx > *player.len_pits {
            break;
        }
        let mut pit = store.get_pit(*player.game_id, *player.address, idx);
        pit.seeds = array![];
        let mut seeds_set = 1_u8;
        loop {
            if seeds_set > 4 {
                break;
            }
            let mut seed = Seed {
                game_id: *player.game_id,
                player: *player.address,
                seed_id: seed_id,
                pit_number: idx,
                prev_pit_number: idx,
                color: seed_color
            };
            store.set_seed(seed);
            pit.seeds.append(seed_id);
            seeds_set += 1;
            seed_id += 1;
        };
        store.set_pit(pit);
        idx += 1;
    };

    let mut store_pit = store.get_pit(*player.game_id, *player.address, 7);
    store_pit.seeds = array![];
    store.set_pit(store_pit);
}
