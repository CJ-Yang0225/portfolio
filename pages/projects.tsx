import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <main className="px-6 py-2">
      <nav>Category...</nav>
      <div className="relative grid gap-4 my-3 overflow-y-scroll md:grid-cols-12">
        {projects.map((project) => (
          <div
            className="col-span-12 p-2 sm:col-span-6 md:col-span-4"
            key={project.name}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
