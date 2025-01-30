import React, { useEffect } from "react";
import { BottomPit, TopPit } from "@/components/pits";
import { Dispatch, SetStateAction } from "react";
import { useQuery } from "@apollo/client";
import {
  MancalaSeedQuery,
  MancalaCaptureQuery,
  MancalaExtraTurnQuery,
} from "@/lib/constants";
import Seed from "../seed";
import { calculateMancalaMove } from "@/lib/utils";

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

const GameBoard: React.FC<GameBoardProps> = ({
  game_players,
  game_node,
  system,
  account,
  gameId,
  setMoveMessage,
  setTimeRemaining,
  volume,
  setVolume,
  setMessage,
}) => {
  const [selectedPit, setSelectedPit] = React.useState<number | null>(null);
  const [simulatedSeeds, setSimulatedSeeds] = React.useState<any[]>([]);
  const [isSimulating, setIsSimulating] = React.useState(false);
  const involved = game_players?.mancalaAlphaPlayerModels.edges.some(
    (item: any) =>
      item?.node.address ===
      (account.account?.address || game_node?.player_one),
  );
  const player_position = involved
    ? game_players?.mancalaAlphaPlayerModels.edges.findIndex(
        (item: any) =>
          item?.node.address ===
          (account.account?.address || game_node?.player_one),
      )
    : 0;
  const opponent_position = player_position === 0 ? 1 : 0;
  const { data, startPolling } = useQuery(MancalaSeedQuery, {
    variables: { gameId: gameId },
  });
  startPolling(1000);

  const { data: captureData, startPolling: startCapturePolling } = useQuery(
    MancalaCaptureQuery,
    {
      variables: { gameId: gameId },
    },
  );

  const { data: extraTurnData, startPolling: startExtraTurnPolling } = useQuery(
    MancalaExtraTurnQuery,
    {
      variables: { gameId: gameId },
    },
  );

  useEffect(() => {
    startCapturePolling(1000);
    startExtraTurnPolling(1000);
  }, [startCapturePolling, startExtraTurnPolling]);

  useEffect(() => {
    const captures = captureData?.mancalaAlphaCaptureModels?.edges;
    if (captures && captures.length > 0 && game_node?.status !== "Finished") {
      const latestCapture = captures[captures.length - 1]?.node;

      if (latestCapture) {
        const isPlayerCapture =
          latestCapture.player === account.account?.address;

        setMessage(
          isPlayerCapture
            ? `You captured ${latestCapture.seed_count} seeds from pit ${latestCapture.pit_number}`
            : `Opponent captured ${latestCapture.seed_count} seeds from pit ${latestCapture.pit_number}`,
        );

        const timeout = setTimeout(() => {
          setMessage("");
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [captureData, account.account?.address, game_node?.status, setMessage]);

  useEffect(() => {
    const extraTurns = extraTurnData?.mancalaAlphaPlayerExtraTurnModels?.edges;
    if (
      extraTurns &&
      extraTurns.length > 0 &&
      game_node?.status !== "Finished"
    ) {
      const latestExtraTurn = extraTurns[extraTurns.length - 1]?.node;

      if (latestExtraTurn) {
        const isPlayerExtraTurn =
          latestExtraTurn.player === account.account?.address;

        setMessage(
          isPlayerExtraTurn
            ? "You get another turn!"
            : "Opponent gets another turn",
        );

        const timeout = setTimeout(() => {
          setMessage("");
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [extraTurnData, account.account?.address, game_node?.status, setMessage]);

  const seeds = React.useMemo(() => {
    if (!data?.mancalaAlphaSeedModels?.edges) return [];
    const uniqueSeeds = new Map();

    // Sort edges by timestamp in descending order (newest first)
    const sortedEdges = [...data.mancalaAlphaSeedModels.edges].sort((a, b) => {
      const timeA = new Date(a.node.entity.updatedAt).getTime();
      const timeB = new Date(b.node.entity.updatedAt).getTime();
      return timeB - timeA; // Descending order
    });

    sortedEdges.forEach((seed: any) => {
      const seedId = seed?.node.seed_id;
      if (seedId && !uniqueSeeds.has(seedId)) {
        uniqueSeeds.set(seedId, seed.node);
      }
    });

    return Array.from(uniqueSeeds.values());
  }, [data]);

  useEffect(() => {
    if (seeds.length > 0 && selectedPit !== null) {
      setIsSimulating(true);
      const formattedSeeds = seeds.map(seed => ({
        seed_id: seed.seed_id,
        color: seed.color || "Blue",
        player: seed.player,
        pit_number: seed.pit_number,
        seed_number: seed.seed_number,
        isNative: seed.isNative,
        volume: volume
      }));

      const player = game_players?.mancalaAlphaPlayerModels.edges[player_position]?.node.address;
      const opponent = game_players?.mancalaAlphaPlayerModels.edges[opponent_position]?.node.address;
      
      const simulatedMove = calculateMancalaMove(formattedSeeds, selectedPit, player, opponent);
      setSimulatedSeeds(simulatedMove);
    } else {
      setSimulatedSeeds([]);
      setIsSimulating(false);
    }
  }, [seeds, selectedPit, player_position, opponent_position, game_players, volume]);

  useEffect(() => {
    if (data?.mancalaAlphaSeedModels?.edges) {
      setIsSimulating(false);
      setSelectedPit(null);
    }
  }, [data]);

  const getSeed = (seedId: string | number) => {
    const hexSeedId = typeof seedId === "number" ? `0x${seedId.toString(16)}` : seedId;
    
    if (isSimulating && simulatedSeeds.length > 0) {
      const simulatedSeed = simulatedSeeds.find(seed => seed.seed_id === hexSeedId);
      if (simulatedSeed) {
        return {
          ...simulatedSeed,
          isNative: simulatedSeed.isNative
        };
      }
    }

    const seed = seeds.find((seed) => seed.seed_id === hexSeedId);
    if (!seed) return null;

    const seedNumber = parseInt(seed.seed_id, 16);
    const isNative =
      (seed.player === game_node?.player_one && seedNumber >= 1 && seedNumber <= 24) ||
      (seed.player === game_node?.player_two && seedNumber >= 25 && seedNumber <= 48);

    return { ...seed, isNative };
  };
  const player_pot_seed_count =
    game_players?.mancalaAlphaPitModels.edges
      .filter(
        (item: any) =>
          item?.node.player ===
          game_players?.mancalaAlphaPlayerModels.edges[player_position]?.node
            .address,
      )
      .filter((item: any) => item?.node.pit_number === 7)[0]?.node
      ?.seed_count || 0;
  const opponent_pot_seed_count =
    game_players?.mancalaAlphaPitModels.edges
      .filter(
        (item: any) =>
          item?.node.player ===
          game_players?.mancalaAlphaPlayerModels.edges[opponent_position]?.node
            .address,
      )
      .filter((item: any) => item?.node.pit_number === 7)[0]?.node
      ?.seed_count || 0;

  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center mt-24">
      <div className="w-[1170px] h-[400px] flex flex-row items-center justify-between space-x-5 relative bg-[url('./assets/game_board.png')] bg-contain bg-center bg-no-repeat">
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 1 pot (opponent) */}
          {Array.from({ length: 48 }, (_, i) => i + 1).map((seedNumber) => {
            const seedDetails = getSeed(seedNumber);
            if (!seedDetails) return null;

            const isPlayerSeed = (() => {
              const playerAddress = account.account?.address;
              if (playerAddress === game_node?.player_one) {
                return seedDetails.player === game_node?.player_one;
              }
              if (playerAddress === game_node?.player_two) {
                return seedDetails.player === game_node?.player_two;
              }
              return seedDetails.player === game_node?.player_one;
            })();

            return (
              <Seed
                key={seedNumber}
                seed_id={seedDetails?.seed_id}
                color={seedDetails?.color || "Blue"}
                type={isPlayerSeed ? "player" : "opponent"}
                pit_number={seedDetails?.pit_number}
                seed_number={seedDetails?.seed_number}
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
          <div className="h-[160px] flex flex-col items-center justify-center ml-[135px]">
            <p className="text-white text-center">{opponent_pot_seed_count}</p>
          </div>
        </div>
        <div className="w-[700px] h-[350px] flex flex-col items-center justify-between space-y-2 absolute left-[206px]">
          {/* Player 1 */}
          <div className="h-[175px] w-full flex flex-row justify-center items-center ml-3.5">
            <div className="flex flex-row justify-center flex-1 items-center w-[100px] space-x-5">
              {game_players?.mancalaAlphaPitModels.edges
                .filter(
                  (item: any) =>
                    item?.node.player ===
                    game_players?.mancalaAlphaPlayerModels.edges[
                      opponent_position
                    ]?.node.address,
                )
                .filter((item: any) => item?.node.pit_number !== 7) // Exclude the scoring pit
                .sort((a: any, b: any) => b.node.pit_number - a.node.pit_number) // Sort in descending order
                .map((pit: any, i: number) => (
                  <TopPit
                    key={i}
                    amount={pit.node.seed_count}
                    pit={pit.node.pit_number}
                    // isSelected={selectedPit === pit.node.pit_number}
                  />
                ))}
            </div>
          </div>
          {/* Player 2 */}
          <div className="h-[175px] w-full flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center flex-1 space-x-5">
              {game_players?.mancalaAlphaPitModels.edges
                .filter(
                  (item: any) =>
                    item?.node.player ===
                    game_players?.mancalaAlphaPlayerModels.edges[
                      player_position
                    ]?.node.address,
                )
                .filter((item: any) => item?.node.pit_number !== 7)
                .sort((a: any, b: any) => a.node.pit_number - b.node.pit_number)
                .map((pit: any, i: number) => {
                  return (
                    <BottomPit
                      key={i}
                      amount={pit.node.seed_count}
                      address={pit.node.player}
                      pit={pit.node.pit_number}
                      // isSelected={selectedPit === pit.node.pit_number}
                      // onPitSelect={setSelectedPit}
                      userAccount={account}
                      system={system}
                      game_id={gameId}
                      setMoveMessage={setMoveMessage}
                      status={game_node?.status}
                      winner={game_node?.winner}
                      setMessage={setMessage}
                      setTimeRemaining={setTimeRemaining}
                      setSelectedPit={setSelectedPit}
                      max_block_between_move={parseInt(
                        game_node?.max_block_between_move,
                        16
                      )}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 2 pot (player) */}
          <div
            className={
              "w-fit max-w-14 h-fit max-h-40 flex flex-col flex-wrap -mt-2.5"
            }
          />
          <div className="h-[160px] flex flex-col items-center justify-center mr-[135px]">
            <p className="text-white text-center h-full flex flex-col items-center justify-center">
              {player_pot_seed_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
