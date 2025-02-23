import { useState } from "react";
import GameBoard from "@/components/gameplay/game-board";
import MessageArea from "@/components/message-area.tsx";
import { useDojo } from "@/dojo/useDojo";
import { useAccount } from "@starknet-react/core";
import { useParams } from "react-router-dom";
import {
  MancalaBoardModelQuery,
  MancalaPlayerNames,
  MancalaPlayQuery,
  normalizeAddress,
} from "@/lib/constants";
import { useQuery } from "@apollo/client";
import AudioSection from "@/components/gameplay/audio-section";
import GameChat from "@/components/gameplay/game-chat";
import RestartButton from "@/components/gameplay/restart-button";
import EndgameButton from "@/components/gameplay/end-game-button";
import GameNavigation from "@/components/gameplay/game-navigation";
import TimeoutButton from "@/components/gameplay/timeout-button";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import winner from "@/assets/win.png";
import lose from "@/assets/lose.png";
import end from "@/assets/end.png";
import createIcon from "@/assets/createIcon.png";
import { Button } from "@/components/ui/button";
import backgroundVideo from "@/assets/background-video.mp4";

export default function Gameplay() {
  const { gameId } = useParams();
  const { data: game_metadata, startPolling: startMetadataPolling } = useQuery(
    MancalaBoardModelQuery,
    { variables: { gameId: gameId } },
  );
  const { data: game_players, startPolling: startPlayersPolling } = useQuery(
    MancalaPlayQuery,
    { variables: { gameId: gameId } },
  );
  const { data: player_names } = useQuery(MancalaPlayerNames);
  const { system } = useDojo();
  const game_node =
    game_metadata?.mancalaSaltMancalaBoardModels?.edges?.[0]?.node;
  const account = useAccount();
  const [moveMessage, setMoveMessage] = useState<string | undefined>();
  const [timeRemaining, setTimeRemaining] = useState(0);
  const involved =
    game_players?.mancalaSaltPlayerModels.edges.filter(
      (item: any) => item?.node.address === account.address,
    ).length > 0
      ? true
      : false;
  const player_position = involved
    ? game_players?.mancalaSaltPlayerModels.edges.findIndex(
        (item: any) => item?.node.address === account.address,
      )
    : 0;
  const opponent_position = player_position === 0 ? 1 : 0;
  const opposition_address = game_players?.mancalaSaltPlayerModels.edges[opponent_position]?.node.address;
  startMetadataPolling(100);
  startPlayersPolling(100);
  const [volume, setVolume] = useState(35);
  const [message, setMessage] = useState("");
  const [action, setAction] = useState<{ action: any; message: string }>({
    action: undefined,
    message: "",
  });

  const is_finished = involved && game_node?.status === "Finished";
  const [open, setOpen] = useState(is_finished);
  const handleClose = () => {
    setOpen(false)
  };
  const user_won = normalizeAddress(game_node?.winner) === normalizeAddress(account.account?.address || "");
  const [players, setPlayers] = useState<{ name: string, address: string }[]>()
  return (
    <main className="min-h-screen w-full bg-[#0F1116] bg-[url('./assets/villagers.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center overflow-y-scroll">
      <video id="background-video" className="z-10 w-full h-screen absolute object-cover" loop autoPlay>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <GameNavigation
        game_players={game_players}
        player_names={player_names}
        game_node={game_node}
        account={account}
        gameId={gameId}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
        message={message}
        setMessage={setMessage}
        action={action}
        setAction={setAction}
        moveMessage={moveMessage}
        setPlayers={setPlayers}
      />
      <div className="w-full h-[calc(100vh-200px)] max-w-7xl flex flex-row items-start space-x-10 z-20">
        <div className="flex flex-col justify-center space-y-5 w-fit">
          <RestartButton
            gameId={gameId || ""}
            game_players={game_players}
            setMessage={setMessage}
          />
          <EndgameButton gameId={gameId || ""} setMessage={setMessage} />
          <TimeoutButton
            gameId={gameId || ""}
            opposition_address={opposition_address}
            setMessage={setMessage}
          />
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
            volume={volume}
            setVolume={setVolume}
            setMessage={setMessage}
          />
          <div className="relative flex flex-row items-center justify-between w-full mt-10 h-[fit-content]">
            <AudioSection volume={volume} setVolume={setVolume} />
            <MessageArea
              address={account?.account?.address}
              game_players={game_players}
              setMessage={setMessage}
              setAction={setAction}
            />
            <div className="flex flex-row items-start justify-center pb-5 space-x-5">
              <GameChat />
            </div>
          </div>
        </div>
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              className="fixed inset-0 z-50 bg-transparent shadow-none flex items-center justify-center"
            >
              <DialogBackdrop
                transition
                className="fixed inset-0 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
              />
              <DialogPanel
                transition
                className="relative flex flex-col items-center justify-center transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-[#0F1116] border-2 border-[#272A32] rounded-2xl w-[800px] h-[560px] px-16">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-end w-full">
                      <Button
                        className="p-0 bg-transparent rounded-full absolute top-8 right-5"
                        onClick={handleClose}
                      >
                        <img
                          src={end}
                          width={50}
                          height={50}
                          alt="cancel"
                          className="rounded-full"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-3.5">
                      <img src={user_won ? winner : lose} className="w-40 h-52" /> 
                      <h3 className="text-2xl text-white font-semibold">{user_won ? "You Won" : "You Lost"}</h3>
                      <p className="text-[#4F5666] text-lg">{user_won ? `Congratulations you beat ${players?.[opponent_position].name || ""}` : `You couldn't beat ${players?.[opponent_position].name || ""}`}</p>
                      <Button
                        className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl"
                      >
                        <div className="flex flex-row items-center space-x-1">
                          <img src={createIcon} className="w-5 h-5" />
                          <p className="text-[#FCE3AA] font-medium">Share</p>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                </DialogPanel>
            </Dialog>
          </div>
      </div>
    </main>
  );
}
