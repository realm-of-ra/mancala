import clsx from "clsx";

export function LiveSkeleton() {
    const arr = Array(6).fill(null);
    return (
        <>
            {arr.map((_, index) => {
                const isLast = index === arr.length - 1;
                return (
                    <tr key={index} className={clsx(!isLast && "border-b border-[#23272F]", "w-full bg-[#0F1116] flex flex-row items-center")}>
                        <td className="flex flex-row items-center p-4 space-x-5 w-[200px] justify-start">
                            <div className="flex flex-row items-center space-x-5 w-fit">
                                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                                <div className="w-24 h-4 bg-gray-700 rounded"></div>
                            </div>
                        </td>
                        <td className="flex flex-row items-center p-4 space-x-5 w-[200px] justify-center">
                            <div className="flex flex-row items-center space-x-5 w-fit">
                                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                                <div className="w-24 h-4 bg-gray-700 rounded"></div>
                            </div>
                        </td>
                        <td className="w-[200px] text-center">
                            <div className="w-24 h-4 mx-auto ml-16 bg-gray-700 rounded"></div>
                        </td>
                        <td className="w-[200px] text-center">
                            <div className="w-24 h-4 mx-auto ml-16 bg-gray-700 rounded"></div>
                        </td>
                    </tr>
                )

            })}

        </>
    );
}