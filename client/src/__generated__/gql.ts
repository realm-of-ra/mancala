/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n        query GameData($gameId: u128!) {\n            game_data: mancalaGameModels(where: { game_id: $gameId }) {\n                edges {\n                    node {\n                        player_one\n                        player_two\n                        current_player\n                        status\n                        winner\n                    }\n                }\n            }\n        }\n    ": types.GameDataDocument,
    "\n        query PlayData(\n            $player_1: ContractAddress!\n            $player_2: ContractAddress!\n            $gameId: u128\n        ) {\n            player_one: gamePlayerModels(\n                where: { game_id: $gameId, address: $player_1 }\n                last: 1\n            ) {\n                edges {\n                    node {\n                        address\n                        game_id\n                        pit1\n                        pit2\n                        pit3\n                        pit4\n                        pit5\n                        pit6\n                        mancala\n                    }\n                }\n            }\n            player_two: gamePlayerModels(\n                where: { game_id: $gameId, address: $player_2 }\n                last: 1\n            ) {\n                edges {\n                    node {\n                        address\n                        game_id\n                        pit1\n                        pit2\n                        pit3\n                        pit4\n                        pit5\n                        pit6\n                        mancala\n                    }\n                }\n            }\n        }\n    ": types.PlayDataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query GameData($gameId: u128!) {\n            game_data: mancalaGameModels(where: { game_id: $gameId }) {\n                edges {\n                    node {\n                        player_one\n                        player_two\n                        current_player\n                        status\n                        winner\n                    }\n                }\n            }\n        }\n    "): (typeof documents)["\n        query GameData($gameId: u128!) {\n            game_data: mancalaGameModels(where: { game_id: $gameId }) {\n                edges {\n                    node {\n                        player_one\n                        player_two\n                        current_player\n                        status\n                        winner\n                    }\n                }\n            }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query PlayData(\n            $player_1: ContractAddress!\n            $player_2: ContractAddress!\n            $gameId: u128\n        ) {\n            player_one: gamePlayerModels(\n                where: { game_id: $gameId, address: $player_1 }\n                last: 1\n            ) {\n                edges {\n                    node {\n                        address\n                        game_id\n                        pit1\n                        pit2\n                        pit3\n                        pit4\n                        pit5\n                        pit6\n                        mancala\n                    }\n                }\n            }\n            player_two: gamePlayerModels(\n                where: { game_id: $gameId, address: $player_2 }\n                last: 1\n            ) {\n                edges {\n                    node {\n                        address\n                        game_id\n                        pit1\n                        pit2\n                        pit3\n                        pit4\n                        pit5\n                        pit6\n                        mancala\n                    }\n                }\n            }\n        }\n    "): (typeof documents)["\n        query PlayData(\n            $player_1: ContractAddress!\n            $player_2: ContractAddress!\n            $gameId: u128\n        ) {\n            player_one: gamePlayerModels(\n                where: { game_id: $gameId, address: $player_1 }\n                last: 1\n            ) {\n                edges {\n                    node {\n                        address\n                        game_id\n                        pit1\n                        pit2\n                        pit3\n                        pit4\n                        pit5\n                        pit6\n                        mancala\n                    }\n                }\n            }\n            player_two: gamePlayerModels(\n                where: { game_id: $gameId, address: $player_2 }\n                last: 1\n            ) {\n                edges {\n                    node {\n                        address\n                        game_id\n                        pit1\n                        pit2\n                        pit3\n                        pit4\n                        pit5\n                        pit6\n                        mancala\n                    }\n                }\n            }\n        }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;