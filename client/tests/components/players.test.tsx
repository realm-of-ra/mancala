import { render, screen } from "@testing-library/react";
import Players from "../../src/components/lobby/players";
import { MancalaGameEdge } from "../../src/generated/graphql";
import { InjectedConnector } from "starknetkit/injected";
import { ArgentMobileConnector } from "starknetkit/argentMobile";
import { WebWalletConnector } from "starknetkit/webwallet";
import { publicProvider, StarknetConfig } from "@starknet-react/core";
import { mainnet } from "@starknet-react/chains";
import { getPlayers } from "@/lib/utils";

const chains = [mainnet];
const connectors = [
    new InjectedConnector({ options: { id: "braavos", name: "Braavos" } }),
    new InjectedConnector({ options: { id: "argentX", name: "Argent X" } }),
    new WebWalletConnector({ url: "https://web.argent.xyz" }),
    new ArgentMobileConnector(),
];

describe('players', () => {
    it('should not render players when no data is provided', () => {
        render(
            <StarknetConfig chains={chains} provider={publicProvider()} connectors={connectors}>
                <Players data={[]} />
            </StarknetConfig>
        );
        expect(screen.queryByTestId("players")).not.toBeInTheDocument();
    });
    it('should render players when data is provided', () => {
        const data: Array<MancalaGameEdge> = [
            {
                node: {
                    current_player: "0x123",
                    game_id: "1",
                    entity: {
                        createdAt: "2022-01-01T00:00:00Z",
                        eventId: "1",
                        executedAt: "2022-01-01T00:00:00Z",
                        id: "1",
                        keys: [],
                        models: [],
                        updatedAt: "2022-01-01T00:00:00Z",
                    },
                    is_private: true,
                    last_move: "2022-01-01T00:00:00Z",
                    player_one: "0xPlayerOne",
                    player_two: "0xPlayerTwo",
                    status: "InProgress",
                    winner: null,
                    time_between_move: 10,
                },
                cursor: undefined
            },
            {
                node: {
                    current_player: "0x123",
                    game_id: "1",
                    entity: {
                        createdAt: "2022-01-01T00:00:00Z",
                        eventId: "1",
                        executedAt: "2022-01-01T00:00:00Z",
                        id: "1",
                        keys: [],
                        models: [],
                        updatedAt: "2022-01-01T00:00:00Z",
                    },
                    is_private: true,
                    last_move: "2022-01-01T00:00:00Z",
                    player_one: "0xPlayerOne",
                    player_two: "0xPlayerTwo",
                    status: "InProgress",
                    winner: null,
                    time_between_move: 10,
                },
                cursor: undefined
            },
            {
                node: {
                    current_player: "0x123",
                    game_id: "1",
                    entity: {
                        createdAt: "2022-01-01T00:00:00Z",
                        eventId: "1",
                        executedAt: "2022-01-01T00:00:00Z",
                        id: "1",
                        keys: [],
                        models: [],
                        updatedAt: "2022-01-01T00:00:00Z",
                    },
                    is_private: true,
                    last_move: "2022-01-01T00:00:00Z",
                    player_one: "0xPlayerOne",
                    player_two: "0xPlayerTwo",
                    status: "InProgress",
                    winner: null,
                    time_between_move: 10,
                },
                cursor: undefined
            },
        ]
        render(
            <StarknetConfig chains={chains} provider={publicProvider()} connectors={connectors}>
                <Players data={data} />
            </StarknetConfig>
        );
        expect(screen.queryByTestId("players")).toBeInTheDocument();
    });
})