import { Button } from "@material-tailwind/react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import {
    logo,
    restart,
    end,
    muteImage,
    unmuteImage,
    leaderboard,
    message,
} from "../../constants/icons_store";

import clsx from "clsx";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";
import { animate, chat, initialSeeds, players } from "@/lib/constants";
import { isPlayingAtom } from "../../atom/atoms";
import { useAtom } from "jotai";
import audio from "../../music/audio_1.mp4";
import { gql, useQuery } from "@apollo/client";
import { useDojo } from "@/dojo/useDojo";
import { useProvider } from "@starknet-react/core";
import { StarknetIdNavigator } from "starknetid.js";
import { constants, StarkProfile } from "starknet";
import { truncateString } from "@/lib/utils";
import Pit from "@/components/pit";

export default function Gameplay() {
    const { gameId } = useParams();
    const metadata_query = gql`
		query GameData($gameId: u128!) {
			game_data: mancalaGameModels(where: { game_id: $gameId }) {
				edges {
					node {
						player_one
						player_two
						current_player
                        status
                        winner
					}
				}
			}
		}
	`;
    const play_query = gql`
		query PlayData(
			$player_1: ContractAddress!
			$player_2: ContractAddress!
			$gameId: u128
		) {
			player_one: gamePlayerModels(
				where: { game_id: $gameId, address: $player_1 }
				last: 1
			) {
				edges {
					node {
						address
						game_id
						pit1
						pit2
						pit3
						pit4
						pit5
						pit6
						mancala
					}
				}
			}
			player_two: gamePlayerModels(
				where: { game_id: $gameId, address: $player_2 }
				last: 1
			) {
				edges {
					node {
						address
						game_id
						pit1
						pit2
						pit3
						pit4
						pit5
						pit6
						mancala
					}
				}
			}
		}
	`;
    const {
        loading: game_metadata_loading,
        error: game_metadata_error,
        data: game_metadata,
        startPolling: startMetadataPolling,
    } = useQuery(metadata_query, {
        variables: { gameId },
    });
    startMetadataPolling(1000);

    const {
        loading: game_players_loading,
        error: game_players_error,
        data: game_players,
        startPolling: startPlayersPolling,
    } = useQuery(play_query, {
        variables: {
            player_1: game_metadata?.game_data.edges[0].node.player_one,
            player_2: game_metadata?.game_data.edges[0].node.player_two,
            gameId: gameId,
        },
    });
    startPlayersPolling(1000);

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

    function Icon({ id, open }: { id: number; open: number }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#27292F"
                className={`${id === open ? "rotate-[360deg]" : "rotate-[180deg]"} h-5 w-5 transition-transform`}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
        );
    }

    const [open, setOpen] = useState(0);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    const togglePlay = () => {
        setPlaying(!isPlaying);
    };

    const [seeds, setSeeds] = useState(initialSeeds);

    const { account } = useDojo();

    const { provider } = useProvider();

    const starknetIdNavigator = useMemo(() => {
        return new StarknetIdNavigator(provider, constants.StarknetChainId.SN_MAIN);
    }, [provider]);

    const [profiles, setProfiles] = useState<StarkProfile[]>();

    useEffect(() => {
        if (
            !starknetIdNavigator ||
            !game_players?.player_one.edges[0]?.node.address ||
            !game_players?.player_two.edges[0]?.node.address
        )
            return;
        (async () => {
            const profileData = await starknetIdNavigator?.getStarkProfiles([
                game_players?.player_one.edges[0].node.address,
                game_players?.player_two.edges[0].node.address,
            ]);
            if (!profileData) return;
            if (profileData) return setProfiles(profileData);
        })();
    }, [
        game_players?.player_one.edges,
        game_players?.player_two.edges,
        starknetIdNavigator,
    ]);

    const [moveMessage, setMoveMessage] = useState<string | undefined>();

    return (
        <main className="min-h-screen w-full bg-[#0F1116] flex flex-col items-center overflow-y-scroll">
            <nav className="relative w-full h-40">
                <div className="bg-[url('./assets/left-entry.png')] h-40 w-[45%] bg-cover bg-center bg-no-repeat absolute top-0 left-0">
                    <div className="relative flex flex-col items-center justify-center w-full h-full -mt-5">
                        <div className="flex flex-row space-x-2.5 items-center justify-center mr-56 2xl:mr-80 4xl:mr-56">
                            <div>
                                <h3 className="text-3xl text-right text-white">
                                    {profiles?.[0].name
                                        ? profiles?.[0].name
                                        : truncateString(
                                            game_players?.player_one.edges[0].node.address
                                        )}
                                </h3>
                                <h4 className="text-base text-[#F58229] text-right">Level 6</h4>
                            </div>
                            <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                <img
                                    src={profiles?.[0].profilePicture}
                                    width={65}
                                    height={65}
                                    alt={`${profiles?.[0].name} profile picture`}
                                    className="rounded-full"
                                />
                                <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
                                    <div className="h-4 w-4 bg-[#00FF57] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-48 2xl:right-64">
                            <div className="h-20 w-20 bg-[url('./assets/score-badge.png')] bg-contain bg-center bg-no-repeat bg-transparent flex flex-col items-center justify-center text-white">
                                <h3 className="text-3xl font-semibold text-white">8</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('./assets/right-entry.png')] h-40 w-[45%] bg-cover bg-center absolute top-0 right-0 bg-no-repeat">
                    <div className="relative flex flex-col items-center justify-center w-full h-full -mt-5">
                        <div className="flex flex-row-reverse space-x-2.5 items-center justify-center ml-56 2xl:ml-80 4xl:ml-56">
                            <div className="ml-2.5">
                                <h3 className="text-3xl text-left text-white">
                                    {profiles?.[1].name
                                        ? profiles?.[1].name
                                        : truncateString(
                                            game_players?.player_two.edges[0]?.node.address
                                        )}
                                </h3>
                                <h4 className="text-base text-[#F58229] text-left">Level 6</h4>
                            </div>
                            <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                <img
                                    src={profiles?.[1].profilePicture}
                                    width={65}
                                    height={65}
                                    alt={`${profiles?.[1].name} profile picture`}
                                    className="rounded-full"
                                />
                                <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
                                    <div className="h-4 w-4 bg-[#00FF57] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-48 2xl:left-64">
                            <div className="h-20 w-20 bg-[url('./assets/score-badge.png')] bg-contain bg-center bg-no-repeat bg-transparent flex flex-col items-center justify-center text-white">
                                <h3 className="text-3xl font-semibold text-white">8</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center w-full h-40 bg-transparent">
                    <a href="/">
                        <img
                            src={logo}
                            width={150}
                            height={150}
                            alt="Logo"
                            className="-mt-10"
                        />
                    </a>
                </div>
            </nav>
            <div className="w-full h-[calc(100vh-200px)] max-w-7xl flex flex-row items-start space-x-10">
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
                <div className="flex-1 w-full h-full">
                    {/* Game board */}
                    <div className="w-full h-[400px] border-2 border-[#32363D] rounded-l-full rounded-r-full flex flex-col items-center justify-center bg-[#15181E] mt-24">
                        <div className="w-[97%] h-[370px] rounded-l-full rounded-r-full flex flex-row items-center justify-between space-x-5 relative">
                            <div className="w-56 h-[350px] border-2 border-[#32363D] rounded-l-[165px] rounded-r-3xl relative">
                                {/* Player 1 pot */}
                                <div className="flex flex-row justify-end items-center px-2.5 h-full">
                                    <div className="flex flex-col flex-wrap space-y-1.5 max-h-[80%] gap-2 items-center justify-center px-5">
                                        {Array.from({ length: game_players?.player_two.edges[0]?.node.mancala || 0 }, (_, seedIndex) => (
                                            <div
                                                key={seedIndex}
                                                className="w-[20px] h-[20px] bg-white rounded-full"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 self-center left-0 bg-[#191C22] p-3.5 rounded-y-lg rounded-r-lg">
                                    <p className="text-white">
                                        {game_players?.player_one.edges[0]?.node.mancala}
                                    </p>
                                </div>
                            </div>
                            <div className="w-[75%] h-[350px] flex flex-col items-start justify-between space-y-2">
                                {/* Player 1 */}
                                <div className="h-[175px] w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center flex-1 space-x-5">
                                        <Pit
                                            amount={game_players?.player_one.edges[0]?.node.pit6}
                                            address={game_players?.player_one.edges[0]?.node.address}
                                            pit={6}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                        <Pit
                                            amount={game_players?.player_one.edges[0]?.node.pit5}
                                            address={game_players?.player_one.edges[0]?.node.address}
                                            pit={5}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                        <Pit
                                            amount={game_players?.player_one.edges[0]?.node.pit4}
                                            address={game_players?.player_one.edges[0]?.node.address}
                                            pit={4}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                        <Pit
                                            amount={game_players?.player_one.edges[0]?.node.pit3}
                                            address={game_players?.player_one.edges[0]?.node.address}
                                            pit={3}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                        <Pit
                                            amount={game_players?.player_one.edges[0]?.node.pit2}
                                            address={game_players?.player_one.edges[0]?.node.address}
                                            pit={2}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                        <Pit
                                            amount={game_players?.player_one.edges[0]?.node.pit1}
                                            address={game_players?.player_one.edges[0]?.node.address}
                                            pit={1}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                    </div>
                                </div>
                                {/* Player 2 */}
                                <div className="h-[175px] w-full flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center flex-1 space-x-5">
                                        <Pit
                                            amount={game_players?.player_two.edges[0]?.node.pit1}
                                            address={game_players?.player_two.edges[0]?.node.address}
                                            pit={1}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                        <Pit
                                            amount={game_players?.player_two.edges[0]?.node.pit2}
                                            address={game_players?.player_two.edges[0]?.node.address}
                                            pit={2}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                        <Pit
                                            amount={game_players?.player_two.edges[0]?.node.pit3}
                                            address={game_players?.player_two.edges[0]?.node.address}
                                            pit={3}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                        <Pit
                                            amount={game_players?.player_two.edges[0]?.node.pit4}
                                            address={game_players?.player_two.edges[0]?.node.address}
                                            pit={4}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                        <Pit
                                            amount={game_players?.player_two.edges[0]?.node.pit5}
                                            address={game_players?.player_two.edges[0]?.node.address}
                                            pit={5}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                        <Pit
                                            amount={game_players?.player_two.edges[0]?.node.pit6}
                                            address={game_players?.player_two.edges[0]?.node.address}
                                            pit={6}
                                            game_id={gameId || ""}
                                            message={setMoveMessage}
                                            status={game_metadata?.game_data.edges[0].node.status}
                                            winner={game_metadata?.game_data.edges[0].node.winner}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-56 h-[350px] border-2 border-[#32363D] rounded-r-[165px] relative rounded-l-3xl">
                                {/* Player 2 pot */}
                                <div className="flex flex-row justify-start items-center px-2.5 h-full">
                                    <div className="flex flex-col flex-wrap space-y-1.5 max-h-[80%] gap-2 items-center justify-center px-1.5">
                                        {Array.from({ length: game_players?.player_two.edges[0]?.node.mancala || 0 }, (_, seedIndex) => (
                                            <div
                                                key={seedIndex}
                                                className="w-[20px] h-[20px] bg-white rounded-full"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 self-center right-0 bg-[#191C22] p-3.5 rounded-y-lg rounded-l-lg">
                                    <p className="text-white">
                                        {game_players?.player_two.edges[0]?.node.mancala}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of game board */}
                    <div className="flex flex-row items-center justify-between mt-10">
                        <div className="flex flex-row space-x-1.5 items-center justify-center ml-14 3xl:ml-28 4xl:ml-14">
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
                            <div className="ml-2.5">
                                <h4 className="text-lg text-left text-[#9398A2]">Enya</h4>
                                <h4 className="text-sm text-[#656C7D] text-left">
                                    Storms in Africa
                                </h4>
                            </div>
                        </div>
                        <div className="border border-[#27292F] py-3.5 px-7 rounded-3xl backdrop-blur-sm">
                            <p className="text-[#AAAEB7]">
                                Game message:{" "}
                                {(game_metadata_error || game_players_error) &&
                                    "Error loading game data"}{" "}
                                {game_metadata_loading || game_players_loading
                                    ? "Loading game data..."
                                    : game_metadata &&
                                        game_players &&
                                        (game_metadata?.game_data.edges[0].node.player_one ===
                                            account.account.address ||
                                            game_metadata?.game_data.edges[0].node.player_two ===
                                            account.account.address)
                                        ? game_metadata?.game_data.edges[0].node.current_player ===
                                            account.account.address
                                            ? game_metadata?.game_data.edges[0].node.player_one ===
                                                "" ||
                                                game_metadata?.game_data.edges[0].node.player_two === ""
                                                ? "Waiting for another player to join"
                                                : moveMessage === undefined
                                                    ? moveMessage
                                                    : "Not your pit"
                                            : "Waiting for player 2"
                                        : "Player has not joined game"}
                            </p>
                        </div>
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
                                icon={
                                    <Icon
                                        id={1}
                                        open={open}
                                    />
                                }
                                className={clsx(open && "-mt-64", "w-96")}
                                animate={animate}
                            >
                                <AccordionHeader
                                    onClick={() => handleOpen(1)}
                                    className={clsx(
                                        open ? "border-t-0" : "border-t rounded-b-3xl",
                                        "border border-[#27292F] px-3.5 rounded-t-3xl backdrop-blur-sm"
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
                                                            "flex flex-col space-y-2.5 w-full"
                                                        )}
                                                    >
                                                        <div
                                                            className={clsx(
                                                                players[0] === item.user
                                                                    ? "items-start"
                                                                    : "items-end",
                                                                "flex flex-row"
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
