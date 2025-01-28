mod setup {
    use core::debug::PrintTrait;

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
    use mancala::types::varient::Varient;
    use mancala::systems::profile::{
        PlayerProfile, IPlayerProfileDispatcher, IPlayerProfileDispatcherTrait,
    };
    use mancala::models::{index as models};
    use mancala::events::{index as events};

    use starknet::ContractAddress;
    use starknet::testing::set_contract_address;

    pub fn OWNER() -> ContractAddress {
        starknet::contract_address_const::<0x0>()
    }

    pub fn EXTRA_TURN_BOOST() -> ContractAddress {
        starknet::contract_address_const::<0x0>()
    }

    #[starknet::interface]
    trait IDojoInit<ContractState> {
        fn dojo_init(self: @ContractState);
    }

    #[derive(Drop)]
    struct Systems {
        Mancala: IMancalaSystemDispatcher,
        PlayerProfile: IPlayerProfileDispatcher,
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
                TestResource::Model(models::m_Profile::TEST_CLASS_HASH),
                TestResource::Model(models::m_Seed::TEST_CLASS_HASH),
                TestResource::Model(models::m_Boost::TEST_CLASS_HASH),
                TestResource::Event(events::e_PlayerMove::TEST_CLASS_HASH),
                TestResource::Event(events::e_PlayerExtraTurn::TEST_CLASS_HASH),
                TestResource::Event(events::e_EndTurn::TEST_CLASS_HASH),
                TestResource::Event(events::e_Capture::TEST_CLASS_HASH),
                TestResource::Event(events::e_BoardMinted::TEST_CLASS_HASH),
                TestResource::Event(achievement::events::index::e_TrophyCreation::TEST_CLASS_HASH),
                TestResource::Event(
                    achievement::events::index::e_TrophyProgression::TEST_CLASS_HASH,
                ),
                TestResource::Contract(Mancala::TEST_CLASS_HASH),
                TestResource::Contract(PlayerProfile::TEST_CLASS_HASH),
            ]
                .span(),
        }
    }

    fn setup_contracts(erc20_address: felt252) -> Span<ContractDef> {
        [
            ContractDefTrait::new(@NAMESPACE(), @"Mancala")
                .with_writer_of([dojo::utils::bytearray_hash(@NAMESPACE())].span())
                .with_init_calldata([erc20_address].span()),
            ContractDefTrait::new(@NAMESPACE(), @"PlayerProfile")
                .with_writer_of([dojo::utils::bytearray_hash(@NAMESPACE())].span()),
        ]
            .span()
    }

    fn spawn_game() -> (WorldStorage, Systems) {
        // [Setup] World
        set_contract_address(OWNER());

        let namespace_def = setup_namespace();
        let world = spawn_test_world([namespace_def].span());
        world.sync_perms_and_inits(setup_contracts(EXTRA_TURN_BOOST().into()));
        // [Setup] Systems
        let (mancala_address, _) = world.dns(@"Mancala").unwrap();
        let (player_profile_address, _) = world.dns(@"PlayerProfile").unwrap();
        let systems = Systems {
            Mancala: IMancalaSystemDispatcher { contract_address: mancala_address },
            PlayerProfile: IPlayerProfileDispatcher { contract_address: player_profile_address },
        };

        (world, systems)
    }
}
