use mancala::elements::trophies::interface::{TrophyTrait, BushidoTask, Task, TaskTrait};

pub impl Dominator of TrophyTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        'DOMINATOR'
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
        'Dominator'
    }

    #[inline]
    fn icon(level: u8) -> felt252 {
        'fa-shield'
    }

    #[inline]
    fn title(level: u8) -> felt252 {
        'Dominator'
    }

    #[inline]
    fn description(level: u8) -> ByteArray {
        "True dominance is not measured in wins, but in the inability to lose."
    }

    #[inline]
    fn count(level: u8) -> u32 {
        500
    }

    #[inline]
    fn tasks(level: u8) -> Span<BushidoTask> {
        let total: u32 = Self::count(level);
        Task::Dominating.tasks(level, total, total)
    }
}
