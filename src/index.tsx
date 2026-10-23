import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import App from "./app";
import "./index.css";

function ErrorFallback({ error, resetErrorBoundary }: { error: unknown; resetErrorBoundary: () => void }) {
  const message = error instanceof Error ? error.message : String(error);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-bold text-red-600">页面出错了</h1>
      <pre className="max-w-lg rounded-lg bg-gray-100 p-4 text-sm text-gray-700">{message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary/90"
      >
        重试
      </button>
    </div>
  );
}

// 与 vite.config.ts 的 base 保持一致：部署在 /my_first_web/ 时路由也挂在该子路径下，
// 本地 dev（base = "/"）时 basename 为空串，等价于根路径。
const baseUrl = import.meta.env.BASE_URL.replace(/\/+$/, "");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={baseUrl || "/"}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
