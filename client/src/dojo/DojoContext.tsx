import { ReactNode, createContext, useContext, useMemo } from "react";
import { Account } from "starknet";
import { SetupResult } from "./generated/setup";

interface DojoContextType extends SetupResult {
  masterAccount: Account;
}

export const DojoContext = createContext<DojoContextType | null>(null);

export const DojoProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: SetupResult;
}) => {
  const currentValue = useContext(DojoContext);
  if (currentValue) throw new Error("DojoProvider can only be used once");

  const {
    config: { masterAddress, masterPrivateKey },
    dojoProvider,
    client,
  } = value;

  const masterAccount = useMemo(
    () =>
      new Account(dojoProvider.provider, masterAddress, masterPrivateKey, "1"),
    [masterAddress, masterPrivateKey, dojoProvider.provider],
  );

  return (
    <DojoContext.Provider
      value={{
        ...value,
        masterAccount,
        client,
      }}
    >
      {children}
    </DojoContext.Provider>
  );
};
