
import { useEffect, useRef, useState } from "react";
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
import { Link } from "react-router-dom";
import { constants } from "starknet";
import { Button } from "@material-tailwind/react";
import { UserIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { StarkProfile } from "@/types";
import { useQuery, gql } from "@apollo/client";
import { useDojo } from "@/dojo/useDojo";
import clsx from "clsx";
import icon1 from '../assets/Logo - Golden 2.svg'
import icon2 from '../assets/Logo - Golden 2.svg'
import icon3 from '../assets/LogoW.svg'
import iconArr from '../assets/logo-arrow.svg'
import connectB from '../assets/connect.svg'
import leader from '../assets/leader.svg'
import profile from '../assets/profile.svg'
import lobby from '../assets/lobby.svg'

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

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownClose, setIsDropdownClose] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleConnect = () => {
    setIsDropdownOpen(!isDropdownOpen);
    connectWallet()
  };

  const handleDropdownToggleClose = () => {
    setIsDropdownClose(!isDropdownClose);
  };
  const handleDisconnect = () => {
    setIsDropdownClose(!isDropdownClose);
    disconnectWallet()
  };


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
                    <Link to="/" className="mb-4">
                        <img src={mancala} className="h-10 w-36" />
                    </Link>
                </div>
            </div>
            <div className="flex-1 w-full -ml-16">
                <div className="flex flex-row space-x-2.5 items-center justify-start">
                    <Button className='p-0 bg-transparent rounded-full' onClick={togglePlay}>
                        <img src={isPlaying ? unmuteImage : muteImage} width={65} height={65} alt="restart" className='rounded-full' />
                    </Button>
                    <div className="relative">
    {connection?.isConnected ? (
        <div className="relative">
        <Button className="p-0 flex font-medium justify-between relative items-center bg-[#171922] w-[259px] text-sm text-[#BFC5D4] whitespace-nowrap rounded-full " onClick={handleDropdownToggleClose} >
            <div className="flex w-[259px] flex-row items-center">
                <div className="px-3.5 py-4 bg-[#272A32] rounded-tl-[30px] rounded-bl-[30px]">
                    <img src={connection.icon} className="w-6 h-6" />
                </div>
                <div className="px-3.5 py-5">
                    <p className="">{truncateString(address)}</p>
                </div>
                <ChevronDownIcon className={clsx(connection?.isConnected ? "text-[#C7CAD4]" : "text-[#FCE3AA]", "w-4 h-4 ml-3 transition duration-300", { 'transform rotate-180': isDropdownClose })} />
            </div>
        </Button>
    
        {isDropdownClose && (
            <div className="absolute top-1/2 font-medium transform translate-y-6 w-[259px] right-0 mt-2 border border-[#272A32] bg-[#171922] text-[#BFC5D4] rounded-xl shadow-xl z-20">
                <span className="flex w-full px-4 py-2 rounded-tl-xl rounded-tr-xl  bg-[#171922] hover:bg-[#272A32] hover:bg-opacity-50 cursor-pointer transition duration-300 ease-in-out">
                    <img src={lobby} />
                    <Link to="/" className="block px-4 py-2">Lobby</Link>
                </span>
                <span className="flex w-full px-4 py-2 bg-[#171922] hover:bg-[#272A32] cursor-pointer">
                    <img src={leader} />
                    <Link to="/" className="block px-4 py-2">Leaderboard</Link>
                </span>
                <span className="flex w-full px-4 py-2 bg-[#171922] hover:bg-[#272A32] cursor-pointer">
                    <img src={profile} />
                    <Link to="/" className="block px-4 py-2">Profile</Link>
                </span>
                <span className="flex w-full px-4 py-2  rounded-bl-xl rounded-br-xl  bg-[#171922] hover:bg-[#272A32] cursor-pointer" onClick={handleDisconnect}>
                    <img src={connectB} />
                    <Link to="#" className="block px-4 py-2 text-[#F58229] whitespace-nowrap">Disconnect Wallet</Link>
                </span>
            </div>
        )}
    </div>
    ) : (
        <Button className='flex justify-between font-medium relative items-center bg-[#F58229] w-[259px] text-sm white whitespace-nowrap rounded-full' onClick={handleDropdownToggle}>
            <span className="bg-[#FFA158] h-full flex items-center rounded-tl-full rounded-bl-full absolute left-0 top-0 bottom-0 px-4">
                <img src={icon3} className="text-left" />
            </span> 
            <span className="ml-12 text-[#FCE3AA]">Connect Wallet</span>
            <ChevronDownIcon className={clsx("w-4 h-4 ml-3 transition duration-300", { 'transform rotate-180': isDropdownOpen })} />
        </Button>
    )}

    {isDropdownOpen && (
        <div className="absolute top-1/2 transform font-medium translate-y-5 w-[259px] right-0 mt-2 border border-[#272A32] bg-[#171922] text-[#BFC5D4] rounded-xl shadow-xl z-20">
                <span className="flex w-full px-4 py-2 rounded-tl-xl rounded-tr-xl  bg-[#171922] hover:bg-[#272A32] hover:bg-opacity-50 cursor-pointer transition duration-300 ease-in-out">
                    <img src={lobby} />
                    <Link to="/" className="block px-4 py-2">Lobby</Link>
                </span>
                <span className="flex w-full px-4 py-2 bg-[#171922] hover:bg-[#272A32] cursor-pointer">
                    <img src={leader} />
                    <Link to="/" className="block px-4 py-2">Leaderboard</Link>
                </span>
                <span className="flex w-full px-4 py-2 bg-[#171922] hover:bg-[#272A32] cursor-pointer">
                    <img src={profile} />
                    <Link to="/" className="block px-4 py-2">Profile</Link>
                </span>
                <span className="flex w-full px-4 py-2 rounded-bl-xl rounded-br-xl  bg-[#171922] hover:bg-[#272A32] cursor-pointer">
                    <img src={connectB} />
                    <Link to="/lobby" className="block px-4 py-2 text-[#F58229] whitespace-nowrap" onClick={handleConnect}>connect Wallet</Link>
                </span>
        </div>
    )}
</div>
                    
                </div>
            </div>
        </div>
    )
}
