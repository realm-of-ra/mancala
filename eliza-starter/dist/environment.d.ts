import { IAgentRuntime } from "@elizaos/core";
import { z } from "zod";
export declare const starknetEnvSchema: z.ZodObject<{
    STARKNET_ADDRESS: z.ZodString;
    STARKNET_PRIVATE_KEY: z.ZodString;
    STARKNET_RPC_URL: z.ZodString;
}, "strip", z.ZodTypeAny, {
    STARKNET_ADDRESS?: string;
    STARKNET_PRIVATE_KEY?: string;
    STARKNET_RPC_URL?: string;
}, {
    STARKNET_ADDRESS?: string;
    STARKNET_PRIVATE_KEY?: string;
    STARKNET_RPC_URL?: string;
}>;
export type StarknetConfig = z.infer<typeof starknetEnvSchema>;
export declare function validateStarknetConfig(runtime: IAgentRuntime): Promise<StarknetConfig>;
