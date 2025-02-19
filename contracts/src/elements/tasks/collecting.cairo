use mancala::elements::tasks::interface::TaskTrait;

pub impl Collecting of TaskTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        'COLLECTING'
    }

    #[inline]
    fn description(count: u32) -> ByteArray {
        format!("Collect {} seed in game lifetime history", count)
    }
}
