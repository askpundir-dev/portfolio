import { useState } from "react";
import "./ProjectShowCase.css";
export default function ProjectShowCase({ index, project }) {
  const [isScreenOn, setIsScreenOn] = useState(true);
  return (
    <>
      <div
        className={`mack-book-container hidden lg:block w-[50%] ${
          index % 2 === 0 ? "order-1" : "order-2"
        }`}
      >
        <div
          onClick={() => {
            setIsScreenOn((prev) => !prev);
          }}
          className="project-image-container mx-auto min-w-[300px] max-w-[70%] relative cursor-pointer group"
        >
          <img
            className="mack-book max-w-full max-h-full relative z-10"
            src="/src/assets/images/mack-book-5.png"
            alt="mack book"
          />
          <img
            className={`product-image project-image-inside-mackbook z-0 top-[5px] lg:top-2 ${
              isScreenOn ? "block screen-on" : "hidden"
            }`}
            src={project.images[0].src}
            alt={project.images[0].alt}
          />
          <div
            className={`screen-off-background top-0  project-image-inside-mackbook ${
              !isScreenOn && "bg-black"
            }`}
          ></div>
        </div>
      </div>

      <div
        className={`ipad-container md:w-[50%] lg:hidden order-2 ${
          index % 2 === 0 ? "md:order-1" : "md:order-2"
        }`}
      >
        <div
          onClick={() => {
            setIsScreenOn((prev) => !prev);
          }}
          className="project-image-container mx-auto min-w-[300px] max-w-[70%] relative cursor-pointer group"
        >
          <img
            className="mack-book max-w-full max-h-full relative z-10"
            src="/src/assets/images/ipad.png"
            alt="ipad"
          />
          <img
            className={`product-image project-image-inside-ipad z-0 ${
              isScreenOn ? "block screen-on" : "hidden"
            }`}
            src={project.images[0].src}
            alt={project.images[0].alt}
          />
          <div
            className={`screen-off-background   project-image-inside-ipad ${
              !isScreenOn && "bg-black"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}
