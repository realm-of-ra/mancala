import { isEmptyString } from "../lib/utils.ts";

interface IMessageAreaProps {
    game_metadata_error: any,
    game_players_error: any,
    game_metadata: any,
    account: any,
    game_metadata_loading: any,
    game_players_loading: any,
    game_players: any,
    moveMessage: any
}

export default function MessageArea(
    { game_metadata_error, game_players_error, game_metadata, account,
        game_metadata_loading, game_players_loading, game_players, moveMessage }: IMessageAreaProps
) {

    const game_has_error = game_metadata_error || game_players_error;
    const game_is_loading = game_metadata_loading || game_players_loading;
    const my_address = account.account.address;
    const {
        player_one, player_two, current_player, status, winner
    } = game_metadata?.game_data?.edges?.[0]?.node ?? {}

    const active_players_addrs = [player_one, player_two]
    const player_includes_myself = active_players_addrs.includes(my_address);
    const is_any_player_empty = active_players_addrs.some(individualAddr => isEmptyString(individualAddr))

    const generate_error_message = (): string => {
        if (game_is_loading) return "Loading game data..."; // loading case
        if (status === "Finished") {
            if (winner === my_address) {
                return "Congratulations! You won the game"
            }
            else {
                return "You lost the game"
            }
        }
        else {
            if ( // guard clause for both players are present
                game_metadata && game_players && player_includes_myself) {
                if (current_player === my_address) { // I'm the one to play
                    if (is_any_player_empty) return "Waiting for another player to join"; // case opponent isn't in
                    if (moveMessage === undefined) {
                        return "";
                    }
                    return "Not your pit"
                } else {
                    return "Waiting for player 2";
                }
            }
            return "Player has not joined game";
        }
    }

    return (
        <p className="text-[#AAAEB7]" data-testid="message-area">
            Game message:{" "}
            {
                game_has_error && "Error loading game data"
            }
            {" "}
            {
                generate_error_message()
            }
        </p>
    )
}
