import { BiLogoGithub, BiLogoLinkedin, BiSolidInbox } from "react-icons/bi";
import SectionContainer from "../layout/SectionContainer";
import Link from "next/link";
import AboutCard from "../about/AboutCard";
import { about } from "@/data/about";
import { IconType } from "react-icons";

type SocialsType = {
  href: string;
  Icon: IconType;
};

export default function About() {
  const socials: SocialsType[] = [
    {
      href: "mailto:billylflowers@gmail.com",
      Icon: BiSolidInbox
    },
    {
      href: "https://github.com/flowz0",
      Icon: BiLogoGithub
    },
    {
      href: "https://www.linkedin.com/in/billyflowers/",
      Icon: BiLogoLinkedin
    },
  ];

  return (
    <SectionContainer id="about">
      <div>
        <h2 className="text-h4 font-bold bg-linear-to-r bg-clip-text text-transparent from-[#51f0e3] to-brand950 from-20% to-25% sm:text-h2 md:from-10% md:to-15%">
          About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 mt-4 md:gap-x-8 lg:mt-8 lg:grid-cols-2">
        <div>
          <p className="text-p text-brand800">I&apos;m a full-stack software engineer with four years of experience building reliable and scalable software. I focus on developing practical solutions that solve real business problems, with an emphasis on clean architecture, maintainable code, and efficient systems.</p>
          <p className="text-p mt-2 text-brand800 lg:mt-4">My work primarily involves building internal tools, dashboards, and APIs that help teams operate more efficiently and make better use of their data. I enjoy designing systems end-to-end and turning complex requirements into scalable web solutions.</p>
          <p className="text-p mt-2 text-brand800 lg:mt-4">I&apos;m driven by the challenge of improving systems, simplifying workflows, and building software that delivers real value to the people who use it every day.</p>
          <div className="mt-4 lg:mt-8">
            {/* socials */}
            <div className="flex items-center gap-x-4">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-lg border transition-colors duration-300 ease-in-out bg-brand200/40 text-brand600 border-brand200 hover:bg-brand200 hover:text-brand800 hover:border-brand300"
                >
                  <social.Icon className="size-8" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 -mx-4 flex snap-x snap-mandatory overflow-x-auto scroll-px-4 px-4 pb-2 gap-x-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:scroll-px-0 sm:px-0 sm:pb-0 sm:snap-none sm:items-center sm:gap-x-4 gap-y-4 lg:mt-0">
          {/* stats */}
          {about.map((a, index) => (
            <div key={index} className="min-h-0 min-w-full snap-center sm:min-w-0 sm:w-auto">
              <AboutCard title={a.title} desc={a.desc} Icon={a.Icon} bgColor={a.bgColor} textColor={a.textColor} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}