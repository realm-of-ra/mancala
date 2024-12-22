/* Autogenerated file. Do not edit manually. */

import { defineComponent, Type as RecsType, World } from "@dojoengine/recs";

export type ContractComponents = Awaited<
  ReturnType<typeof defineContractComponents>
>;

export function defineContractComponents(world: typeof World) {
  return {
    GameId: (() => {
      return defineComponent(
        world,
        { id: RecsType.Number, game_id: RecsType.BigInt },
        {
          metadata: {
            name: "mancala_dev-GameId",
            types: ["u32", "u128"],
            customTypes: [],
          },
        },
      );
    })(),
    GamePlayer: (() => {
      return defineComponent(
        world,
        {
          address: RecsType.BigInt,
          game_id: RecsType.BigInt,
          pit1: RecsType.Number,
          pit2: RecsType.Number,
          pit3: RecsType.Number,
          pit4: RecsType.Number,
          pit5: RecsType.Number,
          pit6: RecsType.Number,
          mancala: RecsType.Number,
          restart_requested: RecsType.Boolean,
        },
        {
          metadata: {
            name: "mancala_dev-GamePlayer",
            types: [
              "contractaddress",
              "u128",
              "u8",
              "u8",
              "u8",
              "u8",
              "u8",
              "u8",
              "u8",
              "bool",
            ],
            customTypes: [],
          },
        },
      );
    })(),
    MancalaGame: (() => {
      return defineComponent(
        world,
        {
          game_id: RecsType.BigInt,
          player_one: RecsType.BigInt,
          player_two: RecsType.BigInt,
          current_player: RecsType.BigInt,
          last_move: RecsType.BigInt,
          max_block_between_move: RecsType.BigInt,
          winner: RecsType.BigInt,
          status: RecsType.Number,
          is_private: RecsType.Boolean,
        },
        {
          metadata: {
            name: "mancala_dev-MancalaGame",
            types: [
              "u128",
              "contractaddress",
              "contractaddress",
              "contractaddress",
              "u64",
              "u64",
              "contractaddress",
              "enum",
              "bool",
            ],
            customTypes: ["GameStatus"],
          },
        },
      );
    })(),
  };
}
