import { useEffect } from "react";
import LinkedInLogo from "../assets/icons/linkedin.svg?react";
import GitHubLogo from "../assets/icons/github.svg?react";
import EmailLogo from "../assets/icons/email.svg?react";
// import NameLogo from "../assets/images/name-logo.svg?react";
import HeroSectionSvg from "./HeroSectionSvg";
import ScrollDownIcon from "../assets/icons/scroll-down.svg?react";
import Popup from "./Popup";
import { initMatter } from "../animation/matter";
import scrollTopImage from "../assets/icons/scroll-top.svg";
import "./HeroSection.css";
export default function HeroSection({
  showPopup,
  setShowPopup,
  isDarkMode,
  mailLink,
  githubLink,
  linkedinLink,
}) {
  useEffect(() => {
    // this runs the animation
    initMatter();
    const scrollBtn = document.querySelector(".scroll-back-to-top");
    const handleScroll = () => {
      if (window.scrollY > 200) {
        scrollBtn?.classList.add("scroll-top-active");
      } else {
        scrollBtn?.classList.remove("scroll-top-active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handelLatestWorks = () => {
    const target = document.querySelector(".project-heading");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    const scrollTopButton = document.querySelector(".scroll-back-to-top");
    if (scrollTopButton) scrollTopButton.classList.add("scroll-top-active");
  };

  const handelScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="hero-section h-[90%]">
      <div
        id="wrapper-canvas"
        className="w-full top-0 left-0 h-[100vh] absolute overflow-hidden z-0 pointer-events-auto hidden md:block"
      ></div>
      <div className="flex justify-between items-center h-[90%] px-7 py-2 pointer-events-none">
        <div>{""}</div>
        <div className="flex items-center w-[600px] h-auto relative">
          <div className="flex flex-col gap-4 absolute left-[-0.4rem] items-start font-mono md:sm:left-[-3rem] lg:left-[-8rem]">
            <h1 className="text-[1.8rem] lg:text-[2.1rem] font-semibold w-max">
              Abhishek Pundir
            </h1>
            <p className="job-title-para text-[1.05rem]">
              <i>Front-End Developer</i>
            </p>
            <button
              className="topSectionBtn pointer-events-auto"
              onClick={() => {
                setShowPopup(true);
              }}
            >
              About Me
            </button>
          </div>
          {/* <NameLogo style={{ width: "100%", height: "auto" }} /> */}
          <div className="name-logo-container w-full">
            <HeroSectionSvg />
          </div>
        </div>
        <ul
          className={`flex flex-col gap-5 z-10 pointer-events-auto ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <li title="linkedin">
            <a href={linkedinLink} target="_blank" rel="noreferrer noopener">
              <LinkedInLogo
                className={`rightSectionIcons ${
                  isDarkMode ? "hover:text-pink-700" : "hover:text-orange-500"
                }`}
              />
            </a>
          </li>
          <li title="github">
            <a href={githubLink} target="_blank" rel="noreferrer noopener">
              <GitHubLogo
                className={`rightSectionIcons ${
                  isDarkMode ? "hover:text-pink-700" : "hover:text-orange-500"
                }`}
              />
            </a>
          </li>
          <li title="mail">
            <a href={mailLink}>
              <EmailLogo
                className={`rightSectionIcons ${
                  isDarkMode ? "hover:text-pink-700" : "hover:text-orange-500"
                }`}
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full h-[10%]">
        <button
          type="button"
          className="topSectionBtn latest-works-btn mx-auto -mt-6 block relative group"
          onClick={handelLatestWorks}
        >
          Latest Works
          <ScrollDownIcon
            className={`absolute top-9 left-2/6 w-10 group-hover:translate-y-2 transition-all duration-320 ease-in-out  ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          />
        </button>
      </div>

      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          isDarkMode={isDarkMode}
          mailLink={mailLink}
          githubLink={githubLink}
          linkedinLink={linkedinLink}
          LinkedInLogo={LinkedInLogo}
          GitHubLogo={GitHubLogo}
          EmailLogo={EmailLogo}
        />
      )}

      {/* scroll to top button */}
      <button
        title="scroll to top"
        onClick={handelScrollToTop}
        className="scroll-back-to-top"
      >
        <img src={scrollTopImage} alt="scroll to top" />
      </button>
    </section>
  );
}
