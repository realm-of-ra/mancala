import { useEffect, useRef } from "react";

import { Button } from "@material-tailwind/react";
import eniola from "../assets/eniola.png";
import muteImage from "../assets/mute.png";
import unmuteImage from "../assets/unmute.png";
import { useState } from "react";
import { connect, ConnectedStarknetWindowObject, disconnect } from 'starknetkit';
import { truncateString } from "../lib/utils";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { stats, table_head } from "@/lib/constants";
import { useAtom } from "jotai";
import { isPlaying as isPlayingAtom, profileData as profileDataAtom, address as addressAtom } from "../atom/atoms";
import audio from "../music/audio_1.mp3";
import { useProvider } from "@starknet-react/core";
import { StarknetIdNavigator } from "starknetid.js";
import { constants, type StarkProfile } from "starknet";

export default function Leaderboard() {
    const [connection, setConnection] = useState<ConnectedStarknetWindowObject>();
    const [address, setAddress] = useAtom(addressAtom);
    const [profileData, setProfileData] = useAtom<StarkProfile>(profileDataAtom)

    const { provider } = useProvider();
    const starknetIdNavigator = new StarknetIdNavigator(
        provider,
        constants.StarknetChainId.SN_MAIN
    );

    const connectWallet = async () => {
        await connect({ modalMode: "neverAsk" })
        const { wallet } = await connect({ modalMode: "canAsk" })
        if (wallet && wallet.isConnected) {
            setConnection(wallet);
            setAddress(wallet.selectedAddress);
            const starkProfile = await starknetIdNavigator.getProfileData(wallet.selectedAddress);
            setProfileData({
                ...starkProfile,
            })
        }
        console.log(profileData)
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
    return (
        <div className="bg-[#0F1116] min-h-screen h-full w-full flex flex-col items-center">
            <nav className="flex flex-row items-center justify-between w-full">
                <div className="flex-1 w-full -mr-10">
                    {
                        profileData.name != undefined && (
                            <div className="flex flex-row space-x-2.5 items-center justify-end">
                                <div>
                                    <h3 className="text-2xl text-right text-white">{profileData.name ? profileData.name : truncateString(address)}</h3>
                                    <h4 className="text-sm text-[#F58229] text-right">Level 6</h4>
                                </div>
                                <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                    <img src={profileData.profilePicture ? profileData.profilePicture : eniola} width={60} height={60} alt="Eniola" className="rounded-full" />
                                    <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
                                        <div className="h-4 w-4 bg-[#00FF57] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="h-[100px] w-[800px]">
                    <div className="bg-[url('./assets/leaderboard-top.png')] w-[800px] h-[100px] bg-contain bg-no-repeat" />
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
            </nav>
            <div className="absolute flex flex-row items-center justify-between w-full max-w-5xl top-24">
                <div className='flex flex-row items-center justify-end w-full'>
                    <div className="w-32 h-32 bg-[url('assets/lobby-bg.png')] bg-contain bg-no-repeat bg-center flex flex-col items-center justify-center">
                        <Button ripple={false} className="w-24 h-24 bg-transparent bg-[url('assets/lobby.png')] bg-contain bg-no-repeat bg-center overflow-hidden" children />
                    </div>
                </div>
            </div>
            <main className="flex flex-col items-center justify-center mt-56">
                <div className="flex flex-row items-center justify-between w-full max-w-5xl">
                    <div className="flex flex-row items-center justify-between w-full h-full">
                        <div className="bg-[url('./assets/left-leaf.png')] w-[250px] h-[350px] bg-contain bg-no-repeat bg-center -mt-48" />
                        <div className="flex flex-row justify-between flex-1 w-full">
                            {/* Third position */}
                            <div className="flex flex-col items-center justify-center space-y-1.5 mt-10">
                                <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                    <img src={stats[2].image} width={100} height={100} alt={`${stats[2].name} profile picture`} className="rounded-full" />
                                </div>
                                <h3 className="text-2xl text-white">{stats[2].name}</h3>
                                <div className="flex flex-row space-x-0.5">
                                    <div className="bg-[url('./assets/cup.png')] w-4 h-4 bg-cover bg-no-repeat" />
                                    <h4 className="text-xs text-[#F58229]">{stats[2].score.toLocaleString()}</h4>
                                </div>
                                <div className="bg-[url('./assets/third-stage.png')] w-48 h-48 bg-cover bg-center bg-no-repeat" />
                            </div>
                            {/* First position */}
                            <div className="flex flex-col items-center -mt-48">
                                <div className="bg-[url('./assets/glow.png')] bg-cover bg-center w-[400px] h-[400px] flex flex-col items-center justify-end" />
                                <div className="flex flex-col items-center justify-center space-y-1.5 absolute top-[250px]">
                                    <div className="p-1 w-fit rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                        <img src={stats[0].image} width={200} height={200} alt={`${stats[2].name} profile picture`} className="rounded-full" />
                                    </div>
                                    <h3 className="text-2xl text-white">{stats[0].name}</h3>
                                    <div className="flex flex-row space-x-0.5">
                                        <div className="bg-[url('./assets/cup.png')] w-4 h-4 bg-cover bg-no-repeat" />
                                        <h4 className="text-xs text-[#F58229]">{stats[0].score.toLocaleString()}</h4>
                                    </div>
                                    <div className="bg-[url('./assets/first-stage.png')] w-48 h-48 bg-cover bg-center bg-no-repeat" />
                                </div>
                            </div>
                            {/* Second position */}
                            <div className="flex flex-col items-center justify-center space-y-1.5 relative mt-10">
                                <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                    <img src={stats[1].image} width={100} height={100} alt={`${stats[2].name} profile picture`} className="rounded-full" />
                                </div>
                                <h3 className="text-2xl text-white">{stats[1].name}</h3>
                                <div className="flex flex-row space-x-0.5">
                                    <div className="bg-[url('./assets/cup.png')] w-4 h-4 bg-cover bg-no-repeat" />
                                    <h4 className="text-xs text-[#F58229]">{stats[1].score.toLocaleString()}</h4>
                                </div>
                                <div className="bg-[url('./assets/second-stage.png')] w-48 h-48 bg-cover bg-center bg-no-repeat" />
                            </div>
                        </div>
                        <div className="bg-[url('./assets/right-leaf.png')] w-[250px] h-[350px] bg-center bg-contain bg-no-repeat -mt-48" />
                    </div>
                </div>
                <div className="w-full pb-10 mt-20">
                    <Card className="w-full h-full overflow-scroll border-[0.1px] border-[#23272F] bg-transparent">
                        <table className="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr className="bg-[#0F1014] border-b border-[#23272F]">
                                    {table_head.map((head) => (
                                        <th
                                            key={head}
                                            className="p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                className="font-normal leading-none text-[#BDC2CC]"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-[#15181E]">
                                {stats.slice(3).map(({ id, name, image, level, score }, index) => {
                                    const isLast = index === stats.slice(3).length - 1;

                                    return (
                                        <tr key={name}>
                                            <td className={clsx(!isLast && "border-b border-[#23272F]", "flex flex-row items-center p-4 space-x-5 w-full")}>
                                                <p
                                                    className="font-semibold"
                                                >
                                                    {id}
                                                </p>
                                                <div className="flex flex-row items-center space-x-5 w-fit">
                                                    <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026]">
                                                        <img src={image} width={35} height={35} alt={`${stats[2].name} profile picture`} className="rounded-full" />
                                                    </div>
                                                    <p
                                                        className="font-normal text-white"
                                                    >
                                                        {name}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className={clsx(!isLast && "border-b border-[#23272F]", "w-[33%]")}>
                                                <p
                                                    className="font-normal text-[#FAB580]"
                                                >
                                                    {level}
                                                </p>
                                            </td>
                                            <td className={clsx(!isLast && "border-b border-[#23272F]", "w-[33%]")}>
                                                <p
                                                    className="font-normal text-[#F97E22]"
                                                >
                                                    {score.toLocaleString()}
                                                </p>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Card>
                </div>
            </main>
        </div>
    )
}