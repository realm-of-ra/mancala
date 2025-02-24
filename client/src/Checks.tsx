import { useAccount, useConnect, useProvider } from "@starknet-react/core";
import NotEnough from "@/components/not-enough";
import { useEffect, useState } from "react";
import { AccountInterface, Contract } from "starknet";

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
  const { account, address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { provider } = useProvider();
  const [amountOfTokens, setAmountOfTokens] = useState<number>();
  useEffect(() => {
    const fetchData = async () => {
      if (!isConnected) {
        connect({ connector: connectors[0] });
      }
      const contract_address =
        "0x07f413bd3ce6d349dd9efcd208894b9cd7b646979834ed771ffd62d160e25835";
      const { abi } = await provider.getClassAt(contract_address);
      const contract = new Contract(abi, contract_address, provider);
      contract.connect(account as AccountInterface);
      const contract_call = contract.populate("balance_of", [
        address?.toString() || "",
      ]);
      const data = await contract.balance_of(contract_call.calldata);
      setAmountOfTokens(Number(data));
    };
    fetchData();
  }, [account, address, connect, connectors, isConnected, provider]);
  const isEnough = Math.round(amountOfTokens || 0) >= 1;
  console.log({
    amountOfTokens,
    isEnough,
  });
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
  }, []);
  return (
    <div>
      {isConnected && !isEnough && <NotEnough isEnough={isEnough} />}
      {isSmallScreen && <SmallScreenWarning />}
      {children}
    </div>
  );
}
