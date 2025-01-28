use dojo::model::ModelStorage;
use dojo::world::WorldStorage;
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use starknet::{ContractAddress, contract_address_const};

use mancala::constants::{PRIZES, MAINNET_CHAIN_ID, SEPOLIA_CHAIN_ID};
use mancala::models::leaderboard::Leaderboard;
use mancala::models::profile::Profile;
use mancala::store::{Store, StoreTrait};

#[generate_trait]
impl LeaderboardUtilsImpl of LeaderboardUtilsTrait {
    fn score_game(ref world: WorldStorage, player: Player) {
        let mut store: Store = StoreTrait::new(world);

        let mut i = PRIZES;

        while i >= 0 {
            let leaderboard: Leaderboard = store.get_leaderboard(season_id, i);

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
        let mut previous_position: Leaderboard = store.get_leaderboard(season_id, i);
        world
            .write_model(
                @Leaderboard {
                    season_id: player.season_id, rank, game_id: player.game_id, score: player.xp,
                },
            );

        while true {
            i += 1;

            if i > PRIZES || previous_position.score == 0 {
                break;
            }

            let mut next_position: Leaderboard = world.read_model((player.season_id, i));

            previous_position.rank = i;
            world.write_model(@previous_position);

            previous_position = next_position;
        };
    }

    fn get_prize_percentage(rank: u8) -> u8 {
        if rank == 1 {
            return 35;
        }

        if rank == 2 {
            return 20;
        }

        if rank == 3 {
            return 15;
        }

        if rank == 4 {
            return 10;
        }

        if rank == 5 {
            return 8;
        }

        if rank < 11 {
            return 2;
        }

        0
    }

    fn get_lords_address(chain_id: felt252) -> ContractAddress {
        if chain_id == SEPOLIA_CHAIN_ID {
            contract_address_const::<
                0x019c92fa87f4d5e3be25c3dd6a284f30282a07e87cd782f5fd387b82c8142017,
            >()
        } else if chain_id == MAINNET_CHAIN_ID {
            contract_address_const::<
                0x0124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49,
            >()
        } else {
            panic_with_felt252('Chain not supported')
        }
    }

    fn get_ror_address(chain_id: felt252) -> ContractAddress {
        if chain_id == SEPOLIA_CHAIN_ID {
            contract_address_const::<
                0x07837a565c98505A88338Ceb8245494af97C6caC2d0A23D9B08db5C052d7afA9,
            >()
        } else if chain_id == MAINNET_CHAIN_ID {
            contract_address_const::<
                0x07b2a259363f9984a8073175c38b726c502c05eade7ce4753ca6cecd3ec7f603,
            >()
        } else {
            panic_with_felt252('Chain not supported')
        }
    }
}
