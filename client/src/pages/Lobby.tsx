import { connection as connectionAtom } from "@/atom/atoms";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAtomValue } from "jotai";
import connectionIcon from "../assets/connect.png";
import PlayersLobby from "@/components/players-lobby";
import DuelsLobby from "@/components/duels-lobby";
import {
    Dialog
} from "@material-tailwind/react";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { InformationCircleIcon, ClipboardDocumentCheckIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import createIcon from "../assets/createIcon.png";
import gotoIcon from "../assets/goto.png";
import end from "../assets/end.png";
import clip from "../assets/copied.png";
import LiveDuels from "@/components/live-duels";

export default function Lobby() {
    const connection = useAtomValue(connectionAtom)
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("private");
    const [gameUrl, setGameUrl] = useState<string>()
    const [clipped, setClipped] = useState<string | undefined>()
    const handleOpen = () => {
        setGameUrl(undefined)
        setOpen(!open)
    };
    const handleClip = (url: string) => {
        navigator.clipboard.writeText(url)
        setClipped(url)
    }
    return (
        <div className="w-full h-screen bg-[#15181E] space-y-8 fixed">
            <Header />
            <div className="flex flex-row items-center justify-center">
                <div className="w-[874px] h-[486px]">
                    <Tabs defaultValue="players" className="w-full space-y-10">
                        <div className="flex flex-row items-center justify-between w-full">
                            <TabsList className="bg-transparent space-x-1.5">
                                <TabsTrigger value="players" className="data-[state=active]:bg-[#1A1D25] 
                            data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full 
                            data-[state=active]:text-[#F58229]">Players</TabsTrigger>
                                <TabsTrigger value="duels" className="data-[state=active]:bg-[#1A1D25] 
                            data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full 
                            data-[state=active]:text-[#F58229]">Your Duels</TabsTrigger>
                                <TabsTrigger value="live" className="data-[state=active]:bg-[#1A1D25] 
                            data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full 
                            data-[state=active]:text-[#F58229]">
                                    <div className="flex flex-row items-center space-x-1.5">
                                        <div>
                                            <div className="h-3 w-3 bg-[#00FF57] rounded-full animate-ping opacity-75 absolute" />
                                            <div className="h-3 w-3 bg-[#00FF57] rounded-full" />
                                        </div>
                                        <p>Live Duels</p>
                                    </div>
                                </TabsTrigger>
                            </TabsList>
                            <div className="flex flex-row items-center space-x-5">
                                <a href="/leaderboard" className="flex flex-row items-center justify-center space-x-1">
                                    <div className="bg-[url('./assets/cup.png')] w-4 h-4 bg-cover bg-no-repeat" />
                                    <h4 className="text-[#F58229] font-medium">Leaderboard</h4>
                                </a>
                                <Button className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl" onClick={handleOpen}>
                                    <div className="flex flex-row items-center space-x-1">
                                        <img src={createIcon} className="w-5 h-5" />
                                        <p className="text-[#FCE3AA] font-medium">Create Game</p>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <Dialog open={open} handler={handleOpen} className="flex flex-col items-center justify-center bg-transparent">
                            <div className="w-[700px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
                                <div className="w-full h-[500px]">
                                    <div className="flex flex-row items-center justify-end w-full">
                                        <Button className='p-0 bg-transparent rounded-full' onClick={handleOpen}>
                                            <img src={end} width={50} height={50} alt="cancel" className='rounded-full' />
                                        </Button>
                                    </div>
                                    {
                                        gameUrl ? <div className="flex flex-col items-center justify-center w-full h-full">
                                            <div className="flex flex-col items-center justify-center space-y-5 -mt-36">
                                                <img src={clip} className="w-20 h-20" />
                                                <h3 className="text-[#BDC2CC] text-2xl font-bold">Share Invite</h3>
                                                <button className="flex flex-row items-center justify-center space-x-1.5" onClick={() => handleClip(gameUrl)}>
                                                    {
                                                        clipped ? <button className="bg-[#F582291A]/10 p-1 rounded-md">
                                                            <CheckBadgeIcon className="w-4 h-4 text-[#F58229]" />
                                                        </button> : <button className="bg-[#F582291A]/10 p-1 rounded-md">
                                                            <ClipboardDocumentCheckIcon className="w-4 h-4 text-[#F58229]" />
                                                        </button>
                                                    }
                                                    <p className="text-sm text-[#FCE3AA] font-medium">{gameUrl}</p>
                                                </button>
                                                <a href="">
                                                    <Button className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl">
                                                        <div className="flex flex-row items-center space-x-1">
                                                            <img src={gotoIcon} className="w-5 h-5" />
                                                            <p className="text-[#FCE3AA] font-semibold">Go to game</p>
                                                        </div>
                                                    </Button>
                                                </a>
                                            </div>
                                        </div> : <div className="flex flex-col items-center justify-center w-full h-full">
                                            <div className="flex flex-col items-center justify-center space-y-5 -mt-36">
                                                <div className="space-y-1 text-center">
                                                    <h3 className="text-[#BDC2CC] text-2xl font-bold">Create Game</h3>
                                                    <p className="font-bold text-lg text-[#4F5666]">Get started with the Mancala Game</p>
                                                </div>
                                                <div className="flex gap-20">
                                                    <RadioGroup defaultValue={type} className="flex flex-row space-x-10" onValueChange={(value) => setType(value)}>
                                                        <div className="flex items-center space-x-2 hover:cursor-pointer">
                                                            <RadioGroupItem value="private" id="private" />
                                                            <Label htmlFor="private" className="text-[#BDC2CC]/50 font-bold hover:cursor-pointer">Private</Label>
                                                        </div>
                                                        <div className="flex items-center space-x-2 hover:cursor-pointer">
                                                            <RadioGroupItem value="public" id="public" className="" />
                                                            <Label htmlFor="public" className="text-[#BDC2CC]/50 font-bold hover:cursor-pointer">Public</Label>
                                                        </div>
                                                    </RadioGroup>
                                                </div>
                                                {
                                                    type === "private" ? <div className="space-y-5">
                                                        <input className="p-2.5 w-72 rounded-xl border-2 border-[#1D212B] bg-transparent outline-none placeholder:text-[#4F5666] 
                                                placeholder:font-medium text-[#4F5666] font-medium" placeholder="0x..." />
                                                        <div className="flex flex-row items-center justify-center space-x-1">
                                                            <InformationCircleIcon className="w-4 h-4 text-[#996E47]" />
                                                            <p className="text-[#996E47] text-xs font-medium">Paste a wallet address to invite a friend</p>
                                                        </div>
                                                    </div> : <div className="flex flex-row items-center justify-center space-x-1">
                                                        <InformationCircleIcon className="w-4 h-4 text-[#996E47]" />
                                                        <p className="text-[#996E47] text-xs font-medium">Any player will be able to join the game after creation</p>
                                                    </div>
                                                }
                                                <Button className="bg-[#F58229] hover:bg-[#F58229] font-medium hover:cursor-pointer rounded-3xl" onClick={() => setGameUrl("https://google.com?game_id=yooooooooo?can_play=any")}>
                                                    <div className="flex flex-row items-center space-x-1">
                                                        <img src={createIcon} className="w-5 h-5" />
                                                        <p className="text-[#FCE3AA] font-semibold">Create Game</p>
                                                    </div>
                                                </Button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </Dialog>
                        {
                            connection?.isConnected ? (
                                <>
                                    <TabsContent value="players">
                                        <div className="w-[874px] h-[874px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
                                            <PlayersLobby />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="duels">
                                        <div className="w-[874px] h-[874px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
                                            <DuelsLobby />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="live">
                                        <div className="w-[874px] h-[874px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
                                            <LiveDuels />
                                        </div>
                                    </TabsContent>
                                </>
                            ) : (
                                <div className="w-[874px] h-[486px] bg-[url('./assets/lobby-box.png')] bg-contain bg-center bg-no-repeat
                                flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center space-y-1.5">
                                        <img src={connectionIcon} alt="plug" className="w-16 h-16" />
                                        <h3 className="text-[#BDC2CC] text-xl">Connect wallet</h3>
                                        <p className="text-[#4F5666] text-sm">Player id not found</p>
                                    </div>
                                </div>
                            )
                        }
                    </Tabs>
                </div>
            </div>
        </div>
    )
}