import { useRef } from "react";
import CloseIcon from "../assets/icons/x.svg?react";
import ProfileLogo from "../assets/images/coder.svg?react";
import ScrollArrowLogo from "../assets/icons/scroll-arrow.svg?react";
import "./Popup.css";

export default function Popup({
  onClose,
  isDarkMode,
  mailLink,
  githubLink,
  linkedinLink,
  LinkedInLogo,
  GitHubLogo,
  EmailLogo,
}) {
  const popupRef = useRef(null);
  const backdropRef = useRef(null);

  if (!popupRef || !backdropRef) return;

  const handleClose = () => {
    //reset overflow to auto
    document.body.style.overflow = "auto";

    // trigger closing animation
    popupRef.current.classList.add("popupClosingEffect");
    backdropRef.current.classList.add("backdropClosingEffect");

    // wait for animation duration
    setTimeout(onClose, 350);
  };
  const handleScroll = () => {
    const popupContentContainer = document.querySelector(
      ".popup-content-container"
    );
    popupContentContainer.scrollTo(0, popupContentContainer.scrollHeight);
  };

  return (
    <>
      <div
        ref={backdropRef}
        className="w-screen h-screen fixed top-2/4 left-2/4 -translate-2/4 backdrop-blur-sm backdropEffects z-100"
      >
        <div
          ref={popupRef}
          className={`popup flex flex-col fixed w-[92vw] h-[90dvh] md:h-[90vh] max-h-[1100px] max-w-[1200px] top-2/4 left-2/4 rounded-[7px] px-3 py-2.5 popupEffects border gap-4 ${
            isDarkMode ? "dark" : "light"
          } md:pl-12 lg:pl-15 xl:pl-18`}
        >
          <div className="popup-button-container flex justify-end gap-x-4">
            {" "}
            <button
              title="Close Popup"
              className={`text-black hover:rotate-45 transition-all delay-20 duration-170 ease-in-out order-2 border-transparent  border-2 ${
                isDarkMode
                  ? "text-red-600 hover:text-white"
                  : "text-black hover:text-red-600"
              }`}
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
            <button
              className={`scrollButton ${
                isDarkMode ? "text-red-600" : "text-black"
              }`}
              onClick={handleScroll}
              title="Scroll to Bottom"
              aria-label="Scroll to Bottom"
            >
              <ScrollArrowLogo />
            </button>
          </div>

          <div className="popup-content-container flex h-[92%] flex-wrap gap-y-3.5 overflow-y-auto px-2 pt-0 md:flex-nowrap md:p-0">
            <div className="w-[100%] h-[60%] order-2 md:w-[45%] md:h-auto md:order-0">
              <h2 className="popupHeadingStyles m-0">ABOUT ME</h2>
              <p>
                My name is{" "}
                <strong>
                  <mark>Abhishek Pundir</mark>
                </strong>
                . I'm a{" "}
                <strong>
                  <mark>BCA graduate</mark>{" "}
                </strong>
                with a keen{" "}
                <strong>
                  <mark>interest in technology</mark>
                </strong>{" "}
                and a strong{" "}
                <strong>
                  <mark>passion</mark>
                </strong>{" "}
                for{" "}
                <strong>
                  <mark>web development</mark>
                </strong>{" "}
                . I{" "}
                <strong>
                  <mark>love creating</mark>
                </strong>{" "}
                beautiful, functional, and user-friendly{" "}
                <strong>
                  <mark>websites</mark>
                </strong>{" "}
                that provide an excellent user experience. I'm always{" "}
                <strong>
                  <mark>eager to learn</mark>
                </strong>{" "}
                new technologies and{" "}
                <strong>
                  <mark>improve my skills</mark>
                </strong>
                .
              </p>

              <h2 className="popupHeadingStyles">SKILLS and TOOLS</h2>
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
              <h2 className="popupHeadingStyles">SOCIAL-MEDIA and CONTACT</h2>
              <ul
                className={`flex items-baseline gap-x-4 px-3 pb-5 ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}
              >
                <li title="linkedin">
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {LinkedInLogo && (
                      <LinkedInLogo
                        className={`rightSectionIcons ${
                          isDarkMode
                            ? "hover:text-pink-700"
                            : "hover:text-black"
                        }`}
                      />
                    )}
                  </a>
                </li>
                <li title="github">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {GitHubLogo && (
                      <GitHubLogo
                        className={`rightSectionIcons ${
                          isDarkMode
                            ? "hover:text-pink-700"
                            : "hover:text-black"
                        }`}
                      />
                    )}
                  </a>
                </li>
                <li title="mail">
                  <a href={mailLink}>
                    {EmailLogo && (
                      <EmailLogo
                        className={`rightSectionIcons ${
                          isDarkMode
                            ? "hover:text-pink-700"
                            : "hover:text-black"
                        }`}
                      />
                    )}
                  </a>
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
