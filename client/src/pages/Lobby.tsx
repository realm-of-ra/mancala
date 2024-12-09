import { gameIdAtom, isPlayingAtom } from "@/atom/atoms";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAtom } from "jotai";
import connectionIcon from "../assets/connect.png";
import Leaderboard from "@/components/lobby/leaderboard.tsx";
import Duels from "@/components/lobby/duels.tsx";
import { Dialog } from "@material-tailwind/react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  InformationCircleIcon,
  ClipboardDocumentCheckIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import createIcon from "../assets/createIcon.png";
import gotoIcon from "../assets/goto.png";
import end from "../assets/end.png";
import clip from "../assets/copied.png";
import LiveDuels from "@/components/lobby/live-duels.tsx";
import { useDojo } from "@/dojo/useDojo";
import { Link } from "react-router-dom";
import CreateLoaderSVG from "@/components/ui/svgs/create-loader.tsx";
import { useAccount, useConnect } from "@starknet-react/core";
import controller from "@/assets/controller.png";
import { useQuery } from "@apollo/client";
import { MancalaBoardModelsQuery } from "@/lib/constants";
import Dropdown from "@/components/dropdown";
import audio from "../music/audio_1.mp4";
import muteImage from "../assets/mute.png";
import unmuteImage from "../assets/unmute.png";

export default function Lobby() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("private");
  const [gameUrl, setGameUrl] = useState<string>();
  const [clipped, setClipped] = useState<string | undefined>();
  const [gameId, setGameId] = useAtom(gameIdAtom);
  const [creating, setCreating] = useState(false);
  const [player2, setPlayer2] = useState("");
  const handleOpen = () => {
    setGameUrl(undefined);
    setCreating(false);
    setGameId(null);
    setOpen(!open);
  };
  const handleClip = (url: string) => {
    navigator.clipboard.writeText(url);
    setClipped(url);
  };
  const { system } = useDojo();
  const account = useAccount();
  const create_initial_game_id = async () => {
    if (account.account) {
      await system.create_initial_game_id(account.account);
    }
  };
  const runOnceForever = () => {
    const hasRunOnce = localStorage.getItem("hasRunOnce");
    if (hasRunOnce === null) {
      create_initial_game_id();
      localStorage.setItem("hasRunOnce", "true");
    }
  };
  const isConnected = account.account != null;
  const create_game = async () => {
    setCreating(true);
    if (account.account) {
      //using account from cartridge
      const res = await system.create_game(account.account, setGameId);
      if (!res) {
        setCreating(false);
      }
    } else {
      console.log("Account not found");
    }
  };

  const create_private_game = async () => {
    setCreating(true);
    if (account.account) {
      const res = await system.create_private_game(
        account.account,
        player2,
        setGameId,
      );
      if (!res) {
        setCreating(false);
      }
    }
  };

  const { data, startPolling, loading } = useQuery(MancalaBoardModelsQuery);

  startPolling(1000);
  useEffect(() => {
    runOnceForever();
    if (gameId != null) {
      setGameUrl(`${window.location.origin}/games/${gameId}`);
    }
  }, [gameId]);

  const { connect, connectors } = useConnect();

  const connectWallet = async () => {
    connect({ connector: connectors[0] });
  };

  const filteredGames = data?.mancalaTMancalaBoardModels?.edges?.filter(
    (game: any) =>
      game?.node?.player_one === account.account?.address ||
      game?.node?.player_two === account.account?.address,
  );

  const filteredTransactions =
    data?.mancalaTMancalaBoardModels?.edges?.reduce((acc: any[], game: any) => {
      if (
        (game?.node?.player_one === account.account?.address ||
          game?.node?.player_two === account.account?.address) &&
        game?.node?.entity.executedAt
      ) {
        acc.push({
          ...game.node,
          executedAt: game?.node?.entity.executedAt,
        });
      }
      return acc;
    }, []) || [];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isPlaying, setPlaying] = useAtom(isPlayingAtom);

  const audioRef = useRef(new Audio(audio));
  useEffect(() => {
    if (isPlaying) {
      try {
        audioRef.current.play();
        audioRef.current.loop = true;
      } catch (error) {
        console.error("Error playing the audio", error);
      }
    } else {
      audioRef.current.pause();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setPlaying(!isPlaying);
  };

  return (
    <div className="w-full h-screen bg-[#15181E] space-y-8 fixed">
      <Header />
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row space-x-5">
          <Button
            className="p-0 bg-transparent rounded-full"
            onClick={togglePlay}
          >
            <img
              src={isPlaying ? unmuteImage : muteImage}
              width={65}
              height={65}
              alt="restart"
              className="rounded-full"
            />
          </Button>
          <div className="w-[920px]">
            <Tabs defaultValue="live" className="w-full space-y-10">
              <div className="flex flex-row items-center justify-between w-full">
                <TabsList className="bg-transparent space-x-1.5">
                  <TabsTrigger
                    value="live"
                    className="data-[state=active]:bg-[#1A1D25]
                              data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full
                              data-[state=active]:text-[#F58229]"
                  >
                    <div className="flex flex-row items-center space-x-1.5">
                      <div>
                        <div className="h-3 w-3 bg-[#00FF57] rounded-full animate-ping opacity-75 absolute" />
                        <div className="h-3 w-3 bg-[#00FF57] rounded-full" />
                      </div>
                      <p>Live Duels</p>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="duels"
                    className="data-[state=active]:bg-[#1A1D25]
                              data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full
                              data-[state=active]:text-[#F58229]"
                  >
                    Duels
                  </TabsTrigger>
                  <TabsTrigger
                    value="leaderboard"
                    className="data-[state=active]:bg-[#1A1D25]
                              data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full
                              data-[state=active]:text-[#F58229]"
                  >
                    <div className="flex flex-row items-center space-x-1.5">
                      <div className="bg-[url('./assets/champion.svg')] w-4 h-4 bg-cover bg-no-repeat" />
                      <p className="text-base">Leaderboard</p>
                    </div>
                  </TabsTrigger>
                </TabsList>
                <div className="flex flex-row items-center space-x-5 relative">
                  <div
                    className="flex flex-row items-center justify-center space-x-1 hover:cursor-pointer"
                    onClick={handleDropdownToggle}
                  >
                    <div className="bg-[url('./assets/filter.svg')] w-4 h-4 bg-cover bg-no-repeat" />
                    <h4 className="text-[#FCE3AA] font-medium">Filter</h4>
                  </div>
                  {isDropdownOpen && <Dropdown />}
                  <Button
                    className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl"
                    disabled={!isConnected}
                    onClick={handleOpen}
                  >
                    <div className="flex flex-row items-center space-x-1">
                      <img src={createIcon} className="w-5 h-5" />
                      <p className="text-[#FCE3AA] font-medium">Create Game</p>
                    </div>
                  </Button>
                </div>
              </div>
              <Dialog
                open={open}
                handler={handleOpen}
                className="flex flex-col items-center justify-center bg-transparent"
              >
                <div className="w-[700px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
                  <div className="w-full h-[500px]">
                    <div className="flex flex-row items-center justify-end w-full">
                      <Button
                        className="p-0 bg-transparent rounded-full"
                        onClick={handleOpen}
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
                    {gameUrl ? (
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <div className="flex flex-col items-center justify-center space-y-5 -mt-36">
                          <img src={clip} className="w-20 h-20" />
                          <h3 className="text-[#BDC2CC] text-2xl font-bold">
                            Share Invite
                          </h3>
                          <div
                            className="flex flex-row items-center justify-center space-x-1.5"
                            onClick={() => handleClip(gameUrl)}
                          >
                            {clipped ? (
                              <button className="bg-[#F582291A]/10 p-1 rounded-md">
                                <CheckBadgeIcon className="w-4 h-4 text-[#F58229]" />
                              </button>
                            ) : (
                              <button className="bg-[#F582291A]/10 p-1 rounded-md">
                                <ClipboardDocumentCheckIcon className="w-4 h-4 text-[#F58229]" />
                              </button>
                            )}
                            <p className="text-sm text-[#FCE3AA] font-medium">
                              {gameUrl}
                            </p>
                          </div>
                          <Link to={`/games/${gameId}`}>
                            <Button className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl">
                              <div className="flex flex-row items-center space-x-1">
                                <img src={gotoIcon} className="w-5 h-5" />
                                <p className="text-[#FCE3AA] font-semibold">
                                  Go to game
                                </p>
                              </div>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <div className="flex flex-col items-center justify-center space-y-5 -mt-36">
                          <div className="space-y-1 text-center">
                            <h3 className="text-[#BDC2CC] text-2xl font-bold">
                              Create Game
                            </h3>
                            <p className="font-bold text-lg text-[#4F5666]">
                              Get started with the Mancala Game
                            </p>
                          </div>
                          <div className="flex gap-20">
                            <RadioGroup
                              defaultValue={type}
                              className="flex flex-row space-x-10"
                              onValueChange={(value) => {
                                setCreating(false);
                                //prevent clip value from persisting when switching between private and public
                                if (type != value) {
                                  setClipped(undefined);
                                }
                                setType(value);
                              }}
                            >
                              <div className="flex items-center space-x-2 hover:cursor-pointer">
                                <RadioGroupItem value="private" id="private" />
                                <Label
                                  htmlFor="private"
                                  className="text-[#BDC2CC]/50 font-bold hover:cursor-pointer"
                                >
                                  Private
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 hover:cursor-pointer">
                                <RadioGroupItem
                                  value="public"
                                  id="public"
                                  className=""
                                />
                                <Label
                                  htmlFor="public"
                                  className="text-[#BDC2CC]/50 font-bold hover:cursor-pointer"
                                >
                                  Public
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                          {type === "private" ? (
                            <div className="space-y-5">
                              <input
                                className="p-2.5 w-72 rounded-xl border-2 border-[#1D212B] bg-transparent outline-none placeholder:text-[#4F5666]
                                                  placeholder:font-medium text-[#4F5666] font-medium"
                                placeholder="0x..."
                                onChange={(e) => setPlayer2(e.target.value)}
                              />
                              <div className="flex flex-row items-center justify-center space-x-1">
                                <InformationCircleIcon className="w-4 h-4 text-[#996E47]" />
                                <p className="text-[#996E47] text-xs font-medium">
                                  Paste a wallet address to invite a friend
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-row items-center justify-center space-x-1">
                              <InformationCircleIcon className="w-4 h-4 text-[#996E47]" />
                              <p className="text-[#996E47] text-xs font-medium">
                                Any player will be able to join the game after
                                creation
                              </p>
                            </div>
                          )}
                          {gameId == null && creating == false ? (
                            <Button
                              className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl"
                              onClick={() =>
                                type == "private"
                                  ? create_private_game()
                                  : create_game()
                              }
                            >
                              <div className="flex flex-row items-center space-x-1">
                                <img src={createIcon} className="w-5 h-5" />
                                <p className="text-[#FCE3AA] font-semibold">
                                  Create Game
                                </p>
                              </div>
                            </Button>
                          ) : (
                            <Button className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl">
                              <div className="flex flex-row items-center justify-center space-x-1">
                                <CreateLoaderSVG />
                                <p className="text-[#FCE3AA] font-semibold">
                                  Creating...
                                </p>
                              </div>
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Dialog>

              {isConnected ? (
                <>
                  <TabsContent value="live">
                    <LiveDuels games={data?.mancalaTMancalaBoardModels?.edges} />
                  </TabsContent>
                  <TabsContent value="duels">
                    <Duels
                      games={filteredGames}
                      transactions={filteredTransactions}
                      loading={loading}
                    />
                  </TabsContent>
                  <TabsContent value="leaderboard">
                    <Leaderboard
                      data={data?.mancalaTMancalaBoardModels?.edges}
                    />
                  </TabsContent>
                </>
              ) : (
                <div
                  className="bg-[url('./assets/lobby-box.png')] bg-contain bg-center bg-no-repeat w-[874px] h-[437px]
                                          flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col items-center space-y-1.5">
                    <img
                      src={connectionIcon}
                      alt="plug"
                      className="w-16 h-16 pb-5"
                    />
                    <h6 className="text-[#BDC2CC] font-bold text-lg">
                      Connect Wallet
                    </h6>
                    <p className="text-[#4F5666] pb-1.5">Connect your wallet</p>
                    <Button
                      className="flex justify-center items-center font-medium mx-auto relative bg-[#F58229] hover:bg-[#F18F01] text-lg white whitespace-nowrap rounded-full py-4 px-5 text-[#FCE3AA]"
                      onClick={connectWallet}
                    >
                      <img
                        src={controller}
                        width={30}
                        height={30}
                        alt="wallet"
                      />{" "}
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
