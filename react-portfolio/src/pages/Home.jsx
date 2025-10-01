import { useEffect, useState } from "react";
import { useDaRkModeContext } from "../context-provider/context";
import Header from "../components/Header";
import HeroSection from "./HeroSection";
import ProjectSection from './ProjectSection'
import { initMatter } from "../animation/matter";
import "./Home.css";


//Home.jsx
export default function Home() {
  const { isDarkMode, setIsDarkMode } = useDaRkModeContext();
  const [showPopup, setShowPopup] = useState(false);
  //this is to close popup on scroll
  // useEffect(() => {
  //   if (showPopup) document.body.onscroll = () => setShowPopup(false);
  // }, [showPopup]);

  useEffect(() => {
    initMatter();
  }, []);
  const mailLink = import.meta.env.VITE_GMAIL_URL;
  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        mailLink={mailLink}
      />

      <HeroSection {...{ showPopup, setShowPopup, isDarkMode, mailLink }} />
     <hr className="text-gray-700" />
      <ProjectSection isDarkMode={isDarkMode} />
    </>
  );
}
