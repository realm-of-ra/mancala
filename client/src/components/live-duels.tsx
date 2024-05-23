import { live_duels_header, live_duels_stats, player_header, player_stats } from "@/lib/constants";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { Button } from "./ui/button";

export default function LiveDuels() {
    return (
        <Card className="w-full h-full bg-transparent">
            <table className="w-full text-left bg-transparent table-auto">
                <thead className="border-b border-[#313640] flex flex-row items-center justify-between w-full">
                    <tr className="flex flex-row items-center justify-between w-full">
                        {live_duels_header.map((head) => (
                            <th
                                key={head.id}
                                className={clsx(head.id === 1 ? "text-start" : head.id === 4 ? "text-end" : "text-center", "w-[200px] p-4")}
                            >
                                <Typography
                                    variant="small"
                                    className={clsx(head.id === 4 && "hidden", "font-medium leading-none text-[#BDC2CC]")}
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
                            {live_duels_stats.map(({ id, challenger, challenged, date, status }: {
                                id: number;
                                challenger: {
                                    name: string;
                                    image: string;
                                };
                                challenged: {
                                    name: string;
                                    image: string;
                                } | null;
                                date: string;
                                status: string;
                            }, index) => {
                                const isLast = index === player_stats.length - 1;
                                return (
                                    <tr key={id} className={clsx(!isLast && "border-b border-[#23272F]", "w-full bg-[#0F1116] flex flex-row items-center")}>
                                        <td className="flex flex-row items-center p-4 space-x-5 w-[200px] justify-start">
                                            <div className="flex flex-row items-center justify-center space-x-2.5 w-fit">
                                                <img src={challenger.image} width={35} height={35} alt={`${name} profile picture`} className="rounded-full" />
                                                <p
                                                    className="font-normal text-white"
                                                >
                                                    {challenger.name}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="flex flex-row items-center p-4 space-x-5 w-[200px] justify-center">
                                            {
                                                challenged != null ? <div className="flex flex-row items-center space-x-2.5 w-fit">
                                                    <img src={challenged?.image} width={35} height={35} alt={`${name} profile picture`} className="rounded-full" />
                                                    <p
                                                        className="font-normal text-white"
                                                    >
                                                        {challenged?.name}
                                                    </p>
                                                </div> : <p className="text-white">Macthmaking</p>
                                            }
                                        </td>
                                        <td className="w-[200px] text-center">
                                            <p
                                                className="font-normal text-[#BDC2CC]"
                                            >
                                                {date}
                                            </p>
                                        </td>
                                        <td className="flex flex-row justify-center w-[200px]">
                                            <Button
                                                className={clsx(status === "Join Game" ? "text-[#F58229]" : "text-[#BDC2CC80]/50", "bg-[#1A1D25] hover:bg-[#1A1D25] active:bg-[#1A1D25] rounded-3xl font-medium")}
                                                disabled={status === "Joined"}
                                                onClick={() => window.location.href = "/gameplay"}
                                            >{status}</Button>
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