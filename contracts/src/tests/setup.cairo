mod setup {
    use dojo::utils::test::{spawn_test_world, deploy_contract};

    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

    use mancala::systems::actions::{actions, IActionsDispatcher, IActionsDispatcherTrait};
    use mancala::models::index::{mancala_board, player, game_counter, pit, seed};

    use starknet::ContractAddress;
    use starknet::testing::set_contract_address;

    pub fn OWNER() -> ContractAddress {
        starknet::contract_address_const::<0x0>()
    }

    #[starknet::interface]
    trait IDojoInit<ContractState> {
        fn dojo_init(self: @ContractState);
    }

    #[derive(Drop)]
    struct Systems {
        actions: IActionsDispatcher,
    }

    fn spawn_game() -> (IWorldDispatcher, Systems) {
        let mut models = array![
            mancala_board::TEST_CLASS_HASH,
            player::TEST_CLASS_HASH,
            game_counter::TEST_CLASS_HASH,
            pit::TEST_CLASS_HASH,
            seed::TEST_CLASS_HASH,

        ];
        let world = spawn_test_world(array!["mancala"].span(), models.span());
        let systems = Systems {
            actions: IActionsDispatcher {
                contract_address: world
                    .deploy_contract('actions', actions::TEST_CLASS_HASH.try_into().unwrap(),)
            }
        };

        world.grant_writer(dojo::utils::bytearray_hash(@"mancala"), systems.actions.contract_address);

        set_contract_address(OWNER());
        (world, systems)
    }
}
