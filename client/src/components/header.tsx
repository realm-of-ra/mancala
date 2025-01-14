import { useEffect, useState, useRef, useCallback } from "react";
import { getColorOfTheDay, getPlayer, truncateString } from "../lib/utils";
import mancala from "../assets/logo.png";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { Link } from "react-router-dom";
import { shortString } from "starknet";
import { Button } from "@material-tailwind/react";
import { UserIcon, ChevronDownIcon, Cog8ToothIcon, TrophyIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import controllerSvg from "../assets/controller.svg";
import connectB from "../assets/connect.svg";
import leader from "../assets/leader.svg";
import profileImage from "../assets/profile.svg";
import lobby from "../assets/lobby.svg";
import { useQuery } from "@apollo/client";
import { MancalaHeaderQuery, MancalaPlayerNames } from "@/lib/constants";
import { ControllerTrophy } from "./controller-trophy";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import connector from "@cartridge/controller";
import ControllerConnector from "@cartridge/connector/controller";
import catridgeImage from "@/assets/controller.png";

export default function Header() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const connectWallet = async () => {
    connect({ connector: connectors[0] });
  };
  const disconnectWallet = async () => {
    disconnect();
  };

  const { account, connector } = useAccount();
  const controller = connectors[0] as any
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      if (!controller) return;
      try {
        const name = await controller.username();
        setUsername(name || "");
      } catch (error) {
        console.error("Error fetching username:", error);
        setUsername("");
      }
    };

    if (account?.address) {
      fetchUsername();
    } else {
      setUsername(""); // Reset username when disconnected
    }
  }, [account?.address, controller]);

  const { data, startPolling } = useQuery(MancalaHeaderQuery);
  startPolling(1000);

  const player = getPlayer(
    data?.mancalaAlphaMancalaGameModels?.edges,
    account?.address || "",
  );

  const { data: playerData, startPolling: startPollingPlayerData } =
    useQuery(MancalaPlayerNames);
  startPollingPlayerData(1000);
  const [playerName, setPlayerName] = useState("");
  const [playerImage, setPlayerImage] = useState("");

  useEffect(() => {
    const profile: any = playerData?.mancalaAlphaProfileModels?.edges.find(
      (player: any) => player.node.address === account?.address,
    );
    if (!account?.address || !profile) {
      setPlayerName("");
      setPlayerImage("");
      return;
    }

    if (profile?.node?.name) {
      setPlayerName(shortString.decodeShortString(profile?.node?.name));
    }
    if (profile?.node?.profile_uri) {
      setPlayerImage(profile?.node?.profile_uri);
    }
  }, [
    account?.address,
    playerData?.mancalaAlphaProfileModels?.edges,
    playerData,
  ]);
  
  const handleTrophyClick = useCallback(() => {
    if (!connector?.controller) {
      console.error("Connector not initialized");
      return;
    }
    connector?.controller.openProfile("achievements");
  }, [connector]);

  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex-1 w-full -mr-10" />
      <div className="h-[100px] w-[800px]">
        <div className="bg-[url('./assets/leaderboard-top.png')] w-[800px] h-[100px] bg-contain bg-no-repeat flex flex-col items-center justify-center">
          <Link to="/" className="mb-4">
            <img src={mancala} className="h-10 w-36" />
          </Link>
        </div>
      </div>
      <div className={clsx("flex-1 w-full", account?.address ? "-ml-28" : "-ml-10")}>
        <div className="flex flex-row space-x-2.5 items-center justify-start">
          {
            account?.address && <Button className="bg-[#171922] hover:bg-[#171922] border-none p-2.5 rounded-full shadow-none" onClick={handleTrophyClick}>
            <TrophyIcon className="w-6 h-6 text-[#DB8534]" />
          </Button>
          }
              {
                account?.address ? <Button
                className="font-medium relative flex flex-col justify-center items-center bg-[#171922] w-fit text-sm rounded-full p-0"
                onClick={disconnectWallet}
              >
                <div className="flex flex-row items-center justify-center p-1.5 pl-5 pr-7 -space-x-1">
                  <img src={catridgeImage} className="w-12 h-12" />
                  <p className="text-[#FCE3AA]">
                    {playerName 
                      ? (playerName.length > 16 ? playerName.slice(0, 16) + "..." : playerName)
                      : (username.length > 16 ? username.slice(0, 16) + "..." : username)}
                  </p>
                </div>
              </Button> : <Button
                className="flex justify-between font-medium relative items-center bg-[#F58229] w-fit text-sm white whitespace-nowrap rounded-full"
                onClick={connectWallet}
              >
                <p className="text-[#FCE3AA]">Connect Wallet</p>
              </Button>
              }
              {
                account?.address && playerImage !== "" ? <Link to={`/profile?address=${account?.address}`}>
                  <img src={playerImage} className="w-10 h-10 rounded-full border-2 border-[#171922]" />
                </Link> : account?.address && <Link to={`/profile?address=${account?.address}`}><Button className="bg-[#171922] hover:bg-[#171922] border-none p-2.5 rounded-full shadow-none">
                <UserCircleIcon className="w-6 h-6 text-[#DB8534]" />
              </Button></Link>
              }
              <Button className="bg-[#171922] hover:bg-[#171922] border-none p-2.5 rounded-full shadow-none">
                <Cog8ToothIcon className="w-6 h-6 text-[#DB8534]" />
              </Button>
        </div>
      </div>
    </div>
  );
}
