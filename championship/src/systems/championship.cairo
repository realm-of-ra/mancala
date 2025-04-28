#[starknet::interface]
trait IChampionship<TState> {
    /// Create a new championship
    fn create_championship(
        ref self: TState,
        metadata: Metadata,
        schedule: Schedule,
        entry_fee: Option<EntryFee>,
        entry_requirement: Option<EntryRequirement>,
    ) -> u32;

    /// Register a player for a championship
    fn register_player(
        ref self: TState,
        championship_id: u32,
        player_address: ContractAddress,
        player_name: felt252,
    ) -> u32; // Returns player_id in championship

    /// Start the championship if requirements are met
    fn start_championship(ref self: TState, championship_id: u32) -> bool;

    /// Create a match between two players
    fn create_match(
        ref self: TState, championship_id: u32, player1_id: u32, player2_id: u32, round: u32,
    ) -> u32; // Returns match_id

    /// Record match result
    fn submit_match_result(
        ref self: TState,
        championship_id: u32,
        match_id: u32,
        winner_id: u32,
        game_state_proof: felt252 // Or whatever proof format you use
    );

    /// Generate next round of matches
    fn generate_next_round(ref self: TState, championship_id: u32);

    /// Complete championship and distribute prizes
    fn complete_championship(ref self: TState, championship_id: u32);

    /// Claim prize for winning a championship
    fn claim_prize(ref self: TState, championship_id: u32, player_id: u32);

    /// Cancel championship and refund entry fees
    fn cancel_championship(ref self: TState, championship_id: u32);

    /// Get championship details
    //fn get_championship(self: @TState, championship_id: u32) -> Championship;

    /// Get all championships
    fn get_all_championships(self: @TState) -> Array<u32>;

    /// Get player's championships
    fn get_player_championships(self: @TState, player_address: ContractAddress) -> Array<u32>;

    /// Get matches in a championship
    fn get_championship_matches(self: @TState, championship_id: u32) -> Array<u32>;

    /// Get match details
    fn get_match(self: @TState, match_id: u32) -> Match;

    /// Get championship players
    fn get_championship_players(self: @TState, championship_id: u32) -> Array<PlayerInfo>;

    /// Get championship bracket
    fn get_championship_bracket(self: @TState, championship_id: u32) -> Array<BracketRound>;

    /// Get player ranking in championship
    fn get_player_ranking(self: @TState, championship_id: u32, player_id: u32) -> u32;

    /// Check if player can join championship
    fn can_player_join(
        self: @TState, championship_id: u32, player_address: ContractAddress,
    ) -> bool;

    /// Get championship status and current phase
    fn get_championship_status(
        self: @TState, championship_id: u32,
    ) -> (ChampionshipStatus, felt252);
}
