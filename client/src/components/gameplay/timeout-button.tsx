import { useDojo } from "@/dojo/useDojo";
import { timeout } from "@/lib/icons_store";
import { Button } from "@material-tailwind/react";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";

export default function TimeoutButton({
  gameId,
  opposition_address,
  setMessage,
}: {
  gameId: string;
  opposition_address: string;
  setMessage: any;
}) {
  const account = useAccount();
  const { system } = useDojo();
  const [hasTimeout, setHasTimeout] = useState(false);
  const timeout_game = async () => {
    if (account.account) {
      await system.timeout(
        account.account,
        gameId,
        opposition_address,
        setHasTimeout,
      );
    }
  };
  useEffect(() => {
    if (hasTimeout) {
      setMessage("Ending game...");
      const timeout = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [hasTimeout, setMessage]);
  return (
    <div className="space-y-1">
      <Button
        className="p-0 bg-transparent rounded-full"
        onClick={timeout_game}
      >
        <img
          src={timeout}
          width={75}
          height={75}
          alt="restart"
          className="rounded-full"
        />
      </Button>
      <p className="text-lg text-white font-medium text-center">Timeout</p>
    </div>
  );
}
