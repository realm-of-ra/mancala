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

const CONTRACT_ADDRESS = "0x073d5f249b9519777bcca407e74b7230c935abded8b1f21717f75a5a8ce962a5";

export interface ContractWriteContent extends Content {
    contractAddress: string;
    functionName: string;
    args: any[];
}

export function isContractWriteContent(
    content: ContractWriteContent
): content is ContractWriteContent {
    // Validate types
    const validTypes =
        typeof content.contractAddress === "string" &&
        typeof content.functionName === "string" &&
        Array.isArray(content.args);
    if (!validTypes) {
        return false;
    }

    // Validate contract address (must be 32-bytes long with 0x prefix)
    const validContractAddress =
        content.contractAddress.startsWith("0x") &&
        content.contractAddress.length === 66;
    if (!validContractAddress) {
        return false;
    }

    return true;
}

const contractWriteTemplate = `Respond with a JSON markdown block containing only the extracted values. Use null for any values that cannot be determined.

Example response:
\`\`\`json
{
    "contractAddress": "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    "functionName": "approve",
    "args": ["0x1234....", "1000000"]
}
\`\`\`

{{recentMessages}}

Given the recent messages, extract the following information about the contract interaction:
- Contract address
- Function name to call
- Arguments for the function

Respond with a JSON markdown block containing only the extracted values.`;

export default {
    name: "WRITE_CONTRACT",
    similes: [
        "CALL_CONTRACT_FUNCTION",
        "EXECUTE_CONTRACT_METHOD",
        "INTERACT_WITH_CONTRACT",
    ],
    validate: async (runtime: IAgentRuntime, _message: Memory) => {
        await validateStarknetConfig(runtime);
        return true;
    },
    description:
        "Use this action when the user wants to call a function on a smart contract that modifies state.",
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {
        elizaLogger.log("Starting WRITE_CONTRACT handler...");

        if (!state) {
            state = (await runtime.composeState(message)) as State;
        } else {
            state = await runtime.updateRecentMessageState(state);
        }

        const context = composeContext({
            state,
            template: contractWriteTemplate,
        });

        const content = await generateObjectDeprecated({
            runtime,
            context,
            modelClass: ModelClass.MEDIUM,
        });

        elizaLogger.debug("Contract write content:", content);

        if (!isContractWriteContent(content)) {
            elizaLogger.error("Invalid content for WRITE_CONTRACT action.");
            if (callback) {
                callback({
                    text: "Not enough information to execute contract function. Please provide contract address, function name and arguments.",
                    content: { error: "Invalid contract write content" },
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

            // Execute new_game function
            const tx = await contract.invoke("new_game", []);

            elizaLogger.success(
                `Successfully created new game! tx: ${tx.transaction_hash}`
            );
            
            if (callback) {
                callback({
                    text: `New game created! Transaction hash: ${tx.transaction_hash}`,
                    content: {
                        success: true,
                        txHash: tx.transaction_hash
                    },
                });
            }

            return true;
        } catch (error) {
            elizaLogger.error("Error executing contract function:", error);
            if (callback) {
                callback({
                    text: `Error executing contract function: ${error.message}`,
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
                    text: "Call approve function on the ETH contract with address 0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7 for spender 0x1234 with amount 1000",
                },
            },
            {
                user: "{{agent}}",
                content: {
                    text: "I'll execute the approve function on the ETH contract right away.",
                },
            },
        ],
    ] as ActionExample[][],
} as Action;