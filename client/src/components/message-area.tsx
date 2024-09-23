import { useAccount } from "@starknet-react/core";
import { ToastAction } from "../components/ui/toast.tsx";
import { useToast } from "./ui/use-toast.ts";
import { useEffect, useState } from "react";
import { useDojo } from "@/dojo/useDojo.tsx";
import { useParams } from "react-router-dom";

interface IMessageAreaProps {
  address: string | undefined;
  game_players: any;
}

export default function MessageArea({
  address,
  game_players,
}: IMessageAreaProps) {
  const active_players_addrs = game_players?.mancalaPlayerModels?.edges?.map((item: any) => item?.node?.address) ?? [];
  const opponent_position = active_players_addrs.indexOf(address) === 0 ? 1 : 0;
  const opponent_requested_restart = game_players?.mancalaPlayerModels?.edges?.filter((item: any) => item?.node?.restart_requested === true)[opponent_position]?.node?.restart_requested;
  const { toast } = useToast();
  const account = useAccount();
  const { system } = useDojo();
  const [_, setRestarted] = useState(false);
  const { gameId } = useParams();
  const restart_game = async () => {
    if (account.account) {
      await system.restart_game(account.account, gameId || "", setRestarted, opponent_requested_restart);
    }
  }
  useEffect(() => {
    if (opponent_requested_restart) {
      toast({
        title: "Opponent requested a restart",
        description: "Click on the restart button to accept, or ignore to continue playing",
        action: (
          <ToastAction className="text-white !bg-transparent" altText="Click on the restart button to accept, or ignore to continue playing" onClick={restart_game}>Restart</ToastAction>
        ),
        duration: undefined,
      });
    }
  }, [opponent_requested_restart, game_players, toast]);
  return <></>;
}
