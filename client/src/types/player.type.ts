import {GamePlayer, GamePlayerOrderField} from "@/generated/graphql.tsx";

export interface IPlayersForDuelsList {
    address: string,
    wins: number,
    losses: number,
    totalAppearances: number
}

export type TPit = keyof GamePlayer
