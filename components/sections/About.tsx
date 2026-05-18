import { BiLogoGithub, BiLogoLinkedin, BiSolidInbox } from "react-icons/bi";
import SectionContainer from "../layout/SectionContainer";
import Link from "next/link";
import AboutCard from "../about/AboutCard";
import { about } from "@/data/about";
import { IconType } from "react-icons";

type SocialsType = {
  href: string;
  Icon: IconType;
  label?: string;
};

export default function About() {
  const socials: SocialsType[] = [
    {
      href: "https://github.com/flowz0",
      Icon: BiLogoGithub
    },
    {
      href: "https://www.linkedin.com/in/billyflowers/",
      Icon: BiLogoLinkedin
    },
    {
      href: "mailto:billylflowers@gmail.com",
      Icon: BiSolidInbox,
      label: "Send Email"
    },
  ];

  return (
    <SectionContainer id="about">
      <div>
        <h2 className="text-h4 font-bold bg-linear-to-r bg-clip-text text-transparent from-[#51f0e3] to-brand950 from-20% to-25% sm:text-h2 md:from-10% md:to-15%">
          About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 mt-4 md:gap-x-8 lg:grid-cols-2">
        <div>
          <p className="text-p text-brand800">I&apos;m a full-stack software engineer with four years of experience building reliable and scalable software. I focus on developing practical solutions that solve real business problems utilizing clean architecture, maintainable code, and efficient systems.</p>
          <p className="text-p mt-2 text-brand800">My work primarily involves building internal tools, dashboards, and APIs that help teams improve operations and make better use of their data. My passion is designing systems end-to-end and turning complex requirements into scalable web solutions.</p>
          <p className="text-p mt-2 text-brand800">I&apos;m driven by the challenge of improving systems, simplifying workflows, and building software that delivers real value to the people who use it every day.</p>
          <div className="mt-2 lg:mt-4">
            {/* socials */}
            <div className="flex items-center gap-x-3">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className={`${social.label ? "flex items-center gap-x-2 px-4 py-2 p-2 rounded-full border transition-colors duration-300 ease-in-out bg-brand200/40 text-brand600 border-brand200 hover:bg-brand200 hover:text-brand800 hover:border-brand300" : "p-2 rounded-full border transition-colors duration-300 ease-in-out bg-brand200/40 text-brand600 border-brand200 hover:bg-brand200 hover:text-brand800 hover:border-brand300"}`}
                >
                  <social.Icon className="size-6" />
                  <span className="text-p">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 lg:mt-0">
          {about.map((a, index) => (
            <AboutCard
              key={index}
              title={a.title}
              desc={a.desc}
              Icon={a.Icon}
              bgColor={a.bgColor}
              textColor={a.textColor}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}