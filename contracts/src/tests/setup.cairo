pub mod setup {
    //use core::debug::PrintTrait;

    use dojo::model::{ModelStorage, ModelValueStorage, ModelStorageTest};
    use dojo::world::{WorldStorage, WorldStorageTrait};
    use dojo_cairo_test::{
        spawn_test_world, NamespaceDef, ContractDef, TestResource, ContractDefTrait,
        WorldStorageTestTrait,
    };

    use mancala::constants::NAMESPACE;
    use mancala::systems::mancala::{
        Mancala, IMancalaSystemDispatcher, IMancalaSystemDispatcherTrait,
    };
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
    pub struct Systems {
        pub Mancala: IMancalaSystemDispatcher,
    }

    #[inline]
    fn setup_namespace() -> NamespaceDef {
        NamespaceDef {
            namespace: NAMESPACE(),
            resources: [
                TestResource::Model(models::m_GameCounter::TEST_CLASS_HASH),
                TestResource::Model(models::m_MancalaBoard::TEST_CLASS_HASH),
                TestResource::Model(models::m_Pit::TEST_CLASS_HASH),
                TestResource::Model(models::m_Player::TEST_CLASS_HASH),
                TestResource::Model(models::m_Seed::TEST_CLASS_HASH),
                TestResource::Event(events::e_PlayerMove::TEST_CLASS_HASH),
                TestResource::Event(events::e_PlayerExtraTurn::TEST_CLASS_HASH),
                TestResource::Event(events::e_EndTurn::TEST_CLASS_HASH),
                TestResource::Event(events::e_Capture::TEST_CLASS_HASH),
                TestResource::Event(achievement::events::index::e_TrophyCreation::TEST_CLASS_HASH),
                TestResource::Event(
                    achievement::events::index::e_TrophyProgression::TEST_CLASS_HASH,
                ),
                TestResource::Contract(Mancala::TEST_CLASS_HASH),
            ]
                .span(),
        }
    }

    fn setup_contracts() -> Span<ContractDef> {
        [
            ContractDefTrait::new(@NAMESPACE(), @"Mancala")
                .with_writer_of([dojo::utils::bytearray_hash(@NAMESPACE())].span()),
        ]
            .span()
    }

    pub fn spawn_game() -> (WorldStorage, Systems) {
        // [Setup] World
        set_contract_address(OWNER());
        let namespace_def = setup_namespace();
        let world = spawn_test_world([namespace_def].span());
        world.sync_perms_and_inits(setup_contracts());
        // [Setup] Systems
        let (mancala_address, _) = world.dns(@"Mancala").unwrap();
        let systems = Systems {
            Mancala: IMancalaSystemDispatcher { contract_address: mancala_address },
        };

        (world, systems)
    }
}
