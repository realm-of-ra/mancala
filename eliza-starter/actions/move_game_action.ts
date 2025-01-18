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

export interface MoveGameContent extends Content {
    gameId: string;
    selectedPit: number;
    opponentPits: number[];
    opponentMancala: number;
}

export function isMoveGameContent(
    content: MoveGameContent
): content is MoveGameContent {
    return (
        typeof content.gameId === "string" &&
        typeof content.selectedPit === "number" &&
        Array.isArray(content.opponentPits) &&
        content.opponentPits.length === 6 &&
        typeof content.opponentMancala === "number"
    );
}

const moveGameTemplate = `Extract the game ID and select a strategic pit (1-6) for the current game state.

Message format example:
"You are already a part of game with game id 0x26. This is the board state, Board state: Your pits (1-6): [4,4,4,4,4,4] Mancala(7): 0 | Opponent pits (8-13): [4,4,4,4,4,4] Mancala(14): 0"

Board Layout:
[Opponent 8-13]    [14]
[Your 1-6]         [7]

Mancala Rules:
1. Basic Movement:
   - Choose a pit (1-6) on your side
   - Distribute seeds counter-clockwise
   - Skip opponent's Mancala (14)
   - Include your Mancala (7)

2. Special Rules:
   - Extra Turn: Landing in your Mancala (7)
   - Capture: Landing in empty pit with opposite seeds

Strategic Priority:
1. Moves for extra turns
2. Moves for captures
3. Moves for protection

Respond with a JSON markdown block containing only:
- gameId: The game ID from the message
- selectedPit: Your chosen pit (1-6)`;

const CONTRACT_ADDRESS = "0x06759f232ac3f0123a6ca67b7cdbd3d1d94f2f7c32afd9c3a0d4b895bf38ff54";

export default {
    name: "MOVE_GAME",
    similes: ["MAKE_MOVE", "PLAY_MOVE", "SELECT_PIT"],
    validate: async (runtime: IAgentRuntime, _message: Memory) => {
        await validateStarknetConfig(runtime);
        return true;
    },
    description: "Use this action when it's your turn to make a move in a Mancala game.",
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {
        elizaLogger.log("Starting MOVE_GAME handler...");

        if (!state) {
            state = (await runtime.composeState(message)) as State;
        } else {
            state = await runtime.updateRecentMessageState(state);
        }

        const context = composeContext({
            state,
            template: moveGameTemplate,
        });

        const content = await generateObjectDeprecated({
            runtime,
            context,
            modelClass: ModelClass.MEDIUM,
        });

        elizaLogger.debug("Move game content:", content);

        if (!isMoveGameContent(content)) {
            elizaLogger.error("Invalid content for MOVE_GAME action.");
            if (callback) {
                callback({
                    text: "Could not determine game state or select a valid move. Please provide game ID and current board state.",
                    content: { error: "Invalid move content" },
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

            // Execute move function
            const tx = await contract.invoke("move", [content.gameId, content.selectedPit]);

            elizaLogger.success(
                `Move made in game ${content.gameId}. Transaction hash: ${tx.transaction_hash}`
            );
            
            if (callback) {
                callback({
                    text: `Move made. Transaction hash: ${tx.transaction_hash}`,
                });
            }

            return true;
        } catch (error) {
            elizaLogger.error("Error making move:", error);
            if (callback) {
                callback({
                    text: `Error making move: ${error.message}`,
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
                    text: "You are already a part of game with game id 0x26. This is the board state, Board state: Your pits (1-6): [4,4,4,4,4,4] Mancala(7): 0 | Opponent pits (8-13): [4,4,4,4,4,4] Mancala(14): 0",
                },
            },
            {
                user: "{{agent}}",
                content: {
                    text: "Move made. Transaction hash: 0x123...",
                },
            },
        ],
    ] as ActionExample[][],
} as Action; 