use mancala::elements::boards;

#[derive(Copy, Drop, Serde)]
enum Board {
    None,
    Cartridge,
    RealmsWorld,
    LootSurvivor,
    Eternum,
    RealmOfRa,
    Starknet,
    Brother,
    Sister,
    Ekubo,
    Nostra,
    Avnu,
    OnlyDust,
    Nethermind,
    DeveloperDAO,
    Afropolitan,
    Blobert,
    FocusTree,
    Influence,
    StarknetAfrica,
    StarknetID,
}

#[generate_trait]
impl BoardImpl of BoardTrait {
    fn description(self: Board) -> ByteArray {
        match self {
            Board::None => "",
            Board::Cartridge => boards::cartridge::Cartridge::description(),
            Board::RealmsWorld => boards::realms_world::RealmsWorld::description(),
            Board::LootSurvivor => boards::loot_survivor::LootSurvivor::description(),
            Board::Eternum => boards::eternum::Eternum::description(),
            Board::RealmOfRa => boards::realm_of_ra::RealmOfRa::description(),
            Board::Starknet => boards::starknet::Starknet::description(),
            Board::Brother => boards::brother::Brother::description(),
            Board::Sister => boards::sister::Sister::description(),
            Board::Ekubo => boards::ekubo::Ekubo::description(),
            Board::Nostra => boards::nostra::Nostra::description(),
            Board::Avnu => boards::avnu::Avnu::description(),
            Board::OnlyDust => boards::onlydust::OnlyDust::description(),
            Board::Nethermind => boards::nethermind::Nethermind::description(),
            Board::DeveloperDAO => boards::developer_dao::DeveloperDAO::description(),
            Board::Afropolitan => boards::afropolitan::Afropolitan::description(),
            Board::Blobert => boards::blobert::Blobert::description(),
            Board::FocusTree => boards::focus_tree::FocusTree::description(),
            Board::Influence => boards::influence::Influence::description(),
            Board::StarknetAfrica => boards::starknet_africa::StarknetAfrica::description(),
            Board::StarknetID => boards::starknet_id::StarknetID::description(),
        }
    }

    fn address(self: Board, address: felt252) -> felt252 {
        match self {
            Board::None => 0,
            Board::Cartridge => boards::cartridge::Cartridge::address(address),
            Board::RealmsWorld => boards::realms_world::RealmsWorld::address(address),
            Board::LootSurvivor => boards::loot_survivor::LootSurvivor::address(address),
            Board::Eternum => boards::eternum::Eternum::address(address),
            Board::RealmOfRa => boards::realm_of_ra::RealmOfRa::address(address),
            Board::Starknet => boards::starknet::Starknet::address(address),
            Board::Brother => boards::brother::Brother::address(address),
            Board::Sister => boards::sister::Sister::address(address),
            Board::Ekubo => boards::ekubo::Ekubo::address(address),
            Board::Nostra => boards::nostra::Nostra::address(address),
            Board::Avnu => boards::avnu::Avnu::address(address),
            Board::OnlyDust => boards::onlydust::OnlyDust::address(address),
            Board::Nethermind => boards::nethermind::Nethermind::address(address),
            Board::DeveloperDAO => boards::developer_dao::DeveloperDAO::address(address),
            Board::Afropolitan => boards::afropolitan::Afropolitan::address(address),
            Board::Blobert => boards::blobert::Blobert::address(address),
            Board::FocusTree => boards::focus_tree::FocusTree::address(address),
            Board::Influence => boards::influence::Influence::address(address),
            Board::StarknetAfrica => boards::starknet_africa::StarknetAfrica::address(address),
            Board::StarknetID => boards::starknet_id::StarknetID::address(address),
        }
    }

    fn group(self: Board) -> felt252 {
        match self {
            Board::None => 0,
            Board::Cartridge => boards::cartridge::Cartridge::group(),
            Board::RealmsWorld => boards::realms_world::RealmsWorld::group(),
            Board::LootSurvivor => boards::loot_survivor::LootSurvivor::group(),
            Board::Eternum => boards::eternum::Eternum::group(),
            Board::RealmOfRa => boards::realm_of_ra::RealmOfRa::group(),
            Board::Starknet => boards::starknet::Starknet::group(),
            Board::Brother => boards::brother::Brother::group(),
            Board::Sister => boards::sister::Sister::group(),
            Board::Ekubo => boards::ekubo::Ekubo::group(),
            Board::Nostra => boards::nostra::Nostra::group(),
            Board::Avnu => boards::avnu::Avnu::group(),
            Board::OnlyDust => boards::onlydust::OnlyDust::group(),
            Board::Nethermind => boards::nethermind::Nethermind::group(),
            Board::DeveloperDAO => boards::developer_dao::DeveloperDAO::group(),
            Board::Afropolitan => boards::afropolitan::Afropolitan::group(),
            Board::Blobert => boards::blobert::Blobert::group(),
            Board::FocusTree => boards::focus_tree::FocusTree::group(),
            Board::Influence => boards::influence::Influence::group(),
            Board::StarknetAfrica => boards::starknet_africa::StarknetAfrica::group(),
            Board::StarknetID => boards::starknet_id::StarknetID::group(),
        }
    }
}

impl IntoBoardU8 of core::Into<Board, u8> {
    #[inline(always)]
    fn into(self: Board) -> u8 {
        match self {
            Board::None => 0,
            Board::Cartridge => 1,
            Board::RealmsWorld => 2,
            Board::LootSurvivor => 3,
            Board::Eternum => 4,
            Board::RealmOfRa => 5,
            Board::Starknet => 6,
            Board::Brother => 7,
            Board::Sister => 8,
            Board::Ekubo => 9,
            Board::Nostra => 10,
            Board::Avnu => 11,
            Board::OnlyDust => 12,
            Board::Nethermind => 13,
            Board::DeveloperDAO => 14,
            Board::Afropolitan => 15,
            Board::Blobert => 16,
            Board::FocusTree => 17,
            Board::Influence => 18,
            Board::StarknetAfrica => 19,
            Board::StarknetID => 20,
        }
    }
}

impl IntoU8Board of core::Into<u8, Board> {
    #[inline(always)]
    fn into(self: u8) -> Board {
        match self {
            0 => Board::None,
            1 => Board::Cartridge,
            2 => Board::RealmsWorld,
            3 => Board::LootSurvivor,
            4 => Board::Eternum,
            5 => Board::RealmOfRa,
            6 => Board::Starknet,
            7 => Board::Brother,
            8 => Board::Sister,
            9 => Board::Ekubo,
            10 => Board::Nostra,
            11 => Board::Avnu,
            12 => Board::OnlyDust,
            13 => Board::Nethermind,
            14 => Board::DeveloperDAO,
            15 => Board::Afropolitan,
            16 => Board::Blobert,
            17 => Board::FocusTree,
            18 => Board::Influence,
            19 => Board::StarknetAfrica,
            20 => Board::StarknetID,
            _ => Board::None,
        }
    }
}
