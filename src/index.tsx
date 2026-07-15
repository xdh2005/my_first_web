import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import App from "./app";
import "./index.css";

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-bold text-red-600">页面出错了</h1>
      <pre className="max-w-lg rounded-lg bg-gray-100 p-4 text-sm text-gray-700">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary/90"
      >
        重试
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/my_first_web">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
