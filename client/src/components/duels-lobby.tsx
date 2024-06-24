import { duels_header, duels_stats, player_header, player_stats } from "@/lib/constants";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";

export default function DuelsLobby() {
    return (
        <Card className="w-full h-full bg-transparent">
            <table className="w-full text-left bg-transparent table-auto">
                <thead className="border-b border-[#313640] flex flex-row items-center justify-between w-full">
                    <tr className="flex flex-row items-center justify-between w-full">
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
                <tbody className="absolute h-[450px] w-[814px] overflow-y-scroll bg-[#16181D]">
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
                        <tbody className="w-full max-h-[450px] overflow-y-scroll">
                            {duels_stats.map(({ id, challenger, challenged, winner, date }, index) => {
                                const isLast = index === player_stats.length - 1;
                                return (
                                    <tr key={id} className={clsx(!isLast && "border-b border-[#23272F]", "w-full bg-[#0F1116] flex flex-row items-center")}>
                                        <td className="flex flex-row items-center p-4 space-x-5 w-[175px] justify-start">
                                            <div className="flex flex-row items-center space-x-5 w-fit">
                                                <img src={challenger.image} width={35} height={35} alt={`${name} profile picture`} className="rounded-full" />
                                                <p
                                                    className="font-normal text-white"
                                                >
                                                    {challenger.name}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="flex flex-row items-center p-4 space-x-5 w-[175px] justify-center">
                                            <div className="flex flex-row items-center space-x-5 w-fit">
                                                <img src={challenged.image} width={35} height={35} alt={`${name} profile picture`} className="rounded-full" />
                                                <p
                                                    className="font-normal text-white"
                                                >
                                                    {challenged.name}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="w-[175px] text-center">
                                            <p
                                                className="font-normal text-[#FAB580]"
                                            >
                                                {winner}
                                            </p>
                                        </td>
                                        <td className="w-[175px] text-center">
                                            <p
                                                className="font-normal text-[#F97E22]"
                                            >
                                                {date}
                                            </p>
                                        </td>
                                        <td className="w-[175px] flex flex-row justify-center">
                                            <EllipsisHorizontalIcon className="w-6 h-6 text-white" />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </tbody>
            </table >
        </Card >
    )
}