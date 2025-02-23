pub mod constants;
pub mod store;

pub mod models {
    pub mod index;
    pub mod mancala_board;
    pub mod player;
    pub mod profile;
    pub mod seed;
    pub mod game_counter;
    pub mod pit;
    pub mod settings;
}

pub mod events {
    pub mod index;
    pub mod move;
}

pub mod components {
    pub mod playable;
    pub mod initializable;
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
        pub mod strategist;
        pub mod victor;
        pub mod interface;
    }
}

pub mod systems {
    pub mod mancala;
    pub mod profile;
}

pub mod types {
    pub mod task;
    pub mod trophy;
}

pub mod utils {
    pub mod board;
}

#[cfg(test)]
pub mod tests {
    pub mod setup;
    pub mod test_world;
    pub mod utils;
}
