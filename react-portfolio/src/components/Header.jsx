import NameLogo from "../assets/images/name-logo-white.svg?react";
import DarkModeIcon from "../assets/icons/moon.svg?react";
import LightModeIcon from "../assets/icons/sun.svg?react";
// import PhoneIcon from "../assets/icons/phone.svg?react";
// import WhatsAppIcon from "../assets/icons/whatsapp.svg?react";
import { useDaRkModeContext } from "../context-provider/context";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const { isDarkMode, setIsDarkMode } = useDaRkModeContext();

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <header
      className={`flex justify-around items-center  py-3 gap-x-20  
        ${isDarkMode ? "text-red-500" : "text-white"} 
      ${isDarkMode ? "" : "bg-red-800"}`}
    >
      <Link to="/">
        <NameLogo className="nameLogo" />
      </Link>
      <div className="flex gap-3">
        {!isDarkMode && (
          <DarkModeIcon className="icon" onClick={toggleDarkMode} />
        )}
        {isDarkMode && (
          <LightModeIcon className="icon" onClick={toggleDarkMode} />
        )}
        {/* <WhatsAppIcon className="icon" />
        <PhoneIcon className="icon" /> */}
      </div>
    </header>
  );
}
