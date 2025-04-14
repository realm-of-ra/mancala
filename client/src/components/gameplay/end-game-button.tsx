import { useDojo } from "@/dojo/useDojo";
import { end } from "@/lib/icons_store";
import { Button } from "@material-tailwind/react";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";

export default function EndgameButton({
  gameId,
  setMessage,
}: {
  gameId: string;
  setMessage: any;
}) {
  const account = useAccount();
  const { system } = useDojo();
  const [ending, setEnding] = useState(false);
  const end_game = async () => {
    if (account.account) {
      setEnding(true);
      await system.end_game(account.account, gameId);
    }
  };
  useEffect(() => {
    if (ending) {
      setMessage("Game is currently ending...");
      const timeout = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [ending, setMessage]);
  return (
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
      <p className="text-lg text-white font-medium text-center">End</p>
    </div>
  );
}
