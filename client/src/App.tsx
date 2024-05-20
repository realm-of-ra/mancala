import { BrowserRouter, Routes, Route } from "react-router-dom"
import Leaderboard from "./pages/Leaderboard"
import { Provider as JotaiProvider } from "jotai";
import { InjectedConnector } from "starknetkit/injected";
import { ArgentMobileConnector } from "starknetkit/argentMobile";
import { WebWalletConnector } from "starknetkit/webwallet";
import { mainnet } from "@starknet-react/chains";
import { StarknetConfig, publicProvider } from "@starknet-react/core";
import Gameplay from "./pages/Gameplay";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";

export default function App() {
  const chains = [
    mainnet
  ]
  const connectors = [
    new InjectedConnector({ options: { id: "braavos", name: "Braavos" } }),
    new InjectedConnector({ options: { id: "argentX", name: "Argent X" } }),
    new WebWalletConnector({ url: "https://web.argent.xyz" }),
    new ArgentMobileConnector(),
  ]
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
            <Route path="/gameplay" element={<Gameplay />} />
          </Routes>
        </BrowserRouter>
      </JotaiProvider>
    </StarknetConfig>
  )
}