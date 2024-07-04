import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { setup } from "./dojo/generated/setup.ts";
import { DojoProvider } from "./dojo/DojoContext.tsx";
import { dojoConfig } from "../dojoConfig.ts";
import { ApolloProvider } from '@apollo/client';
import ErrorBoundary from "./components/boundaries/error-boundary.tsx";
import appoloClient from "./lib/appolo-client.ts";
import AppWrapper from "./AppWrapper.tsx";

async function init() {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("React root not found");
  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  const Loading = () => <div className="text-4xl text-black">Loading...</div>;

  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <AppWrapper />
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

init();
