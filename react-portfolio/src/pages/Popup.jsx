import { useRef } from "react";
import CloseIcon from "../assets/icons/x.svg?react";
import "./Popup.css";

export default function Popup({ onClose }) {
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
        className="w-screen h-screen fixed top-2/4 left-2/4 -translate-2/4 backdrop-blur-sm backdropEffects"
      ></div>
      <div
        ref={popupRef}
        className="flex bg-white fixed w-[85vw] h-[80vh] top-2/4 left-2/4 rounded-[7px] px-2 py-2.5 popupEffects"
      >
        <button
          className="self-baseline ml-auto text-black hover:text-red-600 hover:rotate-45 transition-all delay-20 duration-170 ease-in-out border-transparent border-2"
          onClick={handleClose}
        >
          <CloseIcon />
        </button>
      </div>
    </>
  );
}
