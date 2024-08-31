import Header from "@/components/header";
import Duels from "@/components/lobby/duels";
import AllGames from "@/components/profile/all-games";
import UserSection from "@/components/profile/user-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Profile() {
    return (
        <div className="w-full h-screen bg-[#15181E] space-y-8 fixed">
            <Header />
            <div className="flex flex-row items-center justify-center">
                <div className="w-full flex flex-row items-start justify-center space-x-10">
                    <UserSection />
                    <Tabs defaultValue="all-games" className="w-[800px] space-y-10">
                        <div className="flex flex-row items-center justify-between w-full">
                            <TabsList className="bg-transparent space-x-1.5">
                                <TabsTrigger
                                    value="all-games"
                                    className="data-[state=active]:bg-[#1A1D25]
                            data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full
                            data-[state=active]:text-[#F58229] font-medium"
                                >
                                    All games
                                </TabsTrigger>
                                <TabsTrigger
                                    value="won"
                                    className="data-[state=active]:bg-[#1A1D25]
                            data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full
                            data-[state=active]:text-[#F58229] font-medium"
                                >
                                    Won
                                </TabsTrigger>
                                <TabsTrigger
                                    value="lost"
                                    className="data-[state=active]:bg-[#1A1D25]
                            data-[state=active]:rounded-l-full data-[state=active]:rounded-r-full
                            data-[state=active]:text-[#F58229] font-medium"
                                >
                                    Lost
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <div>
                            <TabsContent value="all-games">
                                <AllGames games={undefined} transactions={undefined} loading={false} />
                            </TabsContent>
                            <TabsContent value="won">
                                <div className="w-[874px] h-[874px] bg-[url('./assets/wide-box.png')] bg-contain bg-no-repeat p-8 overflow-x-hidden"></div>
                            </TabsContent>
                            <TabsContent value="lost">
                                <div className="w-[874px] h-[874px] bg-[url('./assets/wide-box.png')] bg-contain bg-no-repeat p-8 overflow-x-hidden"></div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}