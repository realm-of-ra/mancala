import { useAccount, useConnect, useReadContract } from "@starknet-react/core";
import NotEnough from "@/components/not-enough";
import { useEffect, useState } from "react";
import { nft_abi } from "@/abi"

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
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const nft_contract_address = "0x00c489b121fdc7bf7aa71167d603de7d41184576b6ed1bae87dd7b448c4ac8cf";
  const { data: nft_data, refetch } = useReadContract({
    abi: nft_abi,
    functionName: "balance_of",
    address: nft_contract_address,
    args: [address || ""]
  });
  const isEnough = Math.round(Number(nft_data) || 0) >= 1;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      connect({ connector: connectors[0] });
    }
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [connect, connectors, isConnected]);
  return (
    <div>
      {isConnected && !isEnough && <NotEnough isEnough={isEnough} refetch={refetch} />}
      {isSmallScreen && <SmallScreenWarning />}
      {children}
    </div>
  );
}
