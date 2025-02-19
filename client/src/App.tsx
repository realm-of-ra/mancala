import ControllerConnector from "@cartridge/connector/controller";
import { mainnet, sepolia } from "@starknet-react/chains";
import {
  Connector,
  StarknetConfig,
  jsonRpcProvider,
  voyager,
} from "@starknet-react/core";
import { useCallback, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Gameplay from "./pages/games/Gameplay";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Tutorial from "./pages/Tutorial";
import CONFIG, { IS_MAINNET } from "./lib/config";

const options = {
  theme: "realm-of-ra",
  policies: CONFIG.POLICIES,
  namespace: "mancala_salt",
  slot: "mancala-alpha",
  rpc: CONFIG.SLOT_RPC_URL,
};

const SmallScreenWarning = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-75 backdrop-blur-sm">
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">
        This game is not optimized for this device screen!
      </h1>
    </div>
  </div>
);

export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const connectors = [new ControllerConnector(options) as never as Connector];

  const rpc = useCallback(() => {
    return { nodeUrl: CONFIG.SLOT_RPC_URL };
  }, []);

  return (
    <StarknetConfig
      chains={[IS_MAINNET ? mainnet : sepolia]}
      provider={jsonRpcProvider({ rpc })}
      connectors={connectors}
      explorer={voyager}
      autoConnect
    >
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/games/:gameId" element={<Gameplay />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </Router>
      {isSmallScreen && <SmallScreenWarning />}
    </StarknetConfig>
  );
}
