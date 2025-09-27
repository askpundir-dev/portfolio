import Header from "../components/Header";
import LinkedInLogo from "../assets/icons/linkedin.svg?react";
import GitHubLogo from "../assets/icons/github.svg?react";
import EmailLogo from "../assets/icons/email.svg?react";
import NameLogo from "../assets/images/name-logo.svg?react";
import "./Home.css";
import { useDaRkModeContext } from "../context-provider/context";

//Home.jsx
export default function Home() {
  const { isDarkMode } = useDaRkModeContext();
  return (
    <>
      <Header />
      <div className="flex justify-between items-center h-[70vh] px-7 my-4">
        <div></div>
        <div className="flex items-center w-[600px] h-auto relative">
          <div className="flex flex-col gap-4 absolute left-[-0.4rem] items-start md:sm:left-[-3rem] lg:left-[-8rem]">
            <h1 className="text-[1.8rem] lg:text-[2.1rem] font-semibold w-max font-mono">
              Abhishek Pundir
            </h1>
            <p className="font-sans">
              <i>Front-End Developer</i>
            </p>
            <button
              className="topSectionBtn"
              onClick={() => {
                console.log("eww bro");
              }}
            >
              About Me
            </button>
          </div>
          <NameLogo style={{ width: "100%", height: "auto" }} />
        </div>
        <ul
          className={`flex flex-col gap-5 ${
            isDarkMode ? "text-[#b0b2c3]" : "text-gray-600"
          }`}
        >
          <li title="linkedin">
            <a
              href="https://www.linkedin.com/in/abhishek-pundir-366761383/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedInLogo
                className={`w-4 ${
                  isDarkMode ? "hover:text-white" : "hover:text-black"
                } `}
              />
            </a>
          </li>
          <li title="github">
            <a
              href="https://github.com/askpundir-dev"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubLogo
                className={`w-4 ${
                  isDarkMode ? "hover:text-white" : "hover:text-black"
                } `}
              />
            </a>
          </li>
          <li title="mail">
            <a href="mailto:ask.pundir0224@gmail.com">
              <EmailLogo
                className={`w-4 ${
                  isDarkMode ? "hover:text-white" : "hover:text-black"
                } `}
              />
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <button
        className="topSectionBtn mx-auto mt-3 block relative group"
        onClick={() => {
          console.log("eww bro");
        }}
      >
        Latest Works
        <img
          src="/src/assets/images/downarrow.png"
          alt="down-arrow"
          className={`absolute top-9 left-2/6 w-11 md:group-hover:translate-y-4 transition-all duration-400 ease-in-out ${
            isDarkMode && "invert"
          } `}
        />
      </button>
    </>
  );
}
