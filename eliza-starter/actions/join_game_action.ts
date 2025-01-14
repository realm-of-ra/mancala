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

const CONTRACT_ADDRESS = "0x073d5f249b9519777bcca407e74b7230c935abded8b1f21717f75a5a8ce962a5";

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
        } else {
            state = await runtime.updateRecentMessageState(state);
        }

        const context = composeContext({
            state,
            template: joinGameTemplate,
        });

        const content = await generateObjectDeprecated({
            runtime,
            context,
            modelClass: ModelClass.MEDIUM,
        });

        elizaLogger.debug("Join game content:", content);

        if (!isJoinGameContent(content) || !content.gameId) {
            elizaLogger.error("Invalid content for JOIN_GAME action.");
            if (callback) {
                callback({
                    text: "Could not determine the game ID to join. Please provide a valid game ID.",
                    content: { error: "Invalid game ID" },
                });
            }
            return false;
        }

        try {
            const provider = getStarknetProvider(runtime);
            const account = getStarknetAccount(runtime);

            // Get contract ABI
            const { abi } = await provider.getClassAt(CONTRACT_ADDRESS);
            if (!abi) {
                throw new Error("Contract ABI not found");
            }

            // Create contract instance
            const contract = new Contract(abi, CONTRACT_ADDRESS, provider);
            contract.connect(account);

            // Execute join_game function
            const tx = await contract.invoke("join_game", [content.gameId]);

            elizaLogger.success(
                `Successfully joined game ${content.gameId}! tx: ${tx.transaction_hash}`
            );
            
            if (callback) {
                callback({
                    text: `Successfully joined game! Transaction hash: ${tx.transaction_hash}`,
                    content: {
                        success: true,
                        txHash: tx.transaction_hash,
                        gameId: content.gameId,
                    },
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