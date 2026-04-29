import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 0,
    title: "HVAC Blog CMS",
    desc: "Created a blog content management system for an HVAC company. Allows the company to post content, update posts, and manage their blog.",
    status: "live",
    techStack: ['Node.js', 'Express', 'MongoDB', 'Next.js', 'Axios', 'Tailwind CSS'],
    liveUrl: "https://www.ductdaddykc.com/blog",
    githubUrl: "https://github.com/flowz0/dd-platform"
  },
  {
    id: 1,
    title: "Software Engineer Portfolio",
    desc: "Designed and developed a responsive portfolio using modern technologies like Next.js and Tailwind CSS to showcase my skills and experience.",
    status: "live",
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: "https://billyf-portfolio.vercel.app/",
    githubUrl: "https://github.com/flowz0/swe-portfolio"
  },
  {
    id: 2,
    title: "Field Service Platform",
    desc: "Built a field-service platform featuring booking, dispatching, invoicing, payments, reporting, payroll tracking, and automated customer communication.",
    status: "building",
    techStack: ['Express', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Next.js', 'Redux', 'Axios', 'Tailwind CSS', 'Stripe API', 'Twilio API',],
    // liveUrl: "",
    githubUrl: "https://github.com/flowz0/d-enterprise-suite"
  },
];