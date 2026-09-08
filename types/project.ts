import { StaticImageData } from "next/image";

export type ProjectStatusValue = "building" | "live" | "archived";

export type Project = {
  id: number;
  title: string;
  desc: string;
  img?: StaticImageData;
  status: ProjectStatusValue;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
};