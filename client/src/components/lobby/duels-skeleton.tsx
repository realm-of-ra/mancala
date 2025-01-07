import { duels_header } from "@/lib/constants";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";

export function DuelsSkeleton() {
  const arr = Array(6).fill(null);
  return (
    <>
      {arr.map((_, index) => {
        const isLast = index === arr.length - 1;
        return (
          <div className="w-[874px] h-[874px] bg-[url('./assets/lobby-box-long.png')] bg-contain bg-no-repeat p-8">
            <Card className="w-full h-full bg-transparent">
              <div className="border-b border-[#313640] flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  {duels_header.map((head) => (
                    <div
                      key={head.id}
                      className={clsx(
                        head.id === 3
                          ? "text-center"
                          : head.id === 4
                            ? "text-end"
                            : "text-start",
                        "w-[200px] p-4",
                      )}
                    >
                      <Typography
                        variant="small"
                        className={clsx(
                          head.id === 4 && "hidden",
                          "font-medium leading-none text-[#BDC2CC]",
                        )}
                      >
                        {head.name}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full text-left bg-transparent table-auto">
                {Array.from({ length: 7 }).map((_, index) => (
                  <tr
                    key={index}
                    className={clsx(
                      !isLast && "border-b border-[#23272F]",
                      "w-[814px] bg-[#0F1116] flex flex-row items-center",
                    )}
                  >
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
                    <td className="w-[200px] text-center ml-8">
                      <div className="w-24 h-4 mx-auto ml-12 bg-gray-700 rounded"></div>
                    </td>
                    <td className="w-[200px] text-center pr-12">
                      <div className="w-24 h-4 mx-auto ml-16 bg-gray-700 rounded"></div>
                    </td>
                  </tr>
                ))}
              </div>
            </Card>
          </div>
        );
      })}
    </>
  );
}
