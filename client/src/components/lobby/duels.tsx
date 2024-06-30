import { duels_header } from "@/lib/constants.ts";
import { Card, Typography } from "@material-tailwind/react";
import { useProvider } from "@starknet-react/core";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { StarknetIdNavigator } from "starknetid.js";
import { constants, StarkProfile } from "starknet";
import { truncateString } from "@/lib/utils.ts";
import { DuelsSkeleton } from "./duels-skeleton.tsx";

export default function Duels({ games, transactions }: { games: any, transactions: any }) {
    const { provider } = useProvider();
    const starknetIdNavigator = useMemo(() => {
        return new StarknetIdNavigator(
            provider,
            constants.StarknetChainId.SN_MAIN
        );
    }, [provider])
    const [challengers, setChallengers] = useState<StarkProfile[]>([]);
    const [challenged, setChallenged] = useState<StarkProfile[]>();
    const [winners, setWinners] = useState<StarkProfile[]>();
    const challengerAddresses = games.map((game: any) => game.node.player_one);
    const challengedAddresses = games.map((game: any) => game.node.player_two);
    const winnerAddresses = games.map((game: any) => game.node.winner);
    useEffect(() => {
        if (!starknetIdNavigator || !challengerAddresses) return;
        (async () => {
            const challengerData = await starknetIdNavigator?.getStarkProfiles(challengerAddresses)
            const challengedData = await starknetIdNavigator?.getStarkProfiles(challengedAddresses)
            const winnersData = await starknetIdNavigator?.getStarkProfiles(winnerAddresses)
            if (!challengerData) return;
            if (challengerData) setChallengers(challengerData);
            if (!challengedData) return;
            if (challengedData) setChallenged(challengedData);
            if (!winnersData) return;
            if (winnersData) setWinners(winnersData)
        })();
    }, [challengerAddresses, challengedAddresses, winnerAddresses, starknetIdNavigator]);
    const data = challengers?.map((challenger, index) => {
        return {
            challenger: challenger,
            challenged: challenged ? challenged[index] : null,
            winner: winners ? winners[index] : null,
            date: transactions[index].node.executedAt,
        }
    })

    return (
        <div className="w-[874px] h-[874px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
            <Card className="w-full h-full bg-transparent">
                <table className="w-full text-left bg-transparent table-auto">
                    <thead className="border-b border-[#313640] flex flex-row items-center justify-between w-full">
                        <tr className="flex flex-row items-center justify-between w-full">
                            {duels_header.map((head) => (
                                <th
                                    key={head.id}
                                    className="p-4 mr-10"
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
                    <tbody className="absolute h-[450px] w-[814px] overflow-y-scroll">
                        <table className="w-full text-left table-auto">
                            <thead className="border-b border-[#313640] hidden">
                                <tr className="w-full bg-[#0F1116] flex flex-row items-center justify-between">
                                    {duels_header.map((head) => (
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
                            <tbody className="w-full max-h-[450px] overflow-y-scroll">
                                {data.length ? data.map((item: any, index: number) => {
                                    const isLast = index === data.length - 1;
                                    const date = new Date(item.date)
                                    return (
                                        <tr key={index} className={clsx(!isLast && "border-b border-[#23272F]", "w-full bg-[#0F1116] flex flex-row items-center")}>
                                            <td className="flex flex-row items-center p-4 space-x-5 w-[200px] justify-start">
                                                <div className="flex flex-row items-center space-x-5 w-fit">
                                                    <img src={item.challenger.profilePicture} width={35} height={35} alt={`${item.challenger.name} profile picture`} className="rounded-full" />
                                                    <p
                                                        className="font-normal text-white"
                                                    >
                                                        {item.challenger.name ? item.challenger.name : truncateString(games[index].node.player_one)}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="flex flex-row items-center p-4 space-x-5 w-[200px] justify-center">
                                                {
                                                    games[index].node.player_two !== "0x0" ? <div className="flex flex-row items-center space-x-2.5 w-fit">
                                                        <img src={item.challenged.profilePicture} width={35} height={35} alt={`${item.challenged.name} profile picture`} className="rounded-full" />
                                                        <p
                                                            className="font-normal text-white"
                                                        >
                                                            {item.challenged.name ? item.challenged.name : truncateString((games[index].node.player_two))}
                                                        </p>
                                                    </div> : <p className="text-white">Matchmaking</p>
                                                }
                                            </td>
                                            <td className="w-[200px] text-center ml-8">
                                                <p
                                                    className="font-normal text-[#FAB580]"
                                                >
                                                    {item.winner.name ? item.winner.name : truncateString((games[index].node.winner))}
                                                </p>
                                            </td>
                                            <td className="w-[200px] text-end pr-12">
                                                <p
                                                    className="font-normal text-[#F97E22]"
                                                >
                                                    {date.toLocaleDateString()}
                                                </p>
                                            </td>
                                        </tr>
                                    );
                                }) : <DuelsSkeleton />}
                            </tbody>
                        </table>
                    </tbody>
                </table >
            </Card >
        </div>
    )
}