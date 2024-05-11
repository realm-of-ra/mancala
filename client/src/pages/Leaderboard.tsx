
import React from "react";

import { Button } from "@material-tailwind/react";
import eniola from "../assets/eniola.png";
import israel from "../assets/israel.png";
import energy from "../assets/energy.png";
import muteImage from "../assets/mute.png";
import unmuteImage from "../assets/unmute.png";
import { useState } from "react";
import { connect, ConnectedStarknetWindowObject, disconnect } from 'starknetkit';
import { truncateString } from "../lib/utils";

export default function Leaderboard() {
    const [mute, setMute] = useState(true);
    const [connection, setConnection] = useState<ConnectedStarknetWindowObject>();
    const [address, setAddress] = useState<string>();
    const toggleMute = () => {
        setMute(!mute);
    }
    const connectWallet = async () => {
        await connect({ modalMode: "neverAsk" })
        const { wallet } = await connect({ modalMode: "canAsk" })
        if (wallet && wallet.isConnected) {
            setConnection(wallet);
            setAddress(wallet.selectedAddress);
        }
    }
    const disconnectWallet = async () => {
        await disconnect();
        setConnection(undefined);
        setAddress('');
    }

    const stats = [
        {
            id: 1,
            name: "Energy",
            image: energy,
            score: 500000
        },
        {
            id: 2,
            name: "Eniola",
            image: eniola,
            score: 450000
        },
        {
            id: 3,
            name: "Israel",
            image: israel,
            score: 300000
        },
        {
            id: 4,
            name: "Energy",
            image: energy,
            score: 250000
        },
        {
            id: 5,
            name: "Eniola",
            image: eniola,
            score: 200000
        },
        {
            id: 6,
            name: "Israel",
            image: israel,
            score: 150000
        },
        {
            id: 7,
            name: "Energy",
            image: energy,
            score: 100000
        },
        {
            id: 8,
            name: "Eniola",
            image: eniola,
            score: 50000
        },
    ]
    return (
        <div className="bg-[#0F1116] min-h-screen w-full flex flex-col items-center">
            <nav className="flex flex-row items-center justify-between w-full">
                <div className="flex-1 w-full -mr-10">
                    <div className="flex flex-row space-x-2.5 items-center justify-end">
                        <div>
                            <h3 className="text-2xl text-right text-white">Eniola</h3>
                            <h4 className="text-sm text-[#F58229] text-right">Level 6</h4>
                        </div>
                        <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                            <img src={eniola} width={60} height={60} alt="Eniola" className="rounded-full" />
                            <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
                                <div className="h-4 w-4 bg-[#00FF57] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[100px] w-[800px]">
                    <div className="bg-[url('./assets/leaderboard-top.png')] w-[800px] h-[100px] bg-contain bg-no-repeat" />
                </div>
                <div className="flex-1 w-full -ml-16">
                    <div className="flex flex-row space-x-2.5 items-center justify-start">
                        <Button className='p-0 bg-transparent rounded-full' onClick={toggleMute}>
                            <img src={mute ? muteImage : unmuteImage} width={65} height={65} alt="restart" className='rounded-full' />
                        </Button>
                        {
                            connection?.isConnected ? <Button className="p-0" onClick={disconnectWallet}>
                                <div className="flex flex-row items-center">
                                    <div className="px-3.5 py-4 bg-[#272A32] rounded-tl-lg rounded-bl-lg">
                                        <img src={connection.icon} className="w-6 h-6" />
                                    </div>
                                    <div className="px-3.5 py-5 bg-[#171922] rounded-tr-lg rounded-br-lg"><p className="text-white">{truncateString(address || '')}</p></div>
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
            <main className="flex flex-row items-center justify-center mt-56">
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
                <div></div>
            </main>
        </div>
    )
}