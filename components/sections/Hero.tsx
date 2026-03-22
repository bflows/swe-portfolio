import { LuChevronDown } from "react-icons/lu";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div id="home" className="mt-64 px-4 scroll-mt-64 md:px-6">
      <h1 className="font-bold text-h3 text-center bg-linear-to-b bg-clip-text text-transparent from-brand950 to-[#51f0e3] from-30% to-70% sm:text-h1 md:from-40% md:to-70%">
        Billy Flowers
      </h1>
      <h2 className="text-brand950 font-bold text-h6 text-center mt-4">
        Software Engineer
      </h2>
      {/* Buttons */}
      <div className="mt-8 flex items-center justify-center gap-x-2 sm:gap-x-4">
        <Button href="/#projects">
          Explore Projects
        </Button>
        <Button variant="secondary" href="/files/billy-flowers-resume.pdf" target="_blank">
          View Resume
        </Button>
      </div>
      {/* Arrow */}
      <div className="flex flex-col items-center mt-64">
        <p className="text-brand400 uppercase">SCROLL</p>
        <div className="mt-4">
          <LuChevronDown className="text-primary size-8 transition-transform animate-bounce ease-in-out duration-300" />
        </div>
      </div>
    </div>
  );
}