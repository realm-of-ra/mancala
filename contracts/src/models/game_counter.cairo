use mancala::models::index::GameCounter;

// Trait implementation for GameCounter
#[generate_trait]
impl GameCounterImpl of GameCounterTrait {
    /// Creates a new GameCounter instance
    /// Returns: A GameCounter with id set to 1 and count set to 0
    #[inline]
    fn new() -> GameCounter {
        GameCounter { id: 1, count: 0 }
    }

    /// Increments the count of the GameCounter
    /// This method modifies the GameCounter in place
    #[inline]
    fn increment(ref self: GameCounter) {
        self.count += 1;
    }

    /// Retrieves the current count of the GameCounter
    /// Returns: The current count as a u128
    #[inline]
    fn get_count(self: @GameCounter) -> u128 {
        *self.count
    }
}
