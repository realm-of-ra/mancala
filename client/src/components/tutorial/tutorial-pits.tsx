import { Dispatch, SetStateAction } from "react";
import { UseAccountResult } from "@starknet-react/core";
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
  address,
  pit,
  game_id,
  status,
  winner,
  userAccount,
  system,
  setTimeRemaining,
  max_block_between_move,
  setMoveMessage,
  setMessage,
  seeds,
  setSeeds,
  pits,
  setPits
}: {
  amount: number;
  address: string;
  pit: number;
  winner: string;
  game_id: string;
  status: string;
  userAccount?: UseAccountResult;
  system: any;
  max_block_between_move: number;
  setMoveMessage: Dispatch<SetStateAction<string | undefined>>;
  setTimeRemaining: Dispatch<SetStateAction<number>>;
  setMessage: any;
  seeds: any[];
  setSeeds: (seeds: any[]) => void;
  pits: any[];
  setPits: (pits: any[]) => void;
}) {
  // Helper function to evaluate a move's score
  const evaluateMove = (testPits: any[], testSeeds: any[], pitNumber: number) => {
    let score = 0;
    const currentPit = pitNumber;
    const currentPlayer = 'opponent';
    const seedCount = testPits.find(p => p.player === 'opponent' && p.pit_number === pitNumber)?.seed_count || 0;
    
    // Prioritize moves that end in store
    if ((currentPit + seedCount) % 13 === 0) {
      score += 5;
    }
    
    // Prioritize moves that capture seeds
    if ((currentPit + seedCount) <= 6) {
      const landingPit = currentPit + seedCount;
      const oppositePit = 7 - landingPit;
      const oppositeSeeds = testPits.find(p => p.player === 'user' && p.pit_number === oppositePit)?.seed_count || 0;
      if (oppositeSeeds > 0) {
        score += oppositeSeeds;
      }
    }
    
    // Prioritize moves from pits with more seeds
    score += seedCount * 0.5;
    
    return score;
  };

  // Computer move function
  const makeComputerMove = async () => {
    // Get all valid moves
    const validMoves = pits
      .filter(pit => pit.player === 'opponent' && pit.pit_number !== 7 && pit.seed_count > 0)
      .map(pit => ({
        pit: pit.pit_number,
        score: evaluateMove(pits, seeds, pit.pit_number)
      }))
      .sort((a, b) => b.score - a.score);

    if (validMoves.length === 0) return;

    // Choose the best move
    const bestMove = validMoves[0].pit;
    
    // Execute the move
    const newPits = [...pits];
    const newSeeds = [...seeds];
    
    // Get seeds from selected pit
    const selectedPitSeeds = seeds
      .filter(seed => seed.player === 'opponent' && seed.pit_number === bestMove)
      .sort((a, b) => a.seed_number - b.seed_number);
    
    // Empty the selected pit
    const selectedPitIndex = newPits.findIndex(
      p => p.player === 'opponent' && p.pit_number === bestMove
    );
    newPits[selectedPitIndex].seed_count = 0;

    // Calculate total animation time for computer move
    const totalAnimationTime = selectedPitSeeds.length * 750 + 600;

    // Distribute seeds
    let currentPit = bestMove;
    let currentPlayer = 'opponent';
    let lastSeedInStore = false;
    const seedsToDistribute = selectedPitSeeds.length;

    selectedPitSeeds.forEach((seed, index) => {
      if (currentPlayer === 'opponent') {
        currentPit++;
        if (currentPit > 7) {
          currentPlayer = 'user';
          currentPit = 1;
        }
      } else {
        currentPit++;
        if (currentPit > 6) {
          currentPlayer = 'opponent';
          currentPit = 1;
        }
      }

      // Skip player's store
      if (currentPlayer === 'user' && currentPit === 7) {
        currentPlayer = 'opponent';
        currentPit = 1;
      }

      // Find target pit's current seed count
      const targetPitIndex = newPits.findIndex(
        p => p.player === currentPlayer && p.pit_number === currentPit
      );
      const currentSeedCount = newPits[targetPitIndex].seed_count;

      // Update seed position and number
      const updatedSeed = {
        ...seed,
        player: currentPlayer,
        pit_number: currentPit,
        seed_number: currentSeedCount + 1,
        isNative: currentPlayer === seed.player
      };
      
      const seedIndex = newSeeds.findIndex(s => s.seed_id === seed.seed_id);
      newSeeds[seedIndex] = updatedSeed;

      // Update pit count
      newPits[targetPitIndex].seed_count++;

      // Check if last seed landed in store
      if (index === seedsToDistribute - 1) {
        lastSeedInStore = currentPlayer === 'opponent' && currentPit === 7;
      }
    });

    // Update state
    setSeeds(newSeeds);
    setPits(newPits);

    // Set appropriate message
    if (lastSeedInStore) {
      setTimeout(() => {
        setMessage("Computer gets another turn!");
        makeComputerMove();
      }, totalAnimationTime);
    } else {
      setTimeout(() => {
        setMessage("Your turn!");
      }, totalAnimationTime);
    }
  };

  const handleMove = async () => {
    setMoveMessage(undefined);
    setMessage(`You have selected pit ${pit}`);

    if (amount === 0) {
      setMoveMessage("Cannot move from empty pit");
      return;
    }

    // Create copies of the state to modify
    const newPits = [...pits];
    const newSeeds = [...seeds];
    
    // Get the seeds from the selected pit
    const selectedPitSeeds = seeds.filter(
      seed => seed.player === 'user' && seed.pit_number === pit
    ).sort((a, b) => a.seed_number - b.seed_number);
    
    // Empty the selected pit
    const selectedPitIndex = newPits.findIndex(
      p => p.player === 'user' && p.pit_number === pit
    );
    newPits[selectedPitIndex].seed_count = 0;

    // Calculate total animation time based on number of seeds
    const totalAnimationTime = selectedPitSeeds.length * 750 + 600;

    // Distribute seeds counter-clockwise
    let currentPit = pit;
    let currentPlayer = 'user';
    let lastSeedInStore = false;
    const seedsToDistribute = selectedPitSeeds.length;

    selectedPitSeeds.forEach((seed, index) => {
      // Move to next pit
      if (currentPlayer === 'user') {
        currentPit++;
        if (currentPit > 7) {
          currentPlayer = 'opponent';
          currentPit = 1;
        }
      } else {
        currentPit++;
        if (currentPit > 6) {
          currentPlayer = 'user';
          currentPit = 1;
        }
      }

      // Skip opponent's store
      if (currentPlayer === 'opponent' && currentPit === 7) {
        currentPlayer = 'user';
        currentPit = 1;
      }

      // Find target pit's current seed count
      const targetPitIndex = newPits.findIndex(
        p => p.player === currentPlayer && p.pit_number === currentPit
      );
      const currentSeedCount = newPits[targetPitIndex].seed_count;

      // Update seed position and number
      const updatedSeed = {
        ...seed,
        player: currentPlayer,
        pit_number: currentPit,
        seed_number: currentSeedCount + 1,
        isNative: currentPlayer === seed.player
      };
      
      const seedIndex = newSeeds.findIndex(s => s.seed_id === seed.seed_id);
      newSeeds[seedIndex] = updatedSeed;

      // Update pit count
      newPits[targetPitIndex].seed_count++;

      // Check if last seed landed in store
      if (index === seedsToDistribute - 1) {
        lastSeedInStore = currentPlayer === 'user' && currentPit === 7;
      }
    });

    // Update state
    setSeeds(newSeeds);
    setPits(newPits);

    // Set appropriate message and trigger computer move after animations complete
    if (lastSeedInStore) {
      setTimeout(() => {
        setMessage("Extra turn! Go again!");
      }, totalAnimationTime);
    } else {
      // First wait for all seeds to reach their destination
      setTimeout(() => {
        setMessage("Computer is thinking...");
        // Then add a small delay before computer makes its move
        setTimeout(() => {
          makeComputerMove();
        }, 500);
      }, totalAnimationTime);
    }
  };

  return (
    <div className="flex-col h-[125px] w-full flex justify-between items-center space-y-4 -mt-12 ml-3">
      <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
        <div
          className={clsx("w-[90px] h-[80px] flex flex-col items-center justify-center hover:cursor-pointer rounded-full z-40 hover:bg-black/20",
            pit == 1 && "ml-0.5 -mt-1", pit == 2 && "ml-1 -mt-1", pit == 3 && "ml-1.5 -mt-1", pit == 4 && "ml-2 -mt-1", pit == 5 && "-mr-3 -mt-1", pit == 6 && "-mr-3.5 -mt-1")}
          onClick={handleMove}
        />
      </div>
      <div className="rounded-lg w-fit">
        <p className="text-white ml-2">{amount}</p>
      </div>
    </div>
  );
}
