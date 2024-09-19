import ControllerConnector from "@cartridge/connector";
import { useAccount, useConnect } from "@starknet-react/core";
import { useEffect, useState } from "react";

export default function useControllerUsername() {
  const { connector } = useConnect();
  const { account } = useAccount();
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    if (account && connector?.id === "controller") {
      const contollerConnector = connector as unknown as ControllerConnector;
      contollerConnector.username()?.then(setUsername);
    } else {
      setUsername(undefined);
    }
  }, [account, connector]);

  if (username !== undefined) {
    return username;
  } else if (account) {
    return formatAddress(account.address);
  }
}

function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
