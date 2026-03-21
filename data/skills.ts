import { SkillCategory } from "@/types/skill";
import { LuCode, LuDatabase, LuGlobe, LuNetwork, LuServer, LuWrench } from "react-icons/lu";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Redux", "Axios", "Tailwind CSS", "CSS3", "HTML5"],
    Icon: LuGlobe,
    color: "#B1ECF8"
  },
  {
    title: "Backend",
    skills: ["Express", "Node.js", "Python", "GraphQL", "REST APIs"],
    Icon: LuServer,
    color: "#C3B1F8"
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Redis"],
    Icon: LuDatabase,
    color: "#F8B1B1"
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Lua", "SQL", "C#"],
    Icon: LuCode,
    color: "#F8B1E3"
  },
  {
    title: "DevOps",
    skills: ["Docker", "AWS", "Kubernetes", "CI/CD", "Linux", "GitHub Actions"],
    Icon: LuNetwork,
    color: "#B1F8DF"
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Agile / Scrum"],
    Icon: LuWrench,
    color: "#F8DAB1"
  },
];