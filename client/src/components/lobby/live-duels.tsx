import { live_duels_header, player_header } from "@/lib/constants.ts";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { Button } from "../ui/button.tsx";
import { useAccount } from "@starknet-react/core";
import { truncateString } from "@/lib/utils.ts";
import { useState } from "react";
import { useDojo } from "@/dojo/useDojo.tsx";
import { LiveSkeleton } from "./live-skeleton.tsx";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";

export default function LiveDuels({ games }: { games: any }) {
    const navigate = useNavigate();
    const [joinStatus, setJoinStatus] = useState<{status: string; index: number;}>();
    const data = games?.map((data: any, index: number) => {
        return {
            challenger: data?.node.player_one,
            challenged: data?.node.player_two,
            date: data?.node.entity?.executedAt,
        }
    })
    const { system } = useDojo()
    const account = useAccount()
    const join_game = async (game_id: string, index: number) => {
        setJoinStatus({
            status: "JOINING",
            index: index,
        })
        const player_2_address = account.account?.address;
        if (account.account && player_2_address) {
            await system.join_game(account.account, game_id, player_2_address, setJoinStatus, index);
        }
    }

    const runGameAction = (index: number) => {
        const game = games[index].node;
        const isPlayerInGame = game.player_one === account.account?.address || game.player_two === account.account?.address;
        const isGameFull = game.player_one !== "0x0" && game.player_two !== "0x0";
    
        if (isPlayerInGame || isGameFull) {
            navigate(`/games/${game.game_id}`);
        } else {
            join_game(game.game_id, index)
                .then(res => console.info(res))
                .catch(errorJoiningGame => console.error(errorJoiningGame));
        }
    }

    return (
        <div className="w-[874px] h-[874px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
            <Card className="w-full h-full bg-transparent">
                <div className="w-full text-left bg-transparent table-auto">
                    <div className="border-b border-[#313640] flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                            {live_duels_header.map((head) => (
                                <div
                                    key={head.id}
                                    className={clsx(head.id === 1 ? "text-start" : head.id === 4 ? "text-end" : "text-center", "w-[200px] p-4")}
                                >
                                    <Typography
                                        variant="small"
                                        className={clsx(head.id === 4 && "hidden", "font-medium leading-none text-[#BDC2CC]")}
                                    >
                                        {head.name}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute h-[450px] w-[814px] overflow-x-clip overflow-y-scroll">
                        <table className="w-full text-left table-auto">
                            <thead className="border-b border-[#313640] hidden">
                                <tr className="w-full bg-[#0F1116] flex flex-row items-center justify-between">
                                    {player_header.map((head) => (
                                        <th
                                            key={head.id}
                                            className="p-4"
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
                            </thead>
                            <tbody className="max-h-[450px] overflow-y-scroll overflow-x-clip">
                                {data?.length ? data?.map((data: any, index: number) => {
                                    const isLast = index === games?.length - 1;
                                    const date = new Date(data.date)
                                    return (
                                        <tr key={index}
                                            className={clsx(!isLast && "border-b border-[#23272F]", "w-full bg-[#0F1116] flex flex-row items-center")}>
                                            <td className="flex flex-row items-center p-4 space-x-5 w-[200px] justify-start">
                                                <div className="flex flex-row items-center justify-center space-x-2.5 w-fit">
                                                    {/* <img src={data.challenger.profilePicture} width={35} height={35}
                                                        alt={`${data.challenger.name} profile picture`}
                                                        className="rounded-full" /> */}
                                                    <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                                        <div className="bg-[#15171E] rounded-full p-2.5">
                                                            <UserIcon color="#F58229" className="w-6 h-6" />
                                                        </div>
                                                    </div>
                                                    <p
                                                        className="font-normal text-white"
                                                    >
                                                        {data.challenger.name ? data.challenger.name : truncateString(games[index].node.player_one)}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="flex flex-row items-center p-4 space-x-5 w-[200px] justify-center">
                                                {
                                                    games[index].node.player_two !== "0x0" ?
                                                        <div className="flex flex-row items-center space-x-2.5 w-fit">
                                                            {/* <img src={data.challenged.profilePicture} width={35} height={35}
                                                                alt={`${data.challenged.name} profile picture`}
                                                                className="rounded-full" /> */}
                                                            <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                                                <div className="bg-[#15171E] rounded-full p-2.5">
                                                                    <UserIcon color="#F58229" className="w-6 h-6" />
                                                                </div>
                                                            </div>
                                                            <p
                                                                className="font-normal text-white"
                                                            >
                                                                {data.challenged.name ? data.challenged.name : truncateString((games[index].node.player_two))}
                                                            </p>
                                                        </div> : <p className="text-white">Matchmaking</p>
                                                }
                                            </td>
                                            <td className="w-[200px] text-center">
                                                <p
                                                    className="font-normal text-[#BDC2CC]"
                                                >
                                                    {date.toLocaleDateString()}
                                                </p>
                                            </td>
                                            <td className="flex flex-row justify-center w-[200px]">
                                                <Link
                                                    to={(games[index].node.player_one === account.account?.address || games[index].node.player_two === account.account?.address) 
                                                    ? `/games/${games[index].node.game_id}` : 
                                                    games[index].node.player_one !== "0x0" && games[index].node.player_two !== "0x0" 
                                                    ?  `/games/${games[index].node.game_id}` : ''}
                                                >
                                                    <Button
                                                        className={"text-[#F58229] bg-transparent active:bg-transparent hover:bg-transparent"}
                                                        onClick={() => runGameAction(index)}
                                                    >
                                                        {
                                                            (games[index].node.player_one === account.account?.address || games[index].node.player_two === account.account?.address)
                                                                ? "Go to game" : joinStatus?.status === "JOINING" && joinStatus.index == index ?
                                                                    <div
                                                                        className="flex flex-row items-center justify-center space-x-1">
                                                                        <svg className="text-white animate-spin w-fit"
                                                                            viewBox="0 0 64 64"
                                                                            fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                            width="24" height="24">
                                                                            <path
                                                                                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                                                                stroke="#F58229" strokeWidth="5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"></path>
                                                                            <path
                                                                                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                                                                stroke="#FCE3AA" strokeWidth="5"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                className="text-gray-900">
                                                                            </path>
                                                                        </svg>
                                                                        <p className="text-[#FCE3AA] font-semibold">Joining...</p>
                                                                    </div>
                                                                    : joinStatus?.status === "ERROR" && joinStatus.index === index
                                                                        ? "Cannot join game" : joinStatus?.status === "SUCCESS" && joinStatus.index === index ? "Go to game"
                                                                        : games[index].node.player_one !== "0x0" && games[index].node.player_two !== "0x0" ? "Watch game" : "Join game"
                                                        }</Button>
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                }) : <LiveSkeleton />}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Card>
        </div>
    )
}