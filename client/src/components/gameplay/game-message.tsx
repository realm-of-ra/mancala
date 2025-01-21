/* eslint-disable react-hooks/exhaustive-deps */
import { AlarmClock } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import audio from "../../music/audio_1.mp4";
import { useProvider } from "@starknet-react/core";
import { StarknetIdNavigator } from "starknetid.js";
import { constants } from "starknet";
import { logo } from "@/lib/icons_store";
import { ELIZA_ADDRESS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function GameMessage({
  game_node,
  game_players,
  player_one_name,
  player_two_name,
  account,
  profiles,
  gameStarted,
  timeRemaining,
  setTimeRemaining,
  setProfiles,
  message,
  action
}: {
  game_node: any;
  game_players: any;
  player_one_name: any;
  player_two_name: any;
  account: any;
  profiles: any;
  gameStarted: any;
  timeRemaining: any;
  setTimeRemaining: any;
  setProfiles: any;
  message: string;
  action: { action: any, message: string }
}) {
  const audioRef = useRef(new Audio(audio));
  const { provider } = useProvider();
  const starknetIdNavigator = useMemo(() => {
    return new StarknetIdNavigator(
      provider,
      constants.StarknetChainId.SN_SEPOLIA,
    );
  }, [provider]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elizaState, setElizaState] = useState<'idle' | 'thinking' | 'error'>('idle');
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

    if (
      !starknetIdNavigator ||
      !game_players?.player_one?.edges?.[0]?.node?.address ||
      !game_players?.player_two?.edges?.[0]?.node?.address
    )
      return;
    (async () => {
      const profileData = await starknetIdNavigator?.getStarkProfiles([
        game_players?.player_one?.edges?.[0]?.node?.address,
        game_players?.player_two?.edges?.[0]?.node?.address,
      ]);
      if (!profileData) return;
      if (profileData) return setProfiles(profileData);
    })();
    return () => {
      cancelAnimationFrame(animationFrameId);
      audioRef.current.pause();
    };
  }, [game_players?.player_one?.edges, game_players?.player_two?.edges, game_node, gameStarted, startTime, starknetIdNavigator, setProfiles, setTimeRemaining]);
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
            game_node?.current_player === account.account?.address;
          const currentPlayerName = profiles?.find(
            (item: any) => item.address === game_node?.current_player,
          )?.name;
          const displayName =
            currentPlayerName ||
            (game_node?.current_player === game_node?.player_one
              ? player_one_name
              : player_two_name);

          if (normalizeAddress(game_node?.current_player) === normalizeAddress(ELIZA_ADDRESS)) {
            if (elizaState === 'thinking') {
              return React.createElement(
                "div",
                null,
                React.createElement(
                  "span",
                  { className: "text-[#F58229]" },
                  "Eliza is thinking..."
                ),
              );
            } else if (elizaState === 'error') {
              return React.createElement(
                "div",
                null,
                React.createElement(
                  "span",
                  { className: "text-[#F58229]" },
                  "Error calling Mancala, retrying..."
                ),
              );
            }
          }

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
        `${game_node?.winner === account.account?.address ? "You won the game!" : "You lost the game!"}`,
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
    const cleanAddress = address.toLowerCase().replace('0x', '');
    // Pad to 64 characters (32 bytes) with leading zeros
    return cleanAddress.padStart(64, '0');
  };

  console.log({
    message,
    action
  })

  return (
    <div className="absolute inset-x-0 top-5 flex flex-col items-center justify-center w-full h-40 bg-transparent">
      <div className="flex flex-col items-center justify-center mt-10 space-y-5 relative">
        <Link to="/">
          <img src={logo} width={150} height={150} alt="Logo" />
        </Link>
        <div className="min-w-[350px] min-h-36 bg-[url('./assets/main-message-section.png')] bg-center bg-cover bg-no-repeat rounded-xl py-2.5 px-3.5 flex flex-col items-center justify-center space-y-1.5 z-20">
          <p className="text-4xl font-bold text-white">{`${minutes} : ${seconds}`}</p>
          {
            <div className="flex flex-row items-center justify-center space-x-1">
              {game_node?.status !== "Pending" && (
                <AlarmClock className="w-6 h-6 text-white" />
              )}
              <div className="text-white">
                {moveMessageOnTimer(
                  game_node?.current_player,
                  player_one_name,
                  player_two_name,
                )}
              </div>
            </div>
          }
        </div>
          <motion.div 
            className="w-[320px] h-20 bg-[url('./assets/message-slide.png')] bg-center bg-contain bg-no-repeat absolute -bottom-3.5 flex flex-col"
            initial={{ y: -40, opacity: 0 }}
            animate={(message || action?.message) ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 5
            }}
          >
            <div className="flex flex-row items-center justify-center w-full z-20 absolute bottom-2">
              <div>
                <p className="text-white">{message}</p>
                { action?.action != undefined && action?.message && <p onClick={action?.action} className="text-[#F58229]">{action?.message}</p>}
              </div>
            </div>
          </motion.div>
      </div>
    </div>
  );
}
