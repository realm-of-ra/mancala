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
  // Initialize local state for seeds
  const [seeds, setSeeds] = React.useState(() => {
    const initialSeeds = [];
    // User seeds (1-24): each pit has seeds numbered 1-4 within each pit
    for (let pit = 1; pit <= 6; pit++) {
      for (let seedPosition = 1; seedPosition <= 4; seedPosition++) {
        const seedId = (pit - 1) * 4 + seedPosition;
        initialSeeds.push({
          seed_id: `0x${seedId.toString(16)}`,
          player: 'user',
          pit_number: pit,
          color: 'Green',
          seed_number: seedPosition,  // Changed to use position 1-4 instead of seedId
          isNative: true
        });
      }
    }
    
    // Opponent seeds (25-48): each pit has seeds numbered 1-4 within each pit
    for (let pit = 1; pit <= 6; pit++) {
      for (let seedPosition = 1; seedPosition <= 4; seedPosition++) {
        const seedId = (pit - 1) * 4 + seedPosition + 24;
        initialSeeds.push({
          seed_id: `0x${seedId.toString(16)}`,
          player: 'opponent',
          pit_number: pit,
          color: 'Blue',
          seed_number: seedPosition,  // Changed to use position 1-4 instead of seedId
          isNative: true
        });
      }
    }
    return initialSeeds;
  });

  // Update pit initialization to match user/opponent naming
  const [pits, setPits] = React.useState(() => {
    const initialPits = [];
    // User pits (1-6)
    for (let i = 1; i <= 6; i++) {
      initialPits.push({ player: 'user', pit_number: i, seed_count: 4 });
    }
    // User store (pit 7)
    initialPits.push({ player: 'user', pit_number: 7, seed_count: 0 });
    // Opponent pits (1-6)
    for (let i = 1; i <= 6; i++) {
      initialPits.push({ player: 'opponent', pit_number: i, seed_count: 4 });
    }
    // Opponent store (pit 7)
    initialPits.push({ player: 'opponent', pit_number: 7, seed_count: 0 });
    return initialPits;
  });

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
