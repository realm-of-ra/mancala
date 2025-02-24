import GameMessage from "@/components/gameplay/game-message";
import { formatPlayerName, getPlayer, lookupMissingNames } from "@/lib/utils";
import PlayerProfile from "@/components/gameplay/player-profile";
import { gameStarted } from "@/lib/constants";
import { SetStateAction, Dispatch, useEffect, useState } from "react";

export default function GameNavigation({
  game_players,
  player_names,
  game_node,
  account,
  moveMessage,
  message,
  setMessage,
  action,
  setAction,
  setPlayers,
}: {
  game_players: any;
  player_names: any;
  game_node: any;
  account: any;
  moveMessage: any;
  message: any;
  setMessage: any;
  action: { action: any; message: string };
  setAction: any;
  setPlayers: Dispatch<
    SetStateAction<{ name: string; address: string }[] | undefined>
  >;
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

  // Add state for address lookup cache
  const [, setAddressLookupCache] = useState<Map<string, string>>(new Map());

  // Update useEffect to use lookupMissingNames
  useEffect(() => {
    if (game_node) {
      const addresses = [
        game_node.player_one,
        game_node.player_two,
        game_node.winner,
      ].filter(Boolean);

      lookupMissingNames(addresses, setAddressLookupCache);
    }
  }, [game_node]);

  const player_one_name = formatPlayerName(
    player_names?.mancalaFireProfileModels.edges.find(
      (item: any) => item.node.address === game_node?.player_one,
    )?.node.name,
    game_node?.player_one,
  );

  const player_two_name = formatPlayerName(
    player_names?.mancalaFireProfileModels.edges.find(
      (item: any) => item.node.address === game_node?.player_two,
    )?.node.name,
    game_node?.player_two,
  );

  // Determine if the current user is one of the players
  const isCurrentUserPlaying =
    account?.account?.address &&
    (account?.account?.address === game_node?.player_one ||
      account?.account?.address === game_node?.player_two);

  // If current user is playing, they should be player_two_display
  const [player_one_display, player_two_display] =
    isCurrentUserPlaying && account?.account?.address === game_node?.player_one
      ? [
          {
            name: player_two_name,
            address: game_node?.player_two,
            wins: player_two?.[0]?.wins,
          },
          {
            name: player_one_name,
            address: game_node?.player_one,
            wins: player_one?.[0]?.wins,
          },
        ]
      : [
          {
            name: player_one_name,
            address: game_node?.player_one,
            wins: player_one?.[0]?.wins,
          },
          {
            name: player_two_name,
            address: game_node?.player_two,
            wins: player_two?.[0]?.wins,
          },
        ];

  useEffect(() => {
    if (game_node && player_one_display && player_two_display) {
      setPlayers((prevPlayers) => {
        const newPlayers = [
          {
            name: player_one_display?.name || "",
            address: player_one_display?.address || "",
          },
          {
            name: player_two_display?.name || "",
            address: player_two_display?.address || "",
          },
        ];
        if (
          prevPlayers?.[0]?.name !== newPlayers[0].name ||
          prevPlayers?.[0]?.address !== newPlayers[0].address ||
          prevPlayers?.[1]?.name !== newPlayers[1].name ||
          prevPlayers?.[1]?.address !== newPlayers[1].address
        ) {
          return newPlayers;
        }
        return prevPlayers;
      });
    }
  }, [game_node, player_one_display, player_two_display, setPlayers]);

  return (
    <nav className="relative w-full h-40 z-20">
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
        moveMessage={moveMessage}
        message={message}
        setMessage={setMessage}
        action={action}
        setAction={setAction}
      />
    </nav>
  );
}
