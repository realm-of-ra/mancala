import ControllerConnector from "@cartridge/connector/controller";
import { mainnet, sepolia } from "@starknet-react/chains";
import {
  Connector,
  StarknetConfig,
  jsonRpcProvider,
  useAccount,
  useBalance,
  useConnect,
  voyager,
} from "@starknet-react/core";
import { useCallback, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Gameplay from "./pages/games/Gameplay";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Tutorial from "./pages/Tutorial";
import CONFIG, { IS_MAINNET } from "./lib/config";
import { constants } from "starknet";
import Boards from "./pages/Boards";
import NotEnough from "./components/not-enough";
import Checks from "./Checks";

const options = {
  theme: "realm-of-ra",
  policies: CONFIG.POLICIES,
  namespace: "mancala_salt",
  slot: "mancala-alpha",
  rpc: CONFIG.SLOT_RPC_URL,
  chains: [
    { rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia" },
    { rpcUrl: "https://api.cartridge.gg/x/starknet/mainnet" },
  ],
  defaultChainId: constants.StarknetChainId.SN_SEPOLIA,
};

export default function App() {

  const connectors = [new ControllerConnector(options as never) as never as Connector];

  const rpc = useCallback(() => {
    return { nodeUrl: CONFIG.SLOT_RPC_URL };
  }, []);

  return (
    <StarknetConfig
      chains={[IS_MAINNET ? mainnet : sepolia]}
      provider={jsonRpcProvider({ rpc })}
      connectors={connectors}
      explorer={voyager}
      autoConnect={true}
    >
      <Checks>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/games/:gameId" element={<Gameplay />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/boards" element={<Boards />} />
          </Routes>
        </Router>
      </Checks>
    </StarknetConfig>
  );
}
