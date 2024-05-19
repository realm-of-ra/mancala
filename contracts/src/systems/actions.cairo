use starknet::ContractAddress;

#[dojo::interface]
trait IActions {
    fn spawn(player_one: ContractAddress, player_two: ContractAddress) -> u32;
    fn play_turn(game_id: u32, player: ContractAddress, pit: u8);
    fn capture(game_id: u32, player: ContractAddress, pit: u8);
}

#[dojo::contract]
mod actions {
    use mancala::models::game::{Game, GameTurn, GameTurnTrait};
    use mancala::models::player::{Player, PlayerSide};
    use mancala::models::seed::Seed;
    use super::{ContractAddress, IActions};

    #[abi(embed_v0)]
    impl IActionsImpl of IActions<ContractState> {
        fn spawn(world: IWorldDispatcher, player_one: ContractAddress, player_two: ContractAddress) -> u32 {
            let game_id = world.uuid();

            set!(
              world,
              (
                Player {
                  game_id: game_id,
                  side: PlayerSide::Left,
                  address: player_one,
                  pending_seeds: 26,
                },
                Player {
                  game_id: game_id,
                  side: PlayerSide::Right,
                  address: player_two,
                  pending_seeds: 26,
                },
              )
            );

            game_id
        }

        fn play_turn(game_id: u32, player: ContractAddress, pit: u8){}
        fn capture(game_id: u32, player: ContractAddress, pit: u8){}
    }
}
