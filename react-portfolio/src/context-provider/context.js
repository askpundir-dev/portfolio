import { createContext,useContext } from "react";

export const DarkModeContext = createContext(null);

export const useDaRkModeContext = () => {

  return useContext(DarkModeContext);
}