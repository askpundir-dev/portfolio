import NameLogo from "../assets/images/name-logo-white.svg?react";
import DarkModeIcon from "../assets/icons/moon.svg?react";
import LightModeIcon from "../assets/icons/sun.svg?react";
// import PhoneIcon from "../assets/icons/phone.svg?react";
// import WhatsAppIcon from "../assets/icons/whatsapp.svg?react";
import EmailLogo from "../assets/icons/email.svg?react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ isDarkMode, setIsDarkMode,mailLink}) {
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const hoverStyle = isDarkMode ? "hover:text-white" : "hover:border-white";
  return (
    <header
      className={`flex h-[10%] justify-around items-center  py-3 gap-x-20 pointer-events-none relative z-30 
        ${isDarkMode ? "text-red-500" : "text-white"} 
      ${isDarkMode ? "" : "bg-red-800"}`}
    >
      <a href="/" className="pointer-events-auto" title="refresh page">
        <NameLogo
          className={`icon nameLogo ${
            isDarkMode ? "hover:text-white" : "hover:border-white"
          }`}
        />
      </a>
      <div className="flex gap-3 pointer-events-auto">
        {!isDarkMode && (
          <button title="Toggle Dark Mode">
            <DarkModeIcon
              className={`icon iconSize ${hoverStyle}`}
              onClick={toggleDarkMode}
            />
          </button>
        )}
        {isDarkMode && (
          <button title="Toggle Light Mode">
            <LightModeIcon
              className="icon iconSize hover:text-white"
              onClick={toggleDarkMode}
              title="Toggle Light Mode"
            />
          </button>
        )}

        <a href={mailLink} title="mail me">
          <EmailLogo className={`icon iconSize ${hoverStyle} `} />
        </a>
      </div>
    </header>
  );
}
