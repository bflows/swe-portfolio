import SectionContainer from "../layout/SectionContainer";
import ProjectGrid from "../project/ProjectGrid";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <div>
        <h2 className="text-h4 font-bold bg-linear-to-r bg-clip-text text-transparent from-brand950 to-[#51f0e3] from-30% to-35% sm:text-h2 md:from-15% md:to-20%">
          Featured Projects
        </h2>
      </div>
      <ProjectGrid />
    </SectionContainer>
  );
}