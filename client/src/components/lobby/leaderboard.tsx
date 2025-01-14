import { player_header, colors } from "../../lib/constants";
import { getPlayers, truncateString } from "../../lib/utils";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { UserIcon } from "@heroicons/react/24/solid";

export default function Leaderboard({ data }: { data: any[] | undefined }) {
  const players = getPlayers(data);
  return (
    <div className="bg-[#0F1116] bg-contain bg-center bg-no-repeat border-2 border-[#272A32] rounded-2xl w-[928px] h-[437px] flex flex-col items-center justify-center px-8">
      <div className="w-full h-[500px] overflow-y-scroll hide-scrollbar pb-4">
        <Card className="w-full h-full bg-transparent">
          <table className="text-left bg-transparent table-auto">
            <thead className="sticky -top-3.5 bg-[#0F1116] z-10">
              <tr>
                {player_header.map((head, index) => (
                  <th
                    key={head.id}
                    className={clsx(
                      "p-4 pt-6",
                      index === 0 ? "text-start" : "text-center",
                    )}
                  >
                    <Typography
                      variant="small"
                      className="font-semibold leading-none text-[#BDC2CC]"
                    >
                      {head.name}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
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
                  const challengerColor = colors[index % colors.length];
                  return (
                    <tr key={index} className={clsx("bg-[#0F1116]")}>
                      <td className="flex flex-row items-center p-4 space-x-5 max-w-fit">
                        <div className="flex flex-row items-center space-x-2.5">
                          <h3 className="text-[#545861] text-lg font-semibold">
                            {String(index + 1).padStart(2, "0")}
                          </h3>
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
                        </div>
                      </td>
                      <td>
                        <p className="font-normal text-[#BDC2CC] text-center">
                          Lvl {wins < 4 ? 1 : Math.floor(wins / 4) + 1}
                        </p>
                      </td>
                      <td>
                        <p className="font-normal text-[#F58229] text-center">
                          {wins * 50}
                        </p>
                      </td>
                      <td>
                        <p className="font-normal text-[#FCE3AA] text-center">
                          {totalAppearances}
                        </p>
                      </td>
                      <td>
                        <p className="font-normal text-[#FCE3AA] text-center">
                          {wins}
                        </p>
                      </td>
                      <td>
                        <p className="font-normal text-[#FCE3AA] text-center">
                          {losses}
                        </p>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
