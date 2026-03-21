import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 0,
    title: "HVAC Blog Content Management System",
    desc: "Designed and built a full-stack CMS for an HVAC blog. Enabling efficient content creation, editing, and publishing through a custom admin dashboard.",
    status: "live",
    techStack: ['TypeScript', 'Next.js', 'Axios', 'Tailwind CSS', 'Express', 'MongoDB', 'Node.js'],
    liveUrl: "https://www.ductdaddykc.com/blog",
    githubUrl: "https://github.com/flowz0/dd-platform"
  },
  {
    id: 1,
    title: "Software Engineer Portfolio",
    desc: "Designed and built a high-performance portfolio using Next.js, featuring a scalable component architecture, accessible UI, and optimized performance for a seamless user experience.",
    status: "building",
    techStack: ['TypeScript', 'Next.js', 'Axios', 'Tailwind CSS', 'Express', 'MongoDB', 'Node.js'],
    // liveUrl: "",
    githubUrl: "https://github.com/flowz0/swe-portfolio"
  },
  {
    id: 2,
    title: "Field Service Management Platform",
    desc: "Built a full-stack field service platform to streamline dispatching, scheduling, CRM, and payments, replacing third-party tools with a faster, more intuitive system for office staff and technicians.",
    status: "building",
    techStack: ['TypeScript', 'Next.js', 'Axios', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Prisma ORM', 'Node.js', 'Stripe', 'Twilio Messaging API'],
    // liveUrl: "",
    githubUrl: "https://github.com/flowz0/d-enterprise-suite"
  },
];