use mancala::elements::tasks::interface::TaskTrait;

impl Reigning of TaskTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        'REIGNING'
    }

    #[inline]
    fn description(count: u32) -> ByteArray {
        format!("Win a total of {} games", count)
    }
}
