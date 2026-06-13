import ProjectStatus from "./ProjectStatus";
import ProjectTechList from "./ProjectTechList";
import { LuGithub, LuLink } from "react-icons/lu";
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
    <div className="px-6 py-5 rounded-2xl border bg-brand200/10 border-brand200 lg:px-7 lg:py-6">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-start justify-between gap-x-2">
            <h3 className="text-h6 font-bold text-brand950 lg:text-h5">
              {title}
            </h3>
            <ProjectStatus status={status} />
          </div>
          <p className="mt-2 text-p line-clamp-5 text-brand800">
            {desc}
          </p>
          <ProjectTechList techStack={techStack} />
        </div>
        <div>
          <hr className="border-t-brand200 mt-6" />
          <div className="mt-4 flex flex-col gap-y-2 sm:flex-row items-center sm:justify-end gap-x-2">
            {liveUrl && (
              <Button href={liveUrl} target="_blank" rounded="full" size="sm" className="text-p w-full sm:w-fit">
                <div>
                  <LuLink className="size-4" />
                </div>
                Project Link
              </Button>
            )}
            {githubUrl && (
              <Button href={githubUrl} target="_blank" variant="secondary" rounded="full" size="sm" className="text-p w-full sm:w-fit">
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