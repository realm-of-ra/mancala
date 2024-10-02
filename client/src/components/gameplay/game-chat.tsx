import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Button,
} from "@material-tailwind/react";

import {
  message,
} from "../../lib/icons_store";

import Icon from "@/components/gameplay/Icon.tsx";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { animate, chat, players } from "@/lib/constants";
import { useState } from "react";

export default function GameChat(){
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const [open, setOpen] = useState(0);
    return(
        <Accordion
                open={open === 1}
                icon={<Icon id={1} open={open} />}
                className={clsx(open && "-mt-64", "w-96")}
                animate={animate}
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className={clsx(
                    open ? "border border-[#27292F] bg-none rounded-t-3xl" : "border-0 rounded-b-3xl bg-[url('./assets/brown-bg.png')] bg-cover bg-center bg-no-repeat rounded-full",
                    "px-3.5 backdrop-blur-sm  cursor-pointer",
                  )}
                >
                  <div className="flex flex-row space-x-2.5 items-center">
                    <img
                      src={message}
                      width={25}
                      height={25}
                      alt="end game"
                      className="rounded-full"
                    />
                    <p className="text-xl font-medium text-black">
                      Message <span className="text-white">(0)</span>
                    </p>
                  </div>
                </AccordionHeader>
                <AccordionBody className="border border-[#27292F] pt-1.5 px-3.5 rounded-b-xl h-72 bg-transparent backdrop-blur-sm">
                  <div className="w-full h-full space-y-2.5">
                    <div className="flex-1 overflow-y-scroll max-h-56 space-y-2.5 hide-scrollbar">
                      {chat.map((item, index) => (
                        <div key={index}>
                          <div
                            className={clsx(
                              players[0] === item.user
                                ? "items-start"
                                : "items-end",
                              "flex flex-col space-y-2.5 w-full",
                            )}
                          >
                            <div
                              className={clsx(
                                players[0] === item.user
                                  ? "items-start"
                                  : "items-end",
                                "flex flex-row",
                              )}
                            >
                              <div className="flex flex-row space-x-1.5 items-center w-full">
                                <img
                                  src={item.avatar}
                                  width={30}
                                  height={30}
                                  alt="end game"
                                  className="rounded-full"
                                />
                                <p className="text-lg font-medium text-right text-white">
                                  {item.user}
                                </p>
                              </div>
                            </div>
                            <div className="w-[75%] p-2.5 bg-[#15181E] rounded-md">
                              <p className="text-white">{item.message}</p>
                              <p className="w-full text-xs text-white text-end">
                                {item.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="w-full h-10 border border-[#27292F] rounded-xl px-1 py-3.5 flex flex-row items-center">
                        <input
                          className="w-full h-8 px-1.5 text-white bg-transparent outline-none ring-0"
                          placeholder="Send message"
                        />
                        <Button className="p-0 w-12 h-8 bg-[#F58229] flex flex-col items-center justify-center">
                          <PaperAirplaneIcon className="w-4 h-4 text-black transform -rotate-45" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
    )
}