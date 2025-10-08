import { useState, useEffect } from "react";
import { DarkModeContext } from "./context";

export default function AppProvider({ children }) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}

function DarkModeProvider({ children }) {

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
