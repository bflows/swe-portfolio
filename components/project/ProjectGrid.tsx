import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <ProjectCard />
      <ProjectCard />
      <div className="md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-fit lg:mx-0">
        <ProjectCard />
      </div>
    </div>
  );
}