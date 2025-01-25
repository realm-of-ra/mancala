import React from "react";
import { Dispatch, SetStateAction } from "react";
import { TutorialBottomPit, TutorialTopPit } from "./tutorial-pits";
import TutorialSeed from "./tutorial-seed";

interface GameBoardProps {
  game_players: any;
  game_node: any;
  system: any;
  account: any;
  gameId: string;
  setMoveMessage: Dispatch<SetStateAction<string | undefined>>;
  setTimeRemaining: Dispatch<SetStateAction<number>>;
  volume: number;
  setVolume: (volume: number) => void;
  setMessage: any;
}

// New Tutorial Step interface
interface TutorialStep {
  step: number;
  description: string;
  seeds: {
    pit_number: number;
    seeds: Array<{ seed_id: string; seed_number: number }>;
    seed_count: number;
  }[];
  extraTurn?: boolean;
  captured?: {
    player: {
      pit: number;
      captured_pit: number;
      seeds: number[];
    };
  };
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 1,
    description: "Click on pit 1 to distribute its seeds counter-clockwise.",
    seeds: [
      { pit_number: 1, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(100 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 2, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(200 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 3, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(300 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 4, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(400 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 5, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(500 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 6, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(600 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 7, seeds: [], seed_count: 0 },
      { pit_number: 8, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(800 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 9, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(900 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 10, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(1000 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 11, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(1100 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 12, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(1200 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 13, seeds: [], seed_count: 0 }
    ]
  },
  {
    step: 2,
    description: "Click on pit 6. When your last seed lands in your store (pit 7), you get an extra turn!",
    seeds: [
      { pit_number: 1, seeds: [], seed_count: 0 },
      { pit_number: 2, seeds: [
        ...Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(200 + i + 1).toString(16)}`, seed_number: i + 1 })),
        { seed_id: `0x${(100 + 1).toString(16)}`, seed_number: 5 }
      ], seed_count: 5 },
      { pit_number: 3, seeds: [
        ...Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(300 + i + 1).toString(16)}`, seed_number: i + 1 })),
        { seed_id: `0x${(100 + 2).toString(16)}`, seed_number: 5 }
      ], seed_count: 5 },
      { pit_number: 4, seeds: [
        ...Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(400 + i + 1).toString(16)}`, seed_number: i + 1 })),
        { seed_id: `0x${(100 + 3).toString(16)}`, seed_number: 5 }
      ], seed_count: 5 },
      { pit_number: 5, seeds: [
        ...Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(500 + i + 1).toString(16)}`, seed_number: i + 1 })),
        { seed_id: `0x${(100 + 4).toString(16)}`, seed_number: 5 }
      ], seed_count: 5 },
      { pit_number: 6, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(600 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 7, seeds: [], seed_count: 0 },
      { pit_number: 8, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(800 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 9, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(900 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 10, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(1000 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 11, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(1100 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 12, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(1200 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 13, seeds: [], seed_count: 0 }
    ],
    extraTurn: true
  },
  {
    step: 3,
    description: "Click on pit 3. When your last seed lands in an empty pit on your side, you capture the seeds from the opposite pit!",
    seeds: [
      { pit_number: 1, seeds: [], seed_count: 0 },
      { pit_number: 2, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(200 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 3, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(300 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 4, seeds: [], seed_count: 0 },
      { pit_number: 5, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(500 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 6, seeds: [], seed_count: 0 },
      { pit_number: 7, seeds: [Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(700 + i + 1).toString(16)}`, seed_number: i + 1 })).find(s => s.seed_number === 4)], seed_count: 1 },
      { pit_number: 8, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(800 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 9, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(900 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 10, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(1000 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 11, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(1100 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 12, seeds: Array.from({length: 4}, (_, i) => ({ seed_id: `0x${(1200 + i + 1).toString(16)}`, seed_number: i + 1 })), seed_count: 4 },
      { pit_number: 13, seeds: [], seed_count: 0 },
    ],
    captured: {
      player: {
        pit: 4,
        captured_pit: 10,
        seeds: [1, 2, 3, 4]
      }
    }
  }
];

// Helper function to convert tutorial step seeds to game seeds
const convertTutorialStepToGameSeeds = (step: TutorialStep) => {
  const playerSeeds: any[] = [];
  const opponentSeeds: any[] = [];
  
  step.seeds.forEach(pit => {
    pit.seeds.forEach(seed => {
      const isPlayerPit = pit.pit_number <= 7;
      const gameSeed = {
        seed_id: seed.seed_id,
        player: isPlayerPit ? 'user' : 'opponent',
        pit_number: isPlayerPit ? pit.pit_number : pit.pit_number - 7,
        seed_number: seed.seed_number,
        isNative: true,
        color: isPlayerPit ? 'Green' : 'Purple'
      };
      
      if (isPlayerPit) {
        playerSeeds.push(gameSeed);
      } else {
        opponentSeeds.push(gameSeed);
      }
    });
  });
  
  return { playerSeeds, opponentSeeds };
};

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
  setMessage
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isComputerTurn, setIsComputerTurn] = React.useState(false);

  // Initialize seeds with 4 seeds in each pit except pit 7s
  const [seeds, setSeeds] = React.useState(() => {
    const initialSeeds: any[] = [];
    
    // Initialize player pits (1-6)
    for (let pit = 1; pit <= 6; pit++) {
      for (let pos = 1; pos <= 4; pos++) {
        initialSeeds.push({
          seed_id: `0x${(pit * 100 + pos).toString(16)}`,
          player: 'user',
          pit_number: pit,
          seed_number: pos,
          isNative: true,
          color: 'Green'
        });
      }
    }
    
    // Initialize opponent pits (8-13)
    for (let pit = 8; pit <= 13; pit++) {
      for (let pos = 1; pos <= 4; pos++) {
        initialSeeds.push({
          seed_id: `0x${(pit * 100 + pos).toString(16)}`,
          player: 'opponent',
          pit_number: pit - 7,
          seed_number: pos,
          isNative: true,
          color: 'Purple'
        });
      }
    }
    
    return initialSeeds;
  });

  // Add these helper functions to make the code more maintainable
  const countSeedsInPit = (seeds: any[], player: string, pitNumber: number) => {
    return seeds.filter(seed => 
      seed.player === player && 
      seed.pit_number === pitNumber
    ).length;
  };

  // Update pits initialization to be more concise
  const [pits, setPits] = React.useState(() => {
    const initialPits = [];
    // User pits (1-7)
    for (let i = 1; i <= 7; i++) {
      const pitSeeds = seeds.filter(s => s.player === 'user' && s.pit_number === i);
      initialPits.push({
        player: 'user',
        pit_number: i,
        seed_count: pitSeeds.length,
        seed_numbers: pitSeeds.map(s => s.seed_number).sort((a, b) => a - b)
      });
    }
    // Opponent pits (1-7)
    for (let i = 1; i <= 7; i++) {
      const pitSeeds = seeds.filter(s => s.player === 'opponent' && s.pit_number === i);
      initialPits.push({
        player: 'opponent',
        pit_number: i,
        seed_count: pitSeeds.length,
        seed_numbers: pitSeeds.map(s => s.seed_number).sort((a, b) => a - b)
      });
    }
    return initialPits;
  });

  // Set initial tutorial message
  React.useEffect(() => {
    setMessage(TUTORIAL_STEPS[0].description);
  }, []);

  const getSeed = (seedId: string | number) => {
    const hexSeedId = typeof seedId === 'number' ? `0x${seedId.toString(16)}` : seedId;
    const seed = seeds.find((seed) => seed.seed_id === hexSeedId);
    if (!seed) return null;
    return seed;
  };

  // Mock game state
  const mockGameState = {
    player_one: 'player_one',
    player_two: 'player_two',
    status: 'InProgress',
    winner: null
  };

  // Calculate pot counts
  const player_pot_seed_count = pits.find(p => p.player === 'user' && p.pit_number === 7)?.seed_count || 0;
  const opponent_pot_seed_count = pits.find(p => p.player === 'opponent' && p.pit_number === 7)?.seed_count || 0;

  // Handle tutorial moves with new step format
  const handleTutorialMove = (pit: number) => {
    if (isComputerTurn) return;

    const currentTutorialStep = TUTORIAL_STEPS[currentStep];
    const nextTutorialStep = TUTORIAL_STEPS[currentStep + 1];
    
    // Check if this is the correct pit for the current step
    const expectedPit = (() => {
      if (currentStep === 0) return 1;
      if (currentStep === 1) return 6;
      if (currentStep === 2) return 3;
      return null;
    })();
    
    if (pit !== expectedPit) return;

    // Convert the next step's seeds configuration to our seeds format
    const { playerSeeds, opponentSeeds } = convertTutorialStepToGameSeeds(nextTutorialStep);
    
    // Combine and set the new seeds
    setSeeds([...playerSeeds, ...opponentSeeds]);

    // Update pits state based on the new seeds
    setPits(prevPits => {
      return prevPits.map(pit => {
        const seedCount = pit.player === 'user' 
          ? playerSeeds.filter(s => s.pit_number === pit.pit_number).length
          : opponentSeeds.filter(s => s.pit_number === pit.pit_number).length;
        return { ...pit, seed_count: seedCount };
      });
    });

    // Move to next step and update message
    if (nextTutorialStep) {
      setMessage(nextTutorialStep.description);
      setCurrentStep(prev => prev + 1);
      
      if (!nextTutorialStep.extraTurn) {
        setIsComputerTurn(true);
        setTimeout(() => {
          setIsComputerTurn(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center mt-24">
      <div className="w-[1170px] h-[400px] flex flex-row items-center justify-between space-x-5 relative bg-[url('./assets/game_board.png')] bg-contain bg-center bg-no-repeat">
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 1 pot (opponent) */}
          {seeds.map((seed) => {
            const seedDetails = seed;
            if (!seedDetails) return null;

            const isPlayerSeed = seedDetails.player === 'user';

            return (
              <TutorialSeed
                key={seed.seed_id}
                color={seedDetails.color}
                type={isPlayerSeed ? "player" : "opponent"}
                pit_number={seedDetails.pit_number}
                seed_number={seedDetails.seed_number}
                isNative={seedDetails.isNative}
                volume={volume}
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
                    address={account.account?.address || ''}
                    pit={pit.pit_number}
                    userAccount={account}
                    system={system}
                    game_id={gameId}
                    setMoveMessage={setMoveMessage}
                    status={mockGameState.status}
                    winner={mockGameState.winner || ""}
                    setMessage={setMessage}
                    setTimeRemaining={setTimeRemaining}
                    max_block_between_move={0}
                    seeds={seeds}
                    setSeeds={setSeeds}
                    pits={pits}
                    setPits={setPits}
                    onMove={handleTutorialMove}
                    currentStep={currentStep}
                    isComputerTurn={isComputerTurn}
                  />
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
