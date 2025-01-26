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

// Updated Tutorial Step interface
interface TutorialStep {
  step: number;
  description: string;
  message: string;
  initial_seeds: {
    seed_id: string;
    color: string;
    type: "player" | "opponent";
    pit_number: number;
    seed_number: number;
    isNative: boolean;
    volume: number;
  }[];
  result_seeds: {
    seed_id: string;
    color: string;
    type: "player" | "opponent";
    pit_number: number;
    seed_number: number;
    isNative: boolean;
    volume: number;
  }[];
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 1,
    description: "Click on pit 1 to see how seeds move counter-clockwise around the board.",
    message: "Let's start with a simple move. Click pit 1 to distribute its seeds.",
    initial_seeds: [
      // Player's seeds (24 total, 4 in each pit 1-6)
      { seed_id: "0x1", color: "Green", type: "player", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2", color: "Green", type: "player", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x3", color: "Green", type: "player", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x4", color: "Green", type: "player", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x9", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0xa", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0xb", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0xc", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
      
      // Opponent's seeds (24 total, 4 in each pit 1-6)
      { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
      
      { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
      { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
      { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
      { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
    ],
    result_seeds: [
        // Player's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x1", color: "Green", type: "player", pit_number: 2, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x2", color: "Green", type: "player", pit_number: 3, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x3", color: "Green", type: "player", pit_number: 4, seed_number: 5, isNative: true, volume: 1 },
        { seed_id: "0x4", color: "Green", type: "player", pit_number: 5, seed_number: 5, isNative: true, volume: 1 },
        
        { seed_id: "0x5", color: "Green", type: "player", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x6", color: "Green", type: "player", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x7", color: "Green", type: "player", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x8", color: "Green", type: "player", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x9", color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0xa", color: "Green", type: "player", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0xb", color: "Green", type: "player", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0xc", color: "Green", type: "player", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0xd", color: "Green", type: "player", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0xe", color: "Green", type: "player", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0xf", color: "Green", type: "player", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x10", color: "Green", type: "player", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x11", color: "Green", type: "player", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x12", color: "Green", type: "player", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x13", color: "Green", type: "player", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x14", color: "Green", type: "player", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x15", color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x16", color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x17", color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x18", color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1 },
        
        // Opponent's seeds (24 total, 4 in each pit 1-6)
        { seed_id: "0x19", color: "Purple", type: "opponent", pit_number: 1, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1a", color: "Purple", type: "opponent", pit_number: 1, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1b", color: "Purple", type: "opponent", pit_number: 1, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x1c", color: "Purple", type: "opponent", pit_number: 1, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x1d", color: "Purple", type: "opponent", pit_number: 2, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x1e", color: "Purple", type: "opponent", pit_number: 2, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x1f", color: "Purple", type: "opponent", pit_number: 2, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x20", color: "Purple", type: "opponent", pit_number: 2, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x21", color: "Purple", type: "opponent", pit_number: 3, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x22", color: "Purple", type: "opponent", pit_number: 3, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x23", color: "Purple", type: "opponent", pit_number: 3, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x24", color: "Purple", type: "opponent", pit_number: 3, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x25", color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x26", color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x27", color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x28", color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x29", color: "Purple", type: "opponent", pit_number: 5, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2a", color: "Purple", type: "opponent", pit_number: 5, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2b", color: "Purple", type: "opponent", pit_number: 5, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x2c", color: "Purple", type: "opponent", pit_number: 5, seed_number: 4, isNative: true, volume: 1 },
        
        { seed_id: "0x2d", color: "Purple", type: "opponent", pit_number: 6, seed_number: 1, isNative: true, volume: 1 },
        { seed_id: "0x2e", color: "Purple", type: "opponent", pit_number: 6, seed_number: 2, isNative: true, volume: 1 },
        { seed_id: "0x2f", color: "Purple", type: "opponent", pit_number: 6, seed_number: 3, isNative: true, volume: 1 },
        { seed_id: "0x30", color: "Purple", type: "opponent", pit_number: 6, seed_number: 4, isNative: true, volume: 1 }
      ]
  },
  {
    step: 2,
    description: "Click on pit 6. When your last seed lands in your store (pit 7), you get an extra turn!",
    message: "Now try getting an extra turn by landing in your store.",
    initial_seeds: [
      {
          color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1,
          seed_id: ""
      }
    ],
    result_seeds: [
      {
          color: "Green", type: "player", pit_number: 6, seed_number: 1, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Green", type: "player", pit_number: 6, seed_number: 2, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Green", type: "player", pit_number: 6, seed_number: 3, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Green", type: "player", pit_number: 6, seed_number: 4, isNative: true, volume: 1,
          seed_id: ""
      }
    ]
  },
  {
    step: 3,
    description: "Click on pit 3. When your last seed lands in an empty pit on your side, you capture the seeds from the opposite pit!",
    message: "Let's try capturing some seeds from your opponent.",
    initial_seeds: [
      {
          color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1,
          seed_id: ""
      }
    ],
    result_seeds: [
      {
          color: "Green", type: "player", pit_number: 3, seed_number: 1, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Purple", type: "opponent", pit_number: 4, seed_number: 1, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Purple", type: "opponent", pit_number: 4, seed_number: 2, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Purple", type: "opponent", pit_number: 4, seed_number: 3, isNative: true, volume: 1,
          seed_id: ""
      },
      {
          color: "Purple", type: "opponent", pit_number: 4, seed_number: 4, isNative: true, volume: 1,
          seed_id: ""
      }
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

  // Initialize seeds based on current tutorial step
  const [seeds, setSeeds] = React.useState(() => {
    const initialSeeds: any[] = [];
    const currentTutorialStep = TUTORIAL_STEPS[0];
    
    currentTutorialStep.initial_seeds.forEach((seedConfig) => {
      initialSeeds.push({
        seed_id: seedConfig.seed_id,
        player: seedConfig.type === 'player' ? 'user' : 'opponent',
        pit_number: seedConfig.pit_number,
        seed_number: seedConfig.seed_number,
        isNative: seedConfig.isNative,
        color: seedConfig.color
      });
    });
    
    return initialSeeds;
  });

  // Add these helper functions to make the code more maintainable
  const countSeedsInPit = (seeds: any[], player: string, pitNumber: number) => {
    return seeds.filter(seed => 
      seed.player === player && 
      seed.pit_number === pitNumber
    ).length;
  };

  // Update pits initialization to match the correct order
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
    // Opponent pits (6-1, 7)
    for (let i = 6; i >= 1; i--) {
      const pitSeeds = seeds.filter(s => s.player === 'opponent' && s.pit_number === i);
      initialPits.push({
        player: 'opponent',
        pit_number: i,
        seed_count: pitSeeds.length,
        seed_numbers: pitSeeds.map(s => s.seed_number).sort((a, b) => a - b)
      });
    }
    // Add opponent's store (pit 7)
    initialPits.push({
      player: 'opponent',
      pit_number: 7,
      seed_count: 0,
      seed_numbers: []
    });
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

  const resetBoardToInitial = () => {
    const nextStep = currentStep + 1;
    if (nextStep >= TUTORIAL_STEPS.length) return;

    const initialSeeds: any[] = [];
    const nextTutorialStep = TUTORIAL_STEPS[nextStep];
    
    nextTutorialStep.initial_seeds.forEach((seedConfig) => {
      initialSeeds.push({
        seed_id: seedConfig.seed_id,
        player: seedConfig.type === 'player' ? 'user' : 'opponent',
        pit_number: seedConfig.pit_number,
        seed_number: seedConfig.seed_number,
        isNative: seedConfig.isNative,
        color: seedConfig.color
      });
    });
    
    setSeeds(initialSeeds);
    setPits(prevPits => {
      return prevPits.map(pit => {
        const seedCount = initialSeeds.filter(
          s => s.player === pit.player && s.pit_number === pit.pit_number
        ).length;
        return { ...pit, seed_count: seedCount };
      });
    });
  };

  const handleMove = (selectedPit: number) => {
    if (isComputerTurn) return;

    // Get the result seeds for the current step
    const currentStepResult = TUTORIAL_STEPS[currentStep].result_seeds;
    
    // Convert result seeds to the format used by the game
    const newSeeds = currentStepResult.map(seedConfig => ({
      seed_id: seedConfig.seed_id,
      player: seedConfig.type === 'player' ? 'user' : 'opponent',
      pit_number: seedConfig.pit_number,
      seed_number: seedConfig.seed_number,
      isNative: seedConfig.isNative,
      color: seedConfig.color
    }));

    // Update seeds and pits state
    setSeeds(newSeeds);
    setPits(prevPits => {
      return prevPits.map(pit => {
        const seedCount = newSeeds.filter(
          s => s.player === pit.player && s.pit_number === pit.pit_number
        ).length;
        return { ...pit, seed_count: seedCount };
      });
    });

    const getAnimationDuration = (numSeeds: number) => {
      const lastSeedDelay = numSeeds * 0.75; // Delay for the last seed
      const transitionDuration = 2.5; // Animation duration from tutorial-seed.tsx
      return (lastSeedDelay + transitionDuration) * 1000; // Convert to milliseconds
    };

    const animationDelay = getAnimationDuration(currentStepResult.length);

    // Wait for seed animation to complete before proceeding
    setTimeout(() => {
      setIsComputerTurn(true);
      setMessage("Computer is thinking...");
      
      setTimeout(() => {
        resetBoardToInitial();
        setIsComputerTurn(false);
        setCurrentStep(prev => prev + 1);
        if (currentStep + 1 < TUTORIAL_STEPS.length) {
          setMessage(TUTORIAL_STEPS[currentStep + 1].description);
        }
      }, 2000);
    }, animationDelay);
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
                    onMove={handleMove}
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
