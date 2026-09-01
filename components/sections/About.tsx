import Link from "next/link";
import SectionContainer from "../layout/SectionContainer";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <SectionContainer id="about">
      <h2 className="text-p font-bold bg-linear-to-r bg-clip-text text-transparent from-brand950 to-[#51f0e3] from-5% to-20% sm:text-h6 md:from-0% md:to-5%">
        About Me
      </h2>
      <p className="text-h4 font-bold mt-6 text-brand600 sm:text-h2 lg:mt-12">
        I first started <span className="text-brand950">coding</span> by modding my favorite games. Since then I&apos;ve became a full stack <span className="text-brand950">software engineer</span> capable of building scalable systems end-to-end.
      </p>
      <p className="text-h4 font-bold mt-4 text-brand600 sm:text-h2 lg:mt-6">
        I&apos;m currently 👀 for a full stack role <span className="text-brand950">building</span> solutions that make an <span className="text-brand950">impact</span>. Got something you want to <span className="text-brand950">talk</span> about? Connect with me on {" "}
        <Link href={"https://www.linkedin.com/in/billyflowers/"} target="_blank" className="cursor-pointer group">
          <FaLinkedin className="inline h-8 w-auto transition-all duration-300 ease-in-out text-primary sm:h-12 group-hover:-translate-y-0.5 hover:text-brand950" />
        </Link>.
      </p>
    </SectionContainer>
  );
}