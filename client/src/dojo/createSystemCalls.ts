import { AccountInterface } from "starknet";
import { getEvents, setComponentsFromEvents } from "@dojoengine/utils";
import { ContractComponents } from "./generated/contractComponents";
import type { IWorld } from "./generated/generated";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { client }: { client: IWorld },
  contractComponents: ContractComponents,
) {
  const create_initial_game_id = async (account: AccountInterface) => {
    try {
      const { transaction_hash } =
        await client.actions.create_initial_game_id(account);

      setComponentsFromEvents(
        contractComponents,
        getEvents(
          await account.waitForTransaction(transaction_hash, {
            retryInterval: 100,
          }),
        ),
      );
    } catch (e) {
      console.log(e);
    }
  };

  const create_game = async (account: AccountInterface, setGameId: any) => {
    try {
      const { transaction_hash } = await client.actions.create_game(account);
      getEvents(
        await account.waitForTransaction(transaction_hash, {
          retryInterval: 100,
        }),
      );
      const transaction: any =
        await account.getTransactionReceipt(transaction_hash);
      setGameId(transaction.events[1].data[1]);
      return transaction.events[1].data[1];
    } catch (e) {
      console.log(e);
    }
  };

  const create_private_game = async (
    account: AccountInterface,
    player_2: string,
    setGameId: any,
  ) => {
    try {
      const { transaction_hash } = await client.actions.create_private_game(
        account,
        player_2,
      );
      getEvents(
        await account.waitForTransaction(transaction_hash, {
          retryInterval: 100,
        }),
      );
      const transaction: any = await account.getTransactionReceipt(transaction_hash);
      setGameId(transaction?.events[0]?.data[1]);
      return transaction?.events[0]?.data[1];
    } catch (e) {
      console.log(e);
    }
  };

  const join_game = async (
    account: AccountInterface,
    game_id: string,
    player_2_address: string,
    setJoinStatus: any,
    index: number,
  ) => {
    try {
      const { transaction_hash } = await client.actions.join_game(
        account,
        game_id,
      );

      const receipt = await account.waitForTransaction(transaction_hash, {
        retryInterval: 100,
      });

      if (receipt.statusReceipt == "success") {
        setJoinStatus({
          status: "SUCCESS",
          index: index,
        });
      } else {
        setJoinStatus({
          status: "ERROR",
          index: index,
        });
      }
    } catch (e) {
      console.log(e);
      setJoinStatus({
        status: "ERROR",
        index: index,
      });
    }
  };

  const move = async (
    account: AccountInterface,
    game_id: string,
    selected_pit: number,
  ) => {
    try {
      const { transaction_hash } = await client.actions.move(
        account,
        game_id,
        selected_pit,
      );

      await account.waitForTransaction(transaction_hash, {
        retryInterval: 100,
      });
    } catch (error) {
      console.error("Error executing move:", error);
      throw error;
    }
  };

  const restart_game = async (
    account: AccountInterface,
    game_id: string,
    setRestarted: any,
    approver: boolean,
  ) => {
    try {
      const { transaction_hash } = await client.actions.restart_game(
        account,
        game_id,
        approver,
      );
      await account.waitForTransaction(transaction_hash, {
        retryInterval: 100,
      });
      setRestarted(true);
    } catch (error) {
      console.error("Error executing restart_game:", error);
      throw error;
    }
  };

  const end_game = async (account: AccountInterface, game_id: string) => {
    try {
      const { transaction_hash } = await client.actions.end_game(
        account,
        game_id,
      );
      await account.waitForTransaction(transaction_hash, {
        retryInterval: 100,
      });
    } catch (error) {
      console.error("Error executing end_game:", error);
      throw error;
    }
  };

  const timeout = async (
    account: AccountInterface,
    game_id: string,
    opposition_address: string,
    setHasTimeout: any,
  ) => {
    try {
      const { transaction_hash } = await client.actions.timeout(
        account,
        game_id,
        opposition_address,
      );
      await account.waitForTransaction(transaction_hash, {
        retryInterval: 100,
      });
      setHasTimeout(true);
    } catch (error) {
      console.error("Error executing timeout:", error);
      throw error;
    }
  };

  const create_player_profile = async (
    account: AccountInterface,
    name: string,
    setLoading: any,
  ) => {
    try {
      setLoading({ status: "CREATING", finished: false });
      const { transaction_hash } = await client.actions.create_player_profile(
        account,
        name,
      );
      await account.waitForTransaction(transaction_hash, {
        retryInterval: 100,
      });
      setLoading({ status: "CREATED", finished: true });
    } catch (error) {
      setLoading({ status: "ERROR", finished: true });
      console.error("Error executing timeout:", error);
      throw error;
    }
  };

  const update_player_profile = async (
    account: AccountInterface,
    name: string,
    new_uri: string,
    setLoading: any,
  ) => {
    try {
      setLoading({ status: "UPDATING", finished: false });
      const { transaction_hash } = await client.actions.update_player_profile(
        account,
        name,
        new_uri,
      );
      await account.waitForTransaction(transaction_hash, {
        retryInterval: 100,
      });
      setLoading({ status: "UPDATED", finished: true });
    } catch (error) {
      setLoading({ status: "ERROR", finished: true });
      console.error("Error executing update player profile:", error);
      throw error;
    }
  };

  return {
    create_initial_game_id,
    create_game,
    create_private_game,
    join_game,
    move,
    restart_game,
    end_game,
    timeout,
    create_player_profile,
    update_player_profile,
  };
}
