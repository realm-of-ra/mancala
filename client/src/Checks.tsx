import { useAccount, useBalance, useConnect } from "@starknet-react/core";
import NotEnough from "./components/not-enough";
import { useEffect, useState } from "react";


const SmallScreenWarning = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">
          This game is not optimized for this device screen!
        </h1>
      </div>
    </div>
);

export default function Checks({ children }: { children: React.ReactNode }) {
    const { isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { data } = useBalance({
      address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"
    })
    const isEnough = Math.round(Number(data?.formatted)) >= 10;
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    useEffect(() => {
        if (!isConnected) {
            connect({ connector: connectors[0] })
        }
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1280);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return(
        <div>
            {isConnected && !isEnough && <NotEnough isEnough={isEnough} />}
            {isSmallScreen && <SmallScreenWarning />}
            {children}
        </div>
    )
}