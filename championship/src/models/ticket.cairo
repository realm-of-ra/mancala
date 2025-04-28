use starknet::ContractAddress;

#[derive(Serde, Copy, Drop, Introspect)]
enum TicketStatus {
    Pending,
    Active,
    Released,
    Forfeited,
}

#[dojo::model]
#[derive(Copy, Drop, Serde)]
struct PlayerTicket {
    #[key]
    player: ContractAddress,
    #[key]
    championship_id: u32,
    amount: u128, // Amount must match championship entry fee
    token_address: ContractAddress,
    status: TicketStatus,
    ticketd_at: u64,
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
impl PlayerTicketImpl of PlayerTicketTrait {
    fn is_valid(self: PlayerTicket) -> bool {
        self.amount > 0
    }
}
