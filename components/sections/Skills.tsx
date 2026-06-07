import SectionContainer from "../layout/SectionContainer";
import SkillCategory from "../skills/SkillCategory";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionContainer id="skills">
      <div>
        <h2 className="text-h4 font-bold text-center bg-linear-to-r bg-clip-text text-transparent from-[#51f0e3] to-brand950 from-35% to-40% sm:text-h2 md:from-40% md:to-45%">
          Skills & Technologies
        </h2>
        <p className="text-brand800 text-p mt-2 text-center max-w-md mx-auto lg:mt-4">
          The languages, libraries, frameworks, tools, and methodologies I use to build modern web solutions.
        </p>
      </div>
      <div className="mt-6 -mx-4 flex items-stretch snap-x snap-mandatory overflow-x-auto scroll-px-4 px-4 pb-2 gap-x-2 sm:bg-brand200/10 sm:rounded-2xl sm:mx-0 sm:grid sm:scroll-px-0 sm:snap-none sm:items-stretch sm:gap-x-4 gap-y-8 grid-cols-2 lg:grid-cols-3 sm:px-6 sm:py-5 md:px-7 md:py-6 lg:mt-12">
        {skillCategories.map((skill, index) => (
          <div
            key={index}
            className="flex min-h-0 min-w-full flex-col snap-center sm:min-w-0 sm:w-auto"
          >
            <SkillCategory
              title={skill.title}
              Icon={skill.Icon}
              skills={skill.skills}
              color={skill.color}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}