import Project from "./Project";
import projects from "../data/projects";
import "./ProjectSection.css";

export default function ProjectSection({ isDarkMode }) {
  return (
    <section
      className={`project-section flex flex-col items-center py-8 gap-10 md:gap-14 ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <a
        style={{ textDecoration: "none" }}
        href="https://github.com/askpundir-dev?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="project-heading">My Projects</h2>
      </a>

      <div className="projects flex flex-col gap-y-13  md:gap-y-20">
        {projects.map((project, i) => (
          <Project
            key={project.id}
            isDarkMode={isDarkMode}
            project={project}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
