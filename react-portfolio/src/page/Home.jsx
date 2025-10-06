import { useState } from "react";
import { useDaRkModeContext } from "../context-provider/context";
import Header from "../components/Header";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import Contact from "./Contact";
import Footer from "../components/Footer";
import "./Home.css";

//Home.jsx
export default function Home() {
  const { isDarkMode, setIsDarkMode } = useDaRkModeContext();
  const [showPopup, setShowPopup] = useState(false);

  //this is to close popup on scroll
  // useEffect(() => {
  //   if (showPopup) document.body.onscroll = () => setShowPopup(false);
  // }, [showPopup]);

  const mailLink = import.meta.env.VITE_GMAIL_URL;
  const linkedinLink = "https://linkedin.com/in/abhi-dev-pundir";
  const githubLink = "https://github.com/askpundir-dev";
  return (
    <>
      <div className="h-[100dvh]">
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          mailLink={mailLink}
        />

        <HeroSection
          {...{
            showPopup,
            setShowPopup,
            isDarkMode,
            mailLink,
            linkedinLink,
            githubLink,
          }}
        />
      </div>

      <hr className={`${isDarkMode ? "text-gray-700" : "text-gray-400"}`} />
      <ProjectSection isDarkMode={isDarkMode} />
      <hr
        className={`my-5 ${isDarkMode ? "text-gray-700" : "text-gray-400"}`}
      />
      <Contact isDarkMode={isDarkMode} />
      <hr
        className={`my-5 ${isDarkMode ? "text-gray-700" : "text-gray-400"}`}
      />
      <Footer
        mailLink={mailLink}
        linkedinLink={linkedinLink}
        githubLink={githubLink}
        isDarkMode={isDarkMode}
      />
    </>
  );
}
