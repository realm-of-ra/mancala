import { type Action, Content } from "@elizaos/core";
export interface MoveGameContent extends Content {
    gameId: string;
    selectedPit: number;
    opponentPits: number[];
    opponentMancala: number;
}
export declare function isMoveGameContent(content: MoveGameContent): content is MoveGameContent;
declare const _default: Action;
export default _default;
