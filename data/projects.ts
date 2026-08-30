import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 0,
    title: "Text-based Social Media Platform",
    desc: "Contributed to a full-stack agile software development team by building reusable UI components and REST API integrations.",
    status: "archived",
    techStack: ['JavaScript', 'React', 'Bulma CSS', 'Axios', 'Express', 'Node.js', 'MongoDB', 'Figma'],
    githubUrl: "https://github.com/FrancescaImmediato/dev-duckies-sm-proj-front"
  },
  {
    id: 1,
    title: "Real-time Chat Application",
    desc: "Built a full-stack real-time chat application that enables secure messaging, image sharing, and persistent conversations.",
    status: "archived",
    techStack: ['TypeScript', 'React', 'Express', 'Node.js', 'Socket.IO', 'PostgreSQL'],
    githubUrl: "https://github.com/bflows/chat-app"
  },
  {
    id: 2,
    title: "Field Service Enterprise Suite",
    desc: "Unified platform featuring booking, dispatching, invoicing, payments, reporting, payroll tracking, automated reminders, and employee workflows.",
    status: "live",
    techStack: ['Express', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Next.js', 'Redux', 'Axios', 'Tailwind CSS', 'Stripe API', 'Twilio API',],
    liveUrl: "https://www.builtbydaddy.com/",
    githubUrl: "https://github.com/bflows/d-enterprise-suite"
  },
];