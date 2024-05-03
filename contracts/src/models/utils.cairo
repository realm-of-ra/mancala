#[derive(Copy, Drop, Print, Serde, PartialEq)]
enum Winner {
    A,
    B,
    Draw
}

#[derive(Copy, Drop, Print, Serde, PartialEq)]
enum Status {
    Running,
    Finished: Winner
}