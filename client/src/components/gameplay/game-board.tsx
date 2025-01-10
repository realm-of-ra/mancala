import React, { useEffect } from "react";
import { BottomPit, TopPit } from "@/components/pits";
import { Dispatch, SetStateAction } from "react";
import { useQuery } from "@apollo/client";
import { MancalaSeedQuery, MancalaCaptureQuery, MancalaExtraTurnQuery } from "@/lib/constants";
import Seed from "../seed";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
  
  const { data, startPolling } = useQuery(MancalaSeedQuery, {
    variables: { gameId: gameId },
  });
  startPolling(1000);

  const { data: captureData, startPolling: startCapturePolling } = useQuery(MancalaCaptureQuery, {
    variables: { gameId: gameId }
  });
  
  const { data: extraTurnData, startPolling: startExtraTurnPolling } = useQuery(MancalaExtraTurnQuery, {
    variables: { gameId: gameId }
  });

  useEffect(() => {
    startCapturePolling(1000);
    startExtraTurnPolling(1000);
  }, [startCapturePolling, startExtraTurnPolling]);

  useEffect(() => {
    const captures = captureData?.mancalaAlphaCaptureModels?.edges;
    if (captures && captures.length > 0) {
      const latestCapture = captures[captures.length - 1]?.node;
      
      if (latestCapture) {
        const isPlayerCapture = latestCapture.player === account.account?.address;
        
        toast({
          title: isPlayerCapture ? "Seeds Captured!" : "Seeds Lost!",
          description: isPlayerCapture 
            ? `You captured ${latestCapture.seed_count} seeds from pit ${latestCapture.pit_number}`
            : `Opponent captured ${latestCapture.seed_count} seeds from pit ${latestCapture.pit_number}`,
          duration: 3000,
        });
      }
    }
  }, [captureData, account.account?.address, toast]);

  useEffect(() => {
    const extraTurns = extraTurnData?.mancalaAlphaPlayerExtraTurnModels?.edges;
    if (extraTurns && extraTurns.length > 0) {
      const latestExtraTurn = extraTurns[extraTurns.length - 1]?.node;
      
      if (latestExtraTurn) {
        const isPlayerExtraTurn = latestExtraTurn.player === account.account?.address;
        
        toast({
          title: isPlayerExtraTurn ? "Extra Turn!" : "Opponent Extra Turn",
          description: isPlayerExtraTurn 
            ? "You get another turn!"
            : "Opponent gets another turn",
          duration: 3000,
        });
      }
    }
  }, [extraTurnData, account.account?.address, toast]);

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

  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center mt-24">
      <div className="w-[1170px] h-[400px] flex flex-row items-center justify-between space-x-5 relative bg-[url('./assets/game_board.png')] bg-contain bg-center bg-no-repeat">
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 1 pot (opponent) */}
          <Seed color="Green" length={4} type="opponent" seed_id={1} pit_number={6} seed_number={1} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={2} pit_number={6} seed_number={2} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={3} pit_number={6} seed_number={3} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={4} pit_number={6} seed_number={4} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={5} pit_number={6} seed_number={5} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={6} pit_number={6} seed_number={6} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={7} pit_number={6} seed_number={7} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={8} pit_number={6} seed_number={8} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={9} pit_number={6} seed_number={9} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={10} pit_number={6} seed_number={10} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={11} pit_number={6} seed_number={11} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={12} pit_number={6} seed_number={12} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={13} pit_number={6} seed_number={13} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={14} pit_number={6} seed_number={14} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={15} pit_number={6} seed_number={15} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={16} pit_number={6} seed_number={16} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={17} pit_number={6} seed_number={17} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={18} pit_number={6} seed_number={18} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={19} pit_number={6} seed_number={19} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={20} pit_number={6} seed_number={20} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={21} pit_number={6} seed_number={21} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={22} pit_number={6} seed_number={22} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={23} pit_number={6} seed_number={23} isNative={true} />
          <Seed color="Green" length={4} type="opponent" seed_id={24} pit_number={6} seed_number={24} isNative={true} />
          <Seed color="Blue" length={4} type="opponent" seed_id={25} pit_number={4} seed_number={25} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={26} pit_number={4} seed_number={26} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={27} pit_number={4} seed_number={27} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={28} pit_number={4} seed_number={28} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={29} pit_number={4} seed_number={29} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={30} pit_number={4} seed_number={30} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={31} pit_number={4} seed_number={31} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={32} pit_number={4} seed_number={32} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={33} pit_number={4} seed_number={33} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={34} pit_number={4} seed_number={34} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={35} pit_number={4} seed_number={35} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={36} pit_number={4} seed_number={36} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={37} pit_number={4} seed_number={37} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={38} pit_number={4} seed_number={38} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={39} pit_number={4} seed_number={39} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={40} pit_number={4} seed_number={40} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={41} pit_number={4} seed_number={41} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={42} pit_number={4} seed_number={42} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={43} pit_number={4} seed_number={43} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={44} pit_number={4} seed_number={44} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={45} pit_number={4} seed_number={45} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={46} pit_number={4} seed_number={46} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={47} pit_number={4} seed_number={47} isNative={false} />
          <Seed color="Blue" length={4} type="opponent" seed_id={48} pit_number={4} seed_number={48} isNative={false} />
          <div
            className={
              "w-fit max-w-14 h-fit max-h-40 flex flex-col flex-wrap -mt-2.5"
            }
            style={{
              marginLeft: getOpponentMarginLeft(),
            }}
          >
            {/* {Array.from({ length: 24 }, (_, i) => {
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
                  length={isPlayerSeed ? player_pot_seed_count : opponent_pot_seed_count}
                  type={isPlayerSeed ? "player" : "opponent"}
                  seed_id={parseInt(seedDetails?.seed_id, 16)}
                  pit_number={seedDetails?.pit_number}
                  seed_number={seedDetails?.seed_number}
                  isNative={seedDetails.isNative}
                />
              );
            })} */}
          </div>
          <div className="h-[160px] flex flex-col items-center justify-center" style={{marginLeft: opponent_pot_seed_count > 24 ? "128px" : opponent_pot_seed_count > 10 ? "113px" : "100px"}}>
            <p className="text-white text-center">
              {opponent_pot_seed_count}
            </p>
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
                  <TopPit key={i} amount={pit.node.seed_count} />
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
                    game_players?.mancalaAlphaPlayerModels.edges[player_position]
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
            {/* {Array.from({ length: 24 }, (_, i) => {
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
                  length={isPlayerSeed ? player_pot_seed_count : opponent_pot_seed_count}
                  type={isPlayerSeed ? "player" : "opponent"}
                  seed_id={parseInt(seedDetails?.seed_id, 16)}
                  pit_number={seedDetails?.pit_number}
                  seed_number={seedDetails?.seed_number}
                  isNative={seedDetails.isNative}
                />
              );
            })} */}
          </div>
          <div className="h-[160px] flex flex-col items-center justify-center" style={{marginRight: player_pot_seed_count > 24 ? "120px" : player_pot_seed_count > 10 ? "113px" : "100px"}}>
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