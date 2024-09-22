import { useDojo } from "@/dojo/useDojo";
import { restart } from "@/lib/icons_store";
import { Button } from "@material-tailwind/react";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";

export default function RestartButton({ gameId, game_players }: { gameId: string, game_players: any }) {
  const account = useAccount();
  const { system } = useDojo();
  const [restarted, setRestarted] = useState(false);
  const active_players_addrs = game_players?.mancalaPlayerModels?.edges?.map((item: any) => item?.node?.address) ?? [];
  const opponent_position = active_players_addrs.indexOf(account?.address) === 0 ? 1 : 0;
  const opponent_requested_restart = game_players?.mancalaPlayerModels?.edges?.filter((item: any) => item?.node?.restart_requested === true)[opponent_position]?.node?.restart_requested;
  const restart_game = async () => {
    if (account.account) {
      await system.restart_game(account.account, gameId, setRestarted, opponent_requested_restart);
    }
  }
  const { toast } = useToast();
  useEffect(() => {
    if (restarted) {
      toast({
        title: "Restart notification sent to opponent!",
        description: "Waiting for opponent to accept the restart request",
        duration: undefined
      });
    }
  }, [restarted, toast]);
    return(
        <div className="space-y-1">
          <Button className="p-0 bg-transparent rounded-full" onClick={restart_game}>
            <img
              src={restart}
              width={75}
              height={75}
              alt="restart"
              className="rounded-full"
            />
          </Button>
          <p className="text-lg text-[#656C7D] font-medium text-center">
            Restart
          </p>
        </div>
    )
}