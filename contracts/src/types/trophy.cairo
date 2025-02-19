use achievement::types::task::{Task as ArcadeTask};
use mancala::elements::trophies;

// Constants

pub const TROPHY_COUNT: u8 = 9;

// Types

#[derive(Copy, Drop)]
pub enum Trophy {
    None,
    CollectorI,
    CollectorII,
    CollectorIII,
    StrategistI,
    StrategistII,
    StrategistIII,
    Dominator,
    EmptyPocket,
    Undefeated,
}

#[generate_trait]
pub impl TrophyImpl of TrophyTrait {
    #[inline]
    fn level(self: Trophy) -> u8 {
        match self {
            Trophy::None => 0,
            Trophy::CollectorI => 0,
            Trophy::CollectorII => 1,
            Trophy::CollectorIII => 2,
            Trophy::StrategistI => 0,
            Trophy::StrategistII => 1,
            Trophy::StrategistIII => 2,
            Trophy::Dominator => 0,
            Trophy::EmptyPocket => 0,
            Trophy::Undefeated => 0,
        }
    }

    #[inline]
    fn identifier(self: Trophy) -> felt252 {
        let level = self.level();
        match self {
            Trophy::None => 0,
            Trophy::CollectorI => trophies::collector::Collector::identifier(level),
            Trophy::CollectorII => trophies::collector::Collector::identifier(level),
            Trophy::CollectorIII => trophies::collector::Collector::identifier(level),
            Trophy::StrategistI => trophies::strategist::Strategist::identifier(level),
            Trophy::StrategistII => trophies::strategist::Strategist::identifier(level),
            Trophy::StrategistIII => trophies::strategist::Strategist::identifier(level),
            Trophy::Dominator => trophies::dominator::Dominator::identifier(level),
            Trophy::EmptyPocket => trophies::extractor::Extractor::identifier(level),
            Trophy::Undefeated => trophies::victor::Victor::identifier(level),
        }
    }

    #[inline]
    fn hidden(self: Trophy) -> bool {
        let level = self.level();
        match self {
            Trophy::None => true,
            Trophy::CollectorI => trophies::collector::Collector::hidden(level),
            Trophy::CollectorII => trophies::collector::Collector::hidden(level),
            Trophy::CollectorIII => trophies::collector::Collector::hidden(level),
            Trophy::StrategistI => trophies::strategist::Strategist::hidden(level),
            Trophy::StrategistII => trophies::strategist::Strategist::hidden(level),
            Trophy::StrategistIII => trophies::strategist::Strategist::hidden(level),
            Trophy::Dominator => trophies::dominator::Dominator::hidden(level),
            Trophy::EmptyPocket => trophies::extractor::Extractor::hidden(level),
            Trophy::Undefeated => trophies::victor::Victor::hidden(level),
        }
    }

    #[inline]
    fn index(self: Trophy) -> u8 {
        let level = self.level();
        match self {
            Trophy::None => 0,
            Trophy::CollectorI => trophies::collector::Collector::index(level),
            Trophy::CollectorII => trophies::collector::Collector::index(level),
            Trophy::CollectorIII => trophies::collector::Collector::index(level),
            Trophy::StrategistI => trophies::strategist::Strategist::index(level),
            Trophy::StrategistII => trophies::strategist::Strategist::index(level),
            Trophy::StrategistIII => trophies::strategist::Strategist::index(level),
            Trophy::Dominator => trophies::dominator::Dominator::index(level),
            Trophy::EmptyPocket => trophies::extractor::Extractor::index(level),
            Trophy::Undefeated => trophies::victor::Victor::index(level),
        }
    }

    #[inline]
    fn points(self: Trophy) -> u16 {
        let level = self.level();
        match self {
            Trophy::None => 0,
            Trophy::CollectorI => trophies::collector::Collector::points(level),
            Trophy::CollectorII => trophies::collector::Collector::points(level),
            Trophy::CollectorIII => trophies::collector::Collector::points(level),
            Trophy::StrategistI => trophies::strategist::Strategist::points(level),
            Trophy::StrategistII => trophies::strategist::Strategist::points(level),
            Trophy::StrategistIII => trophies::strategist::Strategist::points(level),
            Trophy::Dominator => trophies::dominator::Dominator::points(level),
            Trophy::EmptyPocket => trophies::extractor::Extractor::points(level),
            Trophy::Undefeated => trophies::victor::Victor::points(level),
        }
    }

    #[inline]
    fn start(self: Trophy) -> u64 {
        // TODO: Update start time if you want to create ephemeral trophies
        0
    }

    #[inline]
    fn end(self: Trophy) -> u64 {
        // TODO: Update end time if you want to create ephemeral trophies
        // Note: End time must be greater than start time
        0
    }

    #[inline]
    fn group(self: Trophy) -> felt252 {
        match self {
            Trophy::None => 0,
            Trophy::CollectorI => trophies::collector::Collector::group(),
            Trophy::CollectorII => trophies::collector::Collector::group(),
            Trophy::CollectorIII => trophies::collector::Collector::group(),
            Trophy::StrategistI => trophies::strategist::Strategist::group(),
            Trophy::StrategistII => trophies::strategist::Strategist::group(),
            Trophy::StrategistIII => trophies::strategist::Strategist::group(),
            Trophy::Dominator => trophies::dominator::Dominator::group(),
            Trophy::EmptyPocket => trophies::extractor::Extractor::group(),
            Trophy::Undefeated => trophies::victor::Victor::group(),
        }
    }

    #[inline]
    fn icon(self: Trophy) -> felt252 {
        let level = self.level();
        match self {
            Trophy::None => 0,
            Trophy::CollectorI => trophies::collector::Collector::icon(level),
            Trophy::CollectorII => trophies::collector::Collector::icon(level),
            Trophy::CollectorIII => trophies::collector::Collector::icon(level),
            Trophy::StrategistI => trophies::strategist::Strategist::icon(level),
            Trophy::StrategistII => trophies::strategist::Strategist::icon(level),
            Trophy::StrategistIII => trophies::strategist::Strategist::icon(level),
            Trophy::Dominator => trophies::dominator::Dominator::icon(level),
            Trophy::EmptyPocket => trophies::extractor::Extractor::icon(level),
            Trophy::Undefeated => trophies::victor::Victor::icon(level),
        }
    }

    #[inline]
    fn title(self: Trophy) -> felt252 {
        let level = self.level();
        match self {
            Trophy::None => 0,
            Trophy::CollectorI => trophies::collector::Collector::title(level),
            Trophy::CollectorII => trophies::collector::Collector::title(level),
            Trophy::CollectorIII => trophies::collector::Collector::title(level),
            Trophy::StrategistI => trophies::strategist::Strategist::title(level),
            Trophy::StrategistII => trophies::strategist::Strategist::title(level),
            Trophy::StrategistIII => trophies::strategist::Strategist::title(level),
            Trophy::Dominator => trophies::dominator::Dominator::title(level),
            Trophy::EmptyPocket => trophies::extractor::Extractor::title(level),
            Trophy::Undefeated => trophies::victor::Victor::title(level),
        }
    }

    #[inline]
    fn description(self: Trophy) -> ByteArray {
        let level = self.level();
        match self {
            Trophy::None => "",
            Trophy::CollectorI => trophies::collector::Collector::description(level),
            Trophy::CollectorII => trophies::collector::Collector::description(level),
            Trophy::CollectorIII => trophies::collector::Collector::description(level),
            Trophy::StrategistI => trophies::strategist::Strategist::description(level),
            Trophy::StrategistII => trophies::strategist::Strategist::description(level),
            Trophy::StrategistIII => trophies::strategist::Strategist::description(level),
            Trophy::Dominator => trophies::dominator::Dominator::description(level),
            Trophy::EmptyPocket => trophies::extractor::Extractor::description(level),
            Trophy::Undefeated => trophies::victor::Victor::description(level),
        }
    }

    #[inline]
    fn count(self: Trophy, level: u8) -> u32 {
        match self {
            Trophy::None => 0,
            Trophy::CollectorI => trophies::collector::Collector::count(level),
            Trophy::CollectorII => trophies::collector::Collector::count(level),
            Trophy::CollectorIII => trophies::collector::Collector::count(level),
            Trophy::StrategistI => trophies::strategist::Strategist::count(level),
            Trophy::StrategistII => trophies::strategist::Strategist::count(level),
            Trophy::StrategistIII => trophies::strategist::Strategist::count(level),
            Trophy::Dominator => trophies::dominator::Dominator::count(level),
            Trophy::EmptyPocket => trophies::extractor::Extractor::count(level),
            Trophy::Undefeated => trophies::victor::Victor::count(level),
        }
    }

    #[inline]
    fn tasks(self: Trophy) -> Span<ArcadeTask> {
        let level = self.level();
        match self {
            Trophy::None => [].span(),
            Trophy::CollectorI => trophies::collector::Collector::tasks(level),
            Trophy::CollectorII => trophies::collector::Collector::tasks(level),
            Trophy::CollectorIII => trophies::collector::Collector::tasks(level),
            Trophy::StrategistI => trophies::strategist::Strategist::tasks(level),
            Trophy::StrategistII => trophies::strategist::Strategist::tasks(level),
            Trophy::StrategistIII => trophies::strategist::Strategist::tasks(level),
            Trophy::Dominator => trophies::dominator::Dominator::tasks(level),
            Trophy::EmptyPocket => trophies::extractor::Extractor::tasks(level),
            Trophy::Undefeated => trophies::victor::Victor::tasks(level),
        }
    }

    #[inline]
    fn data(self: Trophy) -> ByteArray {
        ""
    }
}

impl IntoTrophyU8 of core::traits::Into<Trophy, u8> {
    #[inline]
    fn into(self: Trophy) -> u8 {
        match self {
            Trophy::None => 0,
            Trophy::CollectorI => 1,
            Trophy::CollectorII => 2,
            Trophy::CollectorIII => 3,
            Trophy::StrategistI => 4,
            Trophy::StrategistII => 5,
            Trophy::StrategistIII => 6,
            Trophy::Dominator => 7,
            Trophy::EmptyPocket => 8,
            Trophy::Undefeated => 9,
        }
    }
}

impl IntoU8Trophy of core::traits::Into<u8, Trophy> {
    #[inline]
    fn into(self: u8) -> Trophy {
        let card: felt252 = self.into();
        match card {
            0 => Trophy::None,
            1 => Trophy::CollectorI,
            2 => Trophy::CollectorII,
            3 => Trophy::CollectorIII,
            4 => Trophy::StrategistI,
            5 => Trophy::StrategistII,
            6 => Trophy::StrategistIII,
            7 => Trophy::Dominator,
            8 => Trophy::EmptyPocket,
            9 => Trophy::Undefeated,
            _ => Trophy::None,
        }
    }
}
//impl TrophyPrint of core::debug::PrintTrait<Trophy> {
//    #[inline]
//    fn print(self: Trophy) {
//        self.identifier().print();
//    }
//}


