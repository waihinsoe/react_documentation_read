import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./context/AppContext.tsx";
import { TestProvider } from "./context/TestContext.tsx";

createRoot(document.getElementById("root")!).render(
  <TestProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </TestProvider>
);
