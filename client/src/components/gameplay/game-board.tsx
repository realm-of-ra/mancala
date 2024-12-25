import React from "react";
import { BottomPit, TopPit } from "@/components/pits";
import { Dispatch, SetStateAction } from "react";
import { useQuery } from "@apollo/client";
import { MancalaSeedQuery } from "@/lib/constants";
import Seed from "../seed";

interface GameBoardProps {
  game_players: any;
  game_node: any;
  system: any;
  account: any;
  gameId: string;
  setMoveMessage: Dispatch<SetStateAction<string | undefined>>;
  setTimeRemaining: Dispatch<SetStateAction<number>>;
}

const GameBoard: React.FC<GameBoardProps> = ({
  game_players,
  game_node,
  system,
  account,
  gameId,
  setMoveMessage,
  setTimeRemaining,
}) => {
  const { data, startPolling } = useQuery(MancalaSeedQuery, {
    variables: { gameId: gameId },
  });
  startPolling(1000);

  const seeds = React.useMemo(() => {
    if (!data?.mancalaDevSeedModels?.edges) return [];
    const uniqueSeeds = new Map();

    // Sort edges by timestamp in descending order (newest first)
    const sortedEdges = [...data.mancalaDevSeedModels.edges].sort((a, b) => {
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
  }, [data, account.account?.address]);

  const getSeed = (seedId: string | number) => {
    const hexSeedId =
      typeof seedId === "number" ? `0x${seedId.toString(16)}` : seedId;
    const seed = seeds.find((seed) => seed.seed_id === hexSeedId);
    if (!seed) return null;

    const seedNumber = parseInt(seed.seed_id, 16);
    const isNative =
      (seed.player === game_node?.player_one &&
        seedNumber >= 1 &&
        seedNumber <= 24) ||
      (seed.player === game_node?.player_two &&
        seedNumber >= 25 &&
        seedNumber <= 48);

    return { ...seed, isNative };
  };

  const involved = game_players?.mancalaDevPlayerModels.edges.some(
    (item: any) =>
      item?.node.address ===
      (account.account?.address || game_node?.player_one),
  );
  const player_position = involved
    ? game_players?.mancalaDevPlayerModels.edges.findIndex(
        (item: any) =>
          item?.node.address ===
          (account.account?.address || game_node?.player_one),
      )
    : 0;
  const opponent_position = player_position === 0 ? 1 : 0;
  const player_pot_seed_count =
    game_players?.mancalaDevPitModels.edges
      .filter(
        (item: any) =>
          item?.node.player ===
          game_players?.mancalaDevPlayerModels.edges[player_position]?.node
            .address,
      )
      .filter((item: any) => item?.node.pit_number === 7)[0]?.node
      ?.seed_count || 0;
  const opponent_pot_seed_count =
    game_players?.mancalaDevPitModels.edges
      .filter(
        (item: any) =>
          item?.node.player ===
          game_players?.mancalaDevPlayerModels.edges[opponent_position]?.node
            .address,
      )
      .filter((item: any) => item?.node.pit_number === 7)[0]?.node
      ?.seed_count || 0;

  const getOpponentMarginLeft = () => {
    if (opponent_pot_seed_count <= 10) {
      return "185px";
    } else if (opponent_pot_seed_count >= 21 && opponent_pot_seed_count < 31) {
      return "155px";
    } else if (opponent_pot_seed_count >= 31 && opponent_pot_seed_count < 41) {
      return "160px";
    } else if (opponent_pot_seed_count >= 41) {
      return "160px";
    } else {
      return "170px";
    }
  };

  const getPlayerMarginRight = () => {
    if (player_pot_seed_count <= 10) {
      return "185px";
    } else if (player_pot_seed_count >= 31 && player_pot_seed_count < 41) {
      return "160px";
    } else if (player_pot_seed_count >= 41) {
      return "155px";
    } else {
      return "170px";
    }
  };

  console.log("seeds: ", seeds);
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center mt-24">
      <div className="w-[1170px] h-[400px] flex flex-row items-center justify-between space-x-5 relative bg-[url('./assets/game_board.png')] bg-contain bg-center bg-no-repeat">
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 1 pot (opponent) */}
          <div
            className={
              "w-fit max-w-14 h-fit max-h-40 flex flex-col flex-wrap -mt-2.5"
            }
            style={{
              marginLeft: getOpponentMarginLeft(),
            }}
          >
            {Array.from({ length: 24 }, (_, i) => {
              if (account.account?.address) {
                return game_node?.player_one === account.account?.address
                  ? i + 25
                  : i + 1;
              } else {
                return i + 25;
              }
            }).map((seedNumber) => {
              const seedDetails = getSeed(seedNumber);
              if (!seedDetails) return null;

              const isPlayerSeed = account.account?.address
                ? seedDetails.player === account.account?.address
                : seedDetails.player === game_node?.player_one;

              return (
                <Seed
                  key={seedNumber}
                  color={seedDetails?.color || "Blue"}
                  length={opponent_pot_seed_count}
                  type={isPlayerSeed ? "player" : "opponent"}
                  seed_id={parseInt(seedDetails?.seed_id, 16)}
                  pit_number={seedDetails?.pit_number}
                  seed_number={seedDetails?.seed_number}
                  isNative={seedDetails.isNative}
                />
              );
            })}
          </div>
          <div className="h-[160px] ml-24 flex flex-col items-center justify-center">
            <p className="text-white text-center">
              {
                data?.mancalaDevSeedModels.edges
                  .filter(
                    (item: any) =>
                      item?.node.player ===
                      game_players?.mancalaDevPlayerModels.edges[
                        opponent_position
                      ]?.node.address,
                  )
                  .filter((item: any) => item?.node.pit_number === 7).length
              }
            </p>
          </div>
        </div>
        <div className="w-[700px] h-[350px] flex flex-col items-center justify-between space-y-2 absolute left-[206px]">
          {/* Player 1 */}
          <div className="h-[175px] w-full flex flex-row justify-center items-center ml-3.5">
            <div className="flex flex-row justify-center flex-1 items-center w-[100px] space-x-5">
              {game_players?.mancalaDevPitModels.edges
                .filter(
                  (item: any) =>
                    item?.node.player ===
                    game_players?.mancalaDevPlayerModels.edges[
                      opponent_position
                    ]?.node.address,
                )
                .filter((item: any) => item?.node.pit_number !== 7) // Exclude the scoring pit
                .sort((a: any, b: any) => b.node.pit_number - a.node.pit_number) // Sort in descending order
                .map((pit: any, i: number) => (
                  <TopPit key={i} amount={pit.node.seed_count} />
                ))}
            </div>
          </div>
          {/* Player 2 */}
          <div className="h-[175px] w-full flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center flex-1 space-x-5">
              {game_players?.mancalaDevPitModels.edges
                .filter(
                  (item: any) =>
                    item?.node.player ===
                    game_players?.mancalaDevPlayerModels.edges[player_position]
                      ?.node.address,
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
                      userAccount={account}
                      system={system}
                      game_id={gameId}
                      message={setMoveMessage}
                      status={game_node?.status}
                      winner={game_node?.winner}
                      setTimeRemaining={setTimeRemaining}
                      max_block_between_move={parseInt(
                        game_node?.max_block_between_move,
                        16,
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
            style={{
              marginRight: getPlayerMarginRight(),
            }}
          >
            {Array.from({ length: 24 }, (_, i) => {
              if (account.account?.address) {
                return game_node?.player_one === account.account?.address
                  ? i + 1
                  : i + 25;
              } else {
                return i + 1;
              }
            }).map((seedNumber) => {
              const seedDetails = getSeed(seedNumber);
              if (!seedDetails) return null;

              const isPlayerSeed = account.account?.address
                ? seedDetails.player === account.account?.address
                : seedDetails.player === game_node?.player_one;

              return (
                <Seed
                  key={seedNumber}
                  color={seedDetails?.color || "Blue"}
                  length={player_pot_seed_count}
                  type={isPlayerSeed ? "player" : "opponent"}
                  seed_id={parseInt(seedDetails?.seed_id, 16)}
                  pit_number={seedDetails?.pit_number}
                  seed_number={seedDetails?.seed_number}
                  isNative={seedDetails.isNative}
                />
              );
            })}
          </div>
          <div className="h-[160px] mr-24 flex flex-col items-center justify-center">
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
