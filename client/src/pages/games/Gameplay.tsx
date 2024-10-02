import { useState } from "react";
import GameBoard from "@/components/gameplay/game-board";
import MessageArea from "@/components/message-area.tsx";
import { useDojo } from "@/dojo/useDojo";
import { useAccount } from "@starknet-react/core";
import { useParams } from "react-router-dom";
import { MancalaBoardModelQuery, MancalaPlayQuery } from "@/lib/constants";
import { useQuery } from "@apollo/client";
import AudioSection from "@/components/gameplay/audio-section";
import GameChat from "@/components/gameplay/game-chat";
import LeaderboardButton from "@/components/gameplay/leaderboard-button";
import RestartButton from "@/components/gameplay/restart-button";
import EndgameButton from "@/components/gameplay/end-game-button";
import GameNavigation from "@/components/gameplay/game-navigation";
import TimeoutButton from "@/components/gameplay/timeout-button";

export default function Gameplay() {
  const { gameId } = useParams();
  const { data: game_metadata, startPolling: startMetadataPolling } = useQuery(MancalaBoardModelQuery, { variables: { gameId: gameId } });
  const { data: game_players, startPolling: startPlayersPolling } = useQuery(MancalaPlayQuery, { variables: { gameId: gameId } });
  const { system } = useDojo();
  const game_node = game_metadata?.mancalaMancalaBoardModels?.edges?.[0]?.node;
  const account = useAccount();
  const [_, setMoveMessage] = useState<string | undefined>();
  const [timeRemaining, setTimeRemaining] = useState(0);
  const involved = game_players?.mancalaPlayerModels.edges.filter((item: any) => item?.node.address === account.address).length > 0 ? true : false;
  const player_position = involved ? game_players?.mancalaPlayerModels.edges.findIndex((item: any) => item?.node.address === account.address) : 0;
  const opponent_position = player_position === 0 ? 1 : 0;
  const opposition_address = game_players?.mancalaPlayerModels.edges[opponent_position]?.node.address;
  startMetadataPolling(100);
  startPlayersPolling(100);
  return (
    <main className="min-h-screen w-full bg-[#0F1116] flex flex-col items-center overflow-y-scroll">
      <GameNavigation game_players={game_players} game_node={game_node} account={account} gameId={gameId} timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} />
      <div className="w-full h-[calc(100vh-200px)] max-w-7xl flex flex-row items-start space-x-10">
        <div className="flex flex-col justify-center space-y-5 w-fit">
          <RestartButton gameId={gameId || ""} game_players={game_players} />
          <EndgameButton gameId={gameId || ""} game_players={game_players} />
          <TimeoutButton gameId={gameId || ""} opposition_address={opposition_address} />
        </div>
        <div className="flex-1 w-full h-full">
          <GameBoard
            game_players={game_players}
            game_node={game_node}
            system={system}
            account={account}
            gameId={gameId || ""}
            setMoveMessage={setMoveMessage}
            setTimeRemaining={setTimeRemaining}
          />
          <div className="relative flex flex-row items-center justify-between w-full mt-10 h-[fit-content]">
            <AudioSection />
            <MessageArea
              address={account?.account?.address}
              game_players={game_players}
            />
            <div className="flex flex-row items-start justify-center pb-5 space-x-5">
              <LeaderboardButton />
              <GameChat />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}