/* Autogenerated file. Do not edit manually. */

import { AccountInterface } from "starknet";
import { DojoProvider } from "@dojoengine/core";

export const NAMESPACE = "mancala";

export type IWorld = Awaited<ReturnType<typeof setupWorld>>;

export async function setupWorld(provider: DojoProvider) {
  function actions() {
    const create_initial_game_id = async (account: AccountInterface) => {
      try {
        return await provider.execute(
          account,
          {
            contractName: "actions",
            entrypoint: "create_initial_game_id",
            calldata: [],
          },
          NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing create_initial_game_id:", error);
        throw error;
      }
    };

    const create_game = async (account: AccountInterface) => {
      try {
        return await provider.execute(
          account,
          {
            contractName: "actions",
            entrypoint: "new_game",
            calldata: [],
          },
          NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing create_game:", error);
        throw error;
      }
    };

    const create_private_game = async (
      account: AccountInterface,
      player_2: string,
    ) => {
      try {
        return await provider.execute(
          account,
          {
            contractName: "actions",
            entrypoint: "create_private_game",
            calldata: [player_2],
          },
          NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing create_private_game:", error);
        throw error;
      }
    };

    const join_game = async (account: AccountInterface, game_id: string) => {
      try {
        return await provider.execute(
          account,
          {
            contractName: "actions",
            entrypoint: "join_game",
            calldata: [game_id],
          },
          NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing join_game:", error);
        throw error;
      }
    };

    const move = async (
      account: AccountInterface,
      game_id: string,
      selected_pit: number,
    ) => {
      try {
        return await provider.execute(
          account,
          {
            contractName: "actions",
            entrypoint: "move",
            calldata: [game_id, selected_pit],
          },
          NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing move:", error);
        throw error;
      }
    };

    const restart_game = async (
      account: AccountInterface,
      game_id: string,
      approver: boolean,
    ) => {
      try {
        return await provider.execute(
          account,
          approver
            ? [
                {
                  contractName: "actions",
                  entrypoint: "request_restart_game",
                  calldata: [game_id],
                },
                {
                  contractName: "actions",
                  entrypoint: "restart_current_game",
                  calldata: [game_id],
                },
              ]
            : {
                contractName: "actions",
                entrypoint: "request_restart_game",
                calldata: [game_id],
              },
          NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing restart_game:", error);
        throw error;
      }
    };

    const end_game = async (account: AccountInterface, game_id: string) => {
      try {
        return await provider.execute(
          account,
          {
            contractName: "actions",
            entrypoint: "forfeited",
            calldata: [game_id],
          },
          NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing end_game:", error);
        throw error;
      }
    };

    const timeout = async (account: AccountInterface, game_id: string) => {
      try {
        return await provider.execute(
          account,
          {
            contractName: "actions",
            entrypoint: "time_out",
            calldata: [game_id],
          },
          NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing spawn:", error);
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
    };
  }
  return {
    actions: actions(),
  };
}
