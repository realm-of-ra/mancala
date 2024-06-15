import { Button } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { stats, table_head } from "@/lib/constants";
import Header from "@/components/header";

export default function Leaderboard() {
    return (
        <div className="bg-[#0F1116] min-h-screen h-full w-full flex flex-col items-center">
            {/* Start of header */}
            <Header />
            <div className="absolute flex flex-row items-center justify-between w-full max-w-5xl top-24">
                <div className='flex flex-row items-center justify-end w-full'>
                    <div className="w-32 h-32 bg-[url('assets/lobby-bg.png')] bg-contain bg-no-repeat bg-center flex flex-col items-center justify-center">
                        <Button ripple={false} className="w-24 h-24 bg-transparent bg-[url('assets/lobby.png')] bg-contain bg-no-repeat bg-center overflow-hidden" children />
                    </div>
                </div>
            </div>
            <main className="flex flex-col items-center justify-center mt-56">
                <div className="flex flex-row items-center justify-between w-full max-w-5xl">
                    <div className="flex flex-row items-center justify-between w-full h-full">
                        <div className="bg-[url('./assets/left-leaf.png')] w-[250px] h-[350px] bg-contain bg-no-repeat bg-center -mt-48" />
                        <div className="flex flex-row justify-between flex-1 w-full">
                            {/* Third position */}
                            <div className="flex flex-col items-center justify-center space-y-1.5 mt-10">
                                <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                    <img src={stats[2].image} width={100} height={100} alt={`${stats[2].name} profile picture`} className="rounded-full" />
                                </div>
                                <h3 className="text-2xl text-white">{stats[2].name}</h3>
                                <div className="flex flex-row space-x-0.5">
                                    <div className="bg-[url('./assets/cup.png')] w-4 h-4 bg-cover bg-no-repeat" />
                                    <h4 className="text-xs text-[#F58229]">{stats[2].score.toLocaleString()}</h4>
                                </div>
                                <div className="bg-[url('./assets/third-stage.png')] w-48 h-48 bg-cover bg-center bg-no-repeat" />
                            </div>
                            {/* First position */}
                            <div className="flex flex-col items-center -mt-48">
                                <div className="bg-[url('./assets/glow.png')] bg-cover bg-center w-[400px] h-[400px] flex flex-col items-center justify-end" />
                                <div className="flex flex-col items-center justify-center space-y-1.5 absolute top-[250px]">
                                    <div className="p-1 w-fit rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                        <img src={stats[0].image} width={200} height={200} alt={`${stats[2].name} profile picture`} className="rounded-full" />
                                    </div>
                                    <h3 className="text-2xl text-white">{stats[0].name}</h3>
                                    <div className="flex flex-row space-x-0.5">
                                        <div className="bg-[url('./assets/cup.png')] w-4 h-4 bg-cover bg-no-repeat" />
                                        <h4 className="text-xs text-[#F58229]">{stats[0].score.toLocaleString()}</h4>
                                    </div>
                                    <div className="bg-[url('./assets/first-stage.png')] w-48 h-48 bg-cover bg-center bg-no-repeat" />
                                </div>
                            </div>
                            {/* Second position */}
                            <div className="flex flex-col items-center justify-center space-y-1.5 relative mt-10">
                                <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                                    <img src={stats[1].image} width={100} height={100} alt={`${stats[2].name} profile picture`} className="rounded-full" />
                                </div>
                                <h3 className="text-2xl text-white">{stats[1].name}</h3>
                                <div className="flex flex-row space-x-0.5">
                                    <div className="bg-[url('./assets/cup.png')] w-4 h-4 bg-cover bg-no-repeat" />
                                    <h4 className="text-xs text-[#F58229]">{stats[1].score.toLocaleString()}</h4>
                                </div>
                                <div className="bg-[url('./assets/second-stage.png')] w-48 h-48 bg-cover bg-center bg-no-repeat" />
                            </div>
                        </div>
                        <div className="bg-[url('./assets/right-leaf.png')] w-[250px] h-[350px] bg-center bg-contain bg-no-repeat -mt-48" />
                    </div>
                </div>
                <div className="w-full pb-10 mt-20">
                    <Card className="w-full h-full overflow-scroll border-[0.1px] border-[#23272F] bg-transparent">
                        <table className="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr className="bg-[#0F1014] border-b border-[#23272F]">
                                    {table_head.map((head) => (
                                        <th
                                            key={head}
                                            className="p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                className="font-normal leading-none text-[#BDC2CC]"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-[#15181E]">
                                {stats.slice(3).map(({ id, name, image, level, score }, index) => {
                                    const isLast = index === stats.slice(3).length - 1;

                                    return (
                                        <tr key={name}>
                                            <td className={clsx(!isLast && "border-b border-[#23272F]", "flex flex-row items-center p-4 space-x-5 w-full")}>
                                                <p
                                                    className="font-semibold"
                                                >
                                                    {id}
                                                </p>
                                                <div className="flex flex-row items-center space-x-5 w-fit">
                                                    <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026]">
                                                        <img src={image} width={35} height={35} alt={`${stats[2].name} profile picture`} className="rounded-full" />
                                                    </div>
                                                    <p
                                                        className="font-normal text-white"
                                                    >
                                                        {name}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className={clsx(!isLast && "border-b border-[#23272F]", "w-[33%]")}>
                                                <p
                                                    className="font-normal text-[#FAB580]"
                                                >
                                                    {level}
                                                </p>
                                            </td>
                                            <td className={clsx(!isLast && "border-b border-[#23272F]", "w-[33%]")}>
                                                <p
                                                    className="font-normal text-[#F97E22]"
                                                >
                                                    {score.toLocaleString()}
                                                </p>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Card>
                </div>
            </main>
        </div>
    )
}