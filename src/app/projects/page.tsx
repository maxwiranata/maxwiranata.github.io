import ProjectCard from "./components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <div className="h-28 md:mb-4 flex items-center justify-center mt-20 md:mt-28">
        <h1 className="bg-gradient-to-br from-white to-neutral-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl lg:text-6xl xl:text-7xl">
          My Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-8 max-w-3xl lg:max-w-6xl mx-auto md:min-h-[440vh] lg:min-h-[240vh] 2xl:min-h-[125vh]">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            href={`/projects/${project.id}`}
            image={project.thumbnail ? project.thumbnail : project.images[0]}
            icons={project.techStack.map((tech) => tech.icon)}
          />
        ))}
      </div>
    </>
  );
}
