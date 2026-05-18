import { AboutCardProps } from "@/types/about";
import { LuBriefcase, LuFolderKanban, LuLayers, LuTrendingUp } from "react-icons/lu";

export const about: AboutCardProps[] = [
  {
    title: "4+ Years",
    desc: "Software Development",
    Icon: LuBriefcase,
    bgColor: "bg-primary/20",
    textColor: "text-primary"
  },
  {
    title: "20+ Projects",
    desc: "Solutions Built",
    Icon: LuFolderKanban,
    bgColor: "bg-[#DAB1F8]/20",
    textColor: "text-[#DAB1F8]"
  },
  {
    title: "Full-Stack",
    desc: "End-to-end Development",
    Icon: LuLayers,
    bgColor: "bg-[#B1F8C3]/20",
    textColor: "text-[#B1F8C3]"
  },
  {
    title: "Scalable Systems",
    desc: "Built for Growth",
    Icon: LuTrendingUp,
    bgColor: "bg-[#F8CFB1]/20",
    textColor: "text-[#F8CFB1]"
  },
];