import { Button } from "@material-tailwind/react";
import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import logo from "../../assets/logo.png";

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: VoidFunction;
}) {
  return (
    <div
      role="alert"
      className="grid w-full h-screen place-items-center bg-[#0F1116] bg-[url('./assets/bg.png')] bg-cover bg-center"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col items-center justify-center space-y-1.5 w-[400px] h-[275px] rounded-lg bg-[#4920003D] backdrop-blur-md">
          <img src={logo} width={126} height={126} alt="logo" />
          <h2 className="text-white font-semibold">Ouch, an error occurred</h2>
          <div className="text-white/80 text-center px-4">{error.message}</div>
          <Button 
            onClick={resetErrorBoundary}
            className="bg-[#F58229] hover:bg-[#F58229] mt-4"
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset any state that is causing the error
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
