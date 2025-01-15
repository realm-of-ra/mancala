import {
    type Action,
    ActionExample,
    composeContext,
    Content,
    elizaLogger,
    generateObjectDeprecated,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    ModelClass,
    State,
} from "@elizaos/core";
import { getStarknetAccount, getStarknetProvider } from "../utils/index.js";
import { validateStarknetConfig } from "../environment.js";
import { Contract } from "starknet";

export interface JoinGameContent extends Content {
    gameId: string;
}

export function isJoinGameContent(
    content: JoinGameContent
): content is JoinGameContent {
    // Validate gameId is a hex string
    return typeof content.gameId === "string" && content.gameId.startsWith("0x");
}

const joinGameTemplate = `Respond with a JSON markdown block containing only the extracted game ID. Use null if it cannot be determined.

Example response:
\`\`\`json
{
    "gameId": "0x123..."
}
\`\`\`

{{recentMessages}}

Given the recent messages, extract the game ID that the user wants to join.
Respond with a JSON markdown block containing only the extracted game ID.`;

const CONTRACT_ADDRESS = "0x0470f026bf97f0781492a95ebb9031da1c524601e8c2a285534545d33ca44797";

export default {
    name: "JOIN_GAME",
    similes: ["JOIN_MANCALA_GAME", "ENTER_GAME", "JOIN"],
    validate: async (runtime: IAgentRuntime, _message: Memory) => {
        await validateStarknetConfig(runtime);
        return true;
    },
    description: "Use this action when the user wants to join an existing Mancala game.",
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {
        elizaLogger.log("Starting JOIN_GAME handler...");

        if (!state) {
            state = (await runtime.composeState(message)) as State;
        }

        // Extract game ID from message text
        const gameIdMatch = message.content.text.match(/0x[a-fA-F0-9]+/);
        const gameId = gameIdMatch ? gameIdMatch[0] : null;

        if (!gameId) {
            if (callback) {
                callback({
                    text: "Could not determine the game ID to join. Please provide a valid game ID starting with '0x'.",
                    content: { error: "Invalid game ID" },
                });
            }
            return false;
        }

        try {
            const provider = getStarknetProvider(runtime);
            const account = getStarknetAccount(runtime);

            // Call the join_game function on the contract
            const { transaction_hash } = await account.execute({
                contractAddress: CONTRACT_ADDRESS,
                entrypoint: "join_game",
                calldata: [gameId],
            });

            elizaLogger.log(`Join game transaction hash: ${transaction_hash}`);

            if (callback) {
                callback({
                    text: `Successfully joined game ${gameId}. Transaction hash: ${transaction_hash}`,
                    content: { gameId, transaction_hash },
                });
            }
            return true;

        } catch (error) {
            elizaLogger.error("Error joining game:", error);
            if (callback) {
                callback({
                    text: `Error joining game: ${error.message}`,
                    content: { error: error.message },
                });
            }
            return false;
        }
    },

    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Join game with ID 0x123",
                },
            },
            {
                user: "{{agent}}",
                content: {
                    text: "I'll join the Mancala game with ID 0x123.",
                },
            },
        ],
    ] as ActionExample[][],
} as Action; 