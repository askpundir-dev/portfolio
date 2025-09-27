import { useState, useEffect } from "react";
import { DarkModeContext } from "./context";

export default function AppContextProvider({ children }) {
  return <DarkModeContextProvider>{children}</DarkModeContextProvider>;
}

function DarkModeContextProvider({ children }) {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("darkMode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);
console.log(isDarkMode);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
