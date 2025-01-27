import { colors, duels_header } from "@/lib/constants.ts";
import { Card, Typography } from "@material-tailwind/react";
// import { useProvider } from "@starknet-react/core";
// import { useEffect, useMemo, useState } from "react";
// import { StarknetIdNavigator } from "starknetid.js";
// import { constants, StarkProfile } from "starknet";
import clsx from "clsx";
import { getColorOfTheDay, truncateString } from "@/lib/utils.ts";
import { GameHistorySkeleton } from "./game-history-skeleton.tsx";
import { UserIcon } from "@heroicons/react/24/solid";
import EmptyGameHistory from "./empty-game-history.tsx";

export default function GameHistory({
  games,
  loading,
  id,
}: {
  games: any;
  loading: boolean;
  id: string;
}) {
  // const { provider } = useProvider();
  // const starknetIdNavigator = useMemo(() => {
  //     return new StarknetIdNavigator(
  //         provider,
  //         constants.StarknetChainId.SN_SEPOLIA
  //     );
  // }, [provider])
  // const [challengers, setChallengers] = useState<StarkProfile[]>([]);
  // const [challenged, setChallenged] = useState<StarkProfile[]>();
  // const [winners, setWinners] = useState<StarkProfile[]>();
  // const challengerAddresses = games?.map((game: any) => game.node.player_one);
  // const challengedAddresses = games?.map((game: any) => game.node.player_two);
  // const winnerAddresses = games?.map((game: any) => game.node.winner);
  // useEffect(() => {
  //     if (!starknetIdNavigator || !challengerAddresses) return;
  //     (async () => {
  //         const challengerData = await starknetIdNavigator?.getStarkProfiles(challengerAddresses)
  //         const challengedData = await starknetIdNavigator?.getStarkProfiles(challengedAddresses)
  //         const winnersData = await starknetIdNavigator?.getStarkProfiles(winnerAddresses)
  //         if (!challengerData) return;
  //         if (challengerData) setChallengers(challengerData);
  //         if (!challengedData) return;
  //         if (challengedData) setChallenged(challengedData);
  //         if (!winnersData) return;
  //         if (winnersData) setWinners(winnersData)
  //     })();
  // }, [challengerAddresses, challengedAddresses, winnerAddresses, starknetIdNavigator]);
  // const data = challengers?.map((challenger, index) => {
  //     return {
  //         challenger: challenger,
  //         challenged: challenged ? challenged[index] : null,
  //         winner: winners ? winners[index] : null,
  //         date: transactions[index].node.executedAt,
  //     }
  // })

  const data = games?.map((data: any) => {
    return {
      challenger: data.node.player_one,
      challenged: data.node.player_two,
      winner: data.node.winner,
      date: data.node.entity.executedAt,
    };
  });

  if (loading) {
    return <GameHistorySkeleton />;
  } else if (data?.length === 0) {
    return <EmptyGameHistory id={id} />;
  }

  return (
    <div className="w-full">
      <Card className="w-full h-full bg-transparent">
        <div className="w-full text-left bg-transparent table-auto">
          <div className="flex flex-row items-center justify-between w-full bg-[#0F1116] pt-2 rounded-t-xl px-2.5">
            <div className="flex flex-row items-center justify-between w-full">
              {duels_header.map((head) => (
                <div
                  key={head.id}
                  className={clsx(
                    head.id === 2
                      ? "text-center ml-20"
                      : head.id === 3
                        ? "text-center -ml-6"
                        : head.id === 4 && "-ml-16",
                        head.id === 5 && "hidden",
                    "w-[175px] p-4 text-start"
                  )}
                >
                  <Typography
                    variant="small"
                    className="font-semibold leading-none text-[#BDC2CC]"
                  >
                    {head.name === "Winner" ? "Result" : head.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute h-[450px] w-full overflow-x-clip overflow-y-scroll scrollbar rounded-b-xl">
            <table className="w-full text-left table-auto px-2.5">
              <tbody className="h-[450px] w-[800px] rounded-b-xl fixed overflow-y-scroll overflow-x-clip space-y-2 bg-[#0F1116]">
                {data?.map((item: any, index: number) => {
                  const isLast = index === data?.length - 1;
                  const isFirst = index === 0;
                  const challengerColor = colors[index % colors.length];
                  const challengedColor = colors[(index + 3) % colors.length];
                  const date = new Date(item.date);
                  
                  return (
                    <tr
                      key={index}
                      className={clsx(
                        "w-full mx-5 bg-[#0F1116] flex flex-row items-center",
                        isLast && "pb-2",
                        isFirst && "pt-2"
                      )}
                    >
                      <td className="flex flex-row items-center px-6 h-16 space-x-5 w-[230px] justify-start bg-[#111419] rounded-l-xl border-r-0 border-2 border-[#1A1E25]">
                        <div className="flex flex-row items-center justify-center space-x-2.5 w-fit">
                          <div
                            className="w-8 h-8 flex items-center justify-center rounded-full"
                            style={{ backgroundColor: challengerColor }}
                          >
                            <UserIcon color="#F58229" className="w-5 h-5 text-white" />
                          </div>
                          <Typography variant="paragraph" className="font-medium leading-none text-white">
                            {truncateString(item.challenger)}
                          </Typography>
                        </div>
                      </td>
                      <td className="flex flex-row px-4 h-16 space-x-5 w-[200px] text-center border-y-2 border-[#1A1E25] bg-[#111419]">
                        {item.challenged !== "0x0" ? (
                          <div className="flex flex-row items-center space-x-2.5 w-fit">
                            <div
                              className="w-8 h-8 flex items-center justify-center rounded-full"
                              style={{ backgroundColor: challengedColor }}
                            >
                              <UserIcon color="#F58229" className="w-5 h-5 text-white" />
                            </div>
                            <Typography variant="paragraph" className="font-medium leading-none text-white">
                              {truncateString(item.challenged)}
                            </Typography>
                          </div>
                        ) : (
                          <div className="flex flex-row items-center justify-center w-full h-16">
                            <p className="text-[#646976] font-semibold text-center w-full">
                              Matchmaking...
                            </p>
                          </div>
                        )}
                      </td>
                      <td className="w-[125px] px-4 text-center h-16 flex flex-col justify-center bg-[#111419] border-y-2 border-[#1A1E25]">
                        <p className="font-normal text-[#FAB580]">
                          {truncateString(item.winner)}
                        </p>
                      </td>
                      <td className="w-[200px] px-4 text-end h-16 flex flex-col items-start justify-center bg-[#111419] border-y-2 border-r-2 border-[#1A1E25] rounded-r-xl">
                        <p className="font-normal text-[#F97E22] ml-2.5">
                          {date.toLocaleDateString().replace(/\//g, "-")}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
