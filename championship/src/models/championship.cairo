use championship::models::schedule::Schedule;
use starknet::ContractAddress;

#[dojo::model]
#[derive(Copy, Drop, Serde)]
pub struct Championship {
    #[key]
    pub id: u32,
    pub created_at: u64,
    pub created_by: ContractAddress,
    pub metadata: Metadata,
    pub schedule: Schedule,
    pub entry_fee: Option<EntryFee>,
    pub entry_requirement: Option<EntryRequirement>,
    pub status: ChampionshipStatus,
    pub stats: ChampionshipStats,
}

#[derive(Copy, Drop, Serde, Introspect)]
pub struct Metadata {
    pub name: felt252,
    pub description: felt252,
    pub max_players: u32,
    pub min_players: u32,
}

#[derive(Copy, Drop, Serde, PartialEq, Introspect)]
pub struct EntryFee {
    pub token_address: ContractAddress,
    pub amount: u128,
    pub game_creator_share: Option<u8>,
}

#[derive(Copy, Drop, Serde, PartialEq, Introspect)]
pub struct EntryRequirement {
    pub min_rank: u32,
    pub max_rank: u32,
}

#[derive(Copy, Drop, Serde, PartialEq, Introspect)]
pub struct ChampionshipStats {
    pub total_matches: u32,
    pub completed_matches: u32,
    pub registered_players: u32,
    pub total_stake_amount: u128,
}

#[derive(Serde, Copy, Drop, Introspect, PartialEq)]
pub enum ChampionshipStatus {
    Registration,
    InProgress,
    Completed,
    Cancelled,
}

#[generate_trait]
impl ChampionshipImpl of ChampionshipTrait {
    fn new(
        id: u32,
        created_by: ContractAddress,
        metadata: Metadata,
        schedule: Schedule,
        entry_fee: Option<EntryFee>,
        entry_requirement: Option<EntryRequirement>,
    ) -> Championship {
        // Get current timestamp for created_at field
        let current_time = starknet::get_block_timestamp();

        // Initialize stats with zero values
        let stats = ChampionshipStats {
            total_matches: 0, completed_matches: 0, registered_players: 0, total_stake_amount: 0,
        };

        Championship {
            id,
            created_at: current_time,
            created_by,
            metadata,
            schedule,
            entry_fee,
            entry_requirement,
            status: ChampionshipStatus::Registration, // New championships start in registration phase
            stats,
        }
    }

    #[inline(always)]
    fn is_registration_open(self: Championship) -> bool {
        match self.status {
            ChampionshipStatus::Registration => {
                let current_time = starknet::get_block_timestamp();
                match self.schedule.registration {
                    Option::Some(period) => current_time >= period.start
                        && current_time <= period.end,
                    Option::None => true,
                }
            },
            // Registration is closed for all other states
            ChampionshipStatus::InProgress => false,
            ChampionshipStatus::Completed => false,
            ChampionshipStatus::Cancelled => false,
        }
    }

    #[inline(always)]
    fn can_start(self: Championship) -> bool {
        // Championship can only start if it's in Registration status
        match self.status {
            ChampionshipStatus::Registration => {
                if self.stats.registered_players < self.metadata.min_players {
                    return false;
                }
                let current_time = starknet::get_block_timestamp();
                current_time >= self.schedule.game.start && current_time <= self.schedule.game.end
            },
            ChampionshipStatus::InProgress => false,
            ChampionshipStatus::Completed => false,
            ChampionshipStatus::Cancelled => false,
        }
    }

    #[inline(always)]
    fn has_minimum_players(self: Championship) -> bool {
        // Check if the number of registered players meets or exceeds the minimum requirement
        self.stats.registered_players >= self.metadata.min_players
    }

    #[inline(always)]
    fn is_full(self: Championship) -> bool {
        self.stats.registered_players >= self.metadata.max_players
    }
}
