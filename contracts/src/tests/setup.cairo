mod setup {
    use core::debug::PrintTrait;

    use dojo::model::{ModelStorage, ModelValueStorage, ModelStorageTest};
    use dojo::world::{WorldStorage, WorldStorageTrait};
    use dojo_cairo_test::{
        spawn_test_world, NamespaceDef, ContractDef, TestResource, ContractDefTrait,
        WorldStorageTestTrait
    };

    use mancala::systems::actions::{actions, IActionsDispatcher, IActionsDispatcherTrait};
    use mancala::models::{index as models};
    use mancala::events::{index as events};

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

    #[inline]
    fn setup_namespace() -> NamespaceDef {
        NamespaceDef {
            namespace: "mancala", resources: [
                TestResource::Model(models::m_GameCounter::TEST_CLASS_HASH),
                TestResource::Model(models::m_MancalaBoard::TEST_CLASS_HASH),
                TestResource::Model(models::m_Pit::TEST_CLASS_HASH),
                TestResource::Model(models::m_Player::TEST_CLASS_HASH),
                TestResource::Model(models::m_Seed::TEST_CLASS_HASH),
                TestResource::Event(events::e_PlayerMove::TEST_CLASS_HASH),
                TestResource::Contract(actions::TEST_CLASS_HASH),
            ].span()
        }
    }

    fn setup_contracts() -> Span<ContractDef> {
        [
            ContractDefTrait::new(@"mancala", @"actions")
                .with_writer_of([dojo::utils::bytearray_hash(@"mancala")].span()),
        ].span()
    }

    fn spawn_game() -> (WorldStorage, Systems) {
        // [Setup] World
        set_contract_address(OWNER());
        let namespace_def = setup_namespace();
        let world = spawn_test_world([namespace_def].span());
        world.sync_perms_and_inits(setup_contracts());
        // [Setup] Systems
        let (actions_address, _) = world.dns(@"actions").unwrap();
        let systems = Systems {
            actions: IActionsDispatcher { contract_address: actions_address },
        };

        (world, systems)
    }
}
