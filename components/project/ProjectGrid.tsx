import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="flex flex-col gap-y-4 mt-8">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}