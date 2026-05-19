import { ExperienceCardProps } from "@/types/experience";

import LiftMarkLogo from "@/public/assets/liftmark-logo.png";
import DuctDaddyLogo from "@/public/assets/Duct-Daddy-logo.png";
import BVTLogo from "@/public/assets/bay_valley_tech_logo.jpg";

export const experiences: ExperienceCardProps[] = [
    {
      title: "Senior Software Engineer",
      company: "Liftmark",
      date: "May 2025 - Present",
      summary:
        "Developed a system supporting scheduling, dispatching, payments, and CRM. Streamlined operations by replacing multiple third-party tools saving $5K annually and improving workflow coordination.",
      tags: ["TypeScript", "Express", "Next.js", "Prisma ORM", "PostgreSQL"],
      img: LiftMarkLogo
    },
    {
      title: "Full Stack Software Engineer",
      company: "Duct Daddy",
      date: "Nov 2024 - Jul 2025",
      summary:
      "Built a custom CMS and marketing website enabling scalable content management. Integrated booking systems that helped drive revenue growth 300% in 6 months.",
      tags: ["TypeScript", "Next.js", "MongoDB", "Express", "Node.js"],
      img: DuctDaddyLogo
    },
    {
      title: "Frontend Software Engineer Intern",
      company: "Bay Valley Tech",
      date: "Mar 2024 - Sep 2024",
      summary:
      "Created a responsive React application with seamless navigation across devices and adaptive UI components. Integrated RESTful APIs for authentication and data handling in collaboration with backend teams.",
      tags: ["React", "JavaScript", "Figma", "UI/UX Design", "RESTful APIs"],
      img: BVTLogo
    },
  ];