import { AccountInterface } from "starknet";
import { Entity, getComponentValue } from "@dojoengine/recs";
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import {
  getEntityIdFromKeys,
  getEvents,
  setComponentsFromEvents,
} from "@dojoengine/utils";
import { ContractComponents } from "./generated/contractComponents";
import type { IWorld } from "./generated/generated";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { client }: { client: IWorld },
  contractComponents: ContractComponents,
  { Game, GameTurn, GameId, MancalaGame, Moves, GamePlayer, Player, Seed }: ClientComponents,
) {
  const create_initial_game = async (account: AccountInterface) => {
    const entityId = getEntityIdFromKeys([BigInt(account.address)]) as Entity;

    const movesId = uuid();

    try {
      const { transaction_hash } = await client.actions.spawn({
        account,
      });

      console.log(
        await account.waitForTransaction(transaction_hash, {
          retryInterval: 100,
        }),
      );

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
      Moves.removeOverride(movesId);
    } finally {
      Moves.removeOverride(movesId);
    }
  };

  return {
		create_initial_game,
	};
}
