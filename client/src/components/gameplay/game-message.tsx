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
          let displayName =
            currentPlayerName ||
            (game_node?.current_player === game_node?.player_one
              ? player_one_name
              : player_two_name);

          if (normalizeAddress(game_node?.current_player) === normalizeAddress(ELIZA_ADDRESS)) {
            displayName = "Eliza";
            if (elizaState === 'idle') {
              callElizaMove();
            }
            
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

  const constructElizaMessage = () => {
    console.log({ game_node });
    
    const pits = game_players?.mancalaAlphaPitModels?.edges;
    if (!pits || !game_node?.game_id || !game_players?.mancalaAlphaPlayerModels?.edges?.length) {
      console.log("Missing required game data");
      return null;
    }

    // Create arrays to store pit values for both players
    const player1Address = game_players.mancalaAlphaPlayerModels.edges[0]?.node?.address;
    const player1Pits = new Array(7).fill(0);
    const player2Pits = new Array(7).fill(0);

    // Fill the arrays with seed counts
    pits.forEach(({ node }: { node: any }) => {
      const { player, pit_number, seed_count } = node;
      const pitArray = player === player1Address ? player1Pits : player2Pits;
      // pit_number is 1-based, so we subtract 1 for array indexing
      pitArray[pit_number - 1] = seed_count;
    });

    // Get regular pits (excluding Mancala) for both players
    const playerPits = player1Pits.slice(0, 6);
    const playerMancala = player1Pits[6];
    const opponentPits = player2Pits.slice(0, 6);
    const opponentMancala = player2Pits[6];

    return `You are already a part of game with game id ${game_node.game_id}. This is the board state, Board state: Your pits (1-6): [${playerPits.join(',')}] Mancala(7): ${playerMancala} | Opponent pits (8-13): [${opponentPits.join(',')}] Mancala(14): ${opponentMancala}, make your move`;
  };

  const callElizaMove = async (retryCount = 0) => {
    try {
      const serverPort = import.meta.env.VITE_SERVER_PORT || "3000";
      const message = constructElizaMessage();

      if (message) {      
        console.log(`Attempting to call Eliza (attempt ${retryCount + 1})`);
        setElizaState('thinking');
  
        const response = await fetch(`http://localhost:${serverPort}/Eliza/message`, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            text: message,
            userId: "eliza",
            userName: "Eliza",
          }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Eliza's response:", data);
        setElizaState('idle');
        return data;
      }
    } catch (error) {
      console.error("Error calling Eliza:", error);
      setElizaState('error');
      // Wait for 1 second before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
      return callElizaMove(retryCount + 1);
    }
  };

  const normalizeAddress = (address: string) => {
    // Remove '0x' prefix, convert to lowercase, and pad with leading zeros if needed
    const cleanAddress = address.toLowerCase().replace('0x', '');
    // Pad to 64 characters (32 bytes) with leading zeros
    return cleanAddress.padStart(64, '0');
  };

  useEffect(() => {
    let isSubscribed = true;

    const makeElizaMove = async () => {
      if (
        game_node?.status === "InProgress" &&
        normalizeAddress(game_node?.current_player) === normalizeAddress(ELIZA_ADDRESS) &&
        game_node?.winner === "0x0"
      ) {
        console.log("Eliza turn");
        try {
          if (isSubscribed) {
            await callElizaMove();
          }
        } catch (error) {
          console.error("Failed to complete Eliza's move:", error);
        }
      }
    };

    makeElizaMove();

    return () => {
      isSubscribed = false;
    };
  }, [
    game_node?.current_player,
    game_node?.status,
    game_node?.winner,
    game_players?.mancalaAlphaPitModels?.edges
  ]);

  return (
    <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center w-full h-40 bg-transparent">
      <div className="flex flex-col items-center justify-center mt-10 space-y-5">
        <Link to="/">
          <img src={logo} width={150} height={150} alt="Logo" />
        </Link>
        <div className="min-w-48 min-h-24 bg-[url('./assets/countdown_background.png')] bg-center bg-cover bg-no-repeat rounded-xl py-2.5 px-3.5 flex flex-col items-center justify-center space-y-1.5">
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
      </div>
    </div>
  );
}
