/* Autogenerated file. Do not edit manually. */

import { AccountInterface } from "starknet";
import { DojoProvider } from "@dojoengine/core";
import CONFIG from "@/lib/config";

export const contractName = "Mancala";

export type IWorld = Awaited<ReturnType<typeof setupWorld>>;

export async function setupWorld(provider: DojoProvider) {
  function actions() {
    const create_initial_game_id = async (account: AccountInterface) => {
      try {
        return await provider.execute(
          account,
          {
            contractName,
            entrypoint: "create_initial_game_id",
            calldata: [],
          },
          CONFIG.NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing create_initial_game_id:", error);
        throw error;
      }
    };

    const create_game = async (account: AccountInterface, settings_id: number) => {
      try {
        return await provider.execute(
          account,
          {
            contractName,
            entrypoint: "new_game",
            calldata: [settings_id],
          },
          CONFIG.NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing create_game:", error);
        throw error;
      }
    };

    const create_private_game = async (
      account: AccountInterface,
      player_2: string,
      settings_id: number,
    ) => {
      try {
        return await provider.execute(
          account,
          {
            contractName,
            entrypoint: "create_private_game",
            calldata: [player_2, settings_id],
          },
          CONFIG.NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing create_private_game:", error);
        throw error;
      }
    };

    const join_game = async (account: AccountInterface, game_id: string, settings_id: number) => {
      try {
        return await provider.execute(
          account,
          {
            contractName,
            entrypoint: "join_game",
            calldata: [game_id, settings_id],
          },
          CONFIG.NAMESPACE,
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
            contractName,
            entrypoint: "move",
            calldata: [game_id, selected_pit],
          },
          CONFIG.NAMESPACE,
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
                  contractName,
                  entrypoint: "request_restart_game",
                  calldata: [game_id],
                },
                {
                  contractName,
                  entrypoint: "restart_current_game",
                  calldata: [game_id],
                },
              ]
            : {
                contractName,
                entrypoint: "request_restart_game",
                calldata: [game_id],
              },
            CONFIG.NAMESPACE,
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
            contractName,
            entrypoint: "forfeited",
            calldata: [game_id],
          },
          CONFIG.NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing end_game:", error);
        throw error;
      }
    };

    const timeout = async (
      account: AccountInterface,
      game_id: string,
      opposition_address: string,
    ) => {
      try {
        return await provider.execute(
          account,
          {
            contractName,
            entrypoint: "timeout",
            calldata: [game_id, opposition_address],
          },
          CONFIG.NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing timeout:", error);
        throw error;
      }
    };

    const create_player_profile = async (
      account: AccountInterface,
      name: string,
    ) => {
      try {
        return await provider.execute(
          account,
          {
            contractName: "PlayerProfile",
            entrypoint: "create_player_profile",
            calldata: [name],
          },
          CONFIG.NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing create_player_profile:", error);
        throw error;
      }
    };

    const update_player_profile = async (
      account: AccountInterface,
      name: string,
      new_uri: string,
    ) => {
      try {
        return await provider.execute(
          account,
          {
            contractName: "PlayerProfile",
            entrypoint: "update_player_profile",
            calldata: [name, new_uri],
          },
          CONFIG.NAMESPACE,
        );
      } catch (error) {
        console.error("Error executing update_player_profile:", error);
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
  return {
    actions: actions(),
  };
}
