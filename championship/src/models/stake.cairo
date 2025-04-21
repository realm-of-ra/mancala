use starknet::ContractAddress;
use championship::models::match::{Match, MatchStatus};

#[derive(Serde, Copy, Drop, Introspect)]
enum StakeStatus {
    Pending,
    Active,
    Released,
    Forfeited
}

#[dojo::model]
#[derive(Copy, Drop, Serde)]
struct PlayerStake {
    #[key]
    player: ContractAddress,
    #[key]
    championship_id: u32,
    // Amount must match championship entry fee
    amount: u128,
    token_address: ContractAddress,
    status: StakeStatus,
    staked_at: u64,
    current_match_id: Option<u64>,
    locked_until: u64,
}

#[dojo::model]
#[derive(Copy, Drop, Serde)]
struct PlayerRegistration {
    #[key]
    championship_id: u32,
    #[key]
    player: ContractAddress,
    registered_at: u64,
}

#[generate_trait]
impl PlayerStakeImpl of PlayerStakeTrait {
    fn is_valid(self: PlayerStake) -> bool {
        self.amount > 0
    }

    fn is_locked(self: PlayerStake) -> bool {
        self.status == StakeStatus::LockedInMatch
    }

    fn can_release(self: PlayerStake) -> bool {
        match self.status {
            StakeStatus::Active => true,
            StakeStatus::LockedInMatch => self.locked_until < starknet::get_block_timestamp(),
            _ => false,
        }
    }
}
