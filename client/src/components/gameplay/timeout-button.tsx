import { useDojo } from "@/dojo/useDojo";
import { gameStarted } from "@/lib/constants";
import { timeout } from "@/lib/icons_store";
import { Button } from "@material-tailwind/react";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

export default function TimeoutButton({
  gameId,
  opposition_address,
  setMessage,
  game_node,
  game_players
}: {
  gameId: string;
  opposition_address: string;
  setMessage: any;
  game_node: any;
  game_players: any;
}) {
  const account = useAccount();
  const { system } = useDojo();
  const [hasTimeout, setHasTimeout] = useState(false);
  const timeout_game = async () => {
    if (account.account && !(minutes === 0 && seconds === 0)) {
      await system.timeout(
        account.account,
        gameId,
        opposition_address,
        setHasTimeout,
      );
    }
  };

  const games_data_one = game_players?.player_one?.edges?.[0]?.node;
  const games_data_two = game_players?.player_two?.edges?.[0]?.node;
  const started = gameStarted(games_data_one, games_data_two);

  const startTime = parseInt(game_node?.last_turn_change_timestamp, 16) * 1000;
  const expiryTimestamp = new Date(startTime);
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 360);

  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Timer expired"),
  });

  useEffect(() => {
    if (
      game_node?.status === "InProgress" &&
      started &&
      game_node?.winner === "0x0"
    ) {
      const newExpiryTimestamp = new Date(startTime);
      newExpiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds() + 360);
      restart(newExpiryTimestamp);
    }
  }, [game_node?.status, started, restart, startTime, game_node?.winner]);
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
        disabled={!(minutes === 0 && seconds === 0)}
      >
        <img
          src={timeout}
          width={75}
          height={75}
          alt="restart"
          className="rounded-full"
        />
      </Button>
      <p className="text-lg text-white font-medium text-center">
        {minutes === 0 && seconds === 0 ? "Timeout" : `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`}
      </p>
    </div>
  );
}
