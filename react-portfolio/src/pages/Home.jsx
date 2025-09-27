import Header from "../components/Header";
import LinkedInLogo from "../assets/icons/linkedin.svg?react";
import GitHubLogo from "../assets/icons/github.svg?react";
import EmailLogo from "../assets/icons/email.svg?react";
import NameLogo from "../assets/images/name-logo.svg?react";
import { useDaRkModeContext } from "../context-provider/context";

//Home.jsx
export default function Home() {
  const { isDarkMode } = useDaRkModeContext();
  return (
    <>
      <Header />
      <div className="flex justify-between items-center h-[70vh] px-7">
        <div></div>
        <div className="flex items-center w-[600px] h-auto relative">
          <div className="flex flex-col gap-4 absolute items-start">
            <h1 className="text-[2rem] font-semibold w-max">Abhishek Pundir</h1>
            <h2 className="">
              <i>Front-End Developer</i>
            </h2>
            <button
              className="text-white bg-blue-600 cursor-pointer px-3 py-1 rounded-[4px] hover:opacity-[0.8]"
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
    </>
  );
}
