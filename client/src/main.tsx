import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { setup } from "./dojo/generated/setup.ts";
import { DojoProvider } from "./dojo/DojoContext.tsx";
import { dojoConfig } from "../dojoConfig.ts";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

async function init() {
    const rootElement = document.getElementById("root");
    if (!rootElement) throw new Error("React root not found");
    const root = ReactDOM.createRoot(rootElement as HTMLElement);

    const setupResult = await setup(dojoConfig);

    const client = new ApolloClient({
        uri: 'https://api.cartridge.gg/x/mancala/torii/graphql',
        cache: new InMemoryCache(),
    })

    root.render(
        <React.StrictMode>
            <ApolloProvider client={client}>
                <DojoProvider value={setupResult}>
                    <App />
                </DojoProvider>
            </ApolloProvider>
        </React.StrictMode>
    );
}

init();
