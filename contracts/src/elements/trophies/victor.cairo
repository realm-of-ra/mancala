use mancala::elements::trophies::interface::{TrophyTrait, BushidoTask, Task, TaskTrait};

pub impl Victor of TrophyTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        'VICTOR'
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
        100
    }

    #[inline]
    fn group() -> felt252 {
        'Dominator'
    }

    #[inline]
    fn icon(level: u8) -> felt252 {
        'fa-trophy'
    }

    #[inline]
    fn title(level: u8) -> felt252 {
        'Victor'
    }

    #[inline]
    fn description(level: u8) -> ByteArray {
        "To reign is not to stand above, but to move forward without faltering."
    }

    #[inline]
    fn count(level: u8) -> u32 {
        100
    }

    #[inline]
    fn tasks(level: u8) -> Span<BushidoTask> {
        let total: u32 = Self::count(level);
        Task::Reigning.tasks(level, total, total)
    }
}
