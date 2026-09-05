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
        <h2 className="text-h4 font-bold text-center text-brand950 sm:text-h2">
          Work <span className="text-primary">Experience</span>
        </h2>
      </div>
      <div className="relative mt-6 lg:mt-12">
        <div className="absolute top-0 bottom-0 left-0 w-px bg-brand200 md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-y-4 md:gap-y-24">
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
                  {...experience}
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