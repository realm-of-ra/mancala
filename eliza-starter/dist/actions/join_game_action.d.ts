import { type Action, Content } from "@elizaos/core";
export interface JoinGameContent extends Content {
    gameId: string;
}
export declare function isJoinGameContent(content: JoinGameContent): content is JoinGameContent;
declare const _default: Action;
export default _default;
