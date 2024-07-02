import clsx from "clsx";

export default function PlayersSkeleton() {
    const arr = Array(6).fill(null);
    return (
        <>
            {arr.map((_, index) => {
                const isLast = index === arr.length - 1;
                return (
                    <tr key={index} className={clsx(!isLast ? "border-b border-[#23272F]" : "", "bg-[#0F1116]")}>
                        <td className="flex flex-row items-center p-4 space-x-5 w-[175px] justify-start">
                            <div className="flex flex-row items-center space-x-5 w-fit">
                                <div className="w-8 h-8 bg-gray-700 rounded-full" />
                                <div className="w-24 h-4 bg-gray-700 rounded" />
                            </div>
                        </td>
                        <td>
                            <div className="w-8 h-3 ml-10 bg-gray-700 rounded" />
                        </td>
                        <td>
                            <div className="w-8 h-3 ml-10 bg-gray-700 rounded" />
                        </td>
                        <td>
                            <div className="w-8 h-3 ml-10 bg-gray-700 rounded" />
                        </td>
                        <td>
                            <div className="w-8 h-3 ml-10 bg-gray-700 rounded" />
                        </td>
                        <td>
                            <div className="w-8 h-3 ml-10 bg-gray-700 rounded" />
                        </td>
                    </tr>
                )

            })}

        </>
    )
}