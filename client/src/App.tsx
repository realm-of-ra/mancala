import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import { Provider as JotaiProvider } from "jotai";
import { InjectedConnector } from "starknetkit/injected";
import { ArgentMobileConnector } from "starknetkit/argentMobile";
import { WebWalletConnector } from "starknetkit/webwallet";
import { mainnet } from "@starknet-react/chains";
import { StarknetConfig, publicProvider } from "@starknet-react/core";
import Gameplay from "./pages/games/Gameplay";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import { useEffect, useState } from "react";

export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const chains = [mainnet];
  const connectors = [
    new InjectedConnector({ options: { id: "braavos", name: "Braavos" } }),
    new InjectedConnector({ options: { id: "argentX", name: "Argent X" } }),
    new WebWalletConnector({ url: "https://web.argent.xyz" }),
    new ArgentMobileConnector(),
  ];

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

  return (
    <StarknetConfig
      chains={chains}
      provider={publicProvider()}
      connectors={connectors}
    >
      <JotaiProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/lobby" element={<Lobby />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/games/:gameId" element={<Gameplay />} />
          </Routes>
        </BrowserRouter>
      </JotaiProvider>
      {isSmallScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-75 backdrop-blur-sm">
          <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">
              This game is not optimized for this device screen!
            </h1>
          </div>
        </div>
      )}
    </StarknetConfig>
  );
}
