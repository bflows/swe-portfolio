import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const MAX_PROJECTS = 3;

/** Last 3 projects in data (reverse order) */
const featuredProjects = projects.slice(-MAX_PROJECTS).reverse();

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 lg:mt-12">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}