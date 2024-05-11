
import React from "react";

import { Button } from "@material-tailwind/react";
import eniola from "../assets/eniola.png";
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
    return (
        <div className="bg-[#0F1116] min-h-screen w-full">
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
        </div>
    )
}