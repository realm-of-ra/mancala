import App from "./App.tsx";
import "./index.css";
import { setup, SetupStatus } from "./dojo/generated/setup.ts";
import { DojoProvider } from "./dojo/DojoContext.tsx";
import { dojoConfig } from "../dojoConfig.ts";
import { ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";
import CreateLoaderSVG from "./components/ui/svgs/create-loader.tsx";
import apollo_client from "./lib/apollo-client.ts";
import { Toaster } from "./components/ui/toaster.tsx";

export default function AppWrapper() {
  const [setupResult, setSetupResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [setupStatus, setSetupStatus] = useState<Partial<SetupStatus>>({});

  useEffect(() => {
    setup(dojoConfig, setSetupStatus)
      .then((res) => setSetupResult(res))
      .catch((errorConnectingDojo) => {
        console.error("Connection error", errorConnectingDojo);
        setError(new Error(errorConnectingDojo));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || (!error && !setupResult))
    return (
      <div className="grid w-full h-screen place-items-center bg-primary">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-row items-center justify-center space-x-1">
            <CreateLoaderSVG />
            <p className="text-[#FCE3AA] font-semibold">
              {Object.entries(setupStatus).find(([_, value]) => value)?.[0]?.replace(/([A-Z])/g, ' $1').toLowerCase() || 'Loading...'}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-64">
            {Object.entries(setupStatus).map(([key, loading]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${loading ? 'bg-[#F58229] animate-pulse' : 'bg-green-500'}`} />
                <span className="text-sm text-[#FCE3AA]">
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  if (error) throw error;

  return (
    <ApolloProvider client={apollo_client}>
      <DojoProvider value={setupResult}>
        <App />
        <Toaster />
      </DojoProvider>
    </ApolloProvider>
  );
}
