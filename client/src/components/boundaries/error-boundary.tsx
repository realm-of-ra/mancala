
import { Button } from '@material-tailwind/react';
import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: VoidFunction }) {
  return (
    <div role="alert" className="w-full h-screen p-0 m-0 grid place-items-center bg-primary text-primary-foreground">
      <div className='flex flex-col items-center gap-2'>
        <h2>Ouch, an error occurred, we are working on it;</h2>
        <div className='w-3/5 h-fit mb-3'>{error.message}</div>
        <Button onClick={resetErrorBoundary}>Try again</Button>
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

