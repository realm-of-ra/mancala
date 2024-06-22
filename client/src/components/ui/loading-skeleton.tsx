import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

export function LoadingSkeleton() {
    return (
        <>
            {Array(10).fill(null).map((_, index) => (
                <tr key={index} className="border-b border-[#23272F] w-full bg-[#0F1116] flex flex-row items-center">
                    <td className="flex flex-row items-center p-4 space-x-5 w-[175px] justify-start">
                        <div className="flex flex-row items-center space-x-5 w-fit">
                            <div className="rounded-full bg-gray-700 h-8 w-8"></div>
                            <div className="h-4 bg-gray-700 rounded w-24"></div>
                        </div>
                    </td>
                    <td className="flex flex-row items-center p-4 space-x-5 w-[175px] justify-center">
                        <div className="flex flex-row items-center space-x-5 w-fit">
                            <div className="rounded-full bg-gray-700 h-8 w-8"></div>
                            <div className="h-4 bg-gray-700 rounded w-24"></div>
                        </div>
                    </td>
                    <td className="w-[175px] text-center">
                        <div className="h-4 bg-gray-700 rounded w-24 mx-auto"></div>
                    </td>
                    <td className="w-[175px] text-center">
                        <div className="h-4 bg-gray-700 rounded w-24 mx-auto"></div>
                    </td>
                    <td className="w-[175px] flex flex-row justify-center">
                        <EllipsisHorizontalIcon className="w-6 h-6 text-gray-700" />
                    </td>
                </tr>
            ))}

        </>
    );
}