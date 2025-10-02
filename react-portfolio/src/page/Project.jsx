import ProjectShowCase from "./ProjectShowCase.jsx";
export default function Project({ isDarkMode, project, index }) {
  console.log(project);

  return (
    <div className="project flex gap-y-7 justify-between flex-wrap md:flex-nowrap lg:px-7">
     <ProjectShowCase index={index} project={project} />
      <div
        className={`project-description-container md:w-[50%]  px-8 md:px-3 order-1 ${
          index % 2 === 0 ? "md:order-2" : "md:order-1 md:ml-10 lg:ml-25"
        }`}
      >
        <a
          href={project.liveProjectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`live-project-link mb-3 text-orange-500 cursor-pointer ${
            index % 2 === 1 && "md:text-yellow-500"
          }`}
        >
          <h3 className="text-[1.4rem]">{project.name}</h3>
          <span className=" text-[12px]">{project.nameDescription}</span>
        </a>

        <p>{project.description}</p>
        <ul
          className={`flex flex-wrap gap-4 pl-[2px] my-4 text-[0.9rem]  lg:w-[50%] ${
            isDarkMode ? "text-gray-400" : ""
          }`}
        >
          {project.technologies.map((tech, i) => (
            <li
              key={i + 1}
              className={`skillStyles ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "skillStylesLIghtMode bg-white"
              }`}
            >
              &#35;{tech}
            </li>
          ))}
        </ul>
        <a
          href={project.sourceCodeLink}
          target="_blank"
          rel="noreferrer noopener"
          className="source-code-link"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}
