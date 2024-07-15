import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import MessageArea from '../../src/components/message-area';

describe('message-area', () => {
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
});