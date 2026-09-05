import SectionContainer from "../layout/SectionContainer";
import ProjectGrid from "../project/ProjectGrid";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <div>
        <h2 className="text-h4 font-bold text-brand950 sm:text-h2">
          Featured <span className="text-primary">Projects</span>
        </h2>
      </div>
      <ProjectGrid />
    </SectionContainer>
  );
}