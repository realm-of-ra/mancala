import { useEffect, useState, useCallback, SetStateAction } from "react";
import mancala from "../assets/logo.png";
import { useAccount, useBalance, useConnect, useDisconnect } from "@starknet-react/core";
import { Link, useNavigate } from "react-router-dom";
import { shortString } from "starknet";
import { Button } from "@material-tailwind/react";
import { Cog8ToothIcon, SpeakerXMarkIcon, TrophyIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@apollo/client";
import { MancalaHeaderQuery, MancalaPlayerNames } from "@/lib/constants";
import catridgeImage from "@/assets/controller.png";
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { Slider } from "@/components/ui/slider"
import Logout from "./ui/svgs/logout";
import audio_url from "@/music/audio_1.mp4";

export default function Header() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const connectWallet = async () => {
    connect({ connector: connectors[0] });
  };
  const disconnectWallet = async () => {
    disconnect();
  };

  const { account, connector } = useAccount() as any;
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

  const { data: playerData, startPolling: startPollingPlayerData } =
    useQuery(MancalaPlayerNames);
  startPollingPlayerData(1000);
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const profile: any = playerData?.mancalaAlphaProfileModels?.edges.find(
      (player: any) => player.node.address === account?.address,
    );
    if (!account?.address || !profile) {
      setPlayerName("");
      return;
    }

    if (profile?.node?.name) {
      setPlayerName(shortString.decodeShortString(profile?.node?.name));
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

  const navigate = useNavigate();

  //Get user STRK balance
  const { data: balanceData, error } = useBalance({
    address: account?.address,
    token: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
  });

  const [volume, setVolume] = useState(35);
  const [audio] = useState(new Audio(audio_url));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.volume = volume / 100;
    if (volume === 0 && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else if (volume > 0 && !isPlaying) {
      audio.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  }, [volume, audio, isPlaying]);

  useEffect(() => {
    audio.loop = true;
    
    audio.addEventListener('ended', () => {
      audio.play().catch(console.error);
    });

    audio.addEventListener('error', (e) => {
      console.error('Audio playback error:', e);
      setIsPlaying(false);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

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
      <div className={"flex-1 w-full -ml-10"}>
        <div className="flex flex-row space-x-2.5 items-center justify-start">
          {
            account?.address && <Button className="bg-[#171922] hover:bg-[#171922] border-none p-2.5 rounded-full shadow-none" onClick={handleTrophyClick}>
            <TrophyIcon className="w-6 h-6 text-[#DB8534]" />
          </Button>
          }
              {
                account?.address ? <Button
                className="font-medium relative flex flex-col justify-center items-center bg-[#171922] w-fit text-sm rounded-full p-0"
                onClick={() => navigate("/profile")}
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
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger>
                  <Button className="bg-[#171922] hover:bg-[#171922] border-none p-2.5 rounded-full shadow-none">
                    <Cog8ToothIcon className="w-6 h-6 text-[#DB8534]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-[#171922] hover:bg-[#171922] border-none text-[#BFC5D4] w-40"
                >
                  {
                    account?.address && <DropdownMenuItem className="flex flex-col items-start justify-start hover:bg-[#171922] bg-[#171922] px-0 font-medium" disabled>
                    <p className="px-3">Account</p>
                    <div className="bg-[#111419] mx-1 p-2 rounded-md flex flex-row items-center justify-start space-x-1">
                      <p>
                        {error ? "0.00" : balanceData?.formatted} {balanceData?.symbol}
                      </p>
                      <div className="bg-[url('./assets/sn.png')] bg-contain bg-no-repeat w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  }
                  <DropdownMenuItem className="flex flex-col items-start justify-start hover:bg-[#171922] bg-[#171922] px-0 font-medium" disabled>
                    <p className="px-3">Sounds</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start justify-start hover:bg-[#191b23] bg-[#171922] px-0 font-medium" disabled>
                    <div className="flex flex-row items-center justify-start space-x-1 mx-1 p-2 w-full">
                      <div className="flex flex-row items-center justify-start space-x-1 w-full">
                        {volume > 0 ? <SpeakerWaveIcon className="w-20 h-20 text-white" /> : <SpeakerXMarkIcon className="w-20 h-20 text-white" />}
                        <Slider defaultValue={[volume]} max={100} step={5} color="#FFFFFF" onValueChange={(value: SetStateAction<number>[]) => setVolume(value[0])} />
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start justify-start hover:bg-[#191b23] bg-[#171922] px-0 font-medium" onClick={account?.address ? disconnectWallet : connectWallet}>
                      <button className="flex flex-row items-center justify-start space-x-1 px-3 text-[#F58229]">
                        <Logout />
                        <p>{account?.address ? "Disconnect" : "Connect Wallet"}</p>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
