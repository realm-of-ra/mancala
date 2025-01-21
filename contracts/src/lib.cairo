mod constants;
mod store;

mod models {
    mod index;
    mod mancala_board;
    mod player;
    mod profile;
    mod seed;
    mod game_counter;
    mod pit;
    mod boost;
}

mod events {
    mod index;
    mod move;
}

mod interfaces {
    mod erc20;
}

mod components {
    mod playable;
    mod initializable;
    mod profile;
}

mod elements {
    mod tasks {
        mod clearing;
        mod collecting;
        mod dominating;
        mod interface;
        mod mastering;
        mod reigning;
    }
    mod trophies {
        mod collector;
        mod dominator;
        mod extractor;
        mod strategist;
        mod victor;
        mod interface;
    }
    mod boards {
        mod interface;
        mod afropolitan;
        mod avnu;
        mod blobert;
        mod brother;
        mod cartridge;
        mod developer_dao;
        mod ekubo;
        mod eternum;
        mod focus_tree;
        mod influence;
        mod loot_survivor;
        mod nethermind;
        mod nostra;
        mod onlydust;
        mod realm_of_ra;
        mod realms_world;
        mod sister;
        mod starknet;
        mod starknet_africa;
        mod starknet_id;
    }
}

mod systems {
    mod mancala;
    mod profile;
}

mod types {
    mod task;
    mod trophy;
    mod varient;
    mod board;
}

mod utils {
    mod board;
}

#[cfg(test)]
mod tests {
    mod setup;
    mod test_world;
    mod utils;
}
