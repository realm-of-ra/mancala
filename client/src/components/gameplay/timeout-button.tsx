import { useDojo } from "@/dojo/useDojo";
import { timeout } from "@/lib/icons_store";
import { Button } from "@material-tailwind/react";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";

export default function TimeoutButton({ gameId }: { gameId: string }) {
  const account = useAccount();
  const { system } = useDojo();
  const [hasTimeout, setHasTimeout] = useState(false);
  const timeout_game = async () => {
    if (account.account) {
      await system.timeout(account.account, gameId, setHasTimeout);
    }
  }
  const { toast } = useToast();
  useEffect(() => {
    if (hasTimeout) {
      toast({
        title: "Ending game",
        description: "The game is ending...",
        duration: undefined
      });
    }
  }, [hasTimeout, toast]);
    return(
        <div className="space-y-1">
          <Button className="p-0 bg-transparent rounded-full" onClick={timeout_game}>
            <img
              src={timeout}
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