import "./ProjectSection.css";
export default function ProjectSection({ isDarkMode }) {
  return (
    <section
      className={`project-section flex flex-col items-center py-8 gap-10 md:gap-14 ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <h2 className="project-heading">My Projects</h2>

      <div className="projects flex">
        <div className="project flex gap-y-5 justify-between flex-wrap md:flex-nowrap">
          <div className="project-image-container md:w-[50%] order-2 md:order-1">
            <img
              className="m-auto min-w-[300px] max-w-[70%]"
              src="/src/assets/images/mack-book-5.png"
              alt="mack book"
            />
          </div>
          <div className="project-description-container md:w-[50%]  px-8 md:px-3 order-1 md:order-2">
            <div className="heading-container mb-3 text-orange-600">
              <h3 className="text-[1.4rem]">Amazon</h3>
              <span className=" text-[12px]">(Amazon Frontend Clone)</span>
            </div>

            <p>
              A multi-page, responsive frontend clone of Amazon with product
              listing, navigation bar, cart interface and order-tracking.{" "}
            </p>
            <ul
              className={`flex flex-wrap gap-4 pl-[2px] my-4 text-[0.9rem]  lg:w-[50%] ${
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
            </ul>
            <a href="https://github.com/askpundir-dev/amazon-frontend-clone" target="_blank" rel="noreferrer noopener">Source Code</a>
          </div>
        </div>
      </div>
    </section>
  );
}
