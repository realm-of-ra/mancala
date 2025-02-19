use mancala::elements::trophies::interface::{TrophyTrait, BushidoTask, Task, TaskTrait};

pub impl Collector of TrophyTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        match level {
            0 => 'COLLECTOR_I',
            1 => 'COLLECTOR_II',
            2 => 'COLLECTOR_III',
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
            0 => 10,
            1 => 50,
            2 => 100,
            _ => 0,
        }
    }

    #[inline]
    fn group() -> felt252 {
        'Keeper'
    }

    #[inline]
    fn icon(level: u8) -> felt252 {
        match level {
            0 => 'fa-shopping-basket',
            1 => 'fa-truck',
            2 => 'fa-diamond',
            _ => '',
        }
    }

    #[inline]
    fn title(level: u8) -> felt252 {
        match level {
            0 => 'Collector I',
            1 => 'Collector II',
            2 => 'Collector III',
            _ => '',
        }
    }

    #[inline]
    fn description(level: u8) -> ByteArray {
        match level {
            0 => "To collect is to preserve a moment in time, a piece of history",
            1 => "A true keeper guards not just treasures, but the stories they hold",
            2 => "In each stone lies a universe; in every collection, infinity",
            _ => "",
        }
    }

    #[inline]
    fn count(level: u8) -> u32 {
        match level {
            0 => 20,
            1 => 200,
            2 => 2000,
            _ => 0,
        }
    }

    #[inline]
    fn tasks(level: u8) -> Span<BushidoTask> {
        let total: u32 = Self::count(level);
        Task::Collecting.tasks(level, total, total)
    }
}
