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
          className={`popup flex flex-col fixed w-[94vw] h-[92dvh] md:w-[86vw] md:h-[90vh] lg:w-[78vw] xl:w-[72vw] max-h-[1100px] max-w-[1000px] top-2/4 left-2/4 rounded-[10px] px-4 py-3 md:px-7 md:py-5 popupEffects border gap-4 ${
            isDarkMode ? "dark" : "light"
          }`}
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

          <div className="popup-content-container flex h-[92%] flex-wrap gap-8 overflow-y-auto px-1 pt-0 md:flex-nowrap md:items-start md:gap-10 md:px-0">
            <div className="w-full order-2 md:w-1/2 md:order-0">
              <h2 className="popupHeadingStyles m-0">ABOUT ME</h2>
              <p className="max-w-[58ch] leading-8 text-[1rem] md:text-[1.02rem]">
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
                className={`skillsGrid mt-4 text-[0.9rem] ${
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
                  &#35;HTML
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;CSS
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;JavaScript
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;React.js
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;Tailwind CSS
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;Git
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;GitHub
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;VS Code
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;Next.js
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;Postman
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;Node.js
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;Express.js
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;MySQL
                </li>
                <li
                  className={`skillStyles ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "skillStylesLIghtMode"
                  }`}
                >
                  &#35;MySQL Workbench
                </li>
              </ul>
              <h2 className="popupHeadingStyles">SOCIAL-MEDIA and CONTACT</h2>
              <ul
                className={`flex items-baseline gap-x-4 px-1 pb-3 ${
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
            <div className="popup-illustration-wrap w-full order-1 md:w-1/2 md:order-0 flex items-center justify-center pt-1 md:pt-6">
              <ProfileLogo className="popup-illustration w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
