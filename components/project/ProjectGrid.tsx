import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const MAX_PROJECTS = 3;

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {projects.slice(0, MAX_PROJECTS).map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}