import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
} from "@material-tailwind/react";

import Icon from "@/components/gameplay/Icon.tsx";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { animate, chat, players } from "@/lib/constants";
import { useState } from "react";
import Book from "../ui/svgs/book";

export default function QuickTutorial() {
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const [open, setOpen] = useState(0);
  return (
    <Accordion
      open={open === 1}
      icon={<Icon id={1} open={open} />}
      className={clsx(open && "-mt-64", "w-96", "z-40")}
      animate={animate}
    >
      <AccordionHeader
        onClick={() => handleOpen(1)}
        className={clsx("bg-[#B96539] border-2 border-[#602714] px-2.5", open ? "rounded-b-none rounded-t-xl" : "rounded-b-full rounded-t-full")}
      >
        <div className="flex flex-row space-x-2.5 items-center px-2.5">
          <Book />
          <p className="text-xl text-[#FCE3AA] font-semibold">
            Quick Tutorial
          </p>
        </div>
      </AccordionHeader>
      <AccordionBody className="rounded-b-xl h-[400px] bg-[#B96539] border-2 border-t-0 border-[#602714] px-2.5">
        <div className="w-full h-full space-y-2.5">
          <div className="flex-1 overflow-y-scroll max-h-[370px] space-y-2.5 hide-scrollbar">
            <div className="flex flex-col space-y-2.5">
              <div className="bg-[#9E462E80] border-2 border-[#6027144D] w-full h-fit rounded-lg p-1.5">
                <h6 className="font-semibold text-white text-lg">Game Objective</h6>
                <p className="text-white font-medium">The objective of Mancala is to capture more stones than your opponent by the end of the game.</p>
              </div>
              <div className="bg-[#9E462E80] border-2 border-[#6027144D] w-full h-fit rounded-lg p-1.5">
                <h6 className="font-semibold text-white text-lg">How to Get Extra Moves</h6>
                <p className="text-white font-medium">You can get an extra turn if your last stone lands in your Mancala (seeds move in a counterclockwise direction)</p>
              </div>
              <div className="bg-[#9E462E80] border-2 border-[#6027144D] w-full h-fit rounded-lg p-1.5">
                <h6 className="font-semibold text-white text-lg">How to Capture Opponent Seeds</h6>
                <p className="text-white font-medium">If your last stone lands in an empty pit on your side, and the opposite pit on your opponent’s side has stones, you capture all the stones in that opposite pit, along with your last stone.</p>
              </div>
            </div>
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
}
