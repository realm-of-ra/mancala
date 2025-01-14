import { duels_header } from "@/lib/constants";
import { Card, Typography } from "@material-tailwind/react";
import clsx from "clsx";

export function GameHistorySkeleton() {
  const arr = Array(6).fill(null);
  return (
    <div className="w-full">
      <Card className="w-full h-full bg-transparent">
        <div className="w-full text-left bg-transparent table-auto">
          <div className="flex flex-row items-center justify-between w-full bg-[#0F1116] pt-2 rounded-t-xl px-2.5">
            <div className="flex flex-row items-center justify-between w-full">
              {duels_header.map((head) => (
                <div
                  key={head.id}
                  className={clsx(
                    head.id === 2
                      ? "text-center ml-20"
                      : head.id === 3
                        ? "text-center -ml-6"
                        : head.id === 4 && "-ml-16",
                    head.id === 5 && "hidden",
                    "w-[175px] p-4 text-start"
                  )}
                >
                  <Typography
                    variant="small"
                    className="font-semibold leading-none text-[#BDC2CC]"
                  >
                    {head.name === "Winner" ? "Result" : head.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute h-[450px] w-full overflow-x-clip overflow-y-scroll scrollbar rounded-b-xl">
            <table className="w-full text-left table-auto px-2.5">
              <tbody className="h-[450px] w-full overflow-y-scroll overflow-x-clip space-y-2 bg-[#0F1116]">
                {arr.map((_, index) => {
                  const isLast = index === arr.length - 1;
                  const isFirst = index === 0;
                  return (
                    <tr
                      key={index}
                      className={clsx(
                        "w-full mx-5 bg-[#0F1116] flex flex-row items-center",
                        isLast && "pb-2",
                        isFirst && "pt-2"
                      )}
                    >
                      <td className="flex flex-row items-center px-6 h-16 space-x-5 w-[230px] justify-start bg-[#111419] rounded-l-xl border-r-0 border-2 border-[#1A1E25]">
                        <div className="flex flex-row items-center space-x-2.5 w-fit">
                          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                          <div className="w-24 h-4 bg-gray-700 rounded"></div>
                        </div>
                      </td>
                      <td className="flex flex-row px-4 h-16 space-x-5 w-[200px] text-center border-y-2 border-[#1A1E25] bg-[#111419]">
                        <div className="flex flex-row items-center space-x-2.5 w-fit">
                          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                          <div className="w-24 h-4 bg-gray-700 rounded"></div>
                        </div>
                      </td>
                      <td className="w-[125px] px-4 text-center h-16 flex flex-col justify-center bg-[#111419] border-y-2 border-[#1A1E25]">
                        <div className="w-24 h-4 mx-auto bg-gray-700 rounded"></div>
                      </td>
                      <td className="w-[200px] px-4 text-end h-16 flex flex-col items-start justify-center bg-[#111419] border-y-2 border-r-2 border-[#1A1E25] rounded-r-xl">
                        <div className="w-24 h-4 ml-2.5 bg-gray-700 rounded"></div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}