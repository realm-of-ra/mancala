use mancala::elements::tasks::interface::TaskTrait;

pub impl Clearing of TaskTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        'CLEARING'
    }

    #[inline]
    fn description(count: u32) -> ByteArray {
        format!("Collect {} seed", count)
    }
}
