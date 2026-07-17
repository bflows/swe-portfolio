import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 0,
    title: "Software Engineer Portfolio Website",
    desc: "Created my new portfolio using modern technologies like Next.js and Tailwind CSS to showcase my skills and experience.",
    status: "live",
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel', 'Figma'],
    liveUrl: "https://billyf-portfolio.vercel.app/",
    githubUrl: "https://github.com/flows0/swe-portfolio"
  },
  {
    id: 1,
    title: "Property Preservation Landing Page",
    desc: "Designed and launched a responsive website that improves the company's online presence and generates customer inquiries.",
    status: "live",
    techStack: ['Next.js', 'Tailwind CSS', 'Managed Hosting', 'Maintenance'],
    liveUrl: "https://www.littletykeskc.com/",
    githubUrl: "https://github.com/flows0/little-tykes"
  },
  // {
  //   id: 1,
  //   title: "Blog Content Management System",
  //   desc: "Built a business website, CMS, and online booking system for an HVAC company which led to a 300% revenue increase within six months.",
  //   status: "live",
  //   techStack: ['Node.js', 'Express', 'MongoDB', 'Next.js', 'Axios', 'Tailwind CSS'],
  //   liveUrl: "https://www.ductdaddykc.com/blog",
  //   githubUrl: "https://github.com/flows0/dd-platform"
  // },
  {
    id: 2,
    title: "Field Service Enterprise Suite",
    desc: "Unified platform featuring booking, dispatching, invoicing, payments, reporting, payroll tracking, and automated customer communication.",
    status: "live",
    techStack: ['Express', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Next.js', 'Redux', 'Axios', 'Tailwind CSS', 'Stripe API', 'Twilio API',],
    liveUrl: "https://www.builtbydaddy.com/",
    githubUrl: "https://github.com/flows0/d-enterprise-suite"
  },
];