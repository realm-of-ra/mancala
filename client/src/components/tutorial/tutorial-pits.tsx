import clsx from "clsx";

export function TutorialTopPit({
  amount,
  pit,
}: {
  amount: number;
  pit: number;
}) {
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

export function TutorialBottomPit({
  amount,
  pit,
  currentStep,
  isComputerTurn,
  state,
  message,
  setMessage,
  setMoveMessage,
  setStep,
  setState,
  setCurrentSeedIndex,
}: {
  amount: number;
  pit: number;
  currentStep: number;
  isComputerTurn: boolean;
  state: string;
  message: string;
  setMessage: (message: string) => void;
  setMoveMessage: (message: string | undefined) => void;
  setStep: (step: number) => void;
  setState: (state: "initial" | "result" | "final") => void;
  setCurrentSeedIndex: (index: number) => void;
}) {
  const handleMove = async () => {
    if (isComputerTurn) {
      setMoveMessage("Wait for your turn");
      return;
    }

    // Step 1: Seed Movement Tutorial
    if (currentStep === 1 && pit === 1 && message !== "TUTORIAL COMPLETED") {
      setState("result");
      setMessage("SEED DISTRIBUTION BASICS");
      setMoveMessage(
        "Great! Now watch how seeds are distributed: Pick up all seeds from your pit and sow them one by one counter-clockwise",
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setCurrentSeedIndex(0);
      setState("initial");
      setMessage("BONUS MOVES: LANDING IN STORE");
      setMoveMessage(
        "When your last seed lands in your store, you get another turn! Try pit 3",
      );
      setStep(2);
    }
    // Step 2: Extra Turns Tutorial
    else if (
      currentStep === 2 &&
      pit === 3 &&
      message !== "TUTORIAL COMPLETED"
    ) {
      setState("result");
      setMessage("BONUS MOVE EARNED!");
      setMoveMessage(
        "Excellent! Your last seed landed in your store. Take another turn using pit 1",
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } else if (
      currentStep === 2 &&
      pit === 1 &&
      message !== "TUTORIAL COMPLETED"
    ) {
      setState("final");
      setCurrentSeedIndex(0);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setStep(3);
      setState("initial");
      setMessage("CAPTURING SEEDS: EMPTY PIT RULE");
      setMoveMessage(
        "Special move: When your last seed lands in your empty pit, you capture all seeds from the opposite pit!",
      );
      setCurrentSeedIndex(0);
    }
    // Step 3: Capture Seeds Tutorial
    else if (
      currentStep === 3 &&
      pit === 1 &&
      message !== "TUTORIAL COMPLETED"
    ) {
      setState("result");
      setMoveMessage(
        "Excellent capture! You've collected all 5 seeds from the opposite pit",
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setState("final");
      setCurrentSeedIndex(0);
      setMessage("TUTORIAL COMPLETE!");
      setMoveMessage("You're ready to play Mancala! Good luck!");
    } else {
      setMessage("INCORRECT MOVE");
      setMoveMessage(
        "Please click the highlighted pit to continue the tutorial",
      );
    }
  };

  return (
    <div className="flex-col h-[125px] w-full flex justify-between items-center space-y-4 -mt-12 ml-3">
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
        <div
          className={clsx(
            "w-[90px] h-[80px] flex flex-col items-center justify-center hover:cursor-pointer rounded-full z-40",
            pit == 1 && "ml-0.5 -mt-1",
            pit == 2 && "ml-1 -mt-1",
            pit == 3 && "ml-1.5 -mt-1",
            pit == 4 && "ml-2 -mt-1",
            pit == 5 && "-mr-3 -mt-1",
            pit == 6 && "-mr-3.5 -mt-1",
            (currentStep === 1 && state === "initial" && pit === 1) ||
              (currentStep === 2 && state === "initial" && pit === 3) ||
              (currentStep === 2 && state === "result" && pit === 1) ||
              (currentStep === 3 && state === "initial" && pit === 1)
              ? "bg-black/20 hover:bg-black/20"
              : "hover:bg-red-600/20",
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
