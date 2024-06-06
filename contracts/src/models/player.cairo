use starknet::ContractAddress;

// useful for the leaderboard to track statistics
#[derive(Model, Copy, Drop, Serde)]
struct Player {
    #[key]
    address: ContractAddress,
    games_won: u256,
    games_lost: u256
}

// The GamePlayer is the store for the state in each game
#[derive(Model, Copy, Drop, Serde, Debug)]
struct GamePlayer {
    #[key]
    address: ContractAddress,
    #[key]
    game_id: u128,
    pit1: u8,
    pit2: u8,
    pit3: u8,
    pit4: u8,
    pit5: u8,
    pit6: u8,
    mancala: u8
}

trait GamePlayerTrait {
    fn new(game_id: u128, address: ContractAddress) -> GamePlayer;
    fn is_finished(self: GamePlayer) -> bool;
}

impl GamePlayerImpl of GamePlayerTrait {
    // logic to create the game player
    fn new(game_id: u128, address: ContractAddress) -> GamePlayer {
        let game_player = GamePlayer {
            address: address,
            game_id: game_id,
            pit1: 4_u8,
            pit2: 4_u8,
            pit3: 4_u8,
            pit4: 4_u8,
            pit5: 4_u8,
            pit6: 4_u8,
            mancala: 0
        };
        game_player
    }

    // check to see if a players pits are all empty
    fn is_finished(self: GamePlayer) -> bool {
        let mut count: u8 = 1;
        let mut empty_count: u8 = 0;

        while count < 6 {
            match count {
                0 => panic!("Invalid pit selected"),
                1 => if self.pit1 == 0 {
                    empty_count += 1;
                },
                2 => if self.pit2 == 0 {
                    empty_count += 1;
                },
                3 => if self.pit3 == 0 {
                    empty_count += 1;
                },
                4 => if self.pit4 == 0 {
                    empty_count += 1;
                },
                5 => if self.pit5 == 0 {
                    empty_count += 1;
                },
                6 => if self.pit6 == 0 {
                    empty_count += 1;
                },
                _ => panic!("Invalid pit selected"),
            };
            count += 1;
        };

        if (empty_count == 6) {
            true
        } else {
            false
        }
    }
}
