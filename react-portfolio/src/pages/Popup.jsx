import CloseIcon from "../assets/icons/x.svg?react";

export default function Popup({ onClose }) {
  return (
    <>
      <div className="w-screen h-screen fixed top-2/4 left-2/4 -translate-2/4 backdrop-blur-sm"></div>
      <div className="flex bg-white fixed w-[85vw] h-[80vh] top-2/4 left-2/4 -translate-2/4 rounded-[7px] px-2 py-2.5">
        <button
          className="self-baseline ml-auto text-black hover:text-red-600 hover:rotate-45 transition-all delay-20 duration-170 ease-in-out border-transparent border-2"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
    </>
  );
}
