import Link from "next/link";
import ProjectStatus from "./ProjectStatus";
import ProjectTechList from "./ProjectTechList";
import { LuGithub, LuPlay } from "react-icons/lu";
import { Project } from "@/types/project";

export default function ProjectCard({
  title,
  desc,
  status,
  techStack,
  liveUrl,
  githubUrl
}: Project) {
  return (
    <div className="px-4 py-4 rounded-2xl border bg-brand100 border-brand200">
      <div className="flex items-start justify-between gap-x-1">
        <h3 className="text-h6 font-bold text-brand950">
          {title}
        </h3>
        <ProjectStatus status={status} />
      </div>
      <p className="mt-2 text-p text-brand800">
        {desc}
      </p>
      <ProjectTechList techStack={techStack} />
      <hr className="border-t-brand200 mt-6" />
      <div className="mt-4 flex items-center justify-end gap-x-2">
        {liveUrl && (
          <Link href={liveUrl} className="px-3 py-1 flex items-center gap-x-2 w-fit rounded-full border text-brand100 bg-primary">
            <div>
              <LuPlay className="size-4" />
            </div>
            Live Demo
          </Link>
        )}
        {githubUrl && (
          <Link href={githubUrl} className="px-3 py-1 flex items-center gap-x-2 w-fit rounded-full border text-brand600 bg-brand200 border-brand300">
            <div>
              <LuGithub className="size-4" />
            </div>
            Code
          </Link>
        )}
      </div>
    </div>
  );
}