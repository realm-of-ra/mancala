import clsx from "clsx";

export function TutorialTopPit({ amount, pit }: { amount: number, pit: number }) {
  return (
    <div className="flex-col h-[125px] w-full flex justify-between items-center space-y-6">
      <div className="rounded-lg w-fit">
        <p className="text-white ml-2">{amount}</p>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
        <div
          className={clsx("w-[88px] h-[80px] flex flex-col items-center justify-center hover:cursor-pointer rounded-full z-40 hover:bg-red-600/20",
            pit == 1 && "ml-1 -mt-1.5", pit == 2 && "ml-1 -mt-2", pit == 3 && "ml-1.5 -mt-2", pit == 4 && "ml-2 -mt-2", pit == 5 && "-mr-2.5 -mt-2", pit == 6 && "-mr-2.5 -mt-2")}
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
  setMessage,
  setMoveMessage,
  setStep,
  setState
}: {
  amount: number;
  pit: number;
  currentStep: number;
  isComputerTurn: boolean;
  setMessage: (message: string) => void;
  setMoveMessage: (message: string | undefined) => void;
  setStep: (step: number) => void;
  setState: (state: 'initial' | 'result') => void;
}) {
  const handleMove = async () => {
    if (isComputerTurn) {
      setMoveMessage("Please wait for the computer's move");
      return;
    }

    // Tutorial-specific move handling
    if (currentStep === 1 && pit === 1) {
      setState('result');
      setMessage("Great! You've learned how seeds move counter-clockwise.");
      // Wait for all seeds to complete their animation (5.5 seconds) before showing next step
      await new Promise(resolve => setTimeout(resolve, 5500));
      setTimeout(() => {
        setState('initial');
        setStep(2);
      }, 2000);
    } else if (currentStep === 2 && pit === 6) {
      setState('result');
      setMessage("Excellent! You got an extra turn for landing in your store!");
      await new Promise(resolve => setTimeout(resolve, 5500));
      setTimeout(() => {
        setState('initial');
        setStep(3);
      }, 2000);
    } else if (currentStep === 3 && pit === 3) {
      setState('result');
      setMessage("Well done! You've captured your opponent's seeds!");
      await new Promise(resolve => setTimeout(resolve, 5500));
      setTimeout(() => {
        setState('initial');
        setStep(4);
      }, 2000);
    } else {
      setMessage("Try a different pit for this tutorial step.");
    }
  };

  return (
    <div className="flex-col h-[125px] w-full flex justify-between items-center space-y-4 -mt-12 ml-3">
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
        <div
          className={clsx("w-[90px] h-[80px] flex flex-col items-center justify-center hover:cursor-pointer rounded-full z-40 hover:bg-black/20",
            pit == 1 && "ml-0.5 -mt-1", 
            pit == 2 && "ml-1 -mt-1", 
            pit == 3 && "ml-1.5 -mt-1", 
            pit == 4 && "ml-2 -mt-1", 
            pit == 5 && "-mr-3 -mt-1", 
            pit == 6 && "-mr-3.5 -mt-1")}
          onClick={handleMove}
        />
      </div>
      <div className="rounded-lg w-fit">
        <p className="text-white ml-2">{amount}</p>
      </div>
    </div>
  );
}
