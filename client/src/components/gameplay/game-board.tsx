import React from "react";
import Pit from "@/components/pits";
import { Dispatch, SetStateAction } from "react";

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
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center mt-24">
      <div className="w-[1170px] h-[467px] flex flex-row items-center justify-between space-x-5 relative bg-[url('./assets/game_board.png')] bg-contain bg-center bg-no-repeat">
        <div className="w-fit h-[240px] flex items-center mb-5 bg-gree">
          {/* Player 1 pot */}
          <div className="flex flex-row justify-end items-center px-2.5 w-12 h-[70%] ml-[156px]">
            <div className="flex flex-col flex-wrap space-y-1.5 max-h-[80%] gap-2 items-center justify-center px-5">
              {Array.from(
                {
                  length:
                    game_players?.player_one?.edges?.[0]?.node?.mancala || 0,
                },
                (_, seedIndex) => (
                  <div
                    key={seedIndex}
                    className="w-[20px] h-[20px] bg-white rounded-full"
                  />
                ),
              )}
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
              {Array.from({ length: 6 }, (_, zero_index) => zero_index + 1)
                .reverse()
                .map((pit_key, i) => (
                  <Pit
                    key={i}
                    amount={
                      game_players?.player_one?.edges?.[0]?.node?.[
                      `pit${pit_key}` as "pit1"
                      ]
                    }
                    address={
                      game_players?.player_one?.edges?.[0]?.node?.address
                    }
                    pit={pit_key}
                    system={system}
                    userAccount={account}
                    game_id={gameId}
                    message={setMoveMessage}
                    status={game_node?.status}
                    winner={game_node?.winner}
                    setTimeRemaining={setTimeRemaining}
                    time_between_move={parseInt(
                      game_node?.time_between_move,
                      16,
                    )}
                  />
                ))}
            </div>
          </div>
          {/* Player 2 */}
          <div className="h-[175px] w-full flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center flex-1 space-x-5">
              {Array.from(
                new Array(6).keys(),
                (_, zero_index) => zero_index + 1,
              ).map((pit_key, i) => (
                <Pit
                  key={i}
                  amount={
                    game_players?.player_two?.edges?.[0]?.node?.[
                    `pit${pit_key}` as "pit1"
                    ]
                  }
                  address={game_players?.player_two?.edges?.[0]?.node?.address}
                  pit={pit_key}
                  userAccount={account}
                  system={system}
                  game_id={gameId}
                  message={setMoveMessage}
                  status={game_metadata?.game_data?.edges?.[0]?.node?.status}
                  winner={game_metadata?.game_data?.edges?.[0]?.node?.winner}
                  setTimeRemaining={setTimeRemaining}
                  time_between_move={parseInt(game_node?.time_between_move, 16)}
                  reverse={true}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-fit h-[220px] mt-14 relative">
          {/* Player 2 pot */}
          <div className="flex flex-row justify-center items-center px-2.5 w-12 h-[70%] mr-[156px]">
            <div className="flex flex-col flex-wrap space-y-1.5 max-h-[80%] gap-2 items-center justify-center px-1.5">
              {Array.from(
                {
                  length:
                    game_players?.player_two?.edges?.[0]?.node?.mancala || 0,
                },
                (_, seedIndex) => (
                  <div
                    key={seedIndex}
                    className="w-[20px] h-[20px] bg-white rounded-full"
                  />
                ),
              )}
            </div>
          </div>
          <div className="absolute inset-y-0 self-center right-0 bg-[#191C22] p-3.5 rounded-y-lg rounded-l-lg">
            <p className="text-white">
              {game_players?.player_two?.edges?.[0]?.node?.mancala}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
