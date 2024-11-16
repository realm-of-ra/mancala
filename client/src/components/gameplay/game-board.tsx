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
  const involved = game_players?.mancalaPlayerModels.edges.some(
    (item: any) => item?.node.address === account.address,
  );
  const player_position = involved
    ? game_players?.mancalaPlayerModels.edges.findIndex(
        (item: any) => item?.node.address === account.address,
      )
    : 0;
  const player_length = data?.mancalaSeedModels.edges
    .filter(
      (item: any) =>
        item?.node.player ===
        game_players?.mancalaPlayerModels.edges[player_position]?.node.address,
    )
    .filter((item: any) => item?.node.pit_number === 7).length;
  const opponent_position = player_position === 0 ? 1 : 0;
  const opposition_length = data?.mancalaSeedModels.edges
    .filter(
      (item: any) =>
        item?.node.player ===
        game_players?.mancalaPlayerModels.edges[opponent_position]?.node
          .address,
    )
    .filter((item: any) => item?.node.pit_number === 7).length;
  const player_pot_seed_count =
    game_players?.mancalaPitModels.edges
      .filter(
        (item: any) =>
          item?.node.player ===
          game_players?.mancalaPlayerModels.edges[player_position]?.node
            .address,
      )
      .filter((item: any) => item?.node.pit_number === 7)[0]?.node
      ?.seed_count || 0;
  const opponent_pot_seed_count =
    game_players?.mancalaPitModels.edges
      .filter(
        (item: any) =>
          item?.node.player ===
          game_players?.mancalaPlayerModels.edges[opponent_position]?.node
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
          {/* Player 1 pot */}
          <div
            className={
              "w-fit max-w-14 h-fit max-h-40 flex flex-col flex-wrap -mt-2.5"
            }
            style={{
              marginLeft: getOpponentMarginLeft(),
            }}
          >
            {// involved && data?.mancalaSeedModels.edges.filter((item: any) => item?.node.player === game_players?.mancalaPlayerModels.edges[opponent_position]?.node.address)
            data?.mancalaSeedModels.edges
              .filter(
                (item: any) =>
                  item?.node.player ===
                  game_players?.mancalaPlayerModels.edges[opponent_position]
                    ?.node.address,
              )
              .filter((item: any) => item?.node.pit_number === 7)
              .slice(0, opponent_pot_seed_count)
              .map((seed: any, index: number) => (
                <div
                  key={index}
                  style={{
                    width: opposition_length > 30 ? "8px" : "auto",
                  }}
                >
                  <Seed
                    color={seed?.node.color || "Blue"}
                    length={opponent_pot_seed_count}
                    type="opponent"
                  />
                </div>
              ))}
          </div>
          <div className="absolute inset-y-0 self-center left-32 ml-1.5 mb-20">
            <p className="text-white text-center">
              {
                data?.mancalaSeedModels.edges
                  .filter(
                    (item: any) =>
                      item?.node.player ===
                      game_players?.mancalaPlayerModels.edges[opponent_position]
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
              {/* {involved && Array.from({ length: game_players?.mancalaPlayerModels.edges[opponent_position]?.node?.len_pits }, (_, zero_index) => zero_index + 1).map((_, i) => ( */}
              {Array.from(
                {
                  length:
                    game_players?.mancalaPlayerModels.edges[opponent_position]
                      ?.node?.len_pits,
                },
                (_, zero_index) => zero_index + 1,
              ).map((_, i) => (
                <TopPit
                  key={i}
                  amount={
                    game_players?.mancalaPitModels.edges
                      .filter(
                        (item: any) =>
                          item?.node.player ===
                          game_players?.mancalaPlayerModels.edges[
                            opponent_position
                          ]?.node.address,
                      )
                      .filter(
                        (item: any) =>
                          item?.node.pit_number ===
                          game_players?.mancalaPlayerModels.edges[0]?.node
                            .len_pits -
                            i,
                      )[0]?.node?.seed_count
                  }
                  address={
                    game_players?.mancalaPlayerModels.edges[opponent_position]
                      ?.node.address
                  }
                  pit={
                    game_players?.mancalaPlayerModels.edges[opponent_position]
                      ?.node.len_pits - i
                  }
                  system={system}
                  userAccount={account}
                  game_id={gameId}
                  message={setMoveMessage}
                  status={game_node?.status}
                  winner={game_node?.winner}
                  seed_count={
                    game_players?.mancalaPitModels.edges
                      .filter(
                        (item: any) =>
                          item?.node.player ===
                          game_players?.mancalaPlayerModels.edges[
                            opponent_position
                          ]?.node.address,
                      )
                      .filter(
                        (item: any) =>
                          item?.node.pit_number ===
                          game_players?.mancalaPlayerModels.edges[0]?.node
                            .len_pits -
                            i,
                      )[0]?.node?.seed_count
                  }
                  seeds={data?.mancalaSeedModels.edges
                    .filter(
                      (item: any) =>
                        item?.node.player ===
                        game_players?.mancalaPlayerModels.edges[
                          opponent_position
                        ]?.node.address,
                    )
                    .filter(
                      (item: any) =>
                        item?.node.pit_number ===
                        game_players?.mancalaPlayerModels.edges[0]?.node
                          .len_pits -
                          i,
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
              {/* {involved && Array.from({ length: game_players?.mancalaPlayerModels.edges[player_position]?.node.len_pits }, (_, zero_index) => zero_index + 1).map((pit_key, i) => ( */}
              {Array.from(
                {
                  length:
                    game_players?.mancalaPlayerModels.edges[player_position]
                      ?.node.len_pits,
                },
                (_, zero_index) => zero_index + 1,
              ).map((pit_key, i) => (
                <BottomPit
                  key={i}
                  amount={
                    game_players?.mancalaPitModels.edges
                      .filter(
                        (item: any) =>
                          item?.node.player ===
                          game_players?.mancalaPlayerModels.edges[
                            player_position
                          ]?.node.address,
                      )
                      .filter((item: any) => item?.node.pit_number === i + 1)[0]
                      ?.node?.seed_count
                  }
                  address={
                    game_players?.mancalaPlayerModels.edges[player_position]
                      ?.node.address
                  }
                  pit={pit_key}
                  userAccount={account}
                  system={system}
                  game_id={gameId}
                  message={setMoveMessage}
                  status={game_node?.status}
                  winner={game_node?.winner}
                  seed_count={
                    game_players?.mancalaPitModels.edges
                      .filter(
                        (item: any) =>
                          item?.node.player ===
                          game_players?.mancalaPlayerModels.edges[
                            player_position
                          ]?.node.address,
                      )
                      .filter((item: any) => item?.node.pit_number === i + 1)[0]
                      ?.node?.seed_count
                  }
                  seeds={data?.mancalaSeedModels.edges
                    .filter(
                      (item: any) =>
                        item?.node.player ===
                        game_players?.mancalaPlayerModels.edges[player_position]
                          ?.node.address,
                    )
                    .filter((item: any) => item?.node.pit_number === i + 1)}
                  setTimeRemaining={setTimeRemaining}
                  max_block_between_move={parseInt(
                    game_node?.max_block_between_move,
                    16,
                  )}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 2 pot */}
          <div
            className={
              "w-fit max-w-14 h-fit max-h-40 flex flex-col flex-wrap -mt-2.5"
            }
            style={{
              marginRight: getPlayerMarginRight(),
            }}
          >
            {data?.mancalaSeedModels.edges
              .filter(
                (item: any) =>
                  item?.node.player ===
                  game_players?.mancalaPlayerModels.edges[player_position]?.node
                    .address,
              )
              .filter((item: any) => item?.node.pit_number === 7)
              .slice(0, player_pot_seed_count)
              .map((seed: any, index: number) => (
                <div key={index}>
                  <Seed
                    color={seed?.node.color || "Blue"}
                    length={player_pot_seed_count}
                    type="player"
                  />
                </div>
              ))}
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
