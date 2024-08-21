import React from "react";
import Pit from "@/components/pit";
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
    <div className="w-full h-[400px] border-2 border-[#32363D] rounded-l-full rounded-r-full flex flex-col items-center justify-center bg-[#15181E] mt-24">
      <div className="w-[97%] h-[370px] rounded-l-full rounded-r-full flex flex-row items-center justify-between space-x-5 relative">
        <div className="w-56 h-[350px] border-2 border-[#32363D] rounded-l-[165px] rounded-r-3xl relative">
          {/* Player 1 pot */}
          <div className="flex flex-row justify-end items-center px-2.5 h-full">
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
          <div className="absolute inset-y-0 self-center left-0 bg-[#191C22] p-3.5 rounded-y-lg rounded-r-lg">
            <p className="text-white">
              {game_players?.player_one?.edges?.[0]?.node?.mancala}
            </p>
          </div>
        </div>
        <div className="w-[75%] h-[350px] flex flex-col items-start justify-between space-y-2">
          {/* Player 1 */}
          <div className="h-[175px] w-full flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center flex-1 space-x-5">
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
        <div className="w-56 h-[350px] border-2 border-[#32363D] rounded-r-[165px] relative rounded-l-3xl">
          {/* Player 2 pot */}
          <div className="flex flex-row justify-start items-center px-2.5 h-full">
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
