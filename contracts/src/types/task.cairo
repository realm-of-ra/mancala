// External imports
pub use achievement::types::task::{Task as ArcadeTask, TaskTrait as ArcadeTaskTrait};

// Internal imports
use mancala::elements::tasks;

// Types
#[derive(Copy, Drop)]
pub enum Task {
    None,
    Clearing,
    Collecting,
    Dominating,
    Mastering,
    Reigning,
}

// Implementations
#[generate_trait]
pub impl TaskImpl of TaskTrait {
    #[inline]
    fn identifier(self: Task, level: u8) -> felt252 {
        match self {
            Task::None => 0,
            Task::Clearing => tasks::clearing::Clearing::identifier(level),
            Task::Collecting => tasks::collecting::Collecting::identifier(level),
            Task::Dominating => tasks::dominating::Dominating::identifier(level),
            Task::Mastering => tasks::mastering::Mastering::identifier(level),
            Task::Reigning => tasks::reigning::Reigning::identifier(level),
        }
    }

    #[inline]
    fn description(self: Task, count: u32) -> ByteArray {
        match self {
            Task::None => "",
            Task::Clearing => tasks::clearing::Clearing::description(count),
            Task::Collecting => tasks::collecting::Collecting::description(count),
            Task::Dominating => tasks::dominating::Dominating::description(count),
            Task::Mastering => tasks::mastering::Mastering::description(count),
            Task::Reigning => tasks::reigning::Reigning::description(count),
        }
    }

    #[inline]
    fn tasks(self: Task, level: u8, count: u32, total: u32) -> Span<ArcadeTask> {
        let task_id: felt252 = self.identifier(level);
        let description: ByteArray = self.description(count);
        array![ArcadeTaskTrait::new(task_id, total, description)].span()
    }
}

pub impl IntoTaskU8 of core::traits::Into<Task, u8> {
    #[inline]
    fn into(self: Task) -> u8 {
        match self {
            Task::None => 0,
            Task::Clearing => 1,
            Task::Collecting => 2,
            Task::Dominating => 3,
            Task::Mastering => 4,
            Task::Reigning => 5,
        }
    }
}

impl IntoU8Task of core::traits::Into<u8, Task> {
    #[inline]
    fn into(self: u8) -> Task {
        let card: felt252 = self.into();
        match card {
            0 => Task::None,
            1 => Task::Clearing,
            2 => Task::Collecting,
            3 => Task::Dominating,
            4 => Task::Mastering,
            5 => Task::Reigning,
            _ => Task::None,
        }
    }
}
