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
import message from "./assets/messages.png";
import clsx from 'clsx';
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';

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
        stroke="#27292F"
        className={`${id === open ? "rotate-[360deg]" : "rotate-[180deg]"} h-5 w-5 transition-transform`}
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

  const animate = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const players = ["isreal", "eniola"]

  const chat = [
    {
      user: "isreal",
      avatar: israel,
      message: "I will take it easy on you Eniola, but show me what you've got.",
      date: "01:21pm"
    },
    {
      user: "eniola",
      avatar: eniola,
      message: "I will take it easy on you Eniola, but show me what you've got.",
      date: "01:21pm"
    },
    {
      user: "isreal",
      avatar: israel,
      message: "I will take it easy on you Eniola, but show me what you've got.",
      date: "01:21pm"
    },
    {
      user: "eniola",
      avatar: eniola,
      message: "I will take it easy on you Eniola, but show me what you've got.",
      date: "01:21pm"
    },
    {
      user: "isreal",
      avatar: israel,
      message: "I will take it easy on you Eniola, but show me what you've got.",
      date: "01:21pm"
    },
    {
      user: "eniola",
      avatar: eniola,
      message: "I will take it easy on you Eniola, but show me what you've got.",
      date: "01:21pm"
    },
    {
      user: "isreal",
      avatar: israel,
      message: "I will take it easy on you Eniola, but show me what you've got.",
      date: "01:21pm"
    },
    {
      user: "eniola",
      avatar: eniola,
      message: "I will take it easy on you Eniola, but show me what you've got.",
      date: "01:21pm"
    },
  ]

  const [selectedPotType, setSelectedPotType] = useState<{ pot: number, player: number }>();

  const player_1_animation = [
    {
      x: 132.5,
      y: -16
    },
    {
      x: 228.5,
      y: -16
    },
    {
      x: 373.5,
      y: -40
    },
    {
      x: 470.5,
      y: -40
    },
  ]

  const initialSeeds = [
    { pot: 1, seeds: 4 },
    { pot: 2, seeds: 4 },
    { pot: 3, seeds: 4 },
    { pot: 4, seeds: 4 },
    { pot: 5, seeds: 4 },
    { pot: 6, seeds: 4 },
    { pot: 7, seeds: 4 },
    { pot: 8, seeds: 4 },
    { pot: 9, seeds: 4 },
    { pot: 10, seeds: 4 },
    { pot: 11, seeds: 4 },
    { pot: 12, seeds: 4 },
    { pot: 13, seeds: 4 },
    { pot: 14, seeds: 4 },
  ]

  const [seeds, setSeeds] = useState(initialSeeds);

  const handlePotClick = (potIndex: number) => {

    setSeeds((prevSeeds) => {
      const updatedSeeds = [...prevSeeds];
      let remainingSeeds = updatedSeeds[potIndex].seeds;
      updatedSeeds[potIndex].seeds = 0;
      for (let i = potIndex + 1; i < updatedSeeds.length && remainingSeeds > 0; i++) {
        updatedSeeds[i].seeds++;
        remainingSeeds--;
      }
      return updatedSeeds;
    });
    console.log(seeds)
  };

  return (
    <main className="min-h-screen w-full bg-[#0F1116] flex flex-col items-center overflow-y-scroll">
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
          {/* Game board */}
          <div className='w-full h-[400px] border-2 border-[#32363D] rounded-l-full rounded-r-full flex flex-col items-center justify-center bg-[#15181E]'>
            <div className='w-[97%] h-[370px] rounded-l-full rounded-r-full flex flex-row items-center justify-between space-x-5 relative'>
              <div className='w-56 h-[350px] border-2 border-[#32363D] rounded-l-[165px] rounded-r-3xl relative'>
                <div className='absolute inset-y-0 self-center left-0 bg-[#191C22] p-3.5 rounded-y-lg rounded-r-lg'>
                  <p className='text-white'>0</p>
                </div>
              </div>
              <div className='w-[75%] h-[350px] flex flex-col items-start justify-between space-y-2'>
                {/* Player 1 */}
                <div className='h-[175px] w-full flex flex-row justify-between items-center'>
                  <div className="flex flex-row justify-center space-x-5">
                    {
                      seeds.slice(0, 6).map((pot, index) => (
                        <div key={index} className='h-[170px] w-[15%] flex flex-col justify-between items-center'>
                          <div className='bg-[#191C22] px-5 rounded-lg w-fit'>
                            <p className='text-white'>{pot.seeds}</p>
                          </div>
                          <div className='flex flex-col items-center justify-center flex-1'>
                            <div className='w-[90px] h-[90px] border-2 border-[#32363D] rounded-full flex flex-col items-center justify-center hover:cursor-pointer'
                              onClick={() => handlePotClick(pot.pot - 1)}>
                              <div className='grid grid-cols-2 gap-1'>
                                {
                                  Array.from({ length: pot.seeds }, (_, seedIndex) => (
                                    <motion.div
                                      key={seedIndex}
                                      className='w-[20px] h-[20px] bg-white rounded-full'
                                      animate={selectedPotType?.player === 0 && selectedPotType.pot === pot.pot - 1 && player_1_animation[seedIndex]}
                                      transition={{ duration: 1 }}
                                    />
                                  ))
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                {/* Player 1 */}
                <div className='h-[175px] w-full flex flex-row justify-between items-center'>
                  <div className="flex flex-row justify-center space-x-5">
                    {
                      seeds.slice(7, 13).map((pot, index) => (
                        <div key={index} className='h-[170px] w-[15%] flex flex-col justify-between items-center'>
                          <div className='bg-[#191C22] px-5 rounded-lg w-fit'>
                            <p className='text-white'>{pot.seeds}</p>
                          </div>
                          <div className='flex flex-col items-center justify-center flex-1'>
                            <div className='w-[90px] h-[90px] border-2 border-[#32363D] rounded-full flex flex-col items-center justify-center hover:cursor-pointer'
                              onClick={() => handlePotClick(pot.pot - 1)}>
                              <div className='grid grid-cols-2 gap-1'>
                                {
                                  Array.from({ length: pot.seeds }, (_, seedIndex) => (
                                    <motion.div
                                      key={seedIndex}
                                      className='w-[20px] h-[20px] bg-white rounded-full'
                                      animate={selectedPotType?.player === 0 && selectedPotType.pot === pot.pot - 1 && player_1_animation[seedIndex]}
                                      transition={{ duration: 1 }}
                                    />
                                  ))
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className='w-56 h-[350px] border-2 border-[#32363D] rounded-r-[165px] relative rounded-l-3xl'>
                {/* Player 2 pot */}
                <div className='flex flex-col justify-center h-full px-2.5'>
                  <div className='flex flex-col space-y-1.5'>
                    {
                      Array.from({ length: seeds[7].seeds }, (_, seedIndex) => (
                        <motion.div
                          key={seedIndex}
                          className='w-[20px] h-[20px] bg-white rounded-full'
                          transition={{ duration: 1 }}
                        />
                      ))
                    }
                  </div>
                </div>
                <div className='absolute inset-y-0 self-center right-0 bg-[#191C22] p-3.5 rounded-y-lg rounded-l-lg'>
                  <p className='text-white'>0</p>
                </div>
              </div>
            </div>
          </div>
          {/* End of game board */}
          <div div className='flex flex-row items-start justify-between mt-10' >
            <div className="flex flex-row space-x-1.5 items-center justify-center ml-14 3xl:ml-28 4xl:ml-14">
              <Button className='p-0 bg-transparent rounded-full' onClick={toggleMute}>
                <img src={mute ? muteImage : unmuteImage} width={65} height={65} alt="restart" className='rounded-full' />
              </Button>
              <div className='ml-2.5'>
                <h4 className="text-lg text-left text-[#9398A2]">Enya</h4>
                <h4 className="text-sm text-[#656C7D] text-left">Storms in Africa</h4>
              </div>
            </div>
            <div className='flex flex-row items-start justify-center pb-5 space-x-5'>
              <Button className='p-0 rounded-full'>
                <img src={leaderboard} width={65} height={65} alt="end game" className='rounded-full' />
              </Button>
              {/* chat */}
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className={clsx(open && '-mt-64', 'w-96')} animate={animate}>
                <AccordionHeader onClick={() => handleOpen(1)} className={clsx(open ? "border-t-0" : "border-t rounded-b-xl", 'border border-[#27292F] px-3.5 rounded-t-xl backdrop-blur-sm')}>
                  <div className="flex flex-row space-x-2.5 items-center">
                    <img src={message} width={25} height={25} alt="end game" className='rounded-full' />
                    <p className='text-xl font-medium text-[#AAAEB7]'>Message <span className='text-white'>(0)</span></p>
                  </div>
                </AccordionHeader>
                <AccordionBody className="border border-[#27292F] pt-1.5 px-3.5 rounded-b-xl h-72 bg-transparent backdrop-blur-sm">
                  <div className='w-full h-full space-y-2.5'>
                    <div className='flex-1 overflow-y-scroll max-h-56 space-y-2.5 hide-scrollbar'>
                      {
                        chat.map((item, index) => (
                          <div key={index}>
                            <div className={clsx(players[0] === item.user ? "items-start" : "items-end", 'flex flex-col space-y-2.5 w-full')}>
                              <div className={clsx(players[0] === item.user ? 'items-start' : 'items-end', 'flex flex-row')}>
                                <div className='flex flex-row space-x-1.5 items-center w-full'>
                                  <img src={item.avatar} width={30} height={30} alt="end game" className='rounded-full' />
                                  <p className="text-lg font-medium text-right text-white">{item.user}</p>
                                </div>
                              </div>
                              <div className='w-[75%] p-2.5 bg-[#15181E] rounded-md'>
                                <p className='text-white'>{item.message}</p>
                                <p className='w-full text-xs text-white text-end'>{item.date}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    <div>
                      <div className='w-full h-10 border border-[#27292F] rounded-xl px-1 py-3.5 flex flex-row items-center'>
                        <input className='w-full h-8 px-1.5 text-white bg-transparent outline-none ring-0' placeholder='Send message' />
                        <Button className='p-0 w-12 h-8 bg-[#F58229] flex flex-col items-center justify-center'>
                          <PaperAirplaneIcon className='w-4 h-4 text-black transform -rotate-45' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
              {/* end of chat */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;
