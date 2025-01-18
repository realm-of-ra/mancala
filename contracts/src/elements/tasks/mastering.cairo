use mancala::elements::tasks::interface::TaskTrait;

impl Mastering of TaskTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        'MASTERING'
    }

    #[inline]
    fn description(count: u32) -> ByteArray {
        format!("Get {} games win streak", count)
    }
}
