import { useState } from "react";
import "./ProjectShowCase.css";

export default function ProjectShowCase({ index, project, isDarkMode }) {
  const [isScreenOn, setIsScreenOn] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div
        className={`mack-book-container md:w-[50%] order-2 ${
          index % 2 === 0 ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="project-image-container mx-auto min-w-[300px] max-w-[70%] relative group">
          {/* --- Navigation Buttons --- */}
          {isScreenOn && (
            <>
              <button
                title="scroll previous"
                onClick={prevImage}
                className={`absolute top-1/2 -left-3 lg:left-3 -translate-y-1/2 z-20 p-2 hover:scale-[1.5] rounded-full shadow-black ${
                  !isDarkMode ? "invert" : ""
                }`}
              >
                <img
                  className="w-7"
                  src="/src/assets/icons/scroll-left.png"
                  alt="scroll left"
                />
              </button>
              <button
                title="scroll next"
                onClick={nextImage}
                className={`absolute top-1/2 -right-3 lg:right-3 -translate-y-1/2 z-20 p-2 hover:scale-[1.5] rounded-full shadow-black ${
                  !isDarkMode ? "invert" : ""
                }`}
              >
                <img
                  className="w-7"
                  src="/src/assets/icons/scroll-right.png"
                  alt="scroll right"
                />
              </button>
            </>
          )}

          {/* --- MacBook Frame --- */}
          <img
            className="mack-book max-w-full max-h-full relative z-10"
            src="/src/assets/images/mack-book.png"
            alt="mack book"
          />

          {/* --- Screen Content --- */}
          {/* <img
            className={`project-image project-image-inside-mackbook top-0 lg:top-[4px] z-0 object-cover ${
              isScreenOn ? "block screen-on" : "hidden"
            }`}
            src={project.images[currentIndex].src}
            alt={project.images[currentIndex].alt}
          /> */}
          {/* --- Screen Content --- */}
          {project.images.map((img, i) => (
            <img
              key={i}
              className={`project-image project-image-inside-mackbook top-1 lg:top-[7px] z-0 ${
                isScreenOn && i === currentIndex ? "active" : ""
              }`}
              src={img.src}
              alt={img.alt}
            />
          ))}

          {/* --- Screen Off Overlay --- */}
          <div
            title={`tap once to turn ${isScreenOn ? "off" : "on"}`}
            onClick={() => {
              setIsScreenOn((prev) => !prev);
            }}
            className={`z-50 screen-off-background   project-image-inside-mackbook top-[4px] cursor-pointer transition-all duration-700 ease-in ${
              !isScreenOn && "bg-black"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}
