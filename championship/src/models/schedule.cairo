#[derive(Copy, Drop, Serde, PartialEq, Introspect)]
pub struct Schedule {
    pub registration: Option<Period>,
    pub game: Period,
}

#[derive(Copy, Drop, Serde, PartialEq, Introspect)]
pub struct Period {
    pub start: u64,
    pub end: u64,
}
