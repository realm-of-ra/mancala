// import { useComponentValue } from "@dojoengine/react";
// import { Entity } from "@dojoengine/recs";
// import { useEffect, useState } from "react";
// import { getEntityIdFromKeys } from "@dojoengine/utils";
// import { useDojo } from "./dojo/useDojo";

import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import eniola from './assets/eniola.png';
import israel from "./assets/israel.png";
import logo from "./assets/logo.png";
import restart from "./assets/restart.png";
import end from "./assets/end.png";
import muteImage from "./assets/mute.png";
import unmuteImage from "./assets/unmute.png";
import leaderboard from "./assets/leaderboard.png";

function App() {
  // const {
  //   setup: {
  //     systemCalls: { spawn, move },
  //     clientComponents: { Moves },
  //   },
  //   account,
  // } = useDojo();

  // const [clipboardStatus, setClipboardStatus] = useState({
  //   message: "",
  //   isError: false,
  // });

  // // entity id we are syncing
  // const entityId = getEntityIdFromKeys([
  //   BigInt(account?.account.address),
  // ]) as Entity;

  // // get current component values
  // const moves = useComponentValue(Moves, entityId);

  // console.log(moves);

  // const handleRestoreBurners = async () => {
  //   try {
  //     await account?.applyFromClipboard();
  //     setClipboardStatus({
  //       message: "Burners restored successfully!",
  //       isError: false,
  //     });
  //   } catch (error) {
  //     setClipboardStatus({
  //       message: `Failed to restore burners from clipboard`,
  //       isError: true,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   if (clipboardStatus.message) {
  //     const timer = setTimeout(() => {
  //       setClipboardStatus({ message: "", isError: false });
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [clipboardStatus.message]);

  function Icon({ id, open }: { id: number, open: number }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  const [mute, setMute] = useState(true);

  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const toggleMute = () => {
    setMute(!mute);
  }

  return (
    <main className="min-h-screen w-full bg-[#0F1116] flex flex-col items-center pb-5 overflow-y-scroll">
      <nav className="relative w-full h-40">
        <div className="bg-[url('./assets/left-entry.png')] h-40 w-[45%] bg-cover bg-center bg-no-repeat absolute top-0 left-0">
          <div className="relative flex flex-col items-center justify-center w-full h-full -mt-5">
            <div className="flex flex-row space-x-2.5 items-center justify-center mr-20 3xl:mr-36 4xl:mr-20">
              <div>
                <h3 className="text-3xl text-right text-white">Eniola</h3>
                <h4 className="text-base text-[#F58229] text-right">Level 6</h4>
              </div>
              <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                <img src={eniola} width={65} height={65} alt="Eniola" className="rounded-full" />
                <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
                  <div className="h-4 w-4 bg-[#00FF57] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-48 2xl:right-64">
              <div className="h-20 w-20 bg-[url('./assets/score-badge.png')] bg-contain bg-center bg-no-repeat bg-transparent flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-semibold text-white">8</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url('./assets/right-entry.png')] h-40 w-[45%] bg-cover bg-center absolute top-0 right-0 bg-no-repeat">
          <div className="relative flex flex-col items-center justify-center w-full h-full -mt-5">
            <div className="flex flex-row-reverse space-x-2.5 items-center justify-center ml-14 3xl:ml-28 4xl:ml-14">
              <div className='ml-2.5'>
                <h3 className="text-3xl text-left text-white">Israel</h3>
                <h4 className="text-base text-[#F58229] text-left">Level 6</h4>
              </div>
              <div className="p-1 rounded-full bg-gradient-to-r bg-[#15181E] from-[#2E323A] via-[#4B505C] to-[#1D2026] relative">
                <img src={israel} width={65} height={65} alt="Eniola" className="rounded-full" />
                <div className="absolute bottom-0 right-0 h-6 w-6 bg-[#15171E] rounded-full flex flex-col items-center justify-center">
                  <div className="h-4 w-4 bg-[#00FF57] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-48 2xl:left-64">
              <div className="h-20 w-20 bg-[url('./assets/score-badge.png')] bg-contain bg-center bg-no-repeat bg-transparent flex flex-col items-center justify-center text-white">
                <h3 className="text-3xl font-semibold text-white">8</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-center w-full h-40 bg-transparent">
          <img src={logo} width={150} height={150} alt="Logo" className="-mt-10" />
        </div>
      </nav>
      <div className='w-full h-[calc(100vh-200px)] max-w-7xl flex flex-row items-start space-x-10'>
        <div className='flex flex-col justify-center space-y-5 w-fit'>
          <div className='space-y-1'>
            <Button className='p-0 bg-transparent rounded-full'>
              <img src={restart} width={75} height={75} alt="restart" className='rounded-full' />
            </Button>
            <p className='text-lg text-[#656C7D] font-medium text-center'>Restart</p>
          </div>
          <div className='space-y-1'>
            <Button className='p-0 bg-transparent rounded-full'>
              <img src={end} width={75} height={75} alt="end game" className='rounded-full' />
            </Button>
            <p className='text-lg text-[#656C7D] font-medium text-center'>End</p>
          </div>
        </div>
        <div className='flex-1 w-full h-full'>
          <div className='flex flex-row items-center justify-end w-full -mt-10'>
            <div className="w-32 h-32 bg-[url('assets/lobby-bg.png')] bg-contain bg-no-repeat bg-center flex flex-col items-center justify-center">
              <Button ripple={false} className="w-24 h-24 bg-transparent bg-[url('assets/lobby.png')] bg-contain bg-no-repeat bg-center overflow-hidden" />
            </div>
          </div>
          <div className='w-full h-[400px] border-2 border-[#32363D] rounded-l-full rounded-r-full'></div>
          <div className='flex flex-row items-center justify-between mt-10'>
            <div className="flex flex-row space-x-1.5 items-center justify-center ml-14 3xl:ml-28 4xl:ml-14">
              <Button className='p-0 bg-transparent rounded-full' onClick={toggleMute}>
                <img src={mute ? muteImage : unmuteImage} width={65} height={65} alt="restart" className='rounded-full' />
              </Button>
              <div className='ml-2.5'>
                <h4 className="text-lg text-left text-[#9398A2]">Enya</h4>
                <h4 className="text-sm text-[#656C7D] text-left">Storms in Africa</h4>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-5'>
              <Button className='p-0 rounded-full'>
                <img src={leaderboard} width={65} height={65} alt="end game" className='rounded-full' />
              </Button>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='w-96'>
                <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at. We&apos;re constantly
                  growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                  ourselves and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;
