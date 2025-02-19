import { useAccount } from "@starknet-react/core";
import { useEffect, useState, useCallback } from "react";
import { useDojo } from "@/dojo/useDojo.tsx";
import { useParams } from "react-router-dom";

interface IMessageAreaProps {
  address: string | undefined;
  game_players: any;
  setMessage: any;
  setAction: any;
}

export default function MessageArea({
  address,
  game_players,
  setMessage,
  setAction,
}: IMessageAreaProps) {
  const active_players_addrs =
    game_players?.mancalaAlphaPlayerModels?.edges?.map(
      (item: any) => item?.node?.address,
    ) ?? [];
  const opponent_position = active_players_addrs.indexOf(address) === 0 ? 1 : 0;
  const opponent_requested_restart =
    game_players?.mancalaAlphaPlayerModels?.edges?.filter(
      (item: any) => item?.node?.restart_requested === true,
    )[opponent_position]?.node?.restart_requested;
  const { account } = useAccount();
  const { system } = useDojo();
  const [, setRestarted] = useState(false);
  const { gameId } = useParams();

  // Move restart_game into useCallback to memoize it
  const restart_game = useCallback(async () => {
    console.log('clicked: ')
    if (account) {
      await system.restart_game(
        account as never,
        gameId || "",
        setRestarted,
        opponent_requested_restart,
      );
    }
  }, [account, gameId, system, opponent_requested_restart]); // Add dependencies

  useEffect(() => {
    if (opponent_requested_restart) {
      setMessage("Opponent requested a restart");
      setAction({ action: restart_game, message: "Restart" });
    } else {
      setAction({ action: undefined, message: "" });
    }
  }, [opponent_requested_restart, restart_game, setMessage, setAction]);
  return <></>;
}
