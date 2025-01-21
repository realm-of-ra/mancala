import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";
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
  setAction
}: IMessageAreaProps) {
  const active_players_addrs =
    game_players?.mancalaPlayerModels?.edges?.map(
      (item: any) => item?.node?.address,
    ) ?? [];
  const opponent_position = active_players_addrs.indexOf(address) === 0 ? 1 : 0;
  const opponent_requested_restart =
    game_players?.mancalaPlayerModels?.edges?.filter(
      (item: any) => item?.node?.restart_requested === true,
    )[opponent_position]?.node?.restart_requested;
  const account = useAccount();
  const { system } = useDojo();
  const [, setRestarted] = useState(false);
  const { gameId } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const restart_game = async () => {
    if (account.account) {
      await system.restart_game(
        account.account,
        gameId || "",
        setRestarted,
        opponent_requested_restart,
      );
    }
  };
  useEffect(() => {
    if (opponent_requested_restart) {
      setMessage("Click on the restart button to accept, or ignore to continue playing")
      setAction({ action: restart_game, message: "Restart" })
    }
  }, [opponent_requested_restart, game_players, restart_game, setMessage, setAction]);
  return <></>;
}
