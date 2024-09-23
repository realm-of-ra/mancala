import ControllerConnector from "@cartridge/connector";
import { useAccount, useConnect } from "@starknet-react/core";
import { useEffect, useState } from "react";

export default function useControllerData() {
  const { connector } = useConnect();
  const { account } = useAccount();
  const [username, setUsername] = useState<string>();
  const [icon, setIcon] = useState<string>();
  const contollerConnector = connector as unknown as ControllerConnector;

  useEffect(() => {
    if (account && connector?.id === "controller") {
      contollerConnector.username()?.then(setUsername);
      setIcon(contollerConnector.icon.dark);
    } else {
      setUsername(undefined);
      setIcon(undefined);
    }
  }, [account, connector]);

  if (username !== undefined && icon !== undefined) {
    return { username, icon , controllerConnector: contollerConnector };
  } else if (account) {
    return { username: formatAddress(account.address), icon: undefined, controllerConnector: undefined };
  }
}

function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
