import ControllerConnector from "@cartridge/connector/controller";
import { ControllerOptions } from "@cartridge/controller";
import { Chain, sepolia } from "@starknet-react/chains";
import {
  Connector,
  StarknetConfig,
  jsonRpcProvider,
} from "@starknet-react/core";
import { Provider as JotaiProvider } from "jotai";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Gameplay from "./pages/games/Gameplay";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Lobby from "./pages/Lobby";
import { POLICIES, SLOT_RPC_URL } from "./lib/constants";
import Profile from "./pages/Profile";

const options: ControllerOptions = {
  rpc: SLOT_RPC_URL,
  theme: "realm-of-ra",
  policies: POLICIES,
};

function rpc(_chain: Chain) {
  return {
    nodeUrl: SLOT_RPC_URL,
  };
}

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

  return (
    <StarknetConfig
      autoConnect={true}
      chains={[sepolia]}
      provider={jsonRpcProvider({ rpc })}
      connectors={connectors}
    >
      <JotaiProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/games/:gameId" element={<Gameplay />} />
          </Routes>
        </Router>
      </JotaiProvider>
      {isSmallScreen && <SmallScreenWarning />}
    </StarknetConfig>
  );
}
