import { useDojo } from "@/dojo/useDojo";
import { end } from "@/lib/icons_store";
import { Button } from "@material-tailwind/react";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";

export default function EndgameButton({ gameId, game_players }: {gameId: string, game_players: any}) {
  const account = useAccount();
  const { system } = useDojo();
  const [ending, setEnding] = useState(false);
  const active_players_addrs = game_players?.mancalaPlayerModels?.edges?.map((item: any) => item?.node?.address) ?? [];
  const opponent_position = active_players_addrs.indexOf(account?.address) === 0 ? 1 : 0;
  const end_game = async () => {
    if (account.account) {
      setEnding(true);
      await system.end_game(account.account, gameId);
    }
  }
  const { toast } = useToast();
  useEffect(() => {
    if (ending) {
      toast({
        title: "End Game",
        description: "Game is currently ending...",
        duration: undefined
      });
    }
  }, [ending, toast]);
    return(
        <div className="space-y-1">
          <Button className="p-0 bg-transparent rounded-full">
            <img
              src={end}
              width={75}
              height={75}
              alt="end game"
              className="rounded-full"
              onClick={end_game}
            />
          </Button>
          <p className="text-lg text-[#656C7D] font-medium text-center">
            End
          </p>
        </div>
    )
}