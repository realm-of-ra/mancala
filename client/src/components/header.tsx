import { useEffect, useState, useRef } from "react";
import { getColorOfTheDay, getPlayer, truncateString } from "../lib/utils";
import mancala from "../assets/logo.png";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { Link } from "react-router-dom";
import { shortString } from "starknet";
import { Button } from "@material-tailwind/react";
import { UserIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import controllerSvg from "../assets/controller.svg";
import connectB from "../assets/connect.svg";
import leader from "../assets/leader.svg";
import profileImage from "../assets/profile.svg";
import lobby from "../assets/lobby.svg";
import { useQuery } from "@apollo/client";
import { MancalaHeaderQuery, MancalaPlayerNames } from "@/lib/constants";

export default function Header() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const connectWallet = async () => {
    connect({ connector: connectors[0] });
  };
  const disconnectWallet = async () => {
    disconnect();
  };

  const { account } = useAccount();

  const { data, startPolling } = useQuery(MancalaHeaderQuery);
  startPolling(1000);

  const player = getPlayer(
    data?.mancalaAlphaMancalaGameModels?.edges,
    account?.address || "",
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownClose, setIsDropdownClose] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleConnect = () => {
    setIsDropdownOpen(!isDropdownOpen);
    connectWallet();
  };

  const handleDropdownToggleClose = () => {
    setIsDropdownClose(!isDropdownClose);
  };
  const handleDisconnect = () => {
    setIsDropdownClose(!isDropdownClose);
    disconnectWallet();
  };

  const color = getColorOfTheDay(account?.address || "", new Date());

  const { data: playerData, startPolling: startPollingPlayerData } =
    useQuery(MancalaPlayerNames);
  startPollingPlayerData(1000);
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const profile: any = playerData?.mancalaAlphaProfileModels?.edges.find(
      (player: any) => player.node.address === account?.address,
    );
    console.log(
      "profile: ",
      playerData?.mancalaAlphaProfileModels?.edges.map((player: any) => player),
    );
    if (!account?.address || !profile) {
      setPlayerName("");
      return;
    }

    if (profile?.node?.name) {
      setPlayerName(shortString.decodeShortString(profile?.node?.name || ""));
    }
  }, [
    account?.address,
    playerData?.mancalaAlphaProfileModels?.edges,
    playerData,
    account?.address,
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownClose(false);
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex-1 w-full -mr-10">
        {account?.address && playerName && playerName !== "0" ? (
          <div className="flex flex-row space-x-2.5 items-center justify-end">
            {/* <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative"> */}
            <div className="rounded-full border-2 border-[#4B505C] relative">
              <div className="bg-[#15171E] rounded-full p-2.5">
                <UserIcon color="#F58229" className="w-10 h-10" />
              </div>
              <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
                <div className="h-4 w-4 bg-[#00FF57] rounded-full" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-right text-white">
                {playerName !== "0"
                  ? playerName
                  : truncateString(account?.address)}
              </h3>
              <h4 className="text-sm text-[#F58229] text-start">
                {player?.wins < 4
                  ? "Level 1"
                  : `Level ${Number.isNaN(Math.floor(player?.wins)) ? 1 : Math.floor(player?.wins) < 4 ? 1 : Math.floor(player?.wins / 4) + 1}`}
              </h4>
            </div>
          </div>
        ) : (
          <div className="flex flex-row space-x-2.5 items-center justify-end">
            <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
              <div>
                <div
                  className="flex items-center justify-center rounded-full p-2.5"
                  style={{ backgroundColor: color }}
                >
                  <UserIcon color="#F58229" className="w-10 h-10 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
                  <div className="h-4 w-4 bg-[#00FF57] rounded-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-2xl text-right text-white">Player</h3>
              <h4 className="text-sm text-[#F58229] text-start">
                Setup Profile
              </h4>
            </div>
          </div>
        )}
      </div>
      <div className="h-[100px] w-[800px]">
        <div className="bg-[url('./assets/leaderboard-top.png')] w-[800px] h-[100px] bg-contain bg-no-repeat flex flex-col items-center justify-center">
          <Link to="/" className="mb-4">
            <img src={mancala} className="h-10 w-36" />
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full -ml-16">
        <div className="flex flex-row space-x-2.5 items-center justify-start">
          <div className="relative " ref={dropdownRef}>
            {account?.address ? (
              <div className="relative ">
                <Button
                  className="p-0 flex font-medium justify-between relative items-center bg-[#171922] w-fit text-sm text-[#BFC5D4] whitespace-nowrap rounded-full"
                  onClick={handleDropdownToggleClose}
                >
                  <div className="bg-[#272a32] px-4 py-2 rounded-l-full">
                    <img
                      src={controllerSvg}
                      width={40}
                      height={40}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-row items-center w-fit px-5 py-3.5 space-x-5 ">
                    <p className="text-[18px] text-white leading-3 normal-case">
                      {playerName
                        ? playerName.length > 18
                          ? truncateString(playerName)
                          : playerName
                        : truncateString(account?.address)}
                    </p>
                    <ChevronDownIcon
                      className={clsx("w-4 h-4 ml-3 transition duration-300", {
                        "transform rotate-180": isDropdownOpen,
                      })}
                    />
                  </div>
                </Button>

                {isDropdownClose && (
                  <div className="absolute top-1/2 font-medium transform translate-y-6 w-[259px] right-0 mt-2 border border-[#272A32] bg-[#171922] text-[#BFC5D4] rounded-xl shadow-xl z-20">
                    <Link to="/profile">
                      <button className="flex flex-row items-center w-full px-4 py-2 rounded-tl-xl rounded-tr-xl  bg-[#171922] hover:bg-[#272A32] hover:bg-opacity-50 cursor-pointer transition duration-300 ease-in-out">
                        <img src={profileImage} />
                        <span className="block px-4 py-2">Profile</span>
                      </button>
                    </Link>
                    <Link to="/lobby">
                      <button className="flex flex-row items-center w-full px-4 py-2 bg-[#171922] hover:bg-[#272A32] cursor-pointer">
                        <img src={lobby} />
                        <span className="block px-4 py-2">Lobby</span>
                      </button>
                    </Link>
                    <Link to="/leaderboard">
                      <button className="flex flex-row items-center w-full px-4 py-2 bg-[#171922] hover:bg-[#272A32] cursor-pointer">
                        <img src={leader} />
                        <span className="block px-4 py-2">Leaderboard</span>
                      </button>
                    </Link>
                    <button
                      className="flex flex-row items-center w-full px-4 py-2  rounded-bl-xl rounded-br-xl  bg-[#171922] hover:bg-[#272A32] cursor-pointer"
                      onClick={handleDisconnect}
                    >
                      <img src={connectB} />
                      <span className="block px-4 py-2 text-[#F58229] whitespace-nowrap">
                        Disconnect Wallet
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                className="flex justify-between font-medium relative items-center bg-[#F58229] w-[259px] text-sm white whitespace-nowrap rounded-full"
                onClick={handleDropdownToggle}
              >
                <span className="h-full flex items-center rounded-tl-full rounded-bl-full absolute left-0 top-0 bottom-0 px-4">
                  <img
                    src={controllerSvg}
                    width={40}
                    height={40}
                    className="text-left"
                  />
                </span>
                <span className="ml-12 text-[#FCE3AA]">Connect Wallet</span>
                <ChevronDownIcon
                  className={clsx("w-4 h-4 ml-3 transition duration-300", {
                    "transform rotate-180": isDropdownOpen,
                  })}
                />
              </Button>
            )}

            {isDropdownOpen && (
              <div className="absolute top-1/2 transform font-medium translate-y-5 w-[259px] right-0 mt-2 border border-[#272A32] bg-[#171922] text-[#BFC5D4] rounded-xl shadow-xl z-20">
                <button className="flex flex-row items-center w-full px-4 py-2 rounded-t-xl bg-[#171922] hover:bg-[#272A32] cursor-pointer">
                  <img src={connectB} />
                  <span
                    className="block px-4 py-2 text-[#F58229] whitespace-nowrap"
                    onClick={handleConnect}
                  >
                    Connect Wallet
                  </span>
                </button>
                <button className="flex flex-row items-center w-full px-4 py-2 bg-[#171922] hover:bg-[#272A32] hover:bg-opacity-50 cursor-pointer transition duration-300 ease-in-out">
                  <img src={lobby} />
                  <Link to="/" className="block px-4 py-2">
                    Lobby
                  </Link>
                </button>
                <button className="flex flex-row items-center w-full px-4 py-2 bg-[#171922] hover:bg-[#272A32] cursor-pointer rounded-b-xl">
                  <img src={leader} />
                  <Link to="/" className="block px-4 py-2">
                    Leaderboard
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
