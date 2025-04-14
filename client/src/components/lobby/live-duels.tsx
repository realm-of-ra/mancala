import { live_duels_header, player_header, colors } from "@/lib/constants.ts";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { Button } from "../ui/button.tsx";
import { formatPlayerName } from "@/lib/utils.ts";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import EmptyDuels from "./empty-duels.tsx";
import { shortString } from "starknet";

export default function LiveDuels({ games }: { games: any }) {
  const navigate = useNavigate();
  const data = games
    ?.filter(
      (game: any) =>
        game.node.player_one !== "0x0" && game.node.player_two !== "0x0",
    )
    ?.map((data: any) => {
      return {
        challenger: data.node.player_one,
        challenged: data.node.player_two,
        challenger_image: data.node.player_one_image,
        challenged_image: data.node.player_two_image,
        challenger_name:
          data.node.player_one === "0x0" ||
          data.node.player_one_name === undefined ||
          data.node.player_one_name === "#"
            ? formatPlayerName(data.node.player_one, data.node.player_one)
            : shortString.decodeShortString(data.node.player_one_name),
        challenged_name:
          data.node.player_two === "0x0" ||
          data.node.player_two_name === undefined ||
          data.node.player_two_name === "#"
            ? formatPlayerName(data.node.player_two, data.node.player_two)
            : shortString.decodeShortString(data.node.player_two_name),
        date: data?.node.entity?.executedAt,
      };
    });

  const goto_game = (index: number) => {
    const game = games[index].node;
    navigate(`/games/${game.game_id}`);
  };

  if (data?.length === 0) {
    return <EmptyDuels message="There are no active duels" />;
  }

  return (
    <div className="w-full">
      <Card className="w-full h-full bg-transparent">
        <div className="w-full text-left bg-transparent table-auto">
          <div className="flex flex-row items-center justify-between w-full bg-[#0F1116] pt-2 rounded-t-xl px-2.5">
            <div className="flex flex-row items-center justify-between w-full">
              {live_duels_header.map((head) => (
                <div
                  key={head.id}
                  className={clsx(
                    head.id === 2
                      ? "text-center"
                      : head.id === 3
                        ? "text-center"
                        : head.id === 4
                          ? "text-end"
                          : "text-start",
                    "w-[200px] p-4",
                  )}
                >
                  <Typography
                    variant="small"
                    className={clsx(
                      head.id === 4 && "hidden",
                      head.id === 3 && "ml-8",
                      "font-semibold leading-none text-[#BDC2CC]",
                    )}
                  >
                    {head.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute h-[450px] w-full overflow-x-clip overflow-y-scroll scrollbar rounded-b-xl">
            <table className="w-full text-left table-auto px-2.5">
              <thead className="border-b border-[#313640] hidden">
                <tr className="w-full bg-[#0F1116] flex flex-row items-center justify-between">
                  {player_header.map((head) => (
                    <th key={head.id} className="p-4">
                      <Typography
                        variant="small"
                        className="font-medium leading-none text-[#BDC2CC]"
                      >
                        {head.name}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="h-[450px] w-[928px] rounded-b-xl fixed overflow-y-scroll overflow-x-clip space-y-2 bg-[#0F1116]">
                {data?.map((data: any, index: number) => {
                  const date = new Date(data.date);
                  const challengerColor = colors[index % colors.length];
                  const challengedColor = colors[(index + 3) % colors.length];
                  const isLast = index === games?.length - 1;
                  const isFirst = index === 0;
                  return (
                    <tr
                      key={index}
                      className={clsx(
                        "w-full ml-5 bg-[#0F1116] flex flex-row items-center",
                        isLast && "pb-2",
                        isFirst && "pt-2",
                      )}
                    >
                      <td
                        className={
                          "flex flex-row items-center px-6 h-16 space-x-5 w-[250px] justify-start bg-[#111419] rounded-l-xl border-r-0 border-2 border-[#1A1E25]"
                        }
                      >
                        <div className="flex flex-row items-center justify-center space-x-2.5 w-fit">
                          <div
                            className="w-8 h-8 flex items-center justify-center rounded-full"
                            style={{ backgroundColor: challengerColor }}
                          >
                            {data.challenger_image != "#" &&
                            data.challenger_image != undefined ? (
                              <img
                                src={data.challenger_image}
                                alt="Challenger"
                                className="w-full h-full object-cover rounded-full"
                              />
                            ) : (
                              <UserIcon
                                color="#F58229"
                                className="w-5 h-5 text-white"
                              />
                            )}
                          </div>
                          <Typography
                            variant="paragraph"
                            className="font-medium leading-none text-white"
                          >
                            {data.challenger_name}
                          </Typography>
                        </div>
                      </td>
                      <td className="flex flex-row px-4 h-16 space-x-5 w-[230px] text-center border-y-2 border-[#1A1E25] bg-[#111419]">
                        {games[index].node.player_two !== "0x0" ? (
                          <div className="flex flex-row items-center space-x-2.5 w-fit">
                            <div
                              className="bg-[#FFE600] w-8 h-8 flex items-center justify-center rounded-full"
                              style={{ backgroundColor: challengedColor }}
                            >
                              {data.challenged_image != "#" &&
                              data.challenged_image != undefined ? (
                                <img
                                  src={data.challenged_image}
                                  alt="Challenged"
                                  className="w-full h-full object-cover rounded-full"
                                />
                              ) : (
                                <UserIcon
                                  color="#F58229"
                                  className="w-5 h-5 text-white"
                                />
                              )}
                            </div>
                            <Typography
                              variant="paragraph"
                              className="font-medium leading-none text-white"
                            >
                              {data.challenged_name}
                            </Typography>
                          </div>
                        ) : (
                          <div className="flex flex-row items-center justify-center w-full h-16">
                            <p className="text-[#646976] font-semibold text-center w-full pr-14">
                              Matchmaking...
                            </p>
                          </div>
                        )}
                      </td>
                      <td className="w-[200px] px-4 text-center h-16 flex flex-col justify-center bg-[#111419] border-y-2 border-[#1A1E25]">
                        <p className="font-normal text-[#BDC2CC]">
                          {date?.toLocaleDateString().replace(/\//g, "-")}
                        </p>
                      </td>
                      <td className="flex flex-row w-[209px] h-16 items-center justify-end pr-5 bg-[#111419] border-y-2 border-r-2 rounded-r-xl border-[#1A1E25]">
                        <Button
                          className={
                            "text-[#F58229] bg-[#171922] active:bg-[#171922] hover:bg-[#171922]"
                          }
                          onClick={() => goto_game(index)}
                        >
                          Spectate game
                        </Button>
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
