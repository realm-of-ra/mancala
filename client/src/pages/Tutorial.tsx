import { useEffect, useState } from "react";
import MessageArea from "@/components/message-area.tsx";
import { useDojo } from "@/dojo/useDojo";
import { useAccount } from "@starknet-react/core";
import { useParams } from "react-router-dom";
import {
  MancalaBoardModelQuery,
  MancalaPlayerNames,
  MancalaPlayQuery,
} from "@/lib/constants";
import { from, useQuery } from "@apollo/client";
import AudioSection from "@/components/gameplay/audio-section";
import GameChat from "@/components/gameplay/game-chat";
import EndgameButton from "@/components/gameplay/end-game-button";
import TimeoutButton from "@/components/gameplay/timeout-button";
import TutorialGameBoard from "@/components/tutorial/tutorial-board";
import TutorialGameNavigation from "@/components/tutorial/tutorial-game-navigation";
import TutorialRestartButton from "@/components/tutorial/tutorial-restart-button";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Tutorial() {
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
    game_metadata?.mancalaAlphaMancalaBoardModels?.edges?.[0]?.node;
  const account = useAccount();
  const [moveMessage, setMoveMessage] = useState<string | undefined>(
    "Pick up all seeds from a selected pit and drop one in each pit counter-clockwise",
  );
  const [timeRemaining, setTimeRemaining] = useState(0);
  startMetadataPolling(100);
  startPlayersPolling(100);
  const [volume, setVolume] = useState(35);
  const [message, setMessage] = useState("MOVEMENTS OF SEEDS");
  const [action, setAction] = useState<{ action: any; message: string }>({
    action: undefined,
    message: "",
  });
  const [step, setStep] = useState(1);
  const [state, setState] = useState("initial");
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleReset = () => {
    setStep(1);
    setState("initial");
    setMessage("MOVEMENTS OF SEEDS");
    setMoveMessage("Pick up all seeds from a selected pit and drop one in each pit counter-clockwise");
    setAction({ action: undefined, message: "" });
  };

  useEffect(() => {
    if (step === 1 || message !== "MOVEMENTS OF SEEDS" || moveMessage !== "Pick up all seeds from a selected pit and drop one in each pit counter-clockwise") {
      setIsOverlayVisible(true);
    }
  }, [step, message, moveMessage]);

  return (
    <main className="min-h-screen w-full bg-[#0F1116] bg-[url('./assets/bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center overflow-y-scroll">
      <TutorialGameNavigation
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
        moveMessage={moveMessage || ""}
      />
      <div className="w-full h-[calc(100vh-200px)] max-w-7xl flex flex-row items-start space-x-10">
        <div className="flex flex-col justify-center space-y-5 w-fit">
          <TutorialRestartButton onReset={handleReset} />
          <EndgameButton gameId={""} setMessage={() => undefined} />
          <TimeoutButton
            gameId={""}
            opposition_address={""}
            setMessage={() => undefined}
          />
        </div>
        <div>
          <div 
            className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
              isOverlayVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsOverlayVisible(false);
              }
            }}
          >
            <div className="bg-[#0F1116]/60 p-6 rounded-lg w-96 space-y-1 flex flex-col items-center justify-center">
              <h5 className="text-white text-center text-xl font-medium">{message}</h5>
              <p className="text-white text-center">
                {moveMessage}
              </p>
              <Button 
                className="bg-[#F582290D] text-[#F58229] text-sm font-medium rounded-md px-4 py-2" 
                onClick={() => setIsOverlayVisible(false)}
              >
                Play
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-full">
          <TutorialGameBoard
            game_players={game_players}
            game_node={game_node}
            system={system}
            account={account}
            gameId={gameId || ""}
            volume={volume}
            message={message}
            step={step}
            state={state}
            setMoveMessage={setMoveMessage}
            setTimeRemaining={setTimeRemaining}
            setVolume={setVolume}
            setMessage={setMessage}
            setStep={setStep}
            setState={setState}
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
      </div>
    </main>
  );
}
