import { useRef } from "react";
import CloseIcon from "../assets/icons/x.svg?react";
import ProfileLogo from "../assets/images/coder.svg?react";
import "./Popup.css";

export default function Popup({ onClose, isDarkMode }) {
  const popupRef = useRef(null);
  const backdropRef = useRef(null);

  if (!popupRef || !backdropRef) return;

  const handleClose = () => {
    // trigger closing animation
    popupRef.current.classList.add("popupClosingEffect");
    backdropRef.current.classList.add("backdropClosingEffect");

    // wait for animation duration
    setTimeout(onClose, 350);
  };

  return (
    <>
      <div
        ref={backdropRef}
        className="w-screen h-screen fixed top-2/4 left-2/4 -translate-2/4 backdrop-blur-sm backdropEffects z-100"
      >
        <div
          ref={popupRef}
          className={`flex flex-col fixed w-[92vw] h-[90vh] max-h-[1100px] max-w-[1200px] top-2/4 left-2/4 rounded-[7px] px-3 py-2.5 popupEffects border gap-4 ${
            isDarkMode ? "bg-[#151414]" : "bg-white"
          } md:pl-12 lg:pl-15 xl:pl-18`}
        >
          <button
            className={`ml-auto text-black hover:rotate-45 transition-all delay-20 duration-170 ease-in-out border-transparent border-2 ${
              isDarkMode
                ? "text-red-600 hover:text-white"
                : "text-black hover:text-red-600"
            }`}
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
          <div className="popup-content-container flex justify-between h-[92%] flex-wrap gap-y-3.5 overflow-y-auto  md:flex-nowrap">
            <div className="w-[100%] h-[60%] order-2 md:w-[45%] md:h-auto md:order-0">
              <h2 className="text-green-500 font-bold text-[1.5rem]">
                ABOUT ME
              </h2>
              <p className="pt-2">
                My name is Abhishek Pundir. I'm a BCA graduate with a keen
                interest in technology and a strong passion for web development.
                I love creating beautiful, functional, and user-friendly
                websites that provide an excellent user experience. I'm always
                eager to learn new technologies and improve my skills.
              </p>

              <h2 className="text-green-500 font-bold text-[1.5rem] mt-8">
                SKILLS and TOOLS
              </h2>
              <ul
                className={`flex flex-wrap gap-4 pl-[2px] mt-4 text-[0.9rem]  lg:w-[50%] ${
                  isDarkMode ? "text-gray-400" : ""
                }`}
              >
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;html
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;css
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;javascript
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;react.js
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;tailwind
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;git
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;github
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;vscode
                </li>
              </ul>
            </div>
            <div className="w-[100%] h-[40%] order-1  md:w-[55%] md:h-auto md:order-0">
              <ProfileLogo className="max-w-full max-h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
