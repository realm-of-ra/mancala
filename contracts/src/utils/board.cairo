use dojo::world::{IWorld, IWorldDispatcher, IWorldDispatcherTrait};
use starknet::ContractAddress;

use mancala::models::player::Player;
use mancala::models::seed::{Seed, SeedColor};
use mancala::models::pit::Pit;
use mancala::store::{Store, StoreTrait};

use core::traits::TryInto;

fn get_pit_seeds(world: IWorldDispatcher, player: @Player, pit_number: u8) -> Array<Seed>{
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

fn add_seed_to_pit(world: IWorldDispatcher, ref seed: Seed, player_address: ContractAddress, pit_number: u8) {
    let mut store: Store = StoreTrait::new(world);

    let mut pit = store.get_pit(seed.game_id, player_address, pit_number);
    pit.seed_count += 1;
    store.set_pit(pit);

    seed.player = pit.player;
    seed.pit_number = pit.pit_number;
    seed.seed_number = pit.seed_count;
    store.set_seed(seed);
}

fn distribute_seeds(
    world: IWorldDispatcher,
    ref current_player: Player,
    ref opponent: Player,
    selected_pit: u8
) -> u8 {
    let mut store: Store = StoreTrait::new(world);
    let mut current_pit = selected_pit + 1;
    let mut last_pit = current_pit;
    let seeds = get_pit_seeds(world, @current_player, selected_pit);
    let mut seed_idx = 0;

    while seed_idx < seeds.len() {
        let mut seed = *seeds.at(seed_idx);
        let target_player = if current_pit <= 7 { current_player.address } else { opponent.address };
        let target_pit = if current_pit <= 7 { current_pit } else { current_pit - 7 };

        // Move the seed to the new pit
        seed.player = target_player;
        seed.pit_number = target_pit;
        store.set_seed(seed);

        // Update pit seed counts
        let mut from_pit = store.get_pit(current_player.game_id, current_player.address, selected_pit);
        from_pit.seed_count -= 1;
        store.set_pit(from_pit);

        let mut to_pit = store.get_pit(current_player.game_id, target_player, target_pit);
        to_pit.seed_count += 1;
        store.set_pit(to_pit);

        last_pit = current_pit;
        seed_idx += 1;
        current_pit = if current_pit == 14 { 1 } else { current_pit + 1 };
    };

    last_pit
}

fn capture_seeds(world: IWorldDispatcher, last_pit: u8, ref current_player: Player, ref opponent: Player) {
    let mut store: Store = StoreTrait::new(world);
    if last_pit >= 1 && last_pit <= 6 {
        let mut last_pit_model = store.get_pit(current_player.game_id, current_player.address, last_pit);
        if last_pit_model.seed_count == 1 {
            let mut opposite_pit = store.get_pit(opponent.game_id, opponent.address, 7 - last_pit);
            if opposite_pit.seed_count > 0 {
                // Move seeds from opposite pit to current player's store
                let opposite_seeds = get_pit_seeds(world, @opponent, 7 - last_pit);
                let mut seed_idx = 0;
                while seed_idx < opposite_seeds.len() {
                    let mut seed = *opposite_seeds.at(seed_idx);
                    seed.player = current_player.address;
                    seed.pit_number = 7;
                    store.set_seed(seed);
                    seed_idx += 1;
                };

                // Move the last seed to the store
                let mut last_seed = store.get_seed(current_player.game_id, current_player.address, last_pit, 1);
                last_seed.pit_number = 7;
                store.set_seed(last_seed);

                // Update pit seed counts
                last_pit_model.seed_count = 0;
                store.set_pit(last_pit_model);
                opposite_pit.seed_count = 0;
                store.set_pit(opposite_pit);
                let mut store_pit = store.get_pit(current_player.game_id, current_player.address, 7);
                store_pit.seed_count += (opposite_seeds.len() + 1_u32).try_into().unwrap();
                store.set_pit(store_pit);
            }
        }
    }
}

fn get_player_seeds(world: IWorldDispatcher, player: @Player) -> Array<Seed> {
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

fn remove_player_seeds(world: IWorldDispatcher, player: @Player) {
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

fn capture_remaining_seeds(world: IWorldDispatcher, ref player: Player) {
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

fn restart_player_pits(world: IWorldDispatcher, player: @Player, seed_color: SeedColor) {
    let mut store: Store = StoreTrait::new(world);

    let mut idx = 1;
    let mut seed_id = 1;
    loop {
        if idx > *player.len_pits {
            break;
        }
        let mut pit = store.get_pit(*player.game_id, *player.address, idx);
        pit.seed_count = 0;
        let mut seeds_set = 1;
        loop {
            if seeds_set > 4 {
                break;
            }
            let mut seed = Seed {
                game_id: *player.game_id,
                player: *player.address,
                pit_number: idx,
                seed_number: seeds_set,
                color: seed_color,
                seed_id: seed_id,  // Assign the unique seed ID
            };
            store.set_seed(seed);
            pit.seed_count += 1;
            seeds_set += 1;
            seed_id += 1;  // Increment the seed ID for the next seed
        };
        store.set_pit(pit);
        idx += 1;
    };

    let mut store_pit = store.get_pit(*player.game_id, *player.address, 7);
    store_pit.seed_count = 0;
    store.set_pit(store_pit);
}