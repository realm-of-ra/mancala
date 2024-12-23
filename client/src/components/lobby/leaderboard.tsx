import { player_header, colors } from "../../lib/constants";
import { getPlayers, truncateString } from "../../lib/utils";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import LeaderboardSkeleton from "./leaderboard-skeleton";
import { UserIcon } from "@heroicons/react/24/solid";

export default function Leaderboard({ data }: { data: any[] | undefined }) {
  const players = getPlayers(data);
  return (
    <div className="w-[874px] h-[874px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
      <div className="w-full max-h-[500px] overflow-y-scroll hide-scrollbar pb-4">
        <Card className="w-full h-full bg-transparent">
          <table className="text-left bg-transparent table-auto">
            <thead className="sticky -top-3.5 bg-[#0F1116] z-10">
              <tr>
                {player_header.map((head, index) => (
                  <th
                    key={head.id}
                    className={clsx(
                      "p-4",
                      index === 0 ? "text-start" : "text-center",
                    )}
                  >
                    <Typography
                      variant="small"
                      className="font-medium leading-none text-[#BDC2CC]"
                    >
                      {head.name}
                    </Typography>
                  </th>
                ))}
              </tr>
              <tr className="w-full border-b border-[#313640] h-1 absolute inset-x-0 top-10" />
            </thead>
            {players?.length ? (
              <tbody data-testid="players">
                {players?.map(
                  (
                    {
                      address,
                      losses,
                      wins,
                      totalAppearances,
                    }: {
                      address: string;
                      losses: number;
                      wins: number;
                      totalAppearances: number;
                    },
                    index: number,
                  ) => {
                    const isLast = index === players.length - 1;
                    const challengerColor = colors[index % colors.length];
                    return (
                      <tr
                        key={index}
                        className={clsx(
                          !isLast ? "border-b border-[#23272F]" : "",
                          "bg-[#0F1116]",
                        )}
                      >
                        <td className="flex flex-row items-center p-4 space-x-5 max-w-fit">
                          <div>
                            <div className="flex flex-row items-center space-x-2.5 w-fit">
                              <div
                                className="w-8 h-8 flex items-center justify-center rounded-full"
                                style={{ backgroundColor: challengerColor }}
                              >
                                <UserIcon
                                  color="#F58229"
                                  className="w-5 h-5 text-white"
                                />
                              </div>

                              <p className="font-normal text-white">
                                {players[index]?.name
                                  ? players[index]?.name
                                  : truncateString(address)}
                              </p>
                            </div>
                          </div >
                        </td>
                        <td>
                          <p className="font-normal text-[#FAB580] text-center">
                            {wins < 4 ? 1 : Math.floor(wins / 4) + 1}
                          </p>
                        </td>
                        <td>
                          <p className="font-normal text-[#FAB580] text-center">
                            {wins * 50}
                          </p>
                        </td>
                        <td>
                          <p className="font-normal text-[#FAB580] text-center">
                            {totalAppearances}
                          </p>
                        </td>
                        <td>
                          <p className="font-normal text-[#FAB580] text-center">
                            {wins}
                          </p>
                        </td>
                        <td>
                          <p className="font-normal text-[#FAB580] text-center">
                            {losses}
                          </p>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            ) : (
              <tbody>
                <LeaderboardSkeleton />
              </tbody>
            )}
          </table>
        </Card>
      </div>
    </div>
  );
}