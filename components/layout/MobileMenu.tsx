"use client";

import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { LuFileText } from "react-icons/lu";
import { RefObject, useMemo } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { navLinks } from "./Navbar";
import { ACTIVE_SECTION_OFFSET_PX, getSectionIdFromHref, useScrollSpy } from "@/hooks/useScrollSpy";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  menuRef: RefObject<HTMLDivElement | null>;
};

export default function MobileMenu({ isOpen, onClose, menuRef }: MobileMenuProps) {
  useLockBodyScroll(isOpen);

  const sectionHrefs = useMemo(() => navLinks.map(({ href }) => href), []);
  const { activeSectionId } = useScrollSpy({
    sectionHrefs,
    activeSectionOffsetPx: ACTIVE_SECTION_OFFSET_PX,
    enabled: isOpen,
  });

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className="z-50 fixed left-4 right-4 top-25 px-6 py-6 rounded-2xl border backdrop-blur-lg shadow-2xl bg-brand100/90 border-brand200 shadow-brand100">
      <div
        className="flex flex-col gap-y-1"
        role="menu"
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={
              activeSectionId === getSectionIdFromHref(href)
                ? "text-p py-1 px-3 w-fit rounded-lg bg-primary/20 text-primary ring-1 ring-primary/40"
                : "text-p py-1 px-3 w-fit rounded-lg text-brand600 hover:bg-brand200"
            }
            role="menuitem"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex items-center gap-x-2">
        <div>
          <Link
            href="/files/billy-flowers-resume.pdf"
            passHref
            target="_blank"
            className="px-3 py-2 bg-primary/20 text-primary rounded-lg flex items-center gap-x-2 w-fit outline-1 outline-primary/40"
          >
            <div>
              <LuFileText className="size-6" />
            </div>
            <span className="text-p">View CV</span>
          </Link>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/billyflowers/"
            passHref
            target="_blank"
            className="px-3 py-2 rounded-lg flex items-center gap-x-2 w-fit border bg-brand200 text-brand600 border-brand300"
          >
            <div>
              <BiLogoLinkedin className="size-6" />
            </div>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <div>
          <Link 
            href="https://github.com/flowz0" 
            passHref
            target="_blank"
            className="px-3 py-2 rounded-lg flex items-center gap-x-2 w-fit border bg-brand200 text-brand600 border-brand300"
          >
            <div>
              <BiLogoGithub className="size-6" />
            </div>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
