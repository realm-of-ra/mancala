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
}

mod events {
    mod index;
    mod move;
}

mod components {
    mod playable;
    mod initializable;
}

mod systems {
    mod actions;
}

mod utils {
    mod board;
}

mod types {
    mod task;
    mod trophy;
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
}

#[cfg(test)]
mod tests {
    mod setup;
    mod test_world;
    mod utils;
}
