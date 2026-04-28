import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 0,
    title: "HVAC Blog CMS",
    desc: "Created a content management system to blog for an HVAC company. Custom dashboard to post, update, and view blog posts.",
    status: "live",
    techStack: ['TypeScript', 'Next.js', 'Axios', 'Tailwind CSS', 'Express', 'MongoDB', 'Node.js'],
    liveUrl: "https://www.ductdaddykc.com/blog",
    githubUrl: "https://github.com/flowz0/dd-platform"
  },
  {
    id: 1,
    title: "Software Engineer Portfolio",
    desc: "Designed and developed a responsive portfolio using modern technologies like Next.js to showcase my skills and experience.",
    status: "live",
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    liveUrl: "https://billyf-portfolio.vercel.app/",
    githubUrl: "https://github.com/flowz0/swe-portfolio"
  },
  {
    id: 2,
    title: "Field Service Platform",
    desc: "Built a field service platform to streamline dispatching, scheduling, CRM, payments, and other business operations efficiently.",
    status: "building",
    techStack: ['TypeScript', 'Next.js', 'Redux', 'Axios', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Prisma ORM', 'Node.js', 'Stripe', 'Twilio Messaging API'],
    // liveUrl: "",
    githubUrl: "https://github.com/flowz0/d-enterprise-suite"
  },
];