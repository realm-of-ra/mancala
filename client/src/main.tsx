import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorBoundary from "./components/boundaries/error-boundary.tsx";
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
