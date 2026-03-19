import Link from "next/link";
import ProjectStatus from "./ProjectStatus";
import ProjectTechList from "./ProjectTechList";
import { LuGithub, LuPlay } from "react-icons/lu";

export default function ProjectCard() {
  return (
    <div className="px-4 py-4 rounded-2xl border bg-brand100 border-brand200">
      <div className="flex items-start justify-between gap-x-1">
        <h3 className="text-h6 font-bold text-brand950">
          HVAC Blog Content Management System
        </h3>
        <ProjectStatus />
      </div>
      <p className="mt-2 text-p text-brand800">
        Designed and built a full-stack CMS for an HVAC blog. Enabling efficient content creation, editing, and publishing through a custom admin dashboard.
      </p>
      <ProjectTechList />
      <hr className="border-t-brand200 mt-6" />
      <div className="mt-4 flex items-center justify-end gap-x-2">
        <Link href="/" className="px-3 py-1 flex items-center gap-x-2 w-fit rounded-full border text-brand100 bg-primary">
        <div>
          <LuPlay className="size-4" />
        </div>
          Live Demo
        </Link>
        <Link href="/" className="px-3 py-1 flex items-center gap-x-2 w-fit rounded-full border text-brand600 bg-brand200 border-brand300">
        <div>
          <LuGithub className="size-4" />
        </div>
          Code
        </Link>
      </div>
    </div>
  );
}