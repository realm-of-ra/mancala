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

const moveGameTemplate = `Respond with a JSON markdown block containing the extracted game information and your strategic pit selection. Use null for any values that cannot be determined.

Example response:
\`\`\`json
{
    "gameId": "0x123",
    "selectedPit": 3,
    "opponentPits": [4,4,4,4,4,4],
    "opponentMancala": 10
}
\`\`\`

{{recentMessages}}

Board Layout:
[Opponent 8-13]    [14]
[Your 1-6]         [7]

Mancala Rules:
1. Basic Movement:
   - Choose a pit (1-6) on your side
   - Distribute seeds counter-clockwise, one per pit
   - Skip opponent's Mancala (14) during distribution
   - Include your own Mancala (7) in distribution

2. Special Rules:
   - Extra Turn: If last seed lands in your Mancala (7), you get another turn
   - Capture: If last seed lands in an empty pit on your side (1-6):
     * AND opposite opponent pit (8-13) has seeds
     * You capture all seeds from opponent's opposite pit
     * Both captured seeds and your last seed go to your Mancala (7)
   - Opposite Pits: Your pit number + opponent pit number = 14
     * Example: Your pit 1 is opposite opponent pit 13
     * Example: Your pit 6 is opposite opponent pit 8

3. Game End:
   - When all pits on one side are empty
   - Remaining seeds go to owner's Mancala
   - Player with most seeds in Mancala wins

Strategic Priority:
1. Moves that land in your Mancala (7) for extra turns
2. Moves that enable captures from opponent's pits
3. Moves that protect your seeds from captures
4. Moves that build up seeds in your pits

Given the game state message:
1. Extract the game ID (starts with 0x)
2. Extract opponent's pit values (8-13, right to left)
3. Extract opponent's mancala value (14)
4. Select best pit (1-6) based on rules and strategy

Respond with a JSON markdown block containing only:
- gameId: The extracted game ID
- selectedPit: Your chosen pit number (1-6)
- opponentPits: Array of opponent's pit values
- opponentMancala: Opponent's mancala value`;

const CONTRACT_ADDRESS = "0x073d5f249b9519777bcca407e74b7230c935abded8b1f21717f75a5a8ce962a5";

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
                `Successfully made move on pit ${content.selectedPit} in game ${content.gameId}! tx: ${tx.transaction_hash}`
            );
            
            if (callback) {
                callback({
                    text: `I've selected pit ${content.selectedPit} for my move. Transaction hash: ${tx.transaction_hash}`,
                    content: {
                        success: true,
                        txHash: tx.transaction_hash,
                        gameId: content.gameId,
                        selectedPit: content.selectedPit,
                    },
                });
            }

            return true;
        } catch (error) {
            elizaLogger.error("Error making move:", error);
            if (callback) {
                callback({
                    text: `Error making move: ${error.message}`,
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
                    text: "It's your turn in game 0x123. Opponent's pits are [4,4,4,4,4,4] with 10 in mancala",
                },
            },
            {
                user: "{{agent}}",
                content: {
                    text: "I'll analyze the position and make a strategic move from pit 3.",
                },
            },
        ],
    ] as ActionExample[][],
} as Action; 