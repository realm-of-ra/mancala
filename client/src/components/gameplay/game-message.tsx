/* eslint-disable react-hooks/exhaustive-deps */
import { AlarmClock } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { logo } from "@/lib/icons_store";
import { motion } from "framer-motion";
import { useTimer } from "react-timer-hook";

export default function GameMessage({
  game_node,
  game_players,
  player_one_name,
  player_two_name,
  account,
  gameStarted,
  moveMessage,
  message,
  setMessage,
  action,
  setAction,
}: {
  game_node: any;
  game_players: any;
  player_one_name: any;
  player_two_name: any;
  account: any;
  gameStarted: any;
  moveMessage: any;
  message: string;
  setMessage: any;
  action: { action: any; message: string };
  setAction: any;
}) {
  const startTime = parseInt(game_node?.last_turn_change_timestamp, 16) * 1000;
  const expiryTimestamp = new Date(startTime);
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 360);

  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Timer expired"),
  });

  useEffect(() => {
    if (
      game_node?.status === "InProgress" &&
      gameStarted &&
      game_node?.winner === "0x0"
    ) {
      const newExpiryTimestamp = new Date(startTime);
      newExpiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds() + 360);
      restart(newExpiryTimestamp);
    }
  }, [game_node?.status, gameStarted, restart, startTime]);

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
            normalizeAddress(game_node?.current_player) ===
            normalizeAddress(account.account?.address);

          const user_position =
            game_players?.mancalaFirePlayerModels?.edges?.find(
              (item: any) =>
                item.node.address ===
                normalizeAddress(game_node?.current_player),
            );
          const user_name =
            user_position === 0 ? player_one_name : player_two_name;
          const opponent_name =
            user_position === 0 ? player_two_name : player_one_name;
          if (isCurrentUserTurn) {
            return React.createElement(
              "div",
              null,
              `Make your move `,
              React.createElement(
                "span",
                { className: "text-[#F58229]" },
                user_name,
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
                opponent_name,
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

  const normalizeAddress = (address: string) => {
    // Remove '0x' prefix, convert to lowercase, and pad with leading zeros if needed
    const cleanAddress = address?.toLowerCase()?.replace("0x", "");
    // Pad to 64 characters (32 bytes) with leading zeros
    return cleanAddress?.padStart(64, "0");
  };

  const [close, setClose] = useState<boolean>();

  return (
    <div className="absolute inset-x-0 top-5 flex flex-col items-center justify-center w-full h-40 bg-transparent">
      <div className="flex flex-col items-center justify-center mt-14 space-y-5 relative">
        <Link to="/">
          <img src={logo} width={150} height={150} alt="Logo" />
        </Link>
        <div className="min-w-[400px] min-h-44 bg-[url('./assets/main-message-section.png')] bg-center bg-cover bg-no-repeat rounded-xl py-2.5 px-3.5 flex flex-col items-center justify-center space-y-1.5 z-20">
          <p className="text-4xl font-bold text-white">
            {String(minutes).padStart(2, "0")} :{" "}
            {String(seconds).padStart(2, "0")}
          </p>
          {
            <div className="flex flex-row items-center justify-center space-x-1">
              {game_node?.status !== "Pending" && (
                <AlarmClock className="w-6 h-6 text-white" />
              )}
              <div className="text-white">
                {moveMessage
                  ? moveMessage
                  : moveMessageOnTimer(
                      game_node?.current_player,
                      player_one_name,
                      player_two_name,
                    )}
              </div>
            </div>
          }
        </div>
        <motion.div
          className="w-[390px] h-20 bg-[url('./assets/message-slide.png')] bg-center bg-contain bg-no-repeat absolute -bottom-1.5 flex flex-col"
          initial={{ y: -40, opacity: 0 }}
          animate={
            (message || action?.message) && !close
              ? { y: 0, opacity: 1 }
              : { y: -40, opacity: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 5,
          }}
        >
          <div className="flex flex-row items-center justify-center w-full z-20 absolute bottom-1">
            <div className="flex flex-row items-center space-x-1.5">
              <p className="text-white">{message}</p>
              {action?.action != undefined && action?.message && (
                <div className="flex flex-row items-center space-x-1">
                  <p
                    onClick={action?.action}
                    className="text-green-500 hover:cursor-pointer"
                  >
                    Accept
                  </p>
                  <span className="text-white">or</span>
                  <p
                    className="text-red-500 hover:cursor-pointer"
                    onClick={() => {
                      setAction({ action: undefined, messsage: "" });
                      setMessage("");
                      setClose(true);
                    }}
                  >
                    Decline
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
