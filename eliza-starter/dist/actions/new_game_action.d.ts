import { type Action, Content } from "@elizaos/core";
export interface ContractWriteContent extends Content {
    contractAddress: string;
    functionName: string;
    args: any[];
}
export declare function isContractWriteContent(content: ContractWriteContent): content is ContractWriteContent;
declare const _default: Action;
export default _default;
