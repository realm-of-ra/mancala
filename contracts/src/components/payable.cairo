//#[starknet::component]
//mod ProfileComponent {
//    use core::debug::PrintTrait;

//    use dojo::world::WorldStorage;
//    use starknet::ContractAddress;
//    use starknet::info::{get_caller_address};

//    use mancala::store::{Store, StoreTrait};

//    mod errors {}

//    #[storage]
//    struct Storage {}

//    #[event]
//    #[derive(Drop, starknet::Event)]
//    enum Event {}

//    #[generate_trait]
//    impl InternalImpl<TState, +HasComponent<TState>> of InternalTrait<TState> {
//        fn new_profile(self: @ComponentState<TState>, world: WorldStorage, name: felt252) {
//            // [Setup] Datastore
//            let mut store: Store = StoreTrait::new(world);

//            let player = get_caller_address();

//            let profile = store.get_profile(player);
//            assert(!profile.is_initialized, errors::PROFILE_EXISTS);

//            let mut player_profile: Profile = ProfileTrait::new(player, name);

//            store.set_profile(player_profile);
//        }
//    }

//    #[generate_trait]
//    impl PrivateImpl<TState, +HasComponent<TState>> of PrivateTrait<TState> {
//        #[inline]
//        fn _mint_season_pass(self: @ComponentState<TState>, world: WorldStorage) {
//            // [Setup] Datastore
//            let mut store: Store = StoreTrait::new(world);

//            let boost = store.get_boost(boost);

//            let dispatcher = ISeasonERC721Dispatcher { contract_address: boost.address };

//            let amount_with_decimals: u256 = 100000000000000000;
//            assert(
//                dispatcher.balance_of(get_caller_address()) >= amount_with_decimals,
//                'Insufficient balance',
//            );
//            dispatcher
//                .transfer_from(get_caller_address(), get_contract_address(),
//                amount_with_decimals);
//            dispatcher.burn(amount_with_decimals);
//        }

//}
