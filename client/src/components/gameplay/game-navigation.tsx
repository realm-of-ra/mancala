import GameMessage from "@/components/gameplay/game-message";
import { StarkProfile } from "starknet";
import { getPlayer } from "@/lib/utils";
import PlayerProfile from "@/components/gameplay/player-profile";
import { gameStarted } from "@/lib/constants";
import { useState } from "react";

export default function GameNavigation({ game_players, game_node, account, gameId, timeRemaining, setTimeRemaining }: 
    { game_players: any, game_node: any, account: any, gameId: any, timeRemaining: any, setTimeRemaining: any }) {
    const games_data_one = game_players?.player_one?.edges?.[0]?.node;
    const games_data_two = game_players?.player_two?.edges?.[0]?.node;
    const started = gameStarted(games_data_one, games_data_two);
    const [profiles, setProfiles] = useState<StarkProfile[]>();
    const player_one = getPlayer(game_players?.player_one?.edges, game_players?.player_one?.edges?.[0]?.node?.address);
    const player_two = getPlayer(game_players?.player_two?.edges, game_players?.player_two?.edges?.[0]?.node?.address);
    return(
        <nav className="relative w-full h-40">
        <div className="bg-[url('./assets/left-entry.png')] h-40 w-[45%] bg-cover bg-center bg-no-repeat absolute top-0 left-0">
          <div className="relative flex flex-col items-center justify-center w-full h-full -mt-5">
            <PlayerProfile
              name={profiles?.[0].name}
              address={game_node?.player_one}
              wins={player_one?.[0]?.wins}
              isLeftSide={true}
            />
          </div>
        </div>
        <div className="bg-[url('./assets/right-entry.png')] h-40 w-[45%] bg-cover bg-center absolute top-0 right-0 bg-no-repeat">
          <div className="relative flex flex-col items-center justify-center w-full h-full -mt-5">
            <PlayerProfile
              name={profiles?.[1].name}
              address={game_node?.player_two}
              wins={player_two?.[0]?.wins}
              isLeftSide={false}
            />
          </div>
        </div>
        <GameMessage game_node={game_node} game_players={game_players} account={account} 
        profiles={profiles} gameStarted={started} timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} setProfiles={setProfiles} />
      </nav>
    )
}