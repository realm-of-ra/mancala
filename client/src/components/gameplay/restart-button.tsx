import { useDojo } from "@/dojo/useDojo";
import { restart } from "@/lib/icons_store";
import { Button } from "@material-tailwind/react";
import { useAccount } from "@starknet-react/core";

export default function RestartButton({ gameId }: { gameId: string }) {
  const account = useAccount();
  const { system } = useDojo();
  const restart_game = async () => {
    if (account.account) {
      await system.restart_game(account.account, gameId);
    }
  }
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