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
    mod sponsor;
    mod leaderboard;
    mod season;
    mod settings;
}

mod helpers {
    mod address_resolver;
    mod prize_distribution;
}

mod events {
    mod index;
    mod move;
    mod board_minted;
}

mod interfaces {
    mod erc20;
    mod erc721;
}

mod components {
    mod playable;
    mod initializable;
    mod season;
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
        mod akash;
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
    mod season;
}

mod types {
    mod task;
    mod trophy;
    mod varient;
    mod board;
}

mod utils {
    mod board;
    mod leaderboard;
}

#[cfg(test)]
mod tests {
    mod setup;
    mod test_world;
    mod utils;
}
