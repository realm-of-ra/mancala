//#[starknet::component]
//mod LeaderboardComponent {
//    use dojo::model::ModelStorage;
//    use dojo::world::WorldStorage;
//    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
//    use starknet::ContractAddress;

//    use mancala::constants::{PRIZES};
//    use mancala::models::leaderboard::Leaderboard;
//    use mancala::models::profile::Profile;
//    use mancala::store::{Store, StoreTrait};

//    #[storage]
//    struct Storage {}

//    #[event]
//    #[derive(Drop, starknet::Event)]
//    enum Event {}

//    #[generate_trait]
//    impl InternalImpl<TState, +HasComponent<TState>> of InternalTrait<TState> {
//        fn score_game(self: @ComponentState<TState>, world: WorldStorage, player: Player) {
//            let mut store: Store = StoreTrait::new(world);

//            let mut i = PRIZES;

//            while i >= 0 {
//                let leaderboard: Leaderboard = store.get_leaderboard(season_id, i);

//                if leaderboard.score > player.xp || i == 0 {
//                    self.update_leaderboard(ref world, player, i + 1);
//                    break;
//                }

//                i -= 1;
//            };
//        }

//        fn update_leaderboard(
//            self: @ComponentState<TState>, world: WorldStorage, player: Player, rank: u8,
//        ) {
//            let mut store: Store = StoreTrait::new(world);

//            if rank > PRIZES {
//                return;
//            }

//            let mut i = rank;
//            let mut previous_position: Leaderboard = store.get_leaderboard(season_id, i);
//            world
//                .write_model(
//                    @Leaderboard {
//                        season_id: player.season_id,
//                        rank,
//                        game_id: player.game_id,
//                        score: player.xp,
//                    },
//                );

//            while true {
//                i += 1;

//                if i > PRIZES || previous_position.score == 0 {
//                    break;
//                }

//                let mut next_position: Leaderboard = world.read_model((player.season_id, i));

//                previous_position.rank = i;
//                world.write_model(@previous_position);

//                previous_position = next_position;
//            };
//        }
//    }
//}
