import SectionContainer from "./SectionContainer";
import Button from "../ui/Button";
import Link from "next/link";
import { contactLinks, quickLinks } from "@/data/footer";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <SectionContainer>
      <footer className="mb-12 w-full md:flex md:items-start md:justify-between lg:mb-16">
        <div className="hidden lg:block lg:order-2">
          <h3 className="text-h6 font-bold text-brand950">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-p text-brand600 transition-colors duration-300 ease-in-out hover:text-brand800" >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-2">
          <h3 className="text-h6 font-bold text-brand950">
            Get In Touch
          </h3>
          <ul className="mt-4 flex flex-col gap-y-2">
            {contactLinks.map((link, index) => (
              <li key={index}>
                <Button href={link.href} target="_blank" className="w-fit" variant={link.primary ? "primary" : "secondary"} size="sm" rounded="full">
                  <div>
                    <link.Icon className="size-6" />
                  </div>
                  <p className="text-p">{link.label}</p>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 h-full lg:order-1 md:mt-0">
          <h3 className="text-h6 font-bold text-brand950">
            Billy Flowers
          </h3>
          <p className="mt-4 text-p max-w-104 text-brand800">
            Designed with Figma and coded in Visual Studio Code. Built with Next.js and Tailwind CSS.
          </p>
          <p className="mt-20 text-p text-brand400">
            © {year} Billy Flowers. All rights reserved.
          </p>
        </div>
      </footer>
    </SectionContainer>
  );
}