#[cfg(test)]
mod tests {
  use starknet::ContractAddress;
  use dojo::test_utils::{spawn_test_world, deploy_contract};
  use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
  use mancala::systems::actions::{actions, IActionsDispatcher, IActionsDispatcherTrait};
  use mancala::models::player::{Player, PlayerSide};

  fn setup_world() -> (IWorldDispatcher, IActionsDispatcher) {
    let mut models = array![
      player::TEST_CLASS_HASH
    ];

    let world = spawn_test_world(models);
    let contract_address = world.deploy_contract('salt', actions::TEST_CLASS_HASH.try_into().unwrap());
    let actions_system = IActionsDispatcher { contract_address };

    (world, actions_system)
  }

  #[test]
  #[available_gas(3000000000000000)]
  fn test_spawn() {

  }

}
