use mancala::elements::trophies::interface::{TrophyTrait, BushidoTask, Task, TaskTrait};

impl Extractor of TrophyTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        'EXTRACTOR'
    }

    #[inline]
    fn hidden(level: u8) -> bool {
        false
    }

    #[inline]
    fn index(level: u8) -> u8 {
        level
    }

    #[inline]
    fn points(level: u8) -> u16 {
        50
    }

    #[inline]
    fn group() -> felt252 {
        'Clearing'
    }

    #[inline]
    fn icon(level: u8) -> felt252 {
        'fa-fork-knife'
    }

    #[inline]
    fn title(level: u8) -> felt252 {
        'Clearing'
    }

    #[inline]
    fn description(level: u8) -> ByteArray {
        "In emptiness lies opportunity; in clearing paths, wisdom flows"
    }

    #[inline]
    fn count(level: u8) -> u32 {
        100
    }

    #[inline]
    fn tasks(level: u8) -> Span<BushidoTask> {
        let total: u32 = Self::count(level);
        Task::Clearing.tasks(level, total, total)
    }
}
