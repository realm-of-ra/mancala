import { Dispatch, SetStateAction } from "react";
import { UseAccountResult } from "@starknet-react/core";
import clsx from "clsx";

export function TopPit({ amount, pit }: { amount: number; pit: number }) {
  return (
    <div className="flex-col h-[125px] w-full flex justify-between items-center space-y-6">
      <div className="rounded-lg w-fit">
        <p className="text-white ml-2">{amount}</p>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
        <div
          className={clsx(
            "w-[88px] h-[80px] flex flex-col items-center justify-center hover:cursor-pointer rounded-full z-40 hover:bg-red-600/20",
            pit == 1 && "ml-1 -mt-1.5",
            pit == 2 && "ml-1 -mt-2",
            pit == 3 && "ml-1.5 -mt-2",
            pit == 4 && "ml-2 -mt-2",
            pit == 5 && "-mr-2.5 -mt-2",
            pit == 6 && "-mr-2.5 -mt-2",
          )}
        />
      </div>
    </div>
  );
}

export function BottomPit({
  amount,
  address,
  pit,
  game_id,
  status,
  winner,
  userAccount,
  system,
  isPlayerTurn,
  isPlayerTurn,
  setTimeRemaining,
  max_block_between_move,
  setMoveMessage,
  setMessage,
  setSelectedPit,
  setSelectedPit,
}: {
  amount: number;
  address: string;
  pit: number;
  winner: string;
  game_id: string;
  status: string;
  isPlayerTurn: boolean;
  isPlayerTurn: boolean;
  userAccount?: UseAccountResult;
  system: any;
  max_block_between_move: number;
  setMoveMessage: Dispatch<SetStateAction<string | undefined>>;
  setTimeRemaining: Dispatch<SetStateAction<number>>;
  setMessage: any;
  setSelectedPit: Dispatch<SetStateAction<number | null>>;
  setSelectedPit: Dispatch<SetStateAction<number | null>>;
}) {
  const handleMove = async () => {
    if (!isPlayerTurn) {
      setMoveMessage("It's not your turn!");
      return;
    }
    setMoveMessage(undefined);
    setMessage(`You have selected pit ${pit}`);
    if (
      address === userAccount?.account?.address &&
      status === "InProgress" &&
      winner === "0x0"
    ) {
      setSelectedPit(pit);
      await system.move(userAccount?.account, game_id, pit);
      setMoveMessage(undefined);
      setMessage(undefined);
      setTimeRemaining(max_block_between_move);
    } else {
      if (address !== userAccount?.account?.address) {
        setMoveMessage("Not your pit");
      } else if (status !== "InProgress") {
        setMoveMessage("Game over");
      } else {
        if (winner === userAccount?.account?.address) {
          setMoveMessage("You won");
        } else {
          setMoveMessage("You lost");
        }
      }
    }
  };


  return (
    <div className="flex-col h-[125px] w-full flex justify-between items-center space-y-4 -mt-12 ml-3">
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
        <div
          className={clsx(
            "w-[90px] h-[80px] flex flex-col items-center justify-center hover:cursor-pointer rounded-full z-40 hover:bg-black/20",
            pit == 1 && "ml-0.5 -mt-1",
            pit == 2 && "ml-1 -mt-1",
            pit == 3 && "ml-1.5 -mt-1",
            pit == 4 && "ml-2 -mt-1",
            pit == 5 && "-mr-3 -mt-1",
            pit == 6 && "-mr-3.5 -mt-1",
          )}
          onClick={handleMove}
        />
      </div>
      <div className="rounded-lg w-fit">
        <p className="text-white ml-2">{amount}</p>
      </div>
    </div>
  );
}
