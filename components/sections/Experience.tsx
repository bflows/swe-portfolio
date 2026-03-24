import { experiences } from "@/data/experiences";
import SectionContainer from "../layout/SectionContainer";
import ExperienceCard from "../experience/ExperienceCard";

export default function Experience() {
  return (
    <SectionContainer>
      <div>
        <h2 className="text-h4 font-bold text-center bg-linear-to-r bg-clip-text text-transparent from-[#51f0e3] to-brand950 from-35% to-40% sm:text-h2 md:from-40% md:to-45%">
          Work Experience
        </h2>
        <p className="text-brand800 text-p mt-4 text-center">
          Experience building scalable systems and delivering practical software solutions.
        </p>
      </div>
      <div className="relative mt-12">
        <div className="absolute top-0 bottom-0 left-0 w-px bg-brand200 md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-y-8 md:block">
          {experiences.map((experience, index) => {
            const isLeftColumn = index % 2 === 0;

            return (
              <ExperienceCard
                key={index}
                title={experience.title}
                company={experience.company}
                date={experience.date}
                summary={experience.summary}
                tags={experience.tags}
                leftCol={isLeftColumn}
              />
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}