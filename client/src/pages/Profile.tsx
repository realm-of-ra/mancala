import Header from "@/components/header";
import GameHistory from "@/components/profile/game-history";
import UserSection from "@/components/profile/user-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MancalaBoardModelsQuery, MancalaPlayerNames } from "@/lib/constants";
import { getPlayer } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { useAccount } from "@starknet-react/core";

export default function Profile() {
  const { data, startPolling, loading } = useQuery(MancalaBoardModelsQuery);
  const { data: profiles, startPolling: startPollingProfiles } =
    useQuery(MancalaPlayerNames);
  startPolling(1000);
  startPollingProfiles(1000);
  const account = useAccount();
  const filteredGames = data?.mancalaAlphaMancalaBoardModels?.edges?.filter(
    (game: any) =>
      game?.node?.player_one === account.account?.address ||
      game?.node?.player_two === account.account?.address,
  );

  const filteredWonGames =
    filteredGames?.filter(
      (game: any) => game?.node?.winner === account.account?.address,
    ) || [];
  const filteredLostGames =
    filteredGames?.filter(
      (game: any) =>
        game?.node?.winner !== "0x0" &&
        game?.node?.winner !== account.account?.address,
    ) || [];

  const player = getPlayer(
    data?.mancalaAlphaMancalaBoardModels?.edges,
    account?.address || "",
  );

  return (
    <div className="w-full h-screen bg-[#15181E] space-y-4 fixed">
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
            profiles={profiles}
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
              </TabsList>
            </div>
            <div>
              <TabsContent value="all-games">
                <GameHistory games={filteredGames} loading={loading} id="all" />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
