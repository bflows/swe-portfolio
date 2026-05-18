"use client";

import { experiences } from "@/data/experiences";
import { useExperienceScrollSpy } from "@/hooks/useExperienceScrollSpy";
import SectionContainer from "../layout/SectionContainer";
import ExperienceCard from "../experience/ExperienceCard";

export default function Experience() {
  const { activeIndex, setCardRef } = useExperienceScrollSpy({
    itemCount: experiences.length,
    mobileThreshold: 0.12,
    desktopThreshold: 0.22,
  });

  return (
    <SectionContainer id="experience">
      <div>
        <h2 className="text-h4 font-bold text-center bg-linear-to-r bg-clip-text text-transparent from-[#51f0e3] to-brand950 from-35% to-40% sm:text-h2 md:from-40% md:to-45%">
          Work Experience
        </h2>
        <p className="text-brand800 text-p mt-4 max-w-xs mx-auto text-center">
          What I&apos;ve done and where I&apos;ve done it.
        </p>
      </div>
      <div className="relative mt-12">
        <div className="absolute top-0 bottom-0 left-0 w-px bg-brand200 md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-y-4 md:gap-y-16">
          {experiences.map((experience, index) => {
            const isLeftColumn = index % 2 === 0;

            return (
              <div
                key={index}
                data-index={index}
                ref={(element) => {
                  setCardRef(index, element);
                }}
              >
                <ExperienceCard
                  title={experience.title}
                  company={experience.company}
                  date={experience.date}
                  summary={experience.summary}
                  tags={experience.tags}
                  leftCol={isLeftColumn}
                  isActive={activeIndex === index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}