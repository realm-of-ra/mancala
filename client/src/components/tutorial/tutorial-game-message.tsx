/* eslint-disable react-hooks/exhaustive-deps */
import { AlarmClock } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import audio from "../../music/audio_1.mp4";
import { shortString } from "starknet";
import { logo } from "@/lib/icons_store";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { MancalaPlayerNames } from "@/lib/constants";

export default function TutorialGameMessage({
  game_node,
  game_players,
  player_one_name,
  player_two_name,
  account,
  gameStarted,
  timeRemaining,
  setTimeRemaining,
  message,
  setMessage,
  action,
  setAction,
  moveMessage
}: {
  game_node: any;
  game_players: any;
  player_one_name: any;
  player_two_name: any;
  account: any;
  gameStarted: any;
  timeRemaining: any;
  setTimeRemaining: any;
  message: string;
  setMessage: any;
  action: { action: any, message: string };
  setAction: any;
  moveMessage: string
}) {
  const audioRef = useRef(new Audio(audio));
  const [startTime, setStartTime] = useState<number | null>(null);
  const { data: profiles, startPolling: startPollingProfiles } = useQuery(MancalaPlayerNames);
  startPollingProfiles(1000);

  useEffect(() => {
    if (
      game_node?.status === "InProgress" &&
      gameStarted &&
      game_node?.winner === "0x0"
    ) {
      const initialTime = parseInt(game_node?.max_block_between_move, 16);
      setStartTime(Date.now());
      setTimeRemaining(initialTime);
    }

    let animationFrameId: number;

    const updateTimer = () => {
      if (
        game_node?.status === "InProgress" &&
        gameStarted &&
        game_node?.winner === "0x0" &&
        startTime !== null
      ) {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const newTimeRemaining = Math.max(
          Number(game_node?.max_block_between_move * 30) - elapsedTime,
          0,
        );
        setTimeRemaining(newTimeRemaining);

        if (newTimeRemaining > 0) {
          animationFrameId = requestAnimationFrame(updateTimer);
        }
      }
    };

    animationFrameId = requestAnimationFrame(updateTimer);
    return () => {
      cancelAnimationFrame(animationFrameId);
      audioRef.current.pause();
    };
  }, [game_players?.player_one?.edges, game_players?.player_two?.edges, game_node, gameStarted, startTime, setTimeRemaining]);
  const moveMessageOnTimer = (
    player: string,
    player_one_name: string,
    player_two_name: string,
  ) => {
    if (game_node?.winner === "0x0") {
      if (
        game_node?.status === "TimeOut" ||
        game_node?.status === "Finished" ||
        game_node?.status === "Forfeited"
      ) {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "span",
            { className: "text-[#F58229]" },
            `Game Over`,
          ),
        );
      } else {
        if (game_node?.status !== "Pending") {
          const isCurrentUserTurn =
            normalizeAddress(game_node?.current_player) === normalizeAddress(account.account?.address);
          const findPlayerProfile = (address: string) => {
            return profiles?.mancalaAlphaProfileModels?.edges?.find(
              (item: any) => normalizeAddress(item?.node.address) === normalizeAddress(address)
            )?.node?.name || "";
          };

          const currentPlayerAddress = game_node?.current_player;
          const found_profile_name = shortString.decodeShortString(findPlayerProfile(normalizeAddress(currentPlayerAddress)))
          const decodedName = found_profile_name === "0" ? undefined : found_profile_name;
            
          const displayName = decodedName || (normalizeAddress(currentPlayerAddress) === normalizeAddress(game_node?.player_one)
              ? player_one_name
              : player_two_name);

          if (isCurrentUserTurn) {
            return React.createElement(
              "div",
              null,
              `Make your move `,
              React.createElement(
                "span",
                { className: "text-[#F58229]" },
                displayName,
              ),
            );
          } else {
            return React.createElement(
              "div",
              null,
              `Waiting for `,
              React.createElement(
                "span",
                { className: "text-[#F58229]" },
                displayName,
              ),
              ` move`,
            );
          }
        } else {
          return React.createElement(
            "div",
            null,
            `Waiting for opponent to join`,
          );
        }
      }
    } else {
      return React.createElement(
        "div",
        null,
        `${normalizeAddress(game_node?.winner) === normalizeAddress(account.account?.address) ? "You won the game!" : "You lost the game!"}`,
      );
    }
  };
  const minutes =
    game_node?.status != "InProgress"
      ? "00"
      : (Math.floor(timeRemaining % 3600) / 60 < 10 ? "0" : "") +
        Math.floor((timeRemaining % 3600) / 60);
  const seconds =
    game_node?.status != "InProgress"
      ? "00"
      : (timeRemaining % 60 < 10 ? "0" : "") + Math.floor(timeRemaining % 60);

  const normalizeAddress = (address: string) => {
    // Remove '0x' prefix, convert to lowercase, and pad with leading zeros if needed
    const cleanAddress = address?.toLowerCase()?.replace('0x', '');
    // Pad to 64 characters (32 bytes) with leading zeros
    return cleanAddress?.padStart(64, '0');
  };

  const [close, setClose] = useState<boolean>()

  return (
    <div className="absolute inset-x-0 top-5 flex flex-col items-center justify-center w-full h-40 bg-transparent">
      <div className="flex flex-col items-center justify-center mt-14 space-y-2 relative">
        <Link to="/">
          <img src={logo} width={150} height={150} alt="Logo" />
        </Link>
        <div className="min-w-[440px] min-h-48 bg-[url('./assets/main-message-section.png')] bg-center bg-cover bg-no-repeat rounded-xl py-2.5 px-3.5 flex flex-col items-center justify-center space-y-1.5 z-20">
          <p className="text-4xl font-bold text-white">{`${minutes} : ${seconds}`}</p>
          {
            <div className="flex flex-row items-center justify-center space-x-1">
              <div className="text-white">
                {message}
              </div>
            </div>
          }
        </div>
          <motion.div 
            className="w-[500px] h-[88px] bg-[url('./assets/message-slide.png')] bg-center bg-contain bg-no-repeat absolute -bottom-1.5 flex flex-col"
            initial={{ y: -40, opacity: 0 }}
            animate={moveMessage && !close ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 5
            }}
          >
            <div className="flex flex-row items-center justify-center w-full z-20 absolute bottom-1">
              <div className="flex flex-row items-center space-x-1.5">
                <p className="text-white">{moveMessage}</p>
                {
                action?.action != undefined && action?.message && 
                <div className="flex flex-row items-center space-x-1">
                  <p onClick={action?.action} className="text-green-500 hover:cursor-pointer">Accept</p>
                  <span className="text-white">or</span>
                  <p className="text-red-500 hover:cursor-pointer" onClick={() => { 
                    setAction({ action: undefined, messsage: '' })
                    setMessage('');
                    setClose(true)
                  }}>Decline</p>
                </div>
                }
              </div>
            </div>
          </motion.div>
      </div>
    </div>
  );
}
