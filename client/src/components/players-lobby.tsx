import { eniola } from "@/constants/icons_store";
import { player_header, player_stats } from "@/lib/constants";
import { getPlayers, truncateString } from "@/lib/utils";
import { useQuery, gql } from "@apollo/client";
import { Card, Typography } from "@material-tailwind/react";
import { useProvider } from "@starknet-react/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { constants } from "starknet";
import { StarknetIdNavigator, StarkProfile } from "starknetid.js";

export default function PlayersLobby({ data }: { data: any }) {

    const { provider } = useProvider();

    const starknetIdNavigator = new StarknetIdNavigator(
        provider,
        constants.StarknetChainId.SN_MAIN
    );

    // Extracting player_one and player_two from the data object
    const players = getPlayers(data);

    const addresses = players?.map((player: any) => player.address);

    const [profiles, setProfiles] = useState<StarkProfile[]>([]);

    useEffect(() => {
        if (!starknetIdNavigator || !addresses) return;
        (async () => {
            const data = await starknetIdNavigator?.getStarkProfiles(addresses)
            if (!data) return;
            setProfiles(data);
        })()
    }, [addresses]);

    if (!players) {
        return <div className="w-[874px] h-[437px] flex flex-col items-center justify-center">
            <svg className="text-white animate-spin w-fit" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24">
                <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="#F58229" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="#FCE3AA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900">
                </path>
            </svg>
        </div>
    }

    return (
        <Card className="w-full h-full bg-transparent">
            <table className="text-left bg-transparent table-auto">
                <thead className="sticky -top-3.5 bg-[#0F1116] z-10">
                    <tr>
                        {player_header.map((head, index) => (
                            <th
                                key={head.id}
                                className={clsx("p-4", index === 0 ? "text-start" : "text-center")}
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
                    <div className="w-full border-b border-[#313640] h-1 absolute inset-x-0 top-10" />
                </thead >
                <tbody>
                    {players?.map(({ address, losses, wins, totalAppearances }: { address: string, losses: number, wins: number, totalAppearances: number }, index: number) => {
                        const isLast = index === players.length - 1;
                        return (
                            <tr key={index} className={clsx(!isLast ? "border-b border-[#23272F]" : "", "bg-[#0F1116]")}>
                                <td className="flex flex-row items-center p-4 space-x-5 max-w-fit">
                                    <Typography>
                                        <div className="flex flex-row items-center space-x-5 w-fit">
                                            <img src={profiles ? profiles[index]?.profilePicture : ""} width={35} height={35} alt={`${profiles ? profiles[index]?.name : truncateString(address)} profile picture`} className="rounded-full" />
                                            <p
                                                className="font-normal text-white"
                                            >
                                                {profiles[index]?.name ? profiles[index]?.name : truncateString(address)}
                                            </p>
                                        </div>
                                    </Typography>
                                </td>
                                <td>
                                    <Typography className="font-normal text-[#FAB580] text-center">{wins < 4 ? 1 : Math.round(wins % 4)}</Typography>
                                </td>
                                <td>
                                    <Typography className="font-normal text-[#FAB580] text-center">{wins * 50}</Typography>
                                </td>
                                <td>
                                    <Typography className="font-normal text-[#FAB580] text-center">{totalAppearances}</Typography>
                                </td>
                                <td>
                                    <Typography className="font-normal text-[#FAB580] text-center">{wins}</Typography>
                                </td>
                                <td>
                                    <Typography className="font-normal text-[#FAB580] text-center">{losses}</Typography>
                                </td>
                                <td>
                                    <Typography className="font-normal text-[#FAB580] text-center">0</Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table >
        </Card >
    )
}