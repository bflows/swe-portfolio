import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 0,
    title: "Software Engineer Portfolio",
    desc: "Designed my new portfolio using modern technologies like Next.js and Tailwind CSS to showcase my skills and experience.",
    status: "live",
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel', 'Figma'],
    liveUrl: "https://billyf-portfolio.vercel.app/",
    githubUrl: "https://github.com/flowz0/swe-portfolio"
  },
  {
    id: 1,
    title: "Content Management System",
    desc: "Built a secure blog CMS for an HVAC company which enables employees to post content, manage posts, and appear in related Google search results.",
    status: "live",
    techStack: ['Node.js', 'Express', 'MongoDB', 'Next.js', 'Axios', 'Tailwind CSS'],
    liveUrl: "https://www.ductdaddykc.com/blog",
    githubUrl: "https://github.com/flowz0/dd-platform"
  },
  {
    id: 2,
    title: "Field Service Platform",
    desc: "Enterprise suite featuring booking, dispatching, invoicing, payments, reporting, payroll tracking, and automated customer communication.",
    status: "live",
    techStack: ['Express', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Next.js', 'Redux', 'Axios', 'Tailwind CSS', 'Stripe API', 'Twilio API',],
    // liveUrl: "",
    githubUrl: "https://github.com/flowz0/d-enterprise-suite"
  },
];