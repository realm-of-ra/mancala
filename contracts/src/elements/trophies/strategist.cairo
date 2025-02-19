use mancala::elements::trophies::interface::{TrophyTrait, BushidoTask, Task, TaskTrait};

pub impl Strategist of TrophyTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        match level {
            0 => 'STRATEGIST_I',
            1 => 'STRATEGIST_II',
            2 => 'STRATEGIST_III',
            _ => '',
        }
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
        match level {
            0 => 20,
            1 => 40,
            2 => 80,
            _ => 0,
        }
    }

    #[inline]
    fn group() -> felt252 {
        'Thinker'
    }

    #[inline]
    fn icon(level: u8) -> felt252 {
        match level {
            0 => 'fa-lightbulb-o',
            1 => 'fa-magnet',
            2 => 'fa-university',
            _ => '',
        }
    }

    #[inline]
    fn title(level: u8) -> felt252 {
        match level {
            0 => 'Strategist I',
            1 => 'Strategist II',
            2 => 'Strategist III',
            _ => '',
        }
    }

    #[inline]
    fn description(level: u8) -> ByteArray {
        match level {
            0 => "The moves of the novice are quick; the moves of the master are quiet",
            1 => "Strategy is not the path to victory, it is the path to understanding",
            2 => "When mind and stone become one, the game transcends its boundaries",
            _ => "",
        }
    }

    #[inline]
    fn count(level: u8) -> u32 {
        match level {
            0 => 10,
            1 => 50,
            2 => 100,
            _ => 0,
        }
    }

    #[inline]
    fn tasks(level: u8) -> Span<BushidoTask> {
        let total: u32 = Self::count(level);
        Task::Mastering.tasks(level, total, total)
    }
}
