import Link from "next/link";
import SectionContainer from "../layout/SectionContainer";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <SectionContainer id="about">
      <h2 className="text-p font-bold bg-linear-to-r bg-clip-text text-primary sm:text-h6">
        About Me
      </h2>
      <p className="text-h4 font-bold mt-6 text-brand600 sm:text-h2 lg:mt-12">
        I first started <span className="text-brand950">coding</span> by implementing mechanics into my favorite games that I wish they had. That <span className="text-brand950">curiosity</span> led me to complete a programming bootcamp which turned into a <span className="text-brand950">paid</span> internship where I gained professional experience shipping features on a team.
      </p>
      <p className="text-h4 font-bold mt-4 text-brand600 sm:text-h2 lg:mt-6">
        I&apos;m now a full stack <span className="text-brand950">developer</span> capable of building scalable systems end-to-end. I&apos;m looking for a role to <span className="text-brand950">build</span> solutions that make an impact. Got something you want to talk about? Connect with me on <Link href={"https://www.linkedin.com/in/billyflowers/"} target="_blank" className="cursor-pointer group">
          <FaLinkedin className="inline h-8 w-auto text-primary transition-all duration-300 ease-in-out sm:h-12 group-hover:-translate-y-0.5 hover:text-brand950" />
        </Link>.
      </p>
    </SectionContainer>
  );
}