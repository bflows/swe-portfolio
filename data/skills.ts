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
    skills: ["Express", "Node.js", "Prisma ORM", "REST APIs", "JSON Web Tokens"],
    Icon: LuServer,
    color: "#C3B1F8"
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Database Design", "Redis"],
    Icon: LuDatabase,
    color: "#F8B1B1"
  },
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Lua", "SQL", "C#"],
    Icon: LuCode,
    color: "#F8B1E3"
  },
  {
    title: "DevOps",
    skills: ["Docker", "AWS", "Kubernetes", "CI/CD Pipelines", "GitHub Actions"],
    Icon: LuNetwork,
    color: "#B1F8DF"
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Notion", "Agile / Scrum"],
    Icon: LuWrench,
    color: "#F8DAB1"
  },
];