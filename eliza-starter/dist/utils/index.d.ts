import { IAgentRuntime } from "@elizaos/core";
import { Fraction, Percent } from "@uniswap/sdk-core";
import { Account, RpcProvider } from "starknet";
export declare const getTokenBalance: (runtime: IAgentRuntime, tokenAddress: string) => Promise<any>;
export declare const getStarknetProvider: (runtime: IAgentRuntime) => RpcProvider;
export declare const getStarknetAccount: (runtime: IAgentRuntime) => Account;
export declare const getPercent: (amount: string | number, decimals: number) => Percent;
export declare const parseFormatedAmount: (amount: string) => string;
export declare const PERCENTAGE_INPUT_PRECISION = 2;
export declare const parseFormatedPercentage: (percent: string) => Percent;
interface ParseCurrencyAmountOptions {
    fixed: number;
    significant?: number;
}
export declare const formatCurrenyAmount: (amount: Fraction, { fixed, significant }: ParseCurrencyAmountOptions) => string | number;
export declare const formatPercentage: (percentage: Percent) => string;
export type RetryConfig = {
    maxRetries?: number;
    delay?: number;
    maxDelay?: number;
    backoff?: (retryCount: number, delay: number, maxDelay: number) => number;
};
export declare function fetchWithRetry<T>(url: string, options?: RequestInit, config?: RetryConfig): Promise<T>;
export {};
