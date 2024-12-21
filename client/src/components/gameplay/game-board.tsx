import React from "react";
import { BottomPit, TopPit } from "@/components/pits";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { useQuery } from "@apollo/client";
import { MancalaSeedQuery } from "@/lib/constants";
import Seed from "../seed";

interface GameBoardProps {
  game_players: any; // Replace 'any' with the correct type from your GraphQL query
  game_node: any; // Replace 'any' with the correct type from your GraphQL query
  system: any; // Replace 'any' with the correct type from your dojo system
  account: any; // Replace 'any' with the correct type from your account
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
    if (!data?.mancalaTSeedModels?.edges) return [];
    
    const uniqueSeeds = new Map();
    data.mancalaTSeedModels.edges.forEach((seed: any) => {
      const seedId = seed?.node.seed_id;
      if (seedId) {
        const existingSeed = uniqueSeeds.get(seedId);
        const currentCreatedAt = new Date(seed.node.entity.createdAt).getTime();
        
        if (!existingSeed || 
            currentCreatedAt > new Date(existingSeed.entity.createdAt).getTime()) {
          uniqueSeeds.set(seedId, seed.node);
        }
      }
    });
    return Array.from(uniqueSeeds.values());
  }, [data]);

  const getSeed = (seedId: string | number) => {
    const hexSeedId = typeof seedId === 'number' ? `0x${seedId.toString(16)}` : seedId;
    return seeds.find(seed => seed.seed_id === hexSeedId);
  };

  const involved = game_players?.mancalaTPlayerModels.edges.some(
    (item: any) => item?.node.address === account.account?.address,
  );
  const player_position = involved
    ? game_players?.mancalaTPlayerModels.edges.findIndex(
        (item: any) => item?.node.address === account.account?.address,
      )
    : 0;
  const opponent_position = player_position === 0 ? 1 : 0;
  const opposition_length = data?.mancalaTSeedModels.edges
    .filter(
      (item: any) =>
        item?.node.player ===
        game_players?.mancalaTPlayerModels.edges[opponent_position]?.node
          .address,
    )
    .filter((item: any) => item?.node.pit_number === 7).length;
  const player_pot_seed_count =
    game_players?.mancalaTPitModels.edges
      .filter(
        (item: any) =>
          item?.node.player ===
          game_players?.mancalaTPlayerModels.edges[player_position]?.node
            .address,
      )
      .filter((item: any) => item?.node.pit_number === 7)[0]?.node
      ?.seed_count || 0;
  const opponent_pot_seed_count =
    game_players?.mancalaTPitModels.edges
      .filter(
        (item: any) =>
          item?.node.player ===
          game_players?.mancalaTPlayerModels.edges[opponent_position]?.node
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

  const getOpponentSeed = (seed_id: number) => {
    return data?.mancalaTSeedModels.edges
      .filter(
        (item: any) =>
          item?.node.player ===
          game_players?.mancalaTPlayerModels.edges[opponent_position]?.node
            .address,
      )
      .filter((item: any) => item?.node.seed_id === `0x${seed_id.toString(16)}`)
  };

  console.log('seeds: ', seeds);
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
            {Array.from({ length: 24 }, (_, i) => game_node?.player_one === account.account?.address ? i + 25 : i + 1).map((seedNumber) => {
              const seedDetails = getSeed(seedNumber);
              if (!seedDetails) return null;
              
              // const isPlayerSeed = seedDetails.player === account.account?.address;

              if (seedNumber === 1) {
                console.log('seedDetails: ', seedDetails);
              }
              
              return (
                <Seed
                  key={seedNumber}
                  color={seedDetails?.color || "Blue"}
                  length={opponent_pot_seed_count}
                  type={"opponent"}
                  seed_id={parseInt(seedDetails?.seed_id, 16)}
                  pit_number={seedDetails?.pit_number}
                  seed_number={seedDetails?.seed_number}
                />
              );
            })}
          </div>
          <div className="absolute inset-y-0 self-center left-32 ml-1.5 mb-20">
            <p className="text-white text-center">
              {
                data?.mancalaTSeedModels.edges
                  .filter(
                    (item: any) =>
                      item?.node.player ===
                      game_players?.mancalaTPlayerModels.edges[opponent_position]
                        ?.node.address,
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
              {game_players?.mancalaTPitModels.edges
                .filter(
                  (item: any) =>
                    item?.node.player ===
                    game_players?.mancalaTPlayerModels.edges[opponent_position]
                      ?.node.address,
                )
                .filter((item: any) => item?.node.pit_number !== 7) // Exclude the scoring pit
                .sort((a: any, b: any) => b.node.pit_number - a.node.pit_number) // Sort in descending order
                .map((pit: any, i: number) => (
                  <TopPit
                    key={i} 
                    amount={pit.node.seed_count}
                    address={pit.node.player}
                    pit={pit.node.pit_number}
                    system={system}
                    userAccount={account}
                    game_id={gameId}
                    message={setMoveMessage}
                    status={game_node?.status}
                    winner={game_node?.winner}
                    seed_count={pit.node.seed_count}
                    seeds={data?.mancalaTSeedModels.edges
                      .filter(
                        (seed: any) => seed?.node.player === pit.node.player,
                      )
                      .filter(
                        (seed: any) =>
                          seed?.node.pit_number === pit.node.pit_number,
                      )}
                    setTimeRemaining={setTimeRemaining}
                    max_block_between_move={parseInt(
                      game_node?.max_block_between_move,
                      16,
                    )}
                  />
                ))}
            </div>
          </div>
          {/* Player 2 */}
          <div className="h-[175px] w-full flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center flex-1 space-x-5">
              {game_players?.mancalaTPitModels.edges
                .filter(
                  (item: any) =>
                    item?.node.player ===
                    game_players?.mancalaTPlayerModels.edges[player_position]
                      ?.node.address,
                )
                .filter((item: any) => item?.node.pit_number !== 7)
                .sort((a: any, b: any) => a.node.pit_number - b.node.pit_number)
                .map((pit: any, i: number) => {
                  // Filter seeds for this specific pit number (1-6)
                  const pitSeeds = data?.mancalaTSeedModels.edges.filter(
                    (seed: any) =>
                      seed?.node.player === pit.node.player &&
                      seed?.node.pit_number === pit.node.pit_number &&
                      pit.node.pit_number >= 1 &&
                      pit.node.pit_number <= 6,
                  );

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
                      seed_count={pit.node.seed_count}
                      seeds={pitSeeds}
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
            {Array.from({ length: 24 }, (_, i) => game_node?.player_one === account.account?.address ? i + 1 : i + 25).map((seedNumber) => {
              const seedDetails = getSeed(seedNumber);
              if (!seedDetails) return null;
              
              // const isPlayerSeed = seedDetails.player === account.account?.address;
              
              return (
                <Seed
                  key={seedNumber}
                  color={seedDetails?.color || "Blue"}
                  length={player_pot_seed_count}
                  type={"player"}
                  seed_id={parseInt(seedDetails?.seed_id, 16)}
                  pit_number={seedDetails?.pit_number}
                  seed_number={seedDetails?.seed_number}
                />
              );
            })}
          </div>
          <div className="absolute inset-y-0 self-center right-32 bottom-20 w-7 h-12">
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
