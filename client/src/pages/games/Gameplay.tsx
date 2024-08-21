import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
} from "@material-tailwind/react";
import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  arrowup,
  end,
  leaderboard,
  logo,
  message,
  muteImage,
  playnext,
  playprevious,
  restart,
  speaker,
  unmuteImage,
} from "../../constants/icons_store";

import Icon from "@/components/gameplay/Icon.tsx";
import GameBoard from "@/components/gameplay/game-board";
import PlayerProfile from "@/components/gameplay/player-profile";
import MessageArea from "@/components/message-area.tsx";
import { useDojo } from "@/dojo/useDojo";
import {
  MancalaGameEdge,
  useGameDataQuery,
  usePlayDataQuery,
} from "@/generated/graphql.tsx";
import { useAudioControl } from "@/hooks/useAudioControl";
import { animate, chat, initialSeeds, players } from "@/lib/constants";
import { getPlayer, truncateString } from "@/lib/utils";
import { PaperAirplaneIcon, UserIcon } from "@heroicons/react/24/solid";
import { useAccount, useProvider } from "@starknet-react/core";
import clsx from "clsx";
import { AlarmClock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { constants, StarkProfile } from "starknet";
import { StarknetIdNavigator } from "starknetid.js";
import audio from "../../music/audio_1.mp4";

export default function Gameplay() {
  const { gameId } = useParams();

  const {
    loading: game_metadata_loading,
    error: game_metadata_error,
    data: game_metadata,
    startPolling: startMetadataPolling,
  } = useGameDataQuery({
    variables: {
      gameId,
    },
  });
  startMetadataPolling(1000);

  const {
    isPlaying,
    togglePlay,
    volume,
    volumeDisplayValue,
    handleVolumeChange,
  } = useAudioControl();

  // typing this to show possible states and reduce the current errors
  const game_node = game_metadata?.game_data?.edges?.[0]?.node;

  const {
    loading: game_players_loading,
    data: game_players,
    startPolling: startPlayersPolling,
  } = usePlayDataQuery({
    variables: {
      player_1: game_node?.player_one,
      player_2: game_node?.player_two,
      gameId: gameId,
    },
  });

  startPlayersPolling(1000);

  const audioRef = useRef(new Audio(audio));

  const [timeRemaining, setTimeRemaining] = useState(0);

  const timeout = async () => {
    if (account.account) {
      await system.timeout(account.account, gameId || "");
    }
  };

  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const [, setSeeds] = useState(initialSeeds);

  const { system } = useDojo();

  const account = useAccount();

  const { provider } = useProvider();

  const starknetIdNavigator = useMemo(() => {
    return new StarknetIdNavigator(
      provider,
      constants.StarknetChainId.SN_SEPOLIA,
    );
  }, [provider]);

  const [profiles, setProfiles] = useState<StarkProfile[]>();

  const games_data_one = game_players?.player_one?.edges?.[0]?.node;
  const games_data_two = game_players?.player_two?.edges?.[0]?.node;

  const gameStarted = !(
    games_data_one?.pit1 == 4 &&
    games_data_one?.pit2 == 4 &&
    games_data_one?.pit3 == 4 &&
    games_data_one?.pit4 == 4 &&
    games_data_one?.pit5 == 4 &&
    games_data_one?.pit6 == 4 &&
    games_data_two?.pit1 == 4 &&
    games_data_two?.pit2 == 4 &&
    games_data_two?.pit3 == 4 &&
    games_data_two?.pit4 == 4 &&
    games_data_two?.pit5 == 4 &&
    games_data_two?.pit6 == 4
  );

  useEffect(() => {
    if (game_node) {
      setTimeRemaining(parseInt(game_node?.time_between_move, 16));
    }
    const timer = setInterval(() => {
      if (game_node?.status === "InProgress" && gameStarted) {
        setTimeRemaining((prevTime: number) => {
          if (prevTime > 0) {
            return prevTime - 1; // Decrement time
          } else {
            if (game_node?.status === "InProgress") {
              timeout(); //call timeout function on contract to end gamet
            }
            clearInterval(timer); // Clear interval when countdown reaches zero
            return 0; // Ensure it doesn't go below zero
          }
        });
      }
    }, 1000);
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
      clearInterval(timer);
      audioRef.current.pause();
    };
  }, [
    game_players?.player_one?.edges,
    game_players?.player_two?.edges,
    // starknetIdNavigator,
    // timeout,
    game_node,
  ]);

  const [moveMessage, setMoveMessage] = useState<string | undefined>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const moveMessageOnTimer = (player: string) => {
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
      if (
        player === account.account?.address &&
        game_players?.player_one?.edges
      ) {
        if (player === game_players?.player_one.edges[0]?.node?.address) {
          return React.createElement(
            "div",
            null,
            `Make your move `,
            React.createElement(
              "span",
              { className: "text-[#F58229]" },
              profiles?.[0].name ? profiles?.[0].name : truncateString(player),
            ),
          );
        } else {
          return React.createElement(
            "div",
            null,
            `Make your move `,
            React.createElement(
              "span",
              { className: "text-[#F58229]" },
              profiles?.[1].name ? profiles?.[1].name : truncateString(player),
            ),
          );
        }
      } else {
        if (
          game_players?.player_one?.edges &&
          player === game_players?.player_one.edges[0]?.node?.address
        ) {
          return React.createElement(
            "div",
            null,
            `Waiting for `,
            React.createElement(
              "span",
              { className: "text-[#F58229]" },
              profiles?.[0].name ? profiles?.[0].name : truncateString(player),
            ),
            ` move`,
          );
        } else {
          return React.createElement(
            "div",
            null,
            `Waiting for `,
            React.createElement(
              "span",
              { className: "text-[#F58229]" },
              profiles?.[1].name ? profiles?.[1].name : truncateString(player),
            ),
            ` move`,
          );
        }
      }
    }
  };

  const minutes =
    (Math.floor(timeRemaining % 3600) / 60 < 10 ? "0" : "") +
    Math.floor((timeRemaining % 3600) / 60);
  const seconds =
    (timeRemaining % 60 < 10 ? "0" : "") + Math.floor(timeRemaining % 60);

  const player_one = getPlayer(
    game_players?.player_one?.edges as MancalaGameEdge[],
    game_players?.player_one?.edges?.[0]?.node?.address,
  );
  const player_two = getPlayer(
    game_players?.player_two?.edges as MancalaGameEdge[],
    game_players?.player_two?.edges?.[0]?.node?.address,
  );

  return (
    <main className="min-h-screen w-full bg-[#0F1116] flex flex-col items-center overflow-y-scroll">
      {/* Navigation */}
      <nav className="relative w-full h-40">
        <div className="bg-[url('./assets/left-entry.png')] h-40 w-[45%] bg-cover bg-center bg-no-repeat absolute top-0 left-0">
          <div className="relative flex flex-col items-center justify-center w-full h-full -mt-5">
            <PlayerProfile
              name={profiles?.[0].name}
              address={game_players?.player_one?.edges?.[0]?.node?.address}
              wins={player_one?.[0]?.wins}
              isLeftSide={true}
            />
          </div>
        </div>
        <div className="bg-[url('./assets/right-entry.png')] h-40 w-[45%] bg-cover bg-center absolute top-0 right-0 bg-no-repeat">
          <div className="relative flex flex-col items-center justify-center w-full h-full -mt-5">
            <PlayerProfile
              name={profiles?.[1].name}
              address={game_players?.player_two?.edges?.[0]?.node?.address}
              wins={player_two?.[0]?.wins}
              isLeftSide={false}
            />
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center w-full h-40 bg-transparent">
          <div className="flex flex-col items-center justify-center mt-10 space-y-5">
            <Link to="/">
              <img src={logo} width={150} height={150} alt="Logo" />
            </Link>
            <div className="min-w-48 min-h-24 bg-[#191D25] border border-[#1A1D25] rounded-lg py-2.5 px-3.5 flex flex-col items-center justify-center space-y-1.5">
              <p className="text-4xl font-bold text-white">{`${minutes} : ${seconds}`}</p>
              <div className="flex flex-row items-center justify-center space-x-1">
                <AlarmClock className="w-6 h-6 text-white" />
                <div className="text-white">
                  {moveMessageOnTimer(game_node?.current_player)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main game area */}
      <div className="w-full h-[calc(100vh-200px)] max-w-7xl flex flex-row items-start space-x-10">
        {/* Sidebar buttons */}
        <div className="flex flex-col justify-center space-y-5 w-fit">
          <div className="space-y-1">
            <Button
              className="p-0 bg-transparent rounded-full"
              onClick={() => setSeeds(initialSeeds)}
            >
              <img
                src={restart}
                width={75}
                height={75}
                alt="restart"
                className="rounded-full"
              />
            </Button>
            <p className="text-lg text-[#656C7D] font-medium text-center">
              Restart
            </p>
          </div>
          <div className="space-y-1">
            <Button className="p-0 bg-transparent rounded-full">
              <img
                src={end}
                width={75}
                height={75}
                alt="end game"
                className="rounded-full"
              />
            </Button>
            <p className="text-lg text-[#656C7D] font-medium text-center">
              End
            </p>
          </div>
        </div>

        {/* Game board and controls */}
        <div className="flex-1 w-full h-full">
          <GameBoard
            game_players={game_players}
            game_node={game_node}
            game_metadata={game_metadata}
            system={system}
            account={account}
            gameId={gameId || ""}
            setMoveMessage={setMoveMessage}
            setTimeRemaining={setTimeRemaining}
          />

          {/* Audio controls and messaging */}
          <div className="relative flex flex-row items-center justify-between w-full mt-10 h-[fit-content]">
            {/* Audio player */}
            <div
              className="flex flex-row items-center justify-center gap-2 px-4 py-2 border border-gray-800 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            >
              <button
                className="p-0 bg-transparent rounded-full cursor-pointer"
                onClick={togglePlay}
              >
                <img
                  src={isPlaying ? unmuteImage : muteImage}
                  width={65}
                  height={45}
                  alt="toggle play"
                  className="rounded-full"
                />
              </button>
              <div className="flex items-center justify-center w-full gap-2 -ml-2">
                <h4 className="text-sm text-left text-[#656C7D]">Playing -</h4>
                <h4 className="text-md text-[#e6e6e6] text-left">
                  Storms in Africa
                </h4>
              </div>
              <img
                src={arrowup}
                alt="see song"
                width={20}
                height={20}
                className={`ml-4 cursor-pointer transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"} opacity-40`}
                onClick={toggleDropdown}
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute bottom-24 left-[1%] bg-transparent backdrop-blur-md rounded-md shadow-lg px-6 py-4 z-50 w-[300px]">
                <div className="flex items-center justify-center gap-1">
                  <img
                    src={playprevious}
                    width={30}
                    height={30}
                    alt="toggle play previous"
                    className="rounded-full cursor-pointer"
                  />
                  <img
                    src={isPlaying ? unmuteImage : muteImage}
                    width={70}
                    height={70}
                    alt="toggle play"
                    className="rounded-full cursor-pointer"
                    onClick={togglePlay}
                  />
                  <img
                    src={playnext}
                    width={30}
                    height={30}
                    alt="toggle play next"
                    className="rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-center mt-2 gap-2 bg-[#0c0c0c65] px-2 py-1 rounded-full">
                  <img
                    src={speaker}
                    width={20}
                    height={20}
                    alt="toggle play"
                    className="rounded-full"
                  />
                  <input
                    type="range"
                    name="volume"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    style={{
                      // Custom track styling
                      background: `linear-gradient(to right, #FCE3AA 0%, #FCE3AA ${volume * 100}%, #E48D32  ${volume * 100}%, #E48D32 100%)`,
                      // Hide the thumb by making it transparent and very small
                      WebkitAppearance: "none",
                      appearance: "none",
                      width: "100%",
                      height: "12px",
                      borderRadius: "full",
                    }}
                    className="w-20 h-4 rounded-full cursor-grab"
                  />
                  <span className="flex text-sm text-[#FCE3AA]">
                    {volumeDisplayValue}
                  </span>
                </div>
              </div>
            )}
            {/* <div className="border border-[#27292F] py-3.5 px-7 w-[25%] rounded-3xl backdrop-blur-sm"> */}
            <MessageArea
              game_metadata_error={game_metadata_error}
              game_players_error={game_metadata_error}
              game_metadata={game_metadata}
              address={account?.account?.address}
              game_metadata_loading={game_metadata_loading}
              moveMessage={moveMessage}
              game_players_loading={game_players_loading}
              game_players={game_players}
            />

            {/* Leaderboard and chat */}
            <div className="flex flex-row items-start justify-center pb-5 space-x-5">
              {/* Goto leaderboard page */}
              <Link to="/leaderboard">
                <Button className="p-0 rounded-full">
                  <img
                    src={leaderboard}
                    width={65}
                    height={65}
                    alt="end game"
                    className="rounded-full"
                  />
                </Button>
              </Link>
              {/* chat */}
              <Accordion
                open={open === 1}
                icon={<Icon id={1} open={open} />}
                className={clsx(open && "-mt-64", "w-96")}
                animate={animate}
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className={clsx(
                    open ? "border-t-0" : "border-t rounded-b-3xl",
                    "border border-[#27292F] px-3.5 rounded-t-3xl backdrop-blur-sm",
                  )}
                >
                  <div className="flex flex-row space-x-2.5 items-center">
                    <img
                      src={message}
                      width={25}
                      height={25}
                      alt="end game"
                      className="rounded-full"
                    />
                    <p className="text-xl font-medium text-[#AAAEB7]">
                      Message <span className="text-white">(0)</span>
                    </p>
                  </div>
                </AccordionHeader>
                <AccordionBody className="border border-[#27292F] pt-1.5 px-3.5 rounded-b-xl h-72 bg-transparent backdrop-blur-sm">
                  <div className="w-full h-full space-y-2.5">
                    <div className="flex-1 overflow-y-scroll max-h-56 space-y-2.5 hide-scrollbar">
                      {chat.map((item, index) => (
                        <div key={index}>
                          <div
                            className={clsx(
                              players[0] === item.user
                                ? "items-start"
                                : "items-end",
                              "flex flex-col space-y-2.5 w-full",
                            )}
                          >
                            <div
                              className={clsx(
                                players[0] === item.user
                                  ? "items-start"
                                  : "items-end",
                                "flex flex-row",
                              )}
                            >
                              <div className="flex flex-row space-x-1.5 items-center w-full">
                                <img
                                  src={item.avatar}
                                  width={30}
                                  height={30}
                                  alt="end game"
                                  className="rounded-full"
                                />
                                <p className="text-lg font-medium text-right text-white">
                                  {item.user}
                                </p>
                              </div>
                            </div>
                            <div className="w-[75%] p-2.5 bg-[#15181E] rounded-md">
                              <p className="text-white">{item.message}</p>
                              <p className="w-full text-xs text-white text-end">
                                {item.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="w-full h-10 border border-[#27292F] rounded-xl px-1 py-3.5 flex flex-row items-center">
                        <input
                          className="w-full h-8 px-1.5 text-white bg-transparent outline-none ring-0"
                          placeholder="Send message"
                        />
                        <Button className="p-0 w-12 h-8 bg-[#F58229] flex flex-col items-center justify-center">
                          <PaperAirplaneIcon className="w-4 h-4 text-black transform -rotate-45" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
              {/* end of chat */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
