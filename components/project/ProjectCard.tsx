import ProjectStatus from "./ProjectStatus";
import ProjectTechList from "./ProjectTechList";
import { LuGithub, LuPlay } from "react-icons/lu";
import { Project } from "@/types/project";
import Button from "../ui/Button";

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
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-start justify-between gap-x-1">
            <h3 className="text-h6 font-bold text-brand950">
              {title}
            </h3>
            <ProjectStatus status={status} />
          </div>
          <p className="mt-2 text-p line-clamp-3 text-brand800">
            {desc}
          </p>
          <ProjectTechList techStack={techStack} />
        </div>
        <div>
          <hr className="border-t-brand200 mt-6" />
          <div className="mt-4 flex items-center justify-end gap-x-2">
            {liveUrl && (
              <Button href={liveUrl} target="_blank" rounded="full" size="sm">
                <div>
                  <LuPlay className="size-4" />
                </div>
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button href={githubUrl} target="_blank" variant="secondary" rounded="full" size="sm">
                <div>
                  <LuGithub className="size-4" />
                </div>
                Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}