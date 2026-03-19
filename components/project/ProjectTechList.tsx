import ProjectTechCard from "./ProjectTechCard";

export default function ProjectTechList() {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <ProjectTechCard label="TypeScript" />
      <ProjectTechCard label="Next.js" />
      <ProjectTechCard label="Tailwind CSS" />
      <ProjectTechCard label="Express" />
      <ProjectTechCard label="MongoDB" />
      <ProjectTechCard label="+5 more" />
    </div>
  );
}