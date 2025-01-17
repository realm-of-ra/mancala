import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { useState, useEffect } from "react";
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
import { useQuery } from "@apollo/client";
import {
  ELIZA_ADDRESS,
  MancalaBoardModelsQuery,
  MancalaPlayerNames,
} from "@/lib/constants";
import Dropdown from "@/components/dropdown";
import clsx from "clsx";
// import audio from "../music/audio_1.mp4";

export default function Lobby() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("private");
  const [gameUrl, setGameUrl] = useState<string>();
  const [clipped, setClipped] = useState<string | undefined>();
  const [gameId, setGameId] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [player2, setPlayer2] = useState("");
  const [playWith, setPlayWith] = useState("AI");
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
  const isConnected = account.account != null;
  const create_game = async () => {
    setCreating(true);
    if (account.account) {
      //using account from cartridge
      playWith === "Human"
        ? await system.create_game(account.account, setGameId)
        : await system.create_private_game(
            account.account,
            ELIZA_ADDRESS,
            setGameId,
          );
      if (gameId) {
        setCreating(false);
      }
    } else {
      console.log("Account not found");
    }
  };

  const create_private_game = async () => {
    setCreating(true);
    if (account.account) {
      await system.create_private_game(
        account.account,
        playWith === "Human" ? player2 : ELIZA_ADDRESS,
        setGameId,
      );
      if (gameId) {
        setCreating(false);
      }
    }
  };

  const { data, startPolling, loading } = useQuery(MancalaBoardModelsQuery);

  startPolling(1000);

  const { connect, connectors } = useConnect();

  const connectWallet = async () => {
    connect({ connector: connectors[0] });
  };

  const { data: playerData, startPolling: startPollingPlayerData } =
    useQuery(MancalaPlayerNames);
  startPollingPlayerData(1000);
  const filteredGames = data?.mancalaAlphaMancalaBoardModels?.edges
    ?.filter(
      (game: any) =>
        game?.node?.player_one === account.account?.address ||
        game?.node?.player_two === account.account?.address ||
        game?.node?.player_two === "0x0",
    )
    .sort((a: any, b: any) => {
      // First priority: Games without player two (excluding 0x0)
      const aHasNoPlayerTwo = !a.node.player_two || a.node.player_two === "";
      const bHasNoPlayerTwo = !b.node.player_two || b.node.player_two === "";
      if (aHasNoPlayerTwo !== bHasNoPlayerTwo) {
        return aHasNoPlayerTwo ? -1 : 1;
      }

      // Second priority: Games with player_two = 0x0
      const aHasZeroPlayerTwo = a.node.player_two === "0x0";
      const bHasZeroPlayerTwo = b.node.player_two === "0x0";
      if (aHasZeroPlayerTwo !== bHasZeroPlayerTwo) {
        return aHasZeroPlayerTwo ? -1 : 1;
      }

      // Third priority: Games with both players
      return 0;
    })
    .map((game: any) => {
      const player1Profile = playerData?.mancalaAlphaProfileModels?.edges?.find(
        (profile: any) => profile.node.address === game.node.player_one,
      );
      const player2Profile = playerData?.mancalaAlphaProfileModels?.edges?.find(
        (profile: any) => profile.node.address === game.node.player_two,
      );

      const winner = playerData?.mancalaAlphaProfileModels?.edges?.find(
        (profile: any) => profile.node.address === game.node.winner,
      );
      return {
        ...game,
        node: {
          ...game.node,
          player_one_name: player1Profile?.node?.name,
          player_two_name: player2Profile?.node?.name,
          winner: winner?.node?.name || game.node.winner,
        },
      };
    });

  const filteredTransactions =
    data?.mancalaAlphaMancalaBoardModels?.edges?.reduce(
      (acc: any[], game: any) => {
        if (
          game?.node?.player_one === account.account?.address ||
          game?.node?.player_two === account.account?.address ||
          (game?.node?.entity.executedAt && game?.node?.player_two === "0x0")
        ) {
          acc.push({
            ...game.node,
            executedAt: game?.node?.entity.executedAt,
          });
        }
        return acc;
      },
      [],
    ) || [];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const [isPlaying, setPlaying] = useAtom(isPlayingAtom);

  // const audioRef = useRef(new Audio(audio));
  // useEffect(() => {
  //   if (isPlaying) {
  //     try {
  //       audioRef.current.play();
  //       audioRef.current.loop = true;
  //     } catch (error) {
  //       console.error("Error playing the audio", error);
  //     }
  //   } else {
  //     audioRef.current.pause();
  //   }
  //   return () => {
  //     audioRef.current.pause();
  //   };
  // }, [isPlaying]);

  const gamesWithPlayerNames = data?.mancalaAlphaMancalaBoardModels?.edges
    ?.map((game: any) => {
      const player1Profile = playerData?.mancalaAlphaProfileModels?.edges?.find(
        (profile: any) => profile.node.address === game.node.player_one,
      );
      const player2Profile = playerData?.mancalaAlphaProfileModels?.edges?.find(
        (profile: any) => profile.node.address === game.node.player_two,
      );
      return {
        ...game,
        node: {
          ...game.node,
          player_one_name: player1Profile?.node?.name,
          player_two_name: player2Profile?.node?.name,
        },
      };
    })
    .filter(
      (game: any) =>
        game.node.player_one !== "0x0" && game.node.player_two !== "0x0",
    );

  useEffect(() => {
    if (gameId) {
      setGameUrl(`${window.location.origin}/games/${gameId}`);
      setCreating(false);
    }
  }, [gameId, creating, open, type, playWith]);

  const [tabValue, setTabValue] = useState("duels");

  return (
    <div className="w-full h-screen bg-[#0F1116] bg-[url('./assets/bg.png')] bg-cover bg-center space-y-8 fixed">
      <Header />
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row space-x-5">
          <div className="w-[928px]">
            <Tabs defaultValue={tabValue} className="w-full space-y-10" onValueChange={(value) => setTabValue(value)}>
              <div className="flex flex-row items-center justify-between w-full bg-[#0F1116] p-4 rounded-l-full rounded-r-full">
                <TabsList className="bg-transparent space-x-1.5">
                  <TabsTrigger
                    value="duels"
                    className="data-[state=active]:bg-[#1A1D25] data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full text-[#BDC2CC]/50 data-[state=active]:text-[#F58229] px-4 py-2.5"
                  >
                    Duels
                  </TabsTrigger>
                  <TabsTrigger
                    value="live"
                    className="data-[state=active]:bg-[#1A1D25] data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full text-[#BDC2CC]/50 data-[state=active]:text-[#F58229] px-4 py-2.5"
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
                    value="leaderboard"
                    className="data-[state=active]:bg-[#1A1D25] data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full text-[#BDC2CC]/50 data-[state=active]:text-[#F58229] px-4 py-2.5"
                  >
                    <div className="flex flex-row items-center space-x-1.5">
                      <div className={clsx("bg-[url('./assets/champion.svg')] w-4 h-4 bg-cover bg-no-repeat", tabValue === "leaderboard" && "bg-[url('./assets/cup.png')]")} />
                      <p>Leaderboard</p>
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
                <div className="w-[700px] bg-[#0F1116] border-2 border-[#272A32] rounded-2xl p-8">
                  <div className="w-full h-[350px]">
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
                    {gameId ? (
                      <div className="flex flex-col items-center justify-center w-full h-full">
                        <div className="flex flex-col items-center justify-center space-y-5 -mt-20">
                          <img src={clip} className="w-20 h-20" />
                          <h3 className="text-[#BDC2CC] text-2xl font-bold">
                            Share Invite
                          </h3>
                          <div
                            className="flex flex-row items-center justify-center space-x-1.5"
                            onClick={() => handleClip(gameUrl || "")}
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
                        <div className="flex flex-col items-center justify-center space-y-5 -mt-20">
                          <div className="space-y-1.5 text-center">
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
                                  setGameId(null);
                                  setGameUrl(undefined);
                                }
                                setType(value);
                              }}
                            >
                              <div className="flex items-center space-x-2 hover:cursor-pointer">
                                <RadioGroupItem value="private" id="private" />
                                <Label
                                  htmlFor="private"
                                  className={type == "private" ? "text-[#F58229] font-bold hover:cursor-pointer" : "text-[#BDC2CC]/50 font-bold hover:cursor-pointer"}
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
                                  className={type == "public" ? "text-[#F58229] font-bold hover:cursor-pointer" : "text-[#BDC2CC]/50 font-bold hover:cursor-pointer"}
                                >
                                  Public
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="flex flex-row items-center justify-center space-x-3.5">
                            <button
                              className="bg-[#15171E] hover:bg-[#1A1D25] border border-[#1D212B] font-medium hover:cursor-pointer rounded-lg py-3 px-5 text-[#F58229] text-sm"
                              style={{
                                color:
                                  playWith == "Human" ? "#F58229" : "#4F5666",
                                backgroundColor:
                                  playWith == "Human" ? "#15171E" : "#1A1D25",
                              }}
                              onClick={() => setPlayWith("Human")}
                            >
                              Human Player
                            </button>
                            <button
                              className="bg-[#15171E] hover:bg-[#1A1D25] border border-[#1D212B] font-medium hover:cursor-pointer rounded-lg py-3 px-5 text-[#F58229] text-sm"
                              onClick={() => setPlayWith("AI")}
                              style={{
                                color: playWith == "AI" ? "#F58229" : "#4F5666",
                                backgroundColor:
                                  playWith == "AI" ? "#15171E" : "#1A1D25",
                              }}
                            >
                              Play with Eliza AI
                            </button>
                          </div>
                          {type === "private" ? (
                            <div className="space-y-5">
                              {playWith === "Human" && (
                                <>
                                  <input
                                    className="p-2.5 w-72 rounded-xl border border-[#1D212B] bg-transparent outline-none placeholder:text-[#4F5666] placeholder:font-medium text-[#4F5666] font-medium"
                                    placeholder="0x..."
                                    onChange={(e) => setPlayer2(e.target.value)}
                                  />
                                </>
                              )}
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
                          {gameId === null && creating === false ? (
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
                  <TabsContent value="live" className="px-0">
                    <LiveDuels games={gamesWithPlayerNames} />
                  </TabsContent>
                  <TabsContent value="duels">
                    <Duels
                      games={filteredGames}
                      transactions={filteredTransactions}
                      loading={loading}
                    />
                  </TabsContent>
                  <TabsContent value="leaderboard">
                    <Leaderboard data={gamesWithPlayerNames} />
                  </TabsContent>
                </>
              ) : (
                <div className="bg-[#0F1116] bg-contain bg-center bg-no-repeat border-2 border-[#272A32] rounded-2xl w-[928px] h-[437px] flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center space-y-1.5">
                    <img
                      src={connectionIcon}
                      alt="plug"
                      className="w-16 h-16 pb-5"
                    />
                    <h6 className="text-[#BDC2CC] font-bold text-lg">
                      Connect Wallet
                    </h6>
                    <p className="text-[#4F5666] pb-1.5 text-sm">
                      Connect your wallet to play
                    </p>
                    <Button
                      className="flex justify-center items-center font-medium mx-auto relative bg-[#F58229] hover:bg-[#F58229] text-lg white whitespace-nowrap rounded-full py-4 px-5 text-[#FCE3AA]"
                      onClick={connectWallet}
                    >
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
