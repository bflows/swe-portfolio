import SectionContainer from "../layout/SectionContainer";
import ProjectGrid from "../project/ProjectGrid";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <div>
        <h2 className="text-brand950 text-h5 font-bold sm:text-h2">
          Featured Projects
        </h2>
        <p className="text-brand800 text-p mt-4">
          A selection of projects that showcase my skills in building scalable and impactful web solutions.
        </p>
      </div>
      <div>
        <ProjectGrid />
      </div>
    </SectionContainer>
  );
}