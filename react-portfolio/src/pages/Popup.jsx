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
          className={`flex flex-col fixed w-[85vw] h-[80vh] max-h-[1000px] max-w-[1000px] top-2/4 left-2/4 rounded-[7px] pl-5 pr-2 py-2.5 popupEffects border gap-4 ${
            isDarkMode ? "bg-[#151414]" : "bg-white"
          } md:pl-15 lg:pl-20 xl:pl-26`}
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
          <div className="flex justify-between">
            <div>
              <h2 className="text-green-500 font-bold text-[1.5rem] border">
                ABOUT ME
              </h2>
              <p className="border">
                A highly motivated and enthusiastic BCA graduate seeking a
                front-end developer role to leverage a strong foundation in
                HTML, CSS, and JavaScript, along with proficiency in React and
                responsive design principles. Passionate about creating
                interactive, responsive web applications.
              </p>
            </div>
            <div className="flex justify-center items-center w-50vw h-40vh">
              <ProfileLogo className="max-w-full max-h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
