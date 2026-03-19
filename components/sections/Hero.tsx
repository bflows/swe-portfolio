import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";

export default function Hero() {
  return (
    <div id="home" className="mt-64 px-4 scroll-mt-64 md:px-6">
      <h1 className="text-brand950 font-bold text-h4 text-center sm:text-h1">
        Billy Flowers
      </h1>
      <h2 className="text-primary font-bold text-h6 text-center mt-4">
        Software Engineer
      </h2>
      {/* Buttons */}
      <div className="mt-8 flex items-center justify-center gap-x-4">
        <Link href="#projects" className="bg-primary text-brand100 text-center py-3 px-4 rounded-lg w-1/2 sm:w-fit sm:px-6">
          Explore Projects
        </Link>
        <Link href="/files/billy-flowers-resume.pdf" target="_blank" className="bg-brand200 text-brand800 text-center py-3 px-4 rounded-lg w-1/2 border border-brand300 sm:w-fit sm:px-6">
          View Resume
        </Link>
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