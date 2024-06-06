import { player_header, player_stats } from "@/lib/constants";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";

export default function PlayersLobby() {
    return (
        <Card className="w-full h-full bg-transparent">
            <table className="w-full text-left bg-transparent table-auto">
                <thead className="border-b border-[#313640]">
                    <tr>
                        {player_header.map((head) => (
                            <th
                                key={head.id}
                                className="p-4 w-[125px]"
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
                            <tr>
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
                            {player_stats.map(({ id, image, name, level, score, duels, wins, losses, draws }, index) => {
                                const isLast = index === player_stats.length - 1;
                                return (
                                    <tr key={id} className={clsx(!isLast && "border-b border-[#23272F]", "w-full bg-[#0F1116]")}>
                                        <td className="flex flex-row items-center w-full p-4 space-x-5">
                                            <div className="flex flex-row items-center space-x-5 w-fit">
                                                <img src={image} width={35} height={35} alt={`${name} profile picture`} className="rounded-full" />
                                                <p
                                                    className="font-normal text-white"
                                                >
                                                    {name}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="w-[100px]">
                                            <p
                                                className="font-normal text-[#FAB580]"
                                            >
                                                {level}
                                            </p>
                                        </td>
                                        <td className="w-[135px]">
                                            <p
                                                className="font-normal text-[#F97E22]"
                                            >
                                                {score.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="w-[115px]">
                                            <p
                                                className="font-normal text-[#F97E22]"
                                            >
                                                {duels.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="w-[125px]">
                                            <p
                                                className="font-normal text-[#F97E22]"
                                            >
                                                {wins.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="w-[115px]">
                                            <p
                                                className="font-normal text-[#F97E22]"
                                            >
                                                {losses.toLocaleString()}
                                            </p>
                                        </td>
                                        <td className="w-[90px]">
                                            <p
                                                className="font-normal text-[#F97E22]"
                                            >
                                                {draws.toLocaleString()}
                                            </p>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </tbody>
            </table>
        </Card>
    )
}