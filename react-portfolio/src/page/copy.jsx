return (
    <>
       <div
        className={`mack-book-container hidden lg:block w-[50%] ${
          index % 2 === 0 ? "order-1" : "order-2"
        }`}
      >
        <div className="project-image-container mx-auto min-w-[300px] max-w-[70%] relative group">
          {/* --- Navigation Buttons --- */}
          {isScreenOn && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-20 p-2 rounded-full shadow"
              >
                <img
                  className="w-7"
                  src="/src/assets/icons/scroll-left.png"
                  alt="scroll left"
                />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-20 p-2 rounded-full shadow"
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
            src="/src/assets/images/mack-book-5.png"
            alt="mack book"
          />

          {/* --- Screen Content --- */}
          <img
            className={`product-image project-image-inside-mackbook top-[8px] z-0 object-cover ${
              isScreenOn ? "block screen-on" : "hidden"
            }`}
            src={project.images[currentIndex].src}
            alt={project.images[currentIndex].alt}
          />

          {/* --- Screen Off Overlay --- */}
          {/* <div
            onClick={() => setIsScreenOn((prev) => !prev)}
            className={`absolute left-1/2 -translate-x-1/2 w-[74%] h-[86%] rounded-[3px] top-[8px] transition-all duration-500 cursor-pointer ${
              !isScreenOn
                ? "bg-black opacity-90"
                : "opacity-0 pointer-events-none"
            }`}
          ></div> */}
          <div
            onClick={() => {
              setIsScreenOn((prev) => !prev);
            }}
            className={`z-50 screen-off-background   project-image-inside-mackbook top-[4px] cursor-pointer ${
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
            className="ipad max-w-full max-h-full relative z-10"
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