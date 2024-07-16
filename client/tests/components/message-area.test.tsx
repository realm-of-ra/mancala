import { render } from "@testing-library/react";
import MessageArea from '../../src/components/message-area';

describe('message-area', () => {
    it('Should render message area', () => {
        const { getByTestId } = render(<MessageArea
            game_metadata_error={undefined}
            game_players_error={undefined}
            game_metadata={undefined}
            account={{
                account: {
                    address: undefined
                }
            }}
            game_metadata_loading={undefined}
            game_players_loading={undefined}
            game_players={undefined}
            moveMessage={undefined}
        />);
        expect(getByTestId('message-area')).toBeInTheDocument();
    });

    it('renders correct message when waiting for player to join', () => {
        const { getByText } = render(<MessageArea
            game_metadata_error={undefined}
            game_players_error={undefined}
            game_metadata={{
                game_data: {
                    edges: [
                        {
                            node: {
                                "game_id": "0x1",
                                "player_one": "0x1d8d33ae7dc134a26cdd2f3d0325f7601b0855bca9250df6c8ad7e704c22924",
                                "player_two": "",
                                "current_player": "0x1d8d33ae7dc134a26cdd2f3d0325f7601b0855bca9250df6c8ad7e704c22924",
                                "winner": "0x0",
                                "status": "Pending",
                                "is_private": false
                            }
                        }
                    ]
                }
            }}
            account={{
                account: {
                    address: "0x1d8d33ae7dc134a26cdd2f3d0325f7601b0855bca9250df6c8ad7e704c22924"
                }
            }}
            game_metadata_loading={undefined}
            game_players_loading={undefined}
            game_players={undefined}
            moveMessage={undefined}
        />);
        expect(getByText('Game message: Player has not joined game')).toBeInTheDocument();
    });
    it('renders correct message when user is current player', () => {
        const { getByText } = render(<MessageArea
            game_metadata_error={undefined}
            game_players_error={undefined}
            game_metadata={{
                game_data: {
                    edges: [
                        {
                            node: {
                                "game_id": "0x2",
                                "player_one": "0x47aa5329731aaeb9621e2baaddf8c3d35dd2263d0b12c7bb5e563f9ffd661fc",
                                "player_two": "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b",
                                "current_player": "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b",
                                "winner": "0x0",
                                "status": "InProgress",
                            }
                        }
                    ]
                }
            }}
            account={{
                account: {
                    address: "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b"
                }
            }}
            game_metadata_loading={undefined}
            game_players_loading={undefined}
            game_players={{
                "player_one": {
                    "edges": [
                        {
                            "node": {
                                "address": "0x47aa5329731aaeb9621e2baaddf8c3d35dd2263d0b12c7bb5e563f9ffd661fc",
                                "game_id": "0x2",
                                "pit1": 1,
                                "pit2": 0,
                                "pit3": 1,
                                "pit4": 0,
                                "pit5": 7,
                                "pit6": 7,
                                "mancala": 10
                            }
                        }
                    ]
                },
                "player_two": {
                    "edges": [
                        {
                            "node": {
                                "address": "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b",
                                "game_id": "0x2",
                                "pit1": 1,
                                "pit2": 0,
                                "pit3": 0,
                                "pit4": 6,
                                "pit5": 6,
                                "pit6": 1,
                                "mancala": 8
                            }
                        }
                    ]
                }
            }}
            moveMessage={undefined}
        />);
        expect(getByText('Game message:')).toBeInTheDocument();
    })
    it('renders correct message when game metadata is loading', () => {
        const { getAllByText } = render(<MessageArea
            game_metadata_error={undefined}
            game_players_error={undefined}
            game_metadata={undefined}
            account={{
                account: {
                    address: "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b"
                }
            }}
            game_metadata_loading={true}
            game_players_loading={false}
            game_players={undefined}
            moveMessage={undefined}
        />);
        expect(getAllByText('Game message: Loading game data...'));
    })
    it('renders correct message when players metadata is loading', () => {
        const { getAllByText } = render(<MessageArea
            game_metadata_error={undefined}
            game_players_error={undefined}
            game_metadata={undefined}
            account={{
                account: {
                    address: "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b"
                }
            }}
            game_metadata_loading={false}
            game_players_loading={true}
            game_players={undefined}
            moveMessage={undefined}
        />);
        expect(getAllByText('Game message: Loading game data...'));
    })
    it('renders correct message when game is won by player', () => {
        const { getByText } = render(<MessageArea
            game_metadata_error={undefined}
            game_players_error={undefined}
            game_metadata={{
                game_data: {
                    edges: [
                        {
                            node: {
                                "game_id": "0x1",
                                "player_one": "0x1d8d33ae7dc134a26cdd2f3d0325f7601b0855bca9250df6c8ad7e704c22924",
                                "player_two": "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b",
                                "current_player": "0x1d8d33ae7dc134a26cdd2f3d0325f7601b0855bca9250df6c8ad7e704c22924",
                                "winner": "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b",
                                "status": "Finished",
                                "is_private": false
                            }
                        }
                    ]
                }
            }}
            account={{
                account: {
                    address: "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b"
                }
            }}
            game_metadata_loading={undefined}
            game_players_loading={undefined}
            game_players={{
                "player_one": {
                    "edges": [
                        {
                            "node": {
                                "address": "0x47aa5329731aaeb9621e2baaddf8c3d35dd2263d0b12c7bb5e563f9ffd661fc",
                                "game_id": "0x2",
                                "pit1": 1,
                                "pit2": 0,
                                "pit3": 1,
                                "pit4": 0,
                                "pit5": 7,
                                "pit6": 7,
                                "mancala": 10
                            }
                        }
                    ]
                },
                "player_two": {
                    "edges": [
                        {
                            "node": {
                                "address": "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b",
                                "game_id": "0x2",
                                "pit1": 1,
                                "pit2": 0,
                                "pit3": 0,
                                "pit4": 6,
                                "pit5": 6,
                                "pit6": 1,
                                "mancala": 8
                            }
                        }
                    ]
                }
            }}
            moveMessage={undefined}
        />);
        expect(getByText('Game message: Congratulations! You won the game')).toBeInTheDocument();
    });
    it('renders correct message when game is lost by player', () => {
        const { getByText } = render(<MessageArea
            game_metadata_error={undefined}
            game_players_error={undefined}
            game_metadata={{
                game_data: {
                    edges: [
                        {
                            node: {
                                "game_id": "0x1",
                                "player_one": "0x1d8d33ae7dc134a26cdd2f3d0325f7601b0855bca9250df6c8ad7e704c22924",
                                "player_two": "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b",
                                "current_player": "0x1d8d33ae7dc134a26cdd2f3d0325f7601b0855bca9250df6c8ad7e704c22924",
                                "winner": "0x1d8d33ae7dc134a26cdd2f3d0325f7601b0855bca9250df6c8ad7e704c22924",
                                "status": "Finished",
                                "is_private": false
                            }
                        }
                    ]
                }
            }}
            account={{
                account: {
                    address: "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b"
                }
            }}
            game_metadata_loading={undefined}
            game_players_loading={undefined}
            game_players={{
                "player_one": {
                    "edges": [
                        {
                            "node": {
                                "address": "0x47aa5329731aaeb9621e2baaddf8c3d35dd2263d0b12c7bb5e563f9ffd661fc",
                                "game_id": "0x2",
                                "pit1": 1,
                                "pit2": 0,
                                "pit3": 1,
                                "pit4": 0,
                                "pit5": 7,
                                "pit6": 7,
                                "mancala": 10
                            }
                        }
                    ]
                },
                "player_two": {
                    "edges": [
                        {
                            "node": {
                                "address": "0x4d82d1a1b2edabfbdd71a3f73cadb85831a6c996b9f427be12678634b57190b",
                                "game_id": "0x2",
                                "pit1": 1,
                                "pit2": 0,
                                "pit3": 0,
                                "pit4": 6,
                                "pit5": 6,
                                "pit6": 1,
                                "mancala": 8
                            }
                        }
                    ]
                }
            }}
            moveMessage={undefined}
        />);
        expect(getByText('Game message: You lost the game')).toBeInTheDocument();
    });
});