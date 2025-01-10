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
          <Seed color="Green" type={(account.account?.address ? getSeed(1).player === account.account?.address : getSeed(1).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(1)?.pit_number} seed_number={getSeed(1)?.seed_number} isNative={getSeed(1)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(2).player === account.account?.address : getSeed(2).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(2)?.pit_number} seed_number={getSeed(2)?.seed_number} isNative={getSeed(2)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(3).player === account.account?.address : getSeed(3).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(3)?.pit_number} seed_number={getSeed(3)?.seed_number} isNative={getSeed(3)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(4).player === account.account?.address : getSeed(4).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(4)?.pit_number} seed_number={getSeed(4)?.seed_number} isNative={getSeed(4)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(5).player === account.account?.address : getSeed(5).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(5)?.pit_number} seed_number={getSeed(5)?.seed_number} isNative={getSeed(5)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(6).player === account.account?.address : getSeed(6).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(6)?.pit_number} seed_number={getSeed(6)?.seed_number} isNative={getSeed(6)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(7).player === account.account?.address : getSeed(7).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(7)?.pit_number} seed_number={getSeed(7)?.seed_number} isNative={getSeed(7)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(8).player === account.account?.address : getSeed(8).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(8)?.pit_number} seed_number={getSeed(8)?.seed_number} isNative={getSeed(8)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(9).player === account.account?.address : getSeed(9).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(9)?.pit_number} seed_number={getSeed(9)?.seed_number} isNative={getSeed(9)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(10).player === account.account?.address : getSeed(10).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(10)?.pit_number} seed_number={getSeed(10)?.seed_number} isNative={getSeed(10)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(11).player === account.account?.address : getSeed(11).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(11)?.pit_number} seed_number={getSeed(11)?.seed_number} isNative={getSeed(11)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(12).player === account.account?.address : getSeed(12).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(12)?.pit_number} seed_number={getSeed(12)?.seed_number} isNative={getSeed(12)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(13).player === account.account?.address : getSeed(13).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(13)?.pit_number} seed_number={getSeed(13)?.seed_number} isNative={getSeed(13)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(14).player === account.account?.address : getSeed(14).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(14)?.pit_number} seed_number={getSeed(14)?.seed_number} isNative={getSeed(14)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(15).player === account.account?.address : getSeed(15).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(15)?.pit_number} seed_number={getSeed(15)?.seed_number} isNative={getSeed(15)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(16).player === account.account?.address : getSeed(16).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(16)?.pit_number} seed_number={getSeed(16)?.seed_number} isNative={getSeed(16)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(17).player === account.account?.address : getSeed(17).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(17)?.pit_number} seed_number={getSeed(17)?.seed_number} isNative={getSeed(17)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(18).player === account.account?.address : getSeed(18).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(18)?.pit_number} seed_number={getSeed(18)?.seed_number} isNative={getSeed(18)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(19).player === account.account?.address : getSeed(19).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(19)?.pit_number} seed_number={getSeed(19)?.seed_number} isNative={getSeed(19)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(20).player === account.account?.address : getSeed(20).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(20)?.pit_number} seed_number={getSeed(20)?.seed_number} isNative={getSeed(20)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(21).player === account.account?.address : getSeed(21).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(21)?.pit_number} seed_number={getSeed(21)?.seed_number} isNative={getSeed(21)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(22).player === account.account?.address : getSeed(22).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(22)?.pit_number} seed_number={getSeed(22)?.seed_number} isNative={getSeed(22)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(23).player === account.account?.address : getSeed(23).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(23)?.pit_number} seed_number={getSeed(23)?.seed_number} isNative={getSeed(23)?.isNative} />
          <Seed color="Green" type={(account.account?.address ? getSeed(24).player === account.account?.address : getSeed(24).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(24)?.pit_number} seed_number={getSeed(24)?.seed_number} isNative={getSeed(24)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(25).player === account.account?.address : getSeed(25).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(25)?.pit_number} seed_number={getSeed(25)?.seed_number} isNative={getSeed(25)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(26).player === account.account?.address : getSeed(26).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(26)?.pit_number} seed_number={getSeed(26)?.seed_number} isNative={getSeed(26)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(27).player === account.account?.address : getSeed(27).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(27)?.pit_number} seed_number={getSeed(27)?.seed_number} isNative={getSeed(27)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(28).player === account.account?.address : getSeed(28).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(28)?.pit_number} seed_number={getSeed(28)?.seed_number} isNative={getSeed(28)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(29).player === account.account?.address : getSeed(29).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(29)?.pit_number} seed_number={getSeed(29)?.seed_number} isNative={getSeed(29)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(30).player === account.account?.address : getSeed(30).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(30)?.pit_number} seed_number={getSeed(30)?.seed_number} isNative={getSeed(30)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(31).player === account.account?.address : getSeed(31).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(31)?.pit_number} seed_number={getSeed(31)?.seed_number} isNative={getSeed(31)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(32).player === account.account?.address : getSeed(32).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(32)?.pit_number} seed_number={getSeed(32)?.seed_number} isNative={getSeed(32)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(33).player === account.account?.address : getSeed(33).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(33)?.pit_number} seed_number={getSeed(33)?.seed_number} isNative={getSeed(33)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(34).player === account.account?.address : getSeed(34).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(34)?.pit_number} seed_number={getSeed(34)?.seed_number} isNative={getSeed(34)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(35).player === account.account?.address : getSeed(35).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(35)?.pit_number} seed_number={getSeed(35)?.seed_number} isNative={getSeed(35)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(36).player === account.account?.address : getSeed(36).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(36)?.pit_number} seed_number={getSeed(36)?.seed_number} isNative={getSeed(36)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(37).player === account.account?.address : getSeed(37).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(37)?.pit_number} seed_number={getSeed(37)?.seed_number} isNative={getSeed(37)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(38).player === account.account?.address : getSeed(38).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(38)?.pit_number} seed_number={getSeed(38)?.seed_number} isNative={getSeed(38)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(39).player === account.account?.address : getSeed(39).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(39)?.pit_number} seed_number={getSeed(39)?.seed_number} isNative={getSeed(39)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(40).player === account.account?.address : getSeed(40).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(40)?.pit_number} seed_number={getSeed(40)?.seed_number} isNative={getSeed(40)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(41).player === account.account?.address : getSeed(41).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(41)?.pit_number} seed_number={getSeed(41)?.seed_number} isNative={getSeed(41)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(42).player === account.account?.address : getSeed(42).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(42)?.pit_number} seed_number={getSeed(42)?.seed_number} isNative={getSeed(42)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(43).player === account.account?.address : getSeed(43).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(43)?.pit_number} seed_number={getSeed(43)?.seed_number} isNative={getSeed(43)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(44).player === account.account?.address : getSeed(44).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(44)?.pit_number} seed_number={getSeed(44)?.seed_number} isNative={getSeed(44)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(45).player === account.account?.address : getSeed(45).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(45)?.pit_number} seed_number={getSeed(45)?.seed_number} isNative={getSeed(45)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(46).player === account.account?.address : getSeed(46).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(46)?.pit_number} seed_number={getSeed(46)?.seed_number} isNative={getSeed(46)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(47).player === account.account?.address : getSeed(47).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(47)?.pit_number} seed_number={getSeed(47)?.seed_number} isNative={getSeed(47)?.isNative} />
          <Seed color="Blue" type={(account.account?.address ? getSeed(48).player === account.account?.address : getSeed(48).player === game_node?.player_one) ? "player" : "opponent"} pit_number={getSeed(48)?.pit_number} seed_number={getSeed(48)?.seed_number} isNative={getSeed(48)?.isNative} />
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