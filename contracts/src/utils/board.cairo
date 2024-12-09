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
    let mut idx = 1;
    loop {
        if idx > pit.seed_count {
            break;
        }
        let seed = store.get_seed(*player.game_id, *player.address, pit_number, idx);
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
    
    // Update pit count first
    pit.seed_count += 1;
    let new_seed_number = pit.seed_count;
    store.set_pit(pit);

    // Then update seed location
    seed.player = player_address;
    seed.pit_number = pit_number;
    seed.seed_number = new_seed_number;  // Use the calculated seed number
    store.set_seed(seed);
}

fn distribute_seeds(
    world: WorldStorage, ref current_player: Player, ref opponent: Player, selected_pit: u8
) -> u8 {
    let mut store: Store = StoreTrait::new(world);
    let mut current_pit = selected_pit + 1;
    let mut last_pit = current_pit;
    
    // Get all seeds from selected pit first
    let mut selected_pit_model = store
        .get_pit(current_player.game_id, current_player.address, selected_pit);
    let seed_count = selected_pit_model.seed_count;
    
    // Clear the selected pit first
    selected_pit_model.seed_count = 0;
    store.set_pit(selected_pit_model);
    
    // Move each seed
    let mut seed_idx = 1;
    loop {
        if seed_idx > seed_count {
            break;
        }
        
        let mut seed = store
            .get_seed(current_player.game_id, current_player.address, selected_pit, seed_idx);
        
        // Update pit count and seed location
        if current_pit <= 7 {
            let mut target_pit = store.get_pit(current_player.game_id, current_player.address, current_pit);
            target_pit.seed_count += 1;
            store.set_pit(target_pit);
            
            seed.pit_number = current_pit;
            seed.seed_number = target_pit.seed_count;
            store.set_seed(seed);
        } else if current_pit <= 13 {
            let opponent_pit = current_pit - 7;
            let mut target_pit = store.get_pit(opponent.game_id, opponent.address, opponent_pit);
            target_pit.seed_count += 1;
            store.set_pit(target_pit);
            
            seed.player = opponent.address;
            seed.pit_number = opponent_pit;
            seed.seed_number = target_pit.seed_count;
            store.set_seed(seed);
        } else {
            current_pit = 1;
            let mut target_pit = store.get_pit(current_player.game_id, current_player.address, current_pit);
            target_pit.seed_count += 1;
            store.set_pit(target_pit);
            
            seed.pit_number = current_pit;
            seed.seed_number = target_pit.seed_count;
            store.set_seed(seed);
        }
        
        last_pit = current_pit;
        current_pit += 1;
        seed_idx += 1;
    };

    if last_pit > 7 {
        last_pit -= 7;
    }
    
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
        if last_pit_model.seed_count == 1 {
            let mut opposite_pit = store.get_pit(opponent.game_id, opponent.address, 7 - last_pit);
            if opposite_pit.seed_count > 0 {
                // Calculate before modifying any state
                captured_seeds = opposite_pit.seed_count + 1;

                // First clear the pit counts to prevent double counting
                last_pit_model.seed_count = 0;
                opposite_pit.seed_count = 0;
                store.set_pit(last_pit_model);
                store.set_pit(opposite_pit);

                // Move opposite pit seeds to store
                let mut seed_idx = 1;
                loop {
                    if seed_idx > captured_seeds - 1 { // Use captured_seeds - 1 since we haven't moved the landing seed yet
                        break;
                    }
                    let mut seed = store
                        .get_seed(opponent.game_id, opponent.address, 7 - last_pit, seed_idx);
                    // Just update the seed location without emitting
                    seed.player = current_player.address;
                    seed.pit_number = 7;
                    seed.seed_number = seed_idx;
                    store.set_seed(seed);
                    seed_idx += 1;
                };

                // Move landing seed to store
                let mut seed_of_player = store
                    .get_seed(current_player.game_id, current_player.address, last_pit, 1);
                // Just update the seed location without emitting
                seed_of_player.pit_number = 7;
                seed_of_player.seed_number = captured_seeds;
                store.set_seed(seed_of_player);

                // Update store pit count once at the end
                let mut store_pit = store.get_pit(current_player.game_id, current_player.address, 7);
                store_pit.seed_count += captured_seeds;
                store.set_pit(store_pit);
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
        pit.seed_count = 0;
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
        store_pit.seed_count += 1;
        let mut seed = *remaining_seeds.at(idx);
        seed.pit_number = 7;
        seed.seed_number = store_pit.seed_count;
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
    loop {
        if idx > *player.len_pits {
            break;
        }
        let mut pit = store.get_pit(*player.game_id, *player.address, idx);
        pit.seed_count = 4;
        store.set_pit(pit);

        let mut seeds_set = 1;
        loop {
            if seeds_set > 4 {
                break;
            }
            let mut seed = store.get_seed(*player.game_id, *player.address, idx, seeds_set);
            seed.player = *player.address;
            seed.pit_number = idx;
            seed.seed_number = seeds_set;
            seed.color = seed_color;
            store.set_seed(seed);
            seeds_set += 1;
        };
        idx += 1;
    };

    // Clear store pit
    let mut store_pit = store.get_pit(*player.game_id, *player.address, 7);
    store_pit.seed_count = 0;
    store.set_pit(store_pit);
}

fn verify_seed_counts(world: WorldStorage, game_id: u128) {
    let mut store: Store = StoreTrait::new(world);
    
    let game = store.get_mancala_board(game_id);

    // Check player one pits
    let mut pit_idx = 1;
    loop {
        if pit_idx > 7 {
            break;
        }
        let pit = store.get_pit(game_id, game.player_one, pit_idx);
        let mut seed_count = 0;
        let mut seed_idx = 1;
        loop {
            if seed_idx > pit.seed_count {
                break;
            }
            // This will panic if seed doesn't exist
            let _ = store.get_seed(game_id, game.player_one, pit_idx, seed_idx);
            seed_count += 1;
            seed_idx += 1;
        };
        assert(seed_count == pit.seed_count, 'Seed count mismatch');
        pit_idx += 1;
    };

    // Check player two pits
    let mut pit_idx = 1;
    loop {
        if pit_idx > 7 {
            break;
        }
        let pit = store.get_pit(game_id, game.player_two, pit_idx);
        let mut seed_count = 0;
        let mut seed_idx = 1;
        loop {
            if seed_idx > pit.seed_count {
                break;
            }
            // This will panic if seed doesn't exist
            let _ = store.get_seed(game_id, game.player_two, pit_idx, seed_idx);
            seed_count += 1;
            seed_idx += 1;
        };
        assert(seed_count == pit.seed_count, 'Seed count mismatch');
        pit_idx += 1;
    };
}

fn initialize_player_seeds(
    world: WorldStorage,
    player: @Player,
    start_seed_id: u128,
    color: SeedColor
) {
    let mut store: Store = StoreTrait::new(world);
    
    let mut idx = 1;
    loop {
        if idx > *player.len_pits {
            break;
        }
        let mut pit = store.get_pit(*player.game_id, *player.address, idx);
        pit.seed_count = 4;
        store.set_pit(pit);

        let mut seeds_set = 1;
        loop {
            if seeds_set > 4 {
                break;
            }
            let seed_id = start_seed_id + (((idx.into() - 1_u128) * 4_u128) + (seeds_set.into() - 1_u128));
            let mut seed = store.get_seed(*player.game_id, *player.address, idx, seeds_set);
            seed.player = *player.address;
            seed.pit_number = idx;
            seed.seed_number = seeds_set;
            seed.seed_id = seed_id;
            seed.color = color;
            store.set_seed(seed);
            seeds_set += 1;
        };
        idx += 1;
    };

    // Clear store pit
    let mut store_pit = store.get_pit(*player.game_id, *player.address, 7);
    store_pit.seed_count = 0;
    store.set_pit(store_pit);
}
