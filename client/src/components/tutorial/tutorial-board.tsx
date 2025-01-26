import React, { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { TutorialBottomPit, TutorialTopPit } from "./tutorial-pits";
import TutorialSeed from "./tutorial-seed";
import { TUTORIAL_STEPS } from "@/lib/constants";

interface GameBoardProps {
  game_players: any;
  game_node: any;
  system: any;
  account: any;
  gameId: string;
  message: string;
  setMoveMessage: Dispatch<SetStateAction<string | undefined>>;
  setTimeRemaining: Dispatch<SetStateAction<number>>;
  volume: number;
  setVolume: (volume: number) => void;
  setMessage: any;
}

const TutorialGameBoard: React.FC<GameBoardProps> = ({
  game_players,
  game_node,
  system,
  account,
  gameId,
  setMoveMessage,
  setTimeRemaining,
  volume,
  setVolume,
  message,
  setMessage
}) => {
  const [step, setStep] = useState(1);
  const [state, setState] = useState('initial');
  const [isComputerTurn, setIsComputerTurn] = useState(false);
  const [currentSeedIndex, setCurrentSeedIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pits, setPits] = useState(() => {
    // Initialize pits based on the first tutorial step's initial seeds
    const initialPits = [
      { player: 'opponent', pit_number: 1, seed_count: 4 },
      { player: 'opponent', pit_number: 2, seed_count: 4 },
      { player: 'opponent', pit_number: 3, seed_count: 4 },
      { player: 'opponent', pit_number: 4, seed_count: 4 },
      { player: 'opponent', pit_number: 5, seed_count: 4 },
      { player: 'opponent', pit_number: 6, seed_count: 4 },
      { player: 'opponent', pit_number: 7, seed_count: 0 }, // opponent's store
      { player: 'user', pit_number: 1, seed_count: 4 },
      { player: 'user', pit_number: 2, seed_count: 4 },
      { player: 'user', pit_number: 3, seed_count: 4 },
      { player: 'user', pit_number: 4, seed_count: 4 },
      { player: 'user', pit_number: 5, seed_count: 4 },
      { player: 'user', pit_number: 6, seed_count: 4 },
      { player: 'user', pit_number: 7, seed_count: 0 }, // player's store
    ];
    return initialPits;
  });

  // Add useEffect to manage computer turns based on tutorial steps
  useEffect(() => {
    // In tutorial mode, computer only takes turns after specific player actions
    // For now, computer never takes turns in the tutorial
    setIsComputerTurn(false);
  }, [step, state]);

  // Update pits when step or state changes
  useEffect(() => {
    const currentSeeds = TUTORIAL_STEPS[step - 1]?.[
      state === 'initial' 
        ? "initial_seeds" 
        : state === "final"
          ? "final_move_seeds"
          : "result_seeds"
    ] || [];
    
    // Count seeds in each pit
    const newPits = pits.map(pit => {
      const seedCount = currentSeeds.filter(seed => 
        seed.pit_number === pit.pit_number && 
        ((seed.type === 'player' && pit.player === 'user') || 
         (seed.type === 'opponent' && pit.player === 'opponent'))
      ).length;
      
      return {
        ...pit,
        seed_count: seedCount
      };
    });
    
    setPits(newPits);
  }, [step, state]);

  // Add this effect to handle sequential seed animations
  useEffect(() => {
    if (currentSeedIndex === -1) return;

    const currentSeeds = TUTORIAL_STEPS[step - 1]?.[state === 'initial' ? "initial_seeds" : "result_seeds"] || [];
    
    if (currentSeedIndex < currentSeeds.length) {
      const timer = setTimeout(() => {
        setCurrentSeedIndex(prev => prev + 1);
      }, 300); // Delay between each seed's animation start
      
      return () => clearTimeout(timer);
    } else {
      setCurrentSeedIndex(-1);
      setIsAnimating(false);
    }
  }, [currentSeedIndex, step, state]);

  const seeds = TUTORIAL_STEPS[step - 1]?.[
    state === 'initial' 
      ? "initial_seeds" 
      : state === "final" 
        ? "final_move_seeds" 
        : "result_seeds"
  ] || [];
  const opponent_pot_seed_count = TUTORIAL_STEPS[step - 1]?.[
    state === 'initial' 
      ? "initial_seeds" 
      : state === "final" 
        ? "final_move_seeds" 
        : "result_seeds"
  ]?.filter(item => (item.pit_number === 7 && item.type === "opponent"))?.length;
  const player_pot_seed_count = TUTORIAL_STEPS[step - 1]?.[
    state === 'initial' 
      ? "initial_seeds" 
      : state === "final" 
        ? "final_move_seeds" 
        : "result_seeds"
  ]?.filter(item => (item.pit_number === 7 && item.type === "player"))?.length;
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center mt-24">
      <div className="w-[1170px] h-[400px] flex flex-row items-center justify-between space-x-5 relative bg-[url('./assets/game_board.png')] bg-contain bg-center bg-no-repeat">
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 1 pot (opponent) */}
          {seeds.map((seed, index) => {
            const seedDetails = seed;
            if (!seedDetails) return null;

            const isPlayerSeed = seedDetails.type === 'player';
            const shouldAnimate = index <= currentSeedIndex;

            return (
              <TutorialSeed
                key={seed.seed_id}
                color={seedDetails.color}
                type={isPlayerSeed ? "player" : "opponent"}
                pit_number={seedDetails.pit_number}
                seed_number={seedDetails.seed_number}
                isNative={seedDetails.isNative}
                volume={volume}
                shouldAnimate={shouldAnimate}
                onAnimationComplete={() => {
                  if (index === seeds.length - 1) {
                    setIsAnimating(false);
                  }
                }}
              />
            );
          })}
          <div
            className={
              "w-fit max-w-14 h-fit max-h-40 flex flex-col flex-wrap -mt-2.5"
            }
          />
          <div
            className="h-[160px] flex flex-col items-center justify-center ml-[135px]"
          >
            <p className="text-white text-center">{opponent_pot_seed_count}</p>
          </div>
        </div>
        <div className="w-[700px] h-[350px] flex flex-col items-center justify-between space-y-2 absolute left-[206px]">
          {/* Player 1 */}
          <div className="h-[175px] w-full flex flex-row justify-center items-center ml-3.5">
            <div className="flex flex-row justify-center flex-1 items-center w-[100px] space-x-5">
              {pits
                .filter(pit => pit.player === 'opponent' && pit.pit_number !== 7)
                .sort((a, b) => b.pit_number - a.pit_number)
                .map((pit, i) => (
                  <TutorialTopPit 
                    key={i} 
                    amount={pit.seed_count} 
                    pit={pit.pit_number} 
                  />
                ))}
            </div>
          </div>
          {/* Player 2 */}
          <div className="h-[175px] w-full flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center flex-1 space-x-5">
              {pits
                .filter(pit => pit.player === 'user' && pit.pit_number !== 7)
                .sort((a, b) => a.pit_number - b.pit_number)
                .map((pit, i) => (
                  <TutorialBottomPit
                        key={i}
                        amount={pit.seed_count}
                        pit={pit.pit_number}
                        state={state}
                        setMoveMessage={setMoveMessage}
                        setMessage={setMessage}
                        currentStep={step}
                        setStep={setStep}
                        setState={setState}
                        message={message}
                        isComputerTurn={isComputerTurn} 
                        setCurrentSeedIndex={setCurrentSeedIndex} 
                        setIsAnimating={setIsAnimating} />
                ))}
            </div>
          </div>
        </div>
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 2 pot (player) */}
          <div
            className={"w-fit max-w-14 h-fit max-h-40 flex flex-col flex-wrap -mt-2.5"}
          />
          <div
            className="h-[160px] flex flex-col items-center justify-center mr-[135px]"
          >
            <p className="text-white text-center h-full flex flex-col items-center justify-center">
              {player_pot_seed_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialGameBoard;
