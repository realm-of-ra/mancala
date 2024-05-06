// import { useComponentValue } from "@dojoengine/react";
// import { Entity } from "@dojoengine/recs";
// import { useEffect, useState } from "react";
// import { getEntityIdFromKeys } from "@dojoengine/utils";
// import { useDojo } from "./dojo/useDojo";

import eniola from './assets/eniola.png';
import israel from "./assets/israel.png";
import logo from "./assets/logo.png";

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

  return (
    <main className="min-h-screen w-full bg-[#0F1116]">
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
              <div>
                <h3 className="text-3xl text-right text-white">Israel</h3>
                <h4 className="text-base text-[#F58229] text-right">Level 6</h4>
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
      <div></div>
    </main>
  )
}

export default App;
