import GameMessage from "@/components/gameplay/game-message";
import { StarkProfile } from "starknet";
import { formatPlayerName, getPlayer } from "@/lib/utils";
import PlayerProfile from "@/components/gameplay/player-profile";
import { gameStarted } from "@/lib/constants";
import { useState } from "react";

export default function GameNavigation({
  game_players,
  player_names,
  game_node,
  account,
  gameId,
  timeRemaining,
  setTimeRemaining,
  message,
  setMessage,
  action,
  setAction,
}: {
  game_players: any;
  player_names: any;
  game_node: any;
  account: any;
  gameId: any;
  timeRemaining: any;
  setTimeRemaining: any;
  message: any;
  setMessage: any;
  action: { action: any, message: string };
  setAction: any;
}) {
  const games_data_one = game_players?.player_one?.edges?.[0]?.node;
  const games_data_two = game_players?.player_two?.edges?.[0]?.node;
  const started = gameStarted(games_data_one, games_data_two);
  const player_one = getPlayer(
    game_players?.player_one?.edges,
    game_players?.player_one?.edges?.[0]?.node?.address,
  );
  const player_two = getPlayer(
    game_players?.player_two?.edges,
    game_players?.player_two?.edges?.[0]?.node?.address,
  );
  const player_one_name = formatPlayerName(
    player_names?.mancalaAlphaProfileModels.edges.find(
      (item: any) => item.node.address === game_node?.player_one,
    )?.node.name,
    game_node?.player_one,
  );
  const player_two_name = formatPlayerName(
    player_names?.mancalaAlphaProfileModels.edges.find(
      (item: any) => item.node.address === game_node?.player_two,
    )?.node.name,
    game_node?.player_two,
  );

  // Determine if the current user is one of the players
  const isCurrentUserPlaying = account?.account?.address && (account?.account?.address === game_node?.player_one || account?.account?.address === game_node?.player_two);
  
  // If current user is playing, they should be player_two_display
  const [player_one_display, player_two_display] = isCurrentUserPlaying && account?.account?.address === game_node?.player_one
    ? [
        { name: player_two_name, address: game_node?.player_two, wins: player_two?.[0]?.wins },
        { name: player_one_name, address: game_node?.player_one, wins: player_one?.[0]?.wins }
      ]
    : [
        { name: player_one_name, address: game_node?.player_one, wins: player_one?.[0]?.wins },
        { name: player_two_name, address: game_node?.player_two, wins: player_two?.[0]?.wins }
      ];

  return (
    <nav className="relative w-full h-40">
      <div className="bg-[url('./assets/left-entry.png')] h-40 w-[45%] bg-cover bg-center bg-no-repeat absolute top-0 left-0">
        <div className="relative flex flex-col items-center justify-center w-full h-full -mt-5">
          <PlayerProfile
            name={player_one_display.name}
            address={player_one_display.address}
            wins={player_one_display.wins}
            isLeftSide={true}
          />
        </div>
      </div>
      <div className="bg-[url('./assets/right-entry.png')] h-40 w-[45%] bg-cover bg-center absolute top-0 right-0 bg-no-repeat">
        <div className="relative flex flex-col items-center justify-center w-full h-full -mt-5">
          <PlayerProfile
            name={player_two_display.name}
            address={player_two_display.address}
            wins={player_two_display.wins}
            isLeftSide={false}
          />
        </div>
      </div>
      <GameMessage
        game_node={game_node}
        game_players={game_players}
        player_one_name={player_one_display.name}
        player_two_name={player_two_display.name}
        account={account}
        gameStarted={started}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
        setProfiles={setProfiles}
        message={message}
        setMessage={setMessage}
        action={action}
        setAction={setAction}
      />
    </nav>
  );
}
