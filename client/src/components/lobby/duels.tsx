import { duels_header, colors } from "@/lib/constants.ts";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { formatPlayerName, updateAddressCache } from "@/lib/utils.ts";
import { DuelsSkeleton } from "./duels-skeleton.tsx";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import EmptyDuels from "./empty-duels.tsx";
import { Button } from "../ui/button.tsx";
import { Link, useNavigate } from "react-router-dom";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";
import { useDojo } from "@/dojo/useDojo.tsx";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { lookupAddresses } from '@cartridge/controller';
import { shortString } from "starknet";


export default function Duels({
  games,
  transactions,
  loading,
}: {
  games: any;
  transactions: any;
  loading: boolean;
}) {
  const navigate = useNavigate();
  const [joinStatus, setJoinStatus] = useState<{
    status: string;
    index: number;
  }>();
  const [lookedUpNames, setLookedUpNames] = useState<Map<string, string>>(new Map());

  const lookupMissingNames = async (addresses: string[]) => {
    try {
      const uniqueAddresses = [...new Set(addresses)].filter(addr => addr !== "0x0");
      const addressMap = await lookupAddresses(uniqueAddresses);
      setLookedUpNames(addressMap);
      updateAddressCache(addressMap);
    } catch (error) {
      console.error('Error looking up addresses:', error);
    }
  };

  useEffect(() => {
    const addresses = games?.flatMap((game: any) => [
      game.node.player_one,
      game.node.player_two,
      game.node.winner
    ]);
    lookupMissingNames(addresses);
  }, [games]);

  console.log({
    games
  })

  const data = games?.map((data: any, index: number) => {
    return {
      challenger: data.node.player_one,
      challenged: data.node.player_two,
      challenger_image: data.node.player_one_image,
      challenged_image: data.node.player_two_image,
      challenger_name:
        data.node.player_one === "0x0" || data.node.player_one_name === undefined
          ? formatPlayerName(data.node.player_one, data.node.player_one)
          : shortString.decodeShortString(data.node.player_one_name),
      challenged_name:
        data.node.player_two === "0x0" || data.node.player_two_name === undefined
          ? formatPlayerName(data.node.player_two, data.node.player_two)
          : shortString.decodeShortString(data.node.player_two_name),
      winner_image: data.node.winner_image,
      winner:
        data.node.winner === "0x0" || data.node.winner_name === undefined
          ? formatPlayerName(data.node.winner, data.node.winner, 4)
          : shortString.decodeShortString(data.node.winner_name),
      date: transactions[index].executedAt,
      status: data.node.status,
    };
  });
  console.log({
    data
  })
  const { system } = useDojo();
  const account = useAccount();
  const join_game = async (game_id: string, index: number) => {
    setJoinStatus({
      status: "JOINING",
      index: index,
    });
    const player_2_address = account.account?.address;
    if (account.account && player_2_address) {
      await system.join_game(
        account.account,
        game_id,
        player_2_address,
        setJoinStatus,
        index,
      );
    }
  };

  const runGameAction = (index: number) => {
    const game = games[index].node;
    const isPlayerInGame =
      game.player_one === account.account?.address ||
      game.player_two === account.account?.address;
    const isGameFull = game.player_one !== "0x0" && game.player_two !== "0x0";
    const isGameClosed = game.status === "closed";

    if (isGameClosed) {
      alert("This game is closed.");
      return;
    }

    if (isPlayerInGame || isGameFull) {
      navigate(`/games/${game.game_id}`);
    } else {
      join_game(game.game_id, index)
        .then((res) => console.info(res))
        .catch((errorJoiningGame) => console.error(errorJoiningGame));
    }
  };

  const [copied, setCopied] = useState("");

  if (loading) {
    return <DuelsSkeleton />;
  } else if (data?.length === 0) {
    return <EmptyDuels message="" />;
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
                    "w-[175px] p-4 text-start",
                  )}
                >
                  <Typography
                    variant="small"
                    className={clsx(
                      head.id === 5 && "hidden",
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
              <tbody className="h-[450px] w-[928px] rounded-b-xl fixed overflow-y-scroll overflow-x-clip space-y-2 bg-[#0F1116]">
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
                        isFirst && "pt-2",
                      )}
                    >
                      <td className="flex flex-row items-center px-6 h-16 space-x-5 w-[200px] justify-start bg-[#111419] rounded-l-xl border-r-0 border-2 border-[#1A1E25]">
                        <div className="flex flex-row items-center justify-center space-x-2.5 w-fit">
                          <div
                            className="w-8 h-8 flex items-center justify-center rounded-full"
                            style={{ backgroundColor: challengerColor }}
                          >
                            {item.challenger_image != "#" && item.challenger_image != undefined ? (
                              <img src={item.challenger_image} alt="Challenger" className="w-full h-full object-cover rounded-full" />
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
                            {item.challenger_name}
                          </Typography>
                        </div>
                      </td>
                      <td className="flex flex-row px-4 h-16 space-x-5 w-[200px] text-center border-y-2 border-[#1A1E25] bg-[#111419]">
                        {games[index].node.player_two !== "0x0" ? (
                          <div className="flex flex-row items-center space-x-2.5 w-fit">
                            <div
                              className="w-8 h-8 flex items-center justify-center rounded-full"
                              style={{ backgroundColor: challengedColor }}
                            >
                              {item.challenged_image != "#" && item.challenged_image != undefined ? (
                                <img src={item.challenged_image} alt="Challenged" className="w-full h-full object-cover rounded-full" />
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
                              {item.challenged_name}
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
                      <td className="w-[115px] px-4 text-center h-16 flex flex-col justify-center bg-[#111419] border-y-2 border-[#1A1E25]">
                        <p className="font-normal text-[#FAB580]">
                          {item.winner !== "0x0" ? item.winner : "nil"}
                        </p>
                      </td>
                      <td className="w-[115px] px-4 text-center h-16 flex flex-col justify-center bg-[#111419] border-y-2 border-[#1A1E25]">
                        <p className="font-normal text-[#FAB580]">
                          {date?.toLocaleDateString().replace(/\//g, "-")}
                        </p>
                      </td>
                      <td className="flex flex-row w-[190px] h-16 items-center justify-center pr-5 bg-[#111419] border-y-2 border-[#1A1E25]">
                        <Link
                          to={
                            games[index].node.player_one ===
                              account.account?.address ||
                            games[index].node.player_two ===
                              account.account?.address ||
                            (games[index].node.player_one !== "0x0" &&
                              games[index].node.player_two !== "0x0")
                              ? `/games/${games[index].node.game_id}`
                              : ""
                          }
                        >
                          <Button
                            className="text-[#F58229] bg-[#171922] hover:bg-[#1d1f2a] transition-colors"
                            onClick={() => runGameAction(index)}
                          >
                            {(() => {
                              const game = games[index].node;
                              const isMyGame =
                                game.player_one === account.account?.address ||
                                game.player_two === account.account?.address;

                              if (isMyGame) return "Go to game";
                              if (
                                joinStatus?.status === "JOINING" &&
                                joinStatus.index === index
                              ) {
                                return (
                                  <div className="flex flex-row items-center justify-center space-x-1">
                                    <svg
                                      className="text-white animate-spin-slow w-fit"
                                      viewBox="0 0 64 64"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                    >
                                      <path
                                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                        stroke="#F58229"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                        stroke="#FCE3AA"
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-gray-900"
                                      ></path>
                                    </svg>
                                    <p className="text-[#FCE3AA] font-semibold">
                                      Joining...
                                    </p>
                                  </div>
                                );
                              }
                              if (
                                joinStatus?.status === "ERROR" &&
                                joinStatus.index === index
                              )
                                return "Cannot join game";
                              if (
                                game.player_one !== "0x0" &&
                                game.player_two !== "0x0"
                              )
                                return "Spectate game";
                              return "Join game";
                            })()}
                          </Button>
                        </Link>
                      </td>
                      <td className="border-[#1A1E25] border-y-2 border-r-2 bg-[#111419] rounded-r-xl h-16 flex items-center justify-center w-[59px]">
                        {games[index].node.player_one != "0x0" &&
                        games[index].node.player_two !== "0x0" ? (
                          <Link
                            target="_blank"
                            to={`https://x.com/intent/tweet?text=Check%20out%20this%20game%20on%20Dojo%20Duels!%20${window.location.origin}/games/${games[index].node.game_id}`}
                            className="mr-10"
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-[#C7CAD4]" />
                          </Link>
                        ) : (
                          <div
                            className="flex flex-row items-center justify-center space-x-1 pr-10"
                            onClick={() => {
                              setCopied(
                                `${window.location.origin}/games/${games[index].node.game_id}`,
                              );
                              navigator.clipboard.writeText(
                                `${window.location.origin}/games/${games[index].node.game_id}`,
                              );
                              setTimeout(() => {
                                setCopied("");
                              }, 2000);
                            }}
                          >
                            {copied ===
                            `${window.location.origin}/games/${games[index].node.game_id}` ? (
                              <ClipboardDocumentCheckIcon className="w-5 h-5 text-[#C7CAD4] cursor-pointer" />
                            ) : (
                              <ClipboardDocumentIcon className="w-5 h-5 text-[#C7CAD4] cursor-pointer" />
                            )}
                          </div>
                        )}
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
