
import { useEffect, useRef } from "react";
import { getPlayer, truncateString } from "../lib/utils";
import mancala from "../assets/logo.png";
import eniola from "../assets/eniola.png";
import muteImage from "../assets/mute.png";
import unmuteImage from "../assets/unmute.png";
import { connect, disconnect } from 'starknetkit';
import { useAtom } from "jotai";
import { isPlayingAtom, profileDataAtom, addressAtom, connectionAtom } from "../atom/atoms";
import audio from "../music/audio_1.mp4";
import { useProvider } from "@starknet-react/core";
import { StarknetIdNavigator } from "starknetid.js";
import { constants } from "starknet";
import { Button } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import { StarkProfile } from "@/types";
import { useQuery, gql } from "@apollo/client";
import { useDojo } from "@/dojo/useDojo";

export default function Header() {
    const [connection, setConnection] = useAtom(connectionAtom);
    const [address, setAddress] = useAtom(addressAtom);
    const [profileData, setProfileData] = useAtom<StarkProfile>(profileDataAtom)

    const { provider } = useProvider();
    const starknetIdNavigator = new StarknetIdNavigator(
        provider,
        constants.StarknetChainId.SN_MAIN
    );

    const connectWallet = async () => {
        if (connection?.isConnected) {
            disconnectWallet();
        }
        else {
            const { wallet } = await connect({ modalMode: "canAsk" })
            if (wallet && wallet.isConnected) {
                setConnection(wallet);
                setAddress(wallet.selectedAddress);
                const starkProfile = await starknetIdNavigator.getProfileData(wallet.selectedAddress);
                setProfileData(starkProfile)
            }
        }
    }
    const disconnectWallet = async () => {
        await disconnect();
        setConnection(undefined);
        setAddress('');
        setProfileData({});
    }
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
        if (!connection?.isConnected) {
            connectWallet()
        }
        return () => {
            audioRef.current.pause();
        };
    }, [isPlaying]);
    const togglePlay = () => {
        setPlaying(!isPlaying);
    }

    const { account } = useDojo()

    const { loading, error, data, startPolling } = useQuery(
        gql`
            query {
                mancalaGameModels {
                    edges {
                        node {
                            game_id
                            player_one
                            player_two
                            current_player
                            winner
                            status
                            is_private
                        }
                    }
                }
            }
        `
    )
    startPolling(1000);

    const player = getPlayer(data?.mancalaGameModels.edges, account.account.address);

    console.log(player)

    return (
        <div className="flex flex-row items-center justify-between w-full">
            <div className="flex-1 w-full -mr-10">
                {
                    profileData.name != undefined ? (
                        <div className="flex flex-row space-x-2.5 items-center justify-end">
                            <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                <img src={profileData.profilePicture ? profileData.profilePicture : eniola} width={60} height={60} alt="Eniola" className="rounded-full" />
                                <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
                                    <div className="h-4 w-4 bg-[#00FF57] rounded-full" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl text-right text-white">{profileData.name ? profileData.name : truncateString(address)}</h3>
                                <h4 className="text-sm text-[#F58229] text-start">{player[0]?.wins < 4 ? "Level 1" : `Level ${player[0]?.wins < 4 ? 1 : (Math.floor(player[0]?.wins / 4) + 1)}`}</h4>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-row space-x-2.5 items-center justify-end">
                            <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                <div className="bg-[#15171E] rounded-full p-2.5">
                                    <UserIcon color="#F58229" className="w-8 h-8" />
                                    <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
                                        <div className="h-4 w-4 bg-[#00FF57] rounded-full" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl text-right text-white">Player</h3>
                                <h4 className="text-sm text-[#F58229] text-start">Guest</h4>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="h-[100px] w-[800px]">
                <div className="bg-[url('./assets/leaderboard-top.png')] w-[800px] h-[100px] bg-contain bg-no-repeat flex flex-col items-center justify-center">
                    <a href="/" className="mb-4">
                        <img src={mancala} className="h-10 w-36" />
                    </a>
                </div>
            </div>
            <div className="flex-1 w-full -ml-16">
                <div className="flex flex-row space-x-2.5 items-center justify-start">
                    <Button className='p-0 bg-transparent rounded-full' onClick={togglePlay}>
                        <img src={isPlaying ? unmuteImage : muteImage} width={65} height={65} alt="restart" className='rounded-full' />
                    </Button>
                    {
                        connection?.isConnected ? <Button className="p-0" onClick={disconnectWallet}>
                            <div className="flex flex-row items-center">
                                <div className="px-3.5 py-4 bg-[#272A32] rounded-tl-lg rounded-bl-lg">
                                    <img src={connection.icon} className="w-6 h-6" />
                                </div>
                                <div className="px-3.5 py-5 bg-[#171922] rounded-tr-lg rounded-br-lg"><p className="text-white">{truncateString(address)}</p></div>
                            </div>
                        </Button> : <Button className='w-40 bg-[#F58229] rounded-md' onClick={connectWallet}>
                            Connect Wallet
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}
