import { ICacheManager, AgentRuntime, Character, IAgentRuntime, ModelProviderName, IDatabaseAdapter } from "@elizaos/core";
export declare const wait: (minTime?: number, maxTime?: number) => Promise<unknown>;
export declare function parseArguments(): {
    character?: string;
    characters?: string;
};
export declare function loadCharacters(charactersArg: string): Promise<Character[]>;
export declare function getTokenForProvider(provider: ModelProviderName, character: Character): string;
export declare function initializeClients(character: Character, runtime: IAgentRuntime): Promise<any[]>;
export declare function createAgent(character: Character, db: IDatabaseAdapter, cache: ICacheManager, token: string): AgentRuntime;
