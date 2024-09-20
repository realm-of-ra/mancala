import React from "react";
import { BottomPit, TopPit } from "@/components/pits";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { useAccount } from "@starknet-react/core";
import { useQuery } from "@apollo/client";
import { MancalaSeedQuery } from "@/lib/constants";
import Seed from "../seed";

interface GameBoardProps {
  game_players: any; // Replace 'any' with the correct type from your GraphQL query
  game_node: any; // Replace 'any' with the correct type from your GraphQL query
  game_metadata: any; // Replace 'any' with the correct type from your GraphQL query
  system: any; // Replace 'any' with the correct type from your dojo system
  account: any; // Replace 'any' with the correct type from your account
  gameId: string;
  setMoveMessage: Dispatch<SetStateAction<string | undefined>>;
  setTimeRemaining: Dispatch<SetStateAction<number>>;
}

const GameBoard: React.FC<GameBoardProps> = ({
  game_players,
  game_node,
  game_metadata,
  system,
  account,
  gameId,
  setMoveMessage,
  setTimeRemaining,
}) => {
  const { loading, data, startPolling } = useQuery(MancalaSeedQuery, {
    variables: { gameId: gameId },
  });
  startPolling(1000);
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center mt-24">
      <div className="w-[1170px] h-[400px] flex flex-row items-center justify-between space-x-5 relative bg-[url('./assets/game_board.png')] bg-contain bg-center bg-no-repeat">
        <div className="w-fit h-[240px] flex items-center mb-5">
          {/* Player 1 pot */}
          <div className="flex flex-row justify-end items-center px-2.5 w-12 h-[70%] ml-[168px]">
            <div className={clsx("max-h-full items-center justify-center px-5 grid gap-y-1.5 gap-x-5",
              game_players?.player_one?.edges?.[0]?.node?.mancala > 7 && 'grid-cols-2',
              game_players?.player_one?.edges?.[0]?.node?.mancala > 14 && 'grid-cols-3',
              game_players?.player_one?.edges?.[0]?.node?.mancala > 21 && 'grid-cols',
            )}>
              {
                data?.mancalaSeedModels.edges.filter((item: any) => item?.node.player === game_players?.mancalaPlayerModels.edges[0]?.node.address)
                .filter((item: any) => item?.node.pit_number === 7).map((seed: any, index: number) => <Seed amount={data?.mancalaSeedModels.edges.filter((item: any) => item?.node.player === game_players?.mancalaPlayerModels.edges[1]?.node.address)
                  .filter((item: any) => item?.node.pit_number === 7).length} color={seed.node.color} />)
              }
            </div>
          </div>
          <div className="absolute inset-y-0 self-center left-32 ml-1.5 mb-6">
            <p className="text-white text-center">
              {game_players?.player_one?.edges?.[0]?.node?.mancala}
            </p>
          </div>
        </div>
        <div className="w-[700px] h-[350px] flex flex-col items-center justify-between space-y-2 absolute left-[206px]">
          {/* Player 1 */}
          <div className="h-[175px] w-full flex flex-row justify-center items-center ml-3.5">
            <div className="flex flex-row justify-center flex-1 items-center w-[100px] space-x-5">
              {Array.from({ length: game_players?.mancalaPlayerModels.edges[0]?.node?.len_pits }, (_, zero_index) => zero_index + 1).map((pit_key, i) => (
                <TopPit
                  key={i}
                  amount={game_players?.mancalaPitModels.edges.filter((item: any) => item?.node.player === game_players?.mancalaPlayerModels.edges[0]?.node.address).filter((item: any) => item?.node.pit_number === game_players?.mancalaPlayerModels.edges[0]?.node.len_pits - i)[0]?.node?.seed_count}
                  address={game_players?.mancalaPlayerModels.edges[0]?.node.address}
                  pit={game_players?.mancalaPlayerModels.edges[0]?.node.len_pits - i}
                  system={system}
                  userAccount={account}
                  game_id={gameId}
                  message={setMoveMessage}
                  status={game_node?.status}
                  winner={game_node?.winner}
                  seeds={data?.mancalaSeedModels.edges.filter((item: any) => item?.node.player === game_players?.mancalaPlayerModels.edges[0]?.node.address).filter((item: any) => item?.node.pit_number === game_players?.mancalaPlayerModels.edges[0]?.node.len_pits - i)}
                  setTimeRemaining={setTimeRemaining}
                  time_between_move={parseInt(game_node?.time_between_move, 16)}
                />
              ))}
            </div>
          </div>
          {/* Player 2 */}
          <div className="h-[175px] w-full flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center flex-1 space-x-5">
              {Array.from({ length: game_players?.mancalaPlayerModels.edges[1]?.node.len_pits }, (_, zero_index) => zero_index + 1).map((pit_key, i) => (
                <BottomPit
                  key={i}
                  amount={game_players?.mancalaPitModels.edges.filter((item: any) => item?.node.player === game_players?.mancalaPlayerModels.edges[1]?.node.address).filter((item: any) => item?.node.pit_number === i + 1)[0]?.node?.seed_count}
                  address={game_players?.mancalaPlayerModels.edges[1]?.node.address}
                  pit={pit_key}
                  userAccount={account}
                  system={system}
                  game_id={gameId}
                  message={setMoveMessage}
                  status={game_node?.status}
                  winner={game_node?.winner}
                  seeds={data?.mancalaSeedModels.edges.filter((item: any) => item?.node.player === game_players?.mancalaPlayerModels.edges[1]?.node.address).filter((item: any) => item?.node.pit_number === i + 1)}
                  setTimeRemaining={setTimeRemaining}
                  time_between_move={parseInt(game_node?.time_between_move, 16)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 2 pot */}
          <div className="flex flex-row justify-center items-center px-2.5 w-12 h-[70%] mr-[168px]">
            <div className="flex flex-col flex-wrap space-y-1.5 max-h-[80%] gap-2 items-center justify-center px-1.5">
            {
                data?.mancalaSeedModels.edges.filter((item: any) => item?.node.player === game_players?.mancalaPlayerModels.edges[1]?.node.address)
                .filter((item: any) => item?.node.pit_number === 7).map((seed: any, index: number) => <Seed amount={data?.mancalaSeedModels.edges.filter((item: any) => item?.node.player === game_players?.mancalaPlayerModels.edges[1]?.node.address)
                  .filter((item: any) => item?.node.pit_number === 7).length} color={seed.node.color} />)
              }
            </div>
          </div>
          <div className="absolute inset-y-0 self-center right-32 bottom-20 w-7 h-12">
            <p className="text-white text-center h-full flex flex-col items-center justify-center">
              {game_players?.player_two?.edges?.[0]?.node?.mancala}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
