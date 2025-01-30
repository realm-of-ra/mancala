use dojo::model::ModelStorage;
use dojo::world::WorldStorage;
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use starknet::{ContractAddress};

use mancala::constants::{PRIZES};
use mancala::models::leaderboard::{Leaderboard, LeaderboardTrait};
use mancala::models::player::Player;
use mancala::store::{Store, StoreTrait};

#[generate_trait]
impl LeaderboardUtilsImpl of LeaderboardUtilsTrait {
    fn score_game(ref world: WorldStorage, player: Player) {
        let mut store: Store = StoreTrait::new(world);

        let mut i = PRIZES;

        while i >= 0 {
            // Incorrect logic, player.xp has to be associated w/ individual mancala game
            let leaderboard: Leaderboard = store.get_leaderboard(player.season_id, i);

            if leaderboard.score > player.xp || i == 0 {
                Self::update_leaderboard(ref world, player, i + 1);
                break;
            }

            i -= 1;
        };
    }

    fn update_leaderboard(ref world: WorldStorage, player: Player, rank: u8) {
        let mut store: Store = StoreTrait::new(world);
        if rank > PRIZES {
            return;
        }

        let mut i = rank;
        let mut previous_position: Leaderboard = store.get_leaderboard(player.season_id, i);

        // Incorrect logic, player.xp has to be associated w/  individual mancala game
        let mut leaderboard: Leaderboard = LeaderboardTrait::new(
            player.season_id, rank, player.game_id, score: player.xp,
        );
        store.set_leaderboard(leaderboard);

        while true {
            i += 1;

            if i > PRIZES || previous_position.score == 0 {
                break;
            }

            let mut next_position: Leaderboard = store.get_leaderboard(player.season_id, i);

            previous_position.rank = i;
            store.set_leaderboard(previous_position);

            previous_position = next_position;
        };
    }
}
