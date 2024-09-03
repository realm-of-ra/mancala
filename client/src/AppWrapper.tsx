import App from "./App.tsx";
import "./index.css";
import { setup } from "./dojo/generated/setup.ts";
import { DojoProvider } from "./dojo/DojoContext.tsx";
import { dojoConfig } from "../dojoConfig.ts";
import { ApolloProvider } from '@apollo/client';
import { useEffect, useState } from "react";
import CreateLoaderSVG from "./components/ui/svgs/create-loader.tsx";
import apollo_client from "./lib/apollo-client.ts";
import { Toaster } from "./components/ui/toaster.tsx";

export default function AppWrapper() {
  const [setupResult, setSetupResult] = useState<any>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setup(dojoConfig)
      .then(res => setSetupResult(res))
      .catch(errorConnectingDojo => {
        console.error("Connection error", errorConnectingDojo)
        setError(new Error(errorConnectingDojo))
        // throw errorConnectingDojo
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading || (!error && !setupResult)) return (
    <div className="grid w-full h-screen place-items-center bg-primary">
      <div
        className="flex flex-row items-center justify-center space-x-1">
        <CreateLoaderSVG />
        <p className="text-[#FCE3AA] font-semibold">Loading...</p>
      </div>
    </div>
  )

  if (error) throw error;

  return (
    <ApolloProvider client={apollo_client}>
      <DojoProvider value={setupResult}>
        <App />
        <Toaster />
      </DojoProvider>
    </ApolloProvider>
  )
}

