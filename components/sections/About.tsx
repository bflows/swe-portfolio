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
      href: "https://github.com/bflows",
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
      <div className="grid grid-cols-1 mt-4 md:gap-x-8 lg:grid-cols-2 lg:mt-8">
        <div>
          <p className="text-p text-brand800">I&apos;m a full-stack software engineer with experience building web applications, internal tools, APIs, and business platforms. I enjoy turning complex ideas into simple products that people enjoy using.</p>
          <p className="text-p mt-2 text-brand800 lg:mt-4">Most of my work focuses on backend systems, dashboards, and workflow tools that help businesses operate more efficiently and make better use of their data. I&apos;m really interested in system design, product development, and building software that solves practical problems.</p>
          <p className="text-p mt-2 text-brand800 lg:mt-4">What drives me most is the process of taking an idea from concept to production, iterating on it, and continuously improving both the product and the engineering behind it.</p>
          <div className="mt-4 lg:mt-6">
            {/* socials */}
            <div className="flex items-center gap-x-3">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className={`${social.label ? "flex items-center gap-x-2 px-4 py-2 p-2 rounded-full border transition-colors duration-300 ease-in-out bg-brand200/20 text-brand600 border-brand200 hover:bg-brand200 hover:text-brand800 hover:border-brand300" : "p-2 rounded-full border transition-colors duration-300 ease-in-out bg-brand200/20 text-brand600 border-brand200 hover:bg-brand200 hover:text-brand800 hover:border-brand300"}`}
                >
                  <social.Icon className="size-6" />
                  <span className="text-p">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2 lg:gap-4 lg:mt-0">
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