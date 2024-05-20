import { connection as connectionAtom } from "@/atom/atoms";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAtomValue } from "jotai";
import connectionIcon from "../assets/connect.png";
import PlayersLobby from "@/components/players-lobby";
import DuelsLobby from "@/components/duels-lobby";

export default function Lobby() {
    const connection = useAtomValue(connectionAtom)
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
                            <a href="/leaderboard" className="flex flex-row items-center justify-center space-x-1">
                                <div className="bg-[url('./assets/cup.png')] w-4 h-4 bg-cover bg-no-repeat" />
                                <h4 className="text-[#F58229] font-medium">Leaderboard</h4>
                            </a>
                        </div>
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
                                    <TabsContent value="live"></TabsContent>
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