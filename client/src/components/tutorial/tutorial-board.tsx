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

// Add new tutorial steps type
interface TutorialStep {
  user_pit: number;
  player_seeds: {
    seed_id: string;
    player: 'user';
    pit_number: number;
    seed_number: number;
    isNative: boolean;
    color: 'Green' | 'Purple';
  }[];
  opponent_seeds: {
    seed_id: string;
    player: 'opponent';
    pit_number: number;
    seed_number: number;
    isNative: boolean;
    color: 'Green' | 'Purple';
  }[];
  message: string;
  computer_message?: string;
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    user_pit: 3,
    message: "Welcome to Mancala! Let's start with a simple move. Click pit 3 to distribute its seeds counterclockwise.",
    computer_message: "Great! Now watch how the computer responds...",
    player_seeds: [
      // Pit 1 (4 seeds)
      { seed_id: '0x1', player: 'user', pit_number: 1, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x2', player: 'user', pit_number: 1, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0x3', player: 'user', pit_number: 1, seed_number: 3, isNative: true, color: 'Green' },
      { seed_id: '0x4', player: 'user', pit_number: 1, seed_number: 4, isNative: true, color: 'Green' },
      // Pit 2 (4 seeds)
      { seed_id: '0x5', player: 'user', pit_number: 2, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x6', player: 'user', pit_number: 2, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0x7', player: 'user', pit_number: 2, seed_number: 3, isNative: true, color: 'Green' },
      { seed_id: '0x8', player: 'user', pit_number: 2, seed_number: 4, isNative: true, color: 'Green' },
      // Pit 3 (4 seeds)
      { seed_id: '0x9', player: 'user', pit_number: 3, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0xa', player: 'user', pit_number: 3, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0xb', player: 'user', pit_number: 3, seed_number: 3, isNative: true, color: 'Green' },
      { seed_id: '0xc', player: 'user', pit_number: 3, seed_number: 4, isNative: true, color: 'Green' },
      // Pit 4 (4 seeds)
      { seed_id: '0xd', player: 'user', pit_number: 4, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0xe', player: 'user', pit_number: 4, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0xf', player: 'user', pit_number: 4, seed_number: 3, isNative: true, color: 'Green' },
      { seed_id: '0x10', player: 'user', pit_number: 4, seed_number: 4, isNative: true, color: 'Green' },
      // Pit 5 (4 seeds)
      { seed_id: '0x11', player: 'user', pit_number: 5, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x12', player: 'user', pit_number: 5, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0x13', player: 'user', pit_number: 5, seed_number: 3, isNative: true, color: 'Green' },
      { seed_id: '0x14', player: 'user', pit_number: 5, seed_number: 4, isNative: true, color: 'Green' },
      // Pit 6 (4 seeds)
      { seed_id: '0x15', player: 'user', pit_number: 6, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x16', player: 'user', pit_number: 6, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0x17', player: 'user', pit_number: 6, seed_number: 3, isNative: true, color: 'Green' },
      { seed_id: '0x18', player: 'user', pit_number: 6, seed_number: 4, isNative: true, color: 'Green' },
    ],
    opponent_seeds: [
      // Pit 1 (4 seeds)
      { seed_id: '0x19', player: 'opponent', pit_number: 1, seed_number: 1, isNative: true, color: 'Purple' },
      { seed_id: '0x1a', player: 'opponent', pit_number: 1, seed_number: 2, isNative: true, color: 'Purple' },
      { seed_id: '0x1b', player: 'opponent', pit_number: 1, seed_number: 3, isNative: true, color: 'Purple' },
      { seed_id: '0x1c', player: 'opponent', pit_number: 1, seed_number: 4, isNative: true, color: 'Purple' },
      // Pit 2 (4 seeds)
      { seed_id: '0x1d', player: 'opponent', pit_number: 2, seed_number: 1, isNative: true, color: 'Purple' },
      { seed_id: '0x1e', player: 'opponent', pit_number: 2, seed_number: 2, isNative: true, color: 'Purple' },
      { seed_id: '0x1f', player: 'opponent', pit_number: 2, seed_number: 3, isNative: true, color: 'Purple' },
      { seed_id: '0x20', player: 'opponent', pit_number: 2, seed_number: 4, isNative: true, color: 'Purple' },
      // Pit 3 (4 seeds)
      { seed_id: '0x21', player: 'opponent', pit_number: 3, seed_number: 1, isNative: true, color: 'Purple' },
      { seed_id: '0x22', player: 'opponent', pit_number: 3, seed_number: 2, isNative: true, color: 'Purple' },
      { seed_id: '0x23', player: 'opponent', pit_number: 3, seed_number: 3, isNative: true, color: 'Purple' },
      { seed_id: '0x24', player: 'opponent', pit_number: 3, seed_number: 4, isNative: true, color: 'Purple' },
      // Pit 4 (4 seeds)
      { seed_id: '0x25', player: 'opponent', pit_number: 4, seed_number: 1, isNative: true, color: 'Purple' },
      { seed_id: '0x26', player: 'opponent', pit_number: 4, seed_number: 2, isNative: true, color: 'Purple' },
      { seed_id: '0x27', player: 'opponent', pit_number: 4, seed_number: 3, isNative: true, color: 'Purple' },
      { seed_id: '0x28', player: 'opponent', pit_number: 4, seed_number: 4, isNative: true, color: 'Purple' },
      // Pit 5 (4 seeds)
      { seed_id: '0x29', player: 'opponent', pit_number: 5, seed_number: 1, isNative: true, color: 'Purple' },
      { seed_id: '0x2a', player: 'opponent', pit_number: 5, seed_number: 2, isNative: true, color: 'Purple' },
      { seed_id: '0x2b', player: 'opponent', pit_number: 5, seed_number: 3, isNative: true, color: 'Purple' },
      { seed_id: '0x2c', player: 'opponent', pit_number: 5, seed_number: 4, isNative: true, color: 'Purple' },
      // Pit 6 (4 seeds)
      { seed_id: '0x2d', player: 'opponent', pit_number: 6, seed_number: 1, isNative: true, color: 'Purple' },
      { seed_id: '0x2e', player: 'opponent', pit_number: 6, seed_number: 2, isNative: true, color: 'Purple' },
      { seed_id: '0x2f', player: 'opponent', pit_number: 6, seed_number: 3, isNative: true, color: 'Purple' },
      { seed_id: '0x30', player: 'opponent', pit_number: 6, seed_number: 4, isNative: true, color: 'Purple' },
    ]
  },
  {
    user_pit: 6,
    message: "Now, let's try to get seeds in your store (the right pit). Select pit 6 - notice how the last seed lands in your store!",
    computer_message: "When you land in your store, you get an extra turn! The computer will now make its move...",
    player_seeds: [
      // Pit 1 (4 seeds)
      { seed_id: '0x1', player: 'user', pit_number: 1, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x2', player: 'user', pit_number: 1, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0x3', player: 'user', pit_number: 1, seed_number: 3, isNative: true, color: 'Green' },
      { seed_id: '0x4', player: 'user', pit_number: 1, seed_number: 4, isNative: true, color: 'Green' },
      // Pit 2 (4 seeds)
      { seed_id: '0x5', player: 'user', pit_number: 2, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x6', player: 'user', pit_number: 2, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0x7', player: 'user', pit_number: 2, seed_number: 3, isNative: true, color: 'Green' },
      { seed_id: '0x8', player: 'user', pit_number: 2, seed_number: 4, isNative: true, color: 'Green' },
      // Pit 3 (3 seeds - one moved)
      { seed_id: '0x9', player: 'user', pit_number: 3, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0xa', player: 'user', pit_number: 3, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0xb', player: 'user', pit_number: 3, seed_number: 3, isNative: true, color: 'Green' },
      // Pit 4 (5 seeds - gained one)
      { seed_id: '0xd', player: 'user', pit_number: 4, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0xe', player: 'user', pit_number: 4, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0xf', player: 'user', pit_number: 4, seed_number: 3, isNative: true, color: 'Green' },
      { seed_id: '0x10', player: 'user', pit_number: 4, seed_number: 4, isNative: true, color: 'Green' },
      { seed_id: '0xc', player: 'user', pit_number: 4, seed_number: 5, isNative: true, color: 'Green' },
      // Pit 5 (4 seeds)
      { seed_id: '0x11', player: 'user', pit_number: 5, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x12', player: 'user', pit_number: 5, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0x13', player: 'user', pit_number: 5, seed_number: 3, isNative: true, color: 'Green' },
      { seed_id: '0x14', player: 'user', pit_number: 5, seed_number: 4, isNative: true, color: 'Green' },
      // Store (pit 7) - gained one seed
      { seed_id: '0x18', player: 'user', pit_number: 7, seed_number: 1, isNative: true, color: 'Green' }
    ],
    opponent_seeds: [
      // ... opponent seeds remain the same as step 1 ...
      // Copy all opponent seeds from step 1, they haven't changed
    ]
  },
  {
    user_pit: 4,
    message: "Let's learn about capturing! When your last seed lands in an empty pit on your side, you capture opposite seeds. Try pit 4!",
    computer_message: "Excellent capture! Watch the computer's move...",
    player_seeds: [
      { seed_id: '0x31', player: 'user', pit_number: 4, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x32', player: 'user', pit_number: 5, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x33', player: 'user', pit_number: 5, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0x34', player: 'user', pit_number: 6, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x35', player: 'user', pit_number: 7, seed_number: 1, isNative: false, color: 'Green' },
      { seed_id: '0x36', player: 'user', pit_number: 7, seed_number: 2, isNative: false, color: 'Green' }
    ],
    opponent_seeds: [
      { seed_id: '0x41', player: 'opponent', pit_number: 1, seed_number: 1, isNative: true, color: 'Purple' },
      { seed_id: '0x42', player: 'opponent', pit_number: 1, seed_number: 2, isNative: true, color: 'Purple' },
      { seed_id: '0x43', player: 'opponent', pit_number: 2, seed_number: 1, isNative: true, color: 'Purple' },
      { seed_id: '0x44', player: 'opponent', pit_number: 2, seed_number: 2, isNative: true, color: 'Purple' }
    ]
  },
  {
    user_pit: 1,
    message: "Final lesson: Planning ahead! Choose pit 1 to spread seeds across multiple pits.",
    computer_message: "Well done! You've completed the basic tutorial!",
    player_seeds: [
      { seed_id: '0x51', player: 'user', pit_number: 1, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x52', player: 'user', pit_number: 1, seed_number: 2, isNative: true, color: 'Green' },
      { seed_id: '0x53', player: 'user', pit_number: 2, seed_number: 1, isNative: true, color: 'Green' },
      { seed_id: '0x54', player: 'user', pit_number: 3, seed_number: 1, isNative: true, color: 'Green' }
    ],
    opponent_seeds: [
      { seed_id: '0x61', player: 'opponent', pit_number: 4, seed_number: 1, isNative: true, color: 'Purple' },
      { seed_id: '0x62', player: 'opponent', pit_number: 5, seed_number: 1, isNative: true, color: 'Purple' },
      { seed_id: '0x63', player: 'opponent', pit_number: 6, seed_number: 1, isNative: true, color: 'Purple' }
    ]
  }
];

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

  // Initialize seeds based on first tutorial step
  const [seeds, setSeeds] = React.useState(() => {
    const firstStep = TUTORIAL_STEPS[0];
    return [...firstStep.player_seeds, ...firstStep.opponent_seeds];
  });

  // Update pits initialization to match first tutorial step
  const [pits, setPits] = React.useState(() => {
    const initialPits = [];
    // User pits (1-6)
    for (let i = 1; i <= 6; i++) {
      const seedCount = TUTORIAL_STEPS[0].player_seeds.filter(
        seed => seed.pit_number === i
      ).length;
      initialPits.push({ player: 'user', pit_number: i, seed_count: seedCount });
    }
    // User store (pit 7)
    const userStoreCount = TUTORIAL_STEPS[0].player_seeds.filter(
      seed => seed.pit_number === 7
    ).length;
    initialPits.push({ player: 'user', pit_number: 7, seed_count: userStoreCount });

    // Opponent pits (1-6)
    for (let i = 1; i <= 6; i++) {
      const seedCount = TUTORIAL_STEPS[0].opponent_seeds.filter(
        seed => seed.pit_number === i
      ).length;
      initialPits.push({ player: 'opponent', pit_number: i, seed_count: seedCount });
    }
    // Opponent store (pit 7)
    const opponentStoreCount = TUTORIAL_STEPS[0].opponent_seeds.filter(
      seed => seed.pit_number === 7
    ).length;
    initialPits.push({ player: 'opponent', pit_number: 7, seed_count: opponentStoreCount });
    
    return initialPits;
  });

  // Set initial tutorial message
  React.useEffect(() => {
    setMessage(TUTORIAL_STEPS[0].message);
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

  // Modify handleTutorialMove to update seeds and pits
  const handleTutorialMove = (pit: number) => {
    const currentTutorialStep = TUTORIAL_STEPS[currentStep];
    
    if (pit !== currentTutorialStep.user_pit) {
      setMessage(`Please click pit ${currentTutorialStep.user_pit} for this tutorial step`);
      return;
    }

    if (isComputerTurn) {
      setMessage("Please wait for the computer's move to complete");
      return;
    }

    // Update seeds to match the next step's configuration
    const nextStep = TUTORIAL_STEPS[currentStep + 1];
    if (nextStep) {
      // Update seeds
      setSeeds([...nextStep.player_seeds, ...nextStep.opponent_seeds]);

      // Update pits
      setPits(() => {
        const newPits = [];
        // User pits (1-6)
        for (let i = 1; i <= 6; i++) {
          const seedCount = nextStep.player_seeds.filter(
            seed => seed.pit_number === i
          ).length;
          newPits.push({ player: 'user', pit_number: i, seed_count: seedCount });
        }
        // User store (pit 7)
        const userStoreCount = nextStep.player_seeds.filter(
          seed => seed.pit_number === 7
        ).length;
        newPits.push({ player: 'user', pit_number: 7, seed_count: userStoreCount });

        // Opponent pits (1-6)
        for (let i = 1; i <= 6; i++) {
          const seedCount = nextStep.opponent_seeds.filter(
            seed => seed.pit_number === i
          ).length;
          newPits.push({ player: 'opponent', pit_number: i, seed_count: seedCount });
        }
        // Opponent store (pit 7)
        const opponentStoreCount = nextStep.opponent_seeds.filter(
          seed => seed.pit_number === 7
        ).length;
        newPits.push({ player: 'opponent', pit_number: 7, seed_count: opponentStoreCount });
        
        return newPits;
      });

      // Update message and trigger computer's turn
      setMessage(currentTutorialStep.computer_message || "Computer is thinking...");
      setIsComputerTurn(true);

      // Simulate computer's move after delay
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsComputerTurn(false);
        if (TUTORIAL_STEPS[currentStep + 1]) {
          setMessage(TUTORIAL_STEPS[currentStep + 1].message);
        } else {
          setMessage("Tutorial completed! Well done!");
        }
      }, 2000);
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
