"use client";

import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { LuFileText } from "react-icons/lu";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { RefObject, useMemo } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { navLinks } from "./Navbar";
import { ACTIVE_SECTION_OFFSET_PX, getSectionIdFromHref, useScrollSpy } from "@/hooks/useScrollSpy";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  menuRef: RefObject<HTMLDivElement | null>;
};

const CONTAINER_DURATION = 0.15;
const CONTENT_FADE_DURATION = 0.05;
const CONTENT_OPEN_DELAY = CONTAINER_DURATION;

const containerVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: CONTAINER_DURATION, ease: "easeInOut" },
      opacity: { duration: CONTAINER_DURATION * 0.85, ease: "easeOut" },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: CONTAINER_DURATION,
        ease: "easeInOut",
        delay: CONTENT_FADE_DURATION,
      },
      opacity: {
        duration: CONTAINER_DURATION * 0.85,
        ease: "easeIn",
        delay: CONTENT_FADE_DURATION,
      },
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: CONTENT_OPEN_DELAY,
      duration: CONTENT_FADE_DURATION,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: CONTENT_FADE_DURATION, ease: "easeIn" },
  },
};

export default function MobileMenu({ isOpen, onClose, menuRef }: MobileMenuProps) {
  useLockBodyScroll(isOpen);

  const sectionHrefs = useMemo(() => navLinks.map(({ href }) => href), []);
  const { activeSectionId } = useScrollSpy({
    sectionHrefs,
    activeSectionOffsetPx: ACTIVE_SECTION_OFFSET_PX,
    enabled: isOpen,
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          className="z-50 fixed left-4 right-4 top-24 overflow-hidden rounded-4xl border backdrop-blur-lg shadow-2xl bg-brand100/90 border-brand200 shadow-brand100"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <motion.div className="px-6 py-6" variants={contentVariants}>
            <div className="flex flex-col gap-y-1" role="menu">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className={
                    activeSectionId === getSectionIdFromHref(href)
                      ? "text-p py-1 px-3 w-fit rounded-full bg-primary/20 text-primary ring-1 ring-primary/40"
                      : "text-p py-1 px-3 w-fit rounded-full text-brand600 hover:bg-brand200"
                  }
                  role="menuitem"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-x-2">
              <div>
                <Link
                  href="/files/billy-flowers-resume.pdf"
                  passHref
                  target="_blank"
                  className="px-4 py-2 bg-primary/20 text-primary rounded-full flex items-center gap-x-2 w-fit outline-1 outline-primary/40"
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
                  className="p-2 rounded-full flex items-center gap-x-2 w-fit border bg-brand200/40 text-brand600 border-brand200"
                >
                  <div>
                    <BiLogoLinkedin className="size-6" />
                  </div>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
              <div>
                <Link
                  href="https://github.com/bflows"
                  passHref
                  target="_blank"
                  className="p-2 rounded-full flex items-center gap-x-2 w-fit border bg-brand200/40 text-brand600 border-brand200"
                >
                  <div>
                    <BiLogoGithub className="size-6" />
                  </div>
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
