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

#[cfg(test)]
mod tests {
    mod setup;
    mod test_world;
    mod utils;
}
