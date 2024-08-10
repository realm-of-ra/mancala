import { isEmptyString } from "../lib/utils.ts";
import { useToast } from "./ui/use-toast.ts";
import { useEffect } from "react";

interface IMessageAreaProps {
    game_metadata_error: any,
    game_players_error: any,
    game_metadata: any,
    address: string | undefined,
    game_metadata_loading: any,
    game_players_loading: any,
    game_players: any,
    moveMessage: any
}

export default function MessageArea(
    { game_metadata_error, game_players_error, game_metadata, address,
        game_metadata_loading, game_players_loading, game_players, moveMessage }: IMessageAreaProps
) {

    const game_has_error = game_metadata_error || game_players_error;
    const game_is_loading = game_metadata_loading || game_players_loading;
    const {
        player_one, player_two, current_player, status, winner
    } = game_metadata?.game_data?.edges?.[0]?.node ?? {}

    const active_players_addrs = [player_one, player_two]
    const player_includes_myself = active_players_addrs.includes(address);
    const is_any_player_empty = active_players_addrs.some(individualAddr => isEmptyString(individualAddr) || individualAddr === "0x0");

    const { toast } = useToast();

    const generate_error_message = (): string => {
        if (game_is_loading) return "Loading game data..."; // loading case
        if (status === "Finished") {
            if (winner === address) {
                return "Congratulations! You won the game"
            }
            else {
                return "You lost the game"
            }
        }
        else {
            if ( // guard clause for both players are present
                game_metadata && game_players && player_includes_myself) {
                if (current_player === address) { // I'm the one to play
                    if (is_any_player_empty) return "Waiting for another player to join"; // case opponent isn't in
                    if (moveMessage === undefined) {
                        return "";
                    }
                    return "Not your pit"
                }
                return "";
            }
            else {
                return "Player has not joined game or try connecting your wallet again in the lobby";
            }
        }
    }

    useEffect(() => {
        if (generate_error_message()) {
            toast({
                title: generate_error_message(),
            })
        }
    }, [generate_error_message()])

    return (
        <></>
    )
}
