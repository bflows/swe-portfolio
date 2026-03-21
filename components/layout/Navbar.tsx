"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { LuFileText, LuMenu, LuX } from "react-icons/lu";
import MobileMenu from "./MobileMenu";
import { useDismissInteraction } from "@/hooks/useDismissInteraction";
import { getSectionIdFromHref, useScrollSpy } from "@/hooks/useScrollSpy";
import Button from "../ui/Button";

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#Experience", label: "Experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const sectionHrefs = useMemo(() => navLinks.map(({ href }) => href), []);
  const { activeSectionId } = useScrollSpy({ sectionHrefs, activeSectionOffsetPx: 250, enabled: true });

  useDismissInteraction({
    isActive: menuOpen,
    refs: [navRef, menuRef],
    onDismiss: () => setMenuOpen(false),
  });

  return (
    <>
      <nav ref={navRef} className="fixed max-w-7xl mx-auto h-20 z-50 left-4 right-4 top-4 px-6 rounded-2xl border backdrop-blur-lg shadow-2xl bg-brand100/90 border-brand200 shadow-brand100">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-primary text-h6 font-bold p-1 rounded-lg focus:outline-primary">
            {"<flowz />"}
          </Link>

          {/* Desktop: Nav Links */}
          <div className="hidden items-center gap-x-1 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors duration-300 ease-in-out ${
                  activeSectionId === getSectionIdFromHref(href)
                    ? "text-p px-3 py-2 rounded-xl bg-primary/20 text-primary ring-1 ring-primary/40"
                    : "text-p px-3 py-2 rounded-xl text-brand600 hover:bg-brand200/50"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop: Other Links */}
          <div className="hidden lg:flex">
            <div>
              <Button href="/files/billy-flowers-resume.pdf" target="_blank" variant="secondary">
                <div>
                  <LuFileText className="size-6" />
                </div>
                <span className="text-p">View CV</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-1 rounded-lg transition-colors text-brand600 md:hidden hover:bg-brand200/40 focus:outline-primary"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <LuX className="size-8" />
            ) : (
              <LuMenu className="size-8" />
            )}
          </button>
        </div>

      </nav>
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        menuRef={menuRef}
      />
    </>
  );
}