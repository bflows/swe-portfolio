import { ContactLinkType, QuickLinkType } from "@/types/footer";
import { BiLogoGithub, BiLogoLinkedin, BiSolidInbox } from "react-icons/bi";

export const quickLinks: QuickLinkType[] = [
  {
    title: "Home",
    href: "/#home"
  },
  {
    title: "Projects",
    href: "/#projects"
  },
  {
    title: "Skills",
    href: "/#skills"
  },
  {
    title: "About",
    href: "/#about"
  },
  {
    title: "Experience",
    href: "/#experience"
  },
];

export const contactLinks: ContactLinkType[] = [
  {
    label: "linkedin.com/in/billyflowers",
    href: "https://www.linkedin.com/in/billyflowers",
    Icon: BiLogoLinkedin
  },
  {
    label: "billylflowers@gmail.com",
    href: "mailto:billylflowers@gmail.com",
    Icon: BiSolidInbox
  },
  {
    label: "github.com/flowz0",
    href: "https://github.com/flowz0",
    Icon: BiLogoGithub,
    primary: true
  },
];