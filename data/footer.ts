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
    label: "billylflowers@gmail.com",
    href: "mailto:billylflowers@gmail.com",
    Icon: BiSolidInbox
  },
  {
    label: "github.com/bflows",
    href: "https://github.com/bflows",
    Icon: BiLogoGithub,
    primary: true
  },
  {
    label: "/billyflowers",
    href: "https://www.linkedin.com/in/billyflowers",
    Icon: BiLogoLinkedin
  },
];