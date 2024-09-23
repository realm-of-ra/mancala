import { AlarmClock } from "lucide-react";
import { Link } from "react-router-dom";
import { truncateString } from "@/lib/utils";
import React, { useEffect, useMemo, useRef, useState } from "react";
import audio from "../../music/audio_1.mp4";
import { useProvider } from "@starknet-react/core";
import { StarknetIdNavigator } from "starknetid.js";
import { constants } from "starknet";
import { logo } from "@/lib/icons_store";

export default function GameMessage({ game_node, game_players, account, profiles , gameStarted, timeRemaining, setTimeRemaining, setProfiles }: 
    { game_node: any, game_players: any, account: any, profiles: any, gameStarted: any, timeRemaining: any, setTimeRemaining: any, setProfiles: any }) {
    const audioRef = useRef(new Audio(audio));
    const { provider } = useProvider();
    const starknetIdNavigator = useMemo(() => {
        return new StarknetIdNavigator(
          provider,
          constants.StarknetChainId.SN_SEPOLIA,
        );
    }, [provider]);
    const [startTime, setStartTime] = useState<number | null>(null);
    useEffect(() => {
      if (game_node?.status === "InProgress" && gameStarted && game_node?.winner === "0x0") {
        const initialTime = parseInt(game_node?.time_between_move, 16);
        setStartTime(Date.now());
        setTimeRemaining(initialTime);
      }
    
      let animationFrameId: number;
    
      const updateTimer = () => {
        if (game_node?.status === "InProgress" && gameStarted && game_node?.winner === "0x0" && startTime !== null) {
          const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
          const newTimeRemaining = Math.max(parseInt(game_node?.time_between_move, 16) - elapsedTime, 0);
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
    }, [
      game_players?.player_one?.edges,
      game_players?.player_two?.edges,
      game_node,
      gameStarted,
      startTime,
      starknetIdNavigator,
      setProfiles,
    ]);
    const moveMessageOnTimer = (player: string) => {
      if (game_node?.winner === "0x0")
        if (game_node?.status === "TimeOut" || game_node?.status === "Finished" || game_node?.status === "Forfeited") {
          return React.createElement("div", null, React.createElement("span", { className: "text-[#F58229]" }, `Game Over`)) } else {
          if (game_node?.status !== "Pending") {
            if (player === account.account?.address && game_players?.player_one?.edges) {
              if (player === game_players?.player_one.edges[0]?.node?.address) {
                return React.createElement("div", null, `Make your move `, React.createElement("span", { className: "text-[#F58229]" }, profiles?.[0].name ? profiles?.[0].name : truncateString(player)));
              } else {
                return React.createElement("div", null, `Make your move `, React.createElement("span", { className: "text-[#F58229]" }, profiles?.[1].name ? profiles?.[1].name : truncateString(player)));
              }
            } else {
            if (
              game_players?.player_one?.edges &&
              player === game_players?.player_one.edges[0]?.node?.address
            ) {
              return React.createElement("div", null, `Waiting for `, React.createElement("span", { className: "text-[#F58229]" }, profiles?.[0].name ? profiles?.[0].name : truncateString(player)), ` move`);
            } else { return React.createElement("div", null, `Waiting for `, React.createElement("span", { className: "text-[#F58229]" }, profiles?.[1].name ? profiles?.[1].name : truncateString(player)), ` move`) }
          }
        } else { return React.createElement("div", null, `Waiting for opponent to join`) }
      }
      else {
        return React.createElement("div", null, `${game_node?.winner === account.address ? "You won the game!" : "You lost the game!"}`)
      }
    };
    const minutes = game_node?.status != "InProgress" ? "00" : (Math.floor(timeRemaining % 3600) / 60 < 10 ? "0" : "") + Math.floor((timeRemaining % 3600) / 60);
    const seconds = game_node?.status != "InProgress" ? "00" : (timeRemaining % 60 < 10 ? "0" : "") + Math.floor(timeRemaining % 60);
    return(
        <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center w-full h-40 bg-transparent">
          <div className="flex flex-col items-center justify-center mt-10 space-y-5">
            <Link to="/">
              <img src={logo} width={150} height={150} alt="Logo" />
            </Link>
            <div className="min-w-48 min-h-24 bg-[url('./assets/countdown_background.png')] bg-center bg-cover bg-no-repeat rounded-xl py-2.5 px-3.5 flex flex-col items-center justify-center space-y-1.5">
              <p className="text-4xl font-bold text-white">{`${minutes} : ${seconds}`}</p>
              {
                <div className="flex flex-row items-center justify-center space-x-1">
                { game_node?.status !== "Pending" && <AlarmClock className="w-6 h-6 text-white" /> }
                <div className="text-white">
                  {moveMessageOnTimer(game_node?.current_player)}
                </div>
              </div>
              }
            </div>
          </div>
        </div>
    )
}