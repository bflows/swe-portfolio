import { LuChevronDown } from "react-icons/lu";
import Button from "../ui/Button";
import { HiArrowDown } from "react-icons/hi2";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-dvh flex-col scroll-mt-64">
      <div className="hero-background" aria-hidden="true">
      </div>
      <div className="relative z-10 flex flex-1 flex-col px-4 md:px-6">
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="font-bold text-h3 text-center text-brand950 sm:text-h1">
            Billy Flowers
          </h1>
          <h2 className="text-primary font-bold text-h6 text-center mt-4">
            Software Engineer
          </h2>
          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-4">
            <Button href="/#projects" rounded="full">
              Explore Projects
              <HiArrowDown className="size-5" />
            </Button>
            <Button variant="secondary" href="/files/billy-flowers-resume.pdf" target="_blank" className="lg:hidden" rounded="full">
              View Resume
            </Button>
          </div>
        </div>
        {/* Arrow */}
        <div className="flex flex-col items-center pb-12">
          <p className="text-brand400 uppercase">SCROLL</p>
          <div className="mt-4">
            <LuChevronDown className="text-primary size-8 transition-transform animate-bounce ease-in-out duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
