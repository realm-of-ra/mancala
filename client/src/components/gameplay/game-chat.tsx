import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
} from "@material-tailwind/react";

import { message as messageIcon } from "../../lib/icons_store";

import Icon from "@/components/gameplay/Icon.tsx";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { animate, GET_MESSAGES } from "@/lib/constants";
import { useState } from "react";
import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { useAccount } from "@starknet-react/core";
import moment from "moment";
import axios from "axios";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function GameChat({ player_one, player_two }: { player_one: string, player_two: string }) {
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const [open, setOpen] = useState(0);
  const { data, startPolling } = useQuery(GET_MESSAGES, { client });
  const { address } = useAccount();
  const involved = [player_one, player_two].filter((player) => player !== address).length === 0 ? true : false;
  startPolling(1000);

  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendMessage = async (userImage: string, username: string) => {
    setSending(true);
    axios.post("http://localhost:4000/api/messages", {
      text: message,
      userImage,
      walletAddress: address, 
      username: username,
      timestamp: new Date(),
    });
    setMessage("");
    setSending(false);
  }
  return (
    
    <Accordion
      open={open === 1}
      icon={<Icon id={1} open={open} />}
      className={clsx(open && "-mt-64", "w-96")}
      animate={animate}
    >
      <AccordionHeader
        onClick={() => handleOpen(1)}
        className={clsx(
          open
            ? "border border-[#27292F] bg-none rounded-t-3xl"
            : "border-0 rounded-b-3xl bg-[url('./assets/brown-bg.png')] bg-cover bg-center bg-no-repeat rounded-full",
          "px-3.5 backdrop-blur-sm  cursor-pointer",
        )}
      >
        <div className="flex flex-row space-x-2.5 items-center">
          <img
            src={messageIcon}
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
          <div className="flex-1 overflow-y-scroll max-h-56 space-y-2.5 hide-scrollbar h-full">
            {
              data?.messages.map((message: any) => (
                <div key={message?.id}>
                  <div
                    className={clsx(
                      player_one === message?.walletAddress ? "items-start" : "items-end",
                      "flex flex-col space-y-2.5 w-full",
                    )}
                  >
                    <div
                      className={clsx(
                        player_one === message?.walletAddress ? "items-start" : "items-end",
                        "flex flex-row",
                      )}
                    >
                      <div className="flex flex-row space-x-1.5 items-center w-full">
                        <img
                          src={message?.userImage}
                          width={30}
                          height={30}
                          alt="end game"
                          className="rounded-full bg-black"
                        />
                        <p className="text-lg font-medium text-right text-white">
                          {message?.username || message?.walletAddress}
                        </p>
                      </div>
                    </div>
                    <div className="w-[75%] p-2.5 bg-[#15181E] rounded-md">
                      <p className="text-white">{message?.text}</p>
                      <p className="w-full text-xs text-white text-end">
                        {moment.parseZone(message?.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div>
            <div className="w-full h-10 border border-[#27292F] rounded-xl px-1 py-3.5 flex flex-row items-center">
              <input
                className="w-full h-8 px-1.5 text-white bg-transparent outline-none ring-0"
                placeholder="Send message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button className="p-0 w-12 h-8 bg-[#F58229] flex flex-col items-center justify-center"
                disabled={involved}
                onClick={() => sendMessage("https://avatic.net/wp-content/uploads/2024/02/Business-Man-3D-Avatar.png", "Superman")}
              >
                <PaperAirplaneIcon className="w-4 h-4 text-black transform -rotate-45" />
              </Button>
            </div>
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
}
