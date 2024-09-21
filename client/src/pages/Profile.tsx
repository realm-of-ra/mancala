import Header from "@/components/header";
import GameHistory from "@/components/profile/game-history";
import UserSection from "@/components/profile/user-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MancalaBoardModelsQuery, MancalaHeaderQuery } from "@/lib/constants";
import { getPlayer } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { useAccount } from "@starknet-react/core";

export default function Profile() {
  const { data, startPolling, loading } = useQuery(MancalaBoardModelsQuery);
  startPolling(1000);
  const account = useAccount();
  const filteredGames = data?.mancalaMancalaBoardModels?.edges?.filter(
    (game: any) =>
      game?.node?.player_one === account.address ||
      game?.node?.player_two === account.address
  );

  const filteredWonGames =
    filteredGames?.filter((game: any) => game?.node?.winner === account.address) ||
    [];
  const filteredLostGames =
    filteredGames?.filter(
      (game: any) =>
        game?.node?.winner !== "0x0" && game?.node?.winner !== account.address,
    ) || [];

  const { data: playerData, startPolling: startPollingPlayer } =
    useQuery(MancalaHeaderQuery);
  startPollingPlayer(1000);

  const player = getPlayer(
    data?.mancalaAlphaMancalaGameModels?.edges,
    account?.address || "",
  );

  return (
    <div className="w-full h-screen bg-[#15181E] space-y-8 fixed">
      <Header />
      <div className="flex flex-row items-center justify-center">
        <div className="w-full flex flex-row items-start justify-center space-x-10">
          <UserSection
            level={
              player?.[0]?.wins < 4
                ? 1
                : Number.isNaN(Math.floor(player?.[0]?.wins))
                  ? 1
                  : Math.floor(player?.[0]?.wins) < 4
                    ? 1
                    : Math.floor(player?.[0]?.wins / 4) + 1
            }
            wins={filteredWonGames?.length}
            losses={filteredLostGames?.length}
            total={filteredGames?.length || 0}
          />
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
                <GameHistory games={filteredGames} loading={loading} id="all" />
              </TabsContent>
              <TabsContent value="won">
                <GameHistory
                  games={filteredWonGames}
                  loading={loading}
                  id="won"
                />
              </TabsContent>
              <TabsContent value="lost">
                <GameHistory
                  games={filteredLostGames}
                  loading={loading}
                  id="lost"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
