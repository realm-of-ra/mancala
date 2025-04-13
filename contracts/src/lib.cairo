pub mod constants;
pub mod store;

pub mod models {
    pub mod game_counter;
    pub mod index;
    pub mod mancala_board;
    pub mod pit;
    pub mod player;
    pub mod profile;
    pub mod seed;
    pub mod settings;
}

pub mod events {
    pub mod index;
    pub mod move;
}

pub mod components {
    pub mod config;
    pub mod initializable;
    pub mod playable;
    pub mod profile;
}

pub mod elements {
    pub mod tasks {
        pub mod clearing;
        pub mod collecting;
        pub mod dominating;
        pub mod interface;
        pub mod mastering;
        pub mod reigning;
    }
    pub mod trophies {
        pub mod collector;
        pub mod dominator;
        pub mod extractor;
        pub mod interface;
        pub mod strategist;
        pub mod victor;
    }
}

pub mod systems {
    pub mod config;
    pub mod mancala;
    pub mod profile;
}

pub mod types {
    pub mod gate_type;
    pub mod task;
    pub mod trophy;
}

pub mod utils {
    pub mod board;
    pub mod cartridge_vrf;
    pub mod random;
}

#[cfg(test)]
pub mod tests {
    pub mod setup;
    pub mod test_world;
    pub mod utils;
}
