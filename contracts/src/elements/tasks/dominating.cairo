use mancala::elements::tasks::interface::TaskTrait;

pub impl Dominating of TaskTrait {
    #[inline]
    fn identifier(level: u8) -> felt252 {
        'DOMINATING'
    }

    #[inline]
    fn description(count: u32) -> ByteArray {
        format!("Win {} games", count)
    }
}
