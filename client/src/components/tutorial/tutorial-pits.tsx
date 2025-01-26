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
  state,
  setMessage,
  setMoveMessage,
  setStep,
  setState,
  setCurrentSeedIndex,
  setIsAnimating
}: {
  amount: number;
  pit: number;
  currentStep: number;
  isComputerTurn: boolean;
  state: string;
  setMessage: (message: string) => void;
  setMoveMessage: (message: string | undefined) => void;
  setStep: (step: number) => void;
  setState: (state: 'initial' | 'result' | 'final') => void;
  setCurrentSeedIndex: (index: number) => void;
  setIsAnimating: (isAnimating: boolean) => void;
}) {
  const handleMove = async () => {
    if (isComputerTurn) {
      setMoveMessage("Wait for your turn");
      return;
    }

    // Step 1: Seed Movement Tutorial
    if (currentStep === 1 && pit === 1) {
      setState('result');
      setMessage("Seed Movements");
      setMoveMessage("Moving seeds one by one...");
      await new Promise(resolve => setTimeout(resolve, 4000));
      setCurrentSeedIndex(0);
      setIsAnimating(true);
      setState('initial');
      setMessage("Get Extra Turns");
      setMoveMessage("End in store for extra turn");
      setStep(2);
    }
    // Step 2: Extra Turns Tutorial
    else if (currentStep === 2 && pit === 3) {
      setState('result');
      setMessage("Get Extra Turns");
      setMoveMessage("Extra turn earned!");
      await new Promise(resolve => setTimeout(resolve, 4000));
      setMoveMessage("Now capture seeds from pit 1");
    }
    else if (currentStep === 2 && pit === 1) {
      setState('final');
      setCurrentSeedIndex(0);
      setIsAnimating(true);
      await new Promise(resolve => setTimeout(resolve, 4000));
      setStep(3);
      setState('initial');
      setMessage("Capture Seeds");
      setMoveMessage("End in empty pit to capture");
      setCurrentSeedIndex(0);
      setIsAnimating(true);
    }
    // Step 3: Capture Seeds Tutorial
    else if (currentStep === 3 && pit === 1) {
      setState('result');
      setMoveMessage("Great capture! +5 seeds");
      await new Promise(resolve => setTimeout(resolve, 4000));
      setState('final');
      setCurrentSeedIndex(0);
      setIsAnimating(true);
      setMessage("TUTORIAL COMPLETED");
      setMoveMessage("");
    } else {
      setMessage("Wrong Move");
      setMoveMessage("Click highlighted pit");
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
