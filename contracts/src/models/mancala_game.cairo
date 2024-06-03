use core::traits::Into;
use starknet::ContractAddress;
use starknet::contract_address::ContractAddressZeroable;
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

use mancala::models::player::{GamePlayer, GamePlayerTrait};

// this is the model to track the 
#[derive(Model, Copy, Drop, Serde)]
struct GameId {
    #[key]
    // statically set to 1
    id: u32, 
    // increments to track the game id
    game_id: u128
}

#[derive(Model, Copy, Drop, Serde, Debug)]
struct MancalaGame {
    #[key]
    game_id: u128,
    player_one: ContractAddress,
    player_two: ContractAddress,
    current_player: ContractAddress,
    winner: ContractAddress, // todo implement logic to set this state
    is_finished: bool,  // todo implement logic to set this state
    // also maybe better to use and enum to track the status of the game
    // PENDING, IN_PROGRESS, FINISHED, FORFEITED
    is_private: bool
    // block_created: block
}

// todo NEED TO ADD CUSTOM EVENTS AND EVENT EMISSION?


trait MancalaGameTrait{
    fn new(game_id: u128, player_one: ContractAddress) -> MancalaGame;
    fn join_game(ref self: MancalaGame, player_two: GamePlayer);
    fn get_seeds(self: MancalaGame, player:GamePlayer, selected_pit: u8) -> u8;
    fn clear_pit(ref self: MancalaGame, ref player: GamePlayer, selected_pit: u8);
    fn distribute_seeds(ref self: MancalaGame, ref current_player: GamePlayer, ref opponent: GamePlayer, ref seeds: u8, selected_pit: u8);
    fn validate_move(self:MancalaGame, player: ContractAddress,  selected_pit: u8);
    fn handle_player_switch(ref self: MancalaGame, last_pit: u8, opponent: GamePlayer);
    fn capture(self: MancalaGame, last_pit: u8, ref current_player: GamePlayer, ref opponent: GamePlayer);
    fn is_game_finished(self: MancalaGame, player_one: GamePlayer, player_two: GamePlayer) -> bool;
    fn get_players(self: MancalaGame, world: IWorldDispatcher) -> (GamePlayer, GamePlayer);
    fn get_score(self: MancalaGame, player_one: GamePlayer, player_two: GamePlayer) -> (u8, u8);
    fn restart(self: mancalaGame, player_one: Gameplayer, player_two: GamePlayer);
}


impl MancalaImpl of MancalaGameTrait{

    // create the game
    fn new(game_id: u128, player_one: ContractAddress) -> MancalaGame{
        let mancala_game: MancalaGame = MancalaGame {
            game_id: game_id,
            player_one: player_one,
            player_two: ContractAddressZeroable::zero(),
            winner: ContractAddressZeroable::zero(),
            current_player: player_one,
            is_finished: false,
            is_private: false
        };
        mancala_game
    }

    // player two can join the game
    fn join_game(ref self: MancalaGame, player_two: GamePlayer){
        self.player_two = player_two.address;
    }


    // get the current player and the other player
    // the current player is the player who has the current turn
    fn get_players(self: MancalaGame, world: IWorldDispatcher)-> (GamePlayer, GamePlayer){
        let player_one: GamePlayer = get!(world, (self.player_one, self.game_id), (GamePlayer));
        let player_two: GamePlayer = get!(world, (self.player_two, self.game_id), (GamePlayer));
        // the first player in the tupple is the current player
        if (self.current_player == player_one.address){
            (player_one, player_two)
        } else{
            (player_two, player_one)
        }
    }

    // perform validation to ensure that the caller is the current player 
    // also validate that the selected pit is within range
    fn validate_move(self: MancalaGame, player: ContractAddress, selected_pit: u8){
        if player != self.current_player {
            panic!("You are not the current player");
        }
        if selected_pit < 1 || selected_pit > 6 {
            panic!("Invalid pit, choose between 1 and 6");
        }
    }

    // get the seeds in a pit
    fn get_seeds(self: MancalaGame, player: GamePlayer, selected_pit: u8) -> u8{
        
        let mut seeds: u8 = match selected_pit {
            0 => panic!("Invalid pit selected"),
            1 => player.pit1,
            2 => player.pit2,
            3 => player.pit3,
            4 => player.pit4,
            5 => player.pit5,
            6 => player.pit6,
            _ => panic!("Invalid pit selected"),
        };
        seeds
    }

    // clear the seeds in the selected pit
    fn clear_pit(ref self: MancalaGame, ref player: GamePlayer, selected_pit: u8){
        match selected_pit {
            0 => panic!("Invalid pit selected"),
            1 => {player.pit1 = 0;},
            2 => {player.pit2 = 0;},
            3 => {player.pit3 = 0;},
            4 => {player.pit4 = 0;},
            5 => {player.pit5 = 0;},
            6 => {player.pit6 = 0;},
            _ => panic!("Invalid pit selected"),
        };
    }

    // distribute the seeds to the pits in the game
    // additonally logic to check to switch to the opponent player is run
    // then there is a check for a capture
    fn distribute_seeds(ref self: MancalaGame, ref current_player: GamePlayer, ref opponent: GamePlayer, ref seeds: u8, selected_pit: u8){
        // go to next pit
        let mut current_pit = selected_pit + 1;
        let mut last_pit = current_pit;
        while seeds > 0 {
            match current_pit {
                0 => panic!("Invalid pit selected"), 
                1 => {current_player.pit1 += 1;},
                2 => {current_player.pit2 += 1;},
                3 => {current_player.pit3 += 1;},
                4 => {current_player.pit4 += 1;},
                5 => {current_player.pit5 += 1;},
                6 => {current_player.pit6 += 1;},
                7 => {current_player.mancala += 1;},
                8 => {opponent.pit1 += 1;},
                9 => {opponent.pit2 += 1;},
                10 => {opponent.pit3 += 1;},
                11 => {opponent.pit4 += 1;},
                12 => {opponent.pit5 += 1;},
                13 => {opponent.pit6 += 1},
                _ => {current_pit = 1}
            };
            last_pit = current_pit;
            seeds -= 1;
            current_pit += 1;
        };
        self.handle_player_switch(last_pit, opponent);
        self.capture(last_pit, ref current_player, ref opponent);
    }

    // todo make this a private function
    fn handle_player_switch(ref self: MancalaGame, last_pit: u8, opponent: GamePlayer){
        // if the last pit is not the mancala then switch players
        if last_pit != 7 {
            self.current_player = opponent.address;
        }
    }

    // todo make this a private function
    // perform the capture logic
    fn capture(self: MancalaGame, last_pit: u8, ref current_player: GamePlayer, ref opponent: GamePlayer){
        if last_pit >= 1 && last_pit <= 6 {
            let pit_value = match last_pit {
                0 => panic!("Invalid pit selected"),
                1 => current_player.pit1,
                2 => current_player.pit2,
                3 => current_player.pit3,
                4 => current_player.pit4,
                5 => current_player.pit5,
                6 => current_player.pit6,
                _ => panic!("Not a valid pit for capture") 
            };
            if pit_value == 1 {
                let opposite_pit_seeds = match last_pit {
                    0 => panic!("Invalid pit selected"),
                    1 => {
                        let seeds = opponent.pit6;
                        opponent.pit6 = 0;
                        seeds
                    },
                    2 => {
                        let seeds = opponent.pit5;
                        opponent.pit5 = 0;
                        seeds
                    },
                    3 => {
                        let seeds = opponent.pit4;
                        opponent.pit4 = 0;
                        seeds
                    },
                    4 => {
                        let seeds = opponent.pit3;
                        opponent.pit3 = 0;
                        seeds
                    },
                    5 => {
                        let seeds = opponent.pit2;
                        opponent.pit2 = 0;
                        seeds
                    },
                    6 => {
                        let seeds = opponent.pit1;
                        opponent.pit1 = 0;
                        seeds
                    },
                    _ => panic!("Not a valid pit for capture") ,
                };
                // Transfer seeds from the opposite pit to the current player's Mancala
                current_player.mancala += opposite_pit_seeds + 1;
                match last_pit {
                    0 => panic!("Invalid pit selected"),
                    1 => current_player.pit1 = 0,
                    2 => current_player.pit2 = 0,
                    3 => current_player.pit3 = 0,
                    4 => current_player.pit4 = 0,
                    5 => current_player.pit5 = 0,
                    6 => current_player.pit6 = 0,
                    _ => {panic!("not valid");},
                }
            }
        }
    }

    // check to see if either players pits are all empty
    fn is_game_finished(self: MancalaGame, player_one: GamePlayer, player_two: GamePlayer)-> bool{
        player_one.is_finished() || player_two.is_finished()
    }

    // get the mancalas of players
    fn get_score(self: MancalaGame, player_one: GamePlayer, player_two: GamePlayer) -> (u8, u8){
        (player_one.mancala, player_two.mancala)
    }
     // restart game
    fn restart(self: mancalaGame, player_one: Gameplayer, player_two: GamePlayer){
         player_one, player_two;
    }
}