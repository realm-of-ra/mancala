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

      const transaction = await account.waitForTransaction(transaction_hash, {
        retryInterval: 100,
      });

      const events = getEvents(transaction);

      setGameId(events[0].data[3]);
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

      const waitForTransaction = await account.waitForTransaction(
        transaction_hash,
        {
          retryInterval: 100,
        },
      );

      const events = getEvents(waitForTransaction);

      setGameId(events[0].data[3]);
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
        player_2_address,
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

  const timeout = async (account: AccountInterface, game_id: string) => {
    try {
      const { transaction_hash } = await client.actions.timeout(
        account,
        game_id,
      )

      await account.waitForTransaction(transaction_hash, {
        retryInterval: 100,
      })
    } catch (error) {
      console.error('Error executing timeout:', error)
      throw error
    }
  }

  return {
    create_initial_game_id,
    create_game,
    create_private_game,
    join_game,
    move,
    timeout,
  };
}
