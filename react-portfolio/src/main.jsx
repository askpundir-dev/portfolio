import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppProvider from "./context-provider/ContextProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);

// Remove the injected inline style for instant theme after React mounts
window.addEventListener("DOMContentLoaded", () => {
  const styles = document.head.querySelectorAll("style");
  styles.forEach((style) => {
    if (style.innerHTML.includes("body { background-color")) {
      style.parentNode.removeChild(style);
    }
  });
});
