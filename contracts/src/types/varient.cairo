#[derive(Copy, Drop, Serde, PartialEq)]
enum Varient {
    Mancala,
    HouseMancala,
}

impl U8IntoVarient of core::Into<u8, Varient> {
    #[inline(always)]
    fn into(self: u8) -> Varient {
        match self {
            0 => Varient::Mancala,
            1 => Varient::HouseMancala,
            _ => Varient::Mancala,
        }
    }
}

impl VarientIntoU8 of core::Into<Varient, u8> {
    #[inline(always)]
    fn into(self: Varient) -> u8 {
        match self {
            Varient::Mancala => 0,
            Varient::HouseMancala => 1,
        }
    }
}
