import App from "./App.tsx";
import "./index.css";
import { setup, SetupStatus } from "./dojo/generated/setup.ts";
import { DojoProvider } from "./dojo/DojoContext.tsx";
import { dojoConfig } from "../dojoConfig.ts";
import { ApolloProvider } from "@apollo/client";
import { useEffect, useState, useMemo } from "react";
import apollo_client from "./lib/apollo-client.ts";
import { Toaster } from "./components/ui/toaster.tsx";
import logo from "@/assets/logo-icon.png";

const SETUP_STATUS_MESSAGES = {
  toriiClient: "Establishing connection to game network",
  contractComponents: "Preparing game assets and rules",
  syncEntities: "Syncing latest game state",
  dojoProvider: "Setting up secure connection",
  worldSetup: "Initializing game environment",
  burnerManager: "Creating your game wallet",
} as const;

export default function AppWrapper() {
  const [setupResult, setSetupResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [setupStatus, setSetupStatus] = useState<Partial<SetupStatus>>({});

  const currentLoadingMessage = useMemo(() => {
    const currentStep = Object.entries(setupStatus).find(
      ([, value]) => value,
    )?.[0];
    return currentStep
      ? SETUP_STATUS_MESSAGES[currentStep as keyof typeof SETUP_STATUS_MESSAGES]
      : "Loading...";
  }, [setupStatus]);

  useEffect(() => {
    setup(dojoConfig, setSetupStatus)
      .then((res) => setSetupResult(res as never))
      .catch((errorConnectingDojo) => {
        console.error("Connection error", errorConnectingDojo);
        setError(new Error(errorConnectingDojo));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || (!error && !setupResult))
    return (
      <div className="grid w-full h-screen place-items-center bg-[#0F1116] bg-[url('./assets/bg.png')] bg-cover bg-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col items-center justify-center space-y-1.5 w-[400px] h-[275px] rounded-lg bg-[#4920003D] backdrop-blur-md">
            <img src={logo} width={126} height={126} alt="logo" className="animate-spin-slow" />
            <p className="text-white font-semibold">{currentLoadingMessage}</p>
          </div>
        </div>
      </div>
    );

  if (error) throw error;

  return (
    <ApolloProvider client={apollo_client}>
      <DojoProvider value={setupResult as never}>
          <App />
        <Toaster />
      </DojoProvider>
    </ApolloProvider>
  );
}
