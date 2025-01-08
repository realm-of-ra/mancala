import { Dispatch, SetStateAction } from "react";
import { UseAccountResult } from "@starknet-react/core";
import { useAudioControl } from "@/hooks/useAudioControl";

export function TopPit({ amount }: { amount: number }) {
  return (
    <div className="flex-col h-[125px] w-full flex justify-between items-center space-y-6">
      <div className="rounded-lg w-fit">
        <p className="text-white ml-2">{amount}</p>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
        <div
          className={
            "w-[60px] h-[60px] flex flex-col items-center justify-center"
          }
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
  setTimeRemaining,
  max_block_between_move,
  message,
}: {
  amount: number;
  address: string;
  pit: number;
  winner: string;
  game_id: string;
  status: string;
  userAccount?: UseAccountResult;
  system: any;
  message: Dispatch<SetStateAction<string | undefined>>;
  setTimeRemaining: Dispatch<SetStateAction<number>>;
  max_block_between_move: number;
}) {
  const { playEmptyPitSound } = useAudioControl();
  const handleMove = async () => {
    message(undefined);
    if (
      address === userAccount?.account?.address &&
      status === "InProgress" &&
      winner === "0x0"
    ) {
      message(undefined);
      playEmptyPitSound();
      await system.move(userAccount?.account, game_id, pit);
      setTimeRemaining(max_block_between_move);
    } else {
      if (address !== userAccount?.account?.address) {
        message("Not your pit");
      } else if (status !== "InProgress") {
        message("Game over");
      } else {
        if (winner === userAccount?.account?.address) {
          message("You won");
        } else {
          message("You lost");
        }
      }
    }
  };
  return (
    <div className="flex-col h-[125px] w-full flex justify-between items-center space-y-4 -mt-12 ml-3">
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
        <div
          className="w-[90px] h-[80px] flex flex-col items-center justify-center hover:cursor-pointer rounded-full z-40"
          onClick={handleMove}
        />
      </div>
      <div className="rounded-lg w-fit">
        <p className="text-white ml-2">{amount}</p>
      </div>
    </div>
  );
}
