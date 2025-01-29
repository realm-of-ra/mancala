import ControllerConnector from "@cartridge/connector/controller";
import { sepolia } from "@starknet-react/chains";
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
import { POLICIES, SLOT_RPC_URL } from "./lib/constants";
import SmallScreenWarning from "@/components/stateless/small-screen.tsx";
import {MancalaOptions} from "@/lib/settings.ts";


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

  const connectors = [new ControllerConnector(MancalaOptions)];

  const rpc = useCallback(() => {
    return { nodeUrl: SLOT_RPC_URL };
  }, []);

  return (
    <StarknetConfig
      chains={[sepolia]}
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
        </Routes>
      </Router>
      {isSmallScreen && <SmallScreenWarning />}
    </StarknetConfig>
  );
}
