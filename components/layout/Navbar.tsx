"use client";

import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { LuFileText, LuMenu, LuX } from "react-icons/lu";
import MobileMenu from "./MobileMenu";
import { useDismissInteraction } from "@/hooks/useDismissInteraction";
import { ACTIVE_SECTION_OFFSET_PX, getSectionIdFromHref, useScrollSpy } from "@/hooks/useScrollSpy";
import Button from "../ui/Button";

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navLinksContainerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const sectionHrefs = useMemo(() => navLinks.map(({ href }) => href), []);
  const { activeSectionId } = useScrollSpy({ sectionHrefs, activeSectionOffsetPx: ACTIVE_SECTION_OFFSET_PX, enabled: true });

  const activeIndex = useMemo(
    () => navLinks.findIndex(({ href }) => activeSectionId === getSectionIdFromHref(href)),
    [activeSectionId],
  );

  const positionIndicator = useCallback(() => {
    const indicator = indicatorRef.current;
    const activeEl = activeIndex >= 0 ? linkRefs.current[activeIndex] : null;
    if (!indicator) return;

    if (!activeEl) {
      indicator.style.opacity = "0";
      return;
    }

    indicator.style.left = `${activeEl.offsetLeft}px`;
    indicator.style.top = `${activeEl.offsetTop}px`;
    indicator.style.width = `${activeEl.offsetWidth}px`;
    indicator.style.height = `${activeEl.offsetHeight}px`;
    indicator.style.opacity = "1";
  }, [activeIndex]);

  useLayoutEffect(() => {
    positionIndicator();
  }, [positionIndicator]);

  useLayoutEffect(() => {
    const container = navLinksContainerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => positionIndicator());
    observer.observe(container);
    window.addEventListener("resize", positionIndicator);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", positionIndicator);
    };
  }, [positionIndicator]);

  useDismissInteraction({
    isActive: menuOpen,
    refs: [navRef, menuRef],
    onDismiss: () => setMenuOpen(false),
  });

  return (
    <>
      <nav ref={navRef} className="fixed max-w-7xl mx-auto h-20 z-50 left-4 right-4 top-4 pl-8 pr-8 lg:pr-4 rounded-full border backdrop-blur-lg shadow-2xl bg-brand100/80 border-brand200 shadow-brand100">
        <div className="flex items-center justify-between h-full">
          <Link href="/#home" className="text-primary text-h6 font-bold p-1 rounded-lg focus:outline-primary">
            Billy Flowers
          </Link>

          {/* Desktop: Nav Links */}
          <div ref={navLinksContainerRef} className="relative hidden items-center gap-x-2 md:flex">
            <span
              ref={indicatorRef}
              aria-hidden
              className="pointer-events-none absolute rounded-full bg-primary/20 opacity-0 ring-1 ring-primary/40 transition-[left,top,width,height,opacity] duration-300 ease-in-out"
            />
            {navLinks.map(({ href, label }, index) => {
              const isActive = activeSectionId === getSectionIdFromHref(href);
              return (
                <Link
                  key={href}
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  href={href}
                  className={`relative z-10 text-p px-3 py-2 rounded-full transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "text-primary"
                      : "text-brand600 hover:bg-brand200/40 hover:text-brand800"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Desktop: Other Links */}
          <div className="hidden lg:flex">
            <div>
              <Button href="/files/billy-flowers-resume.pdf" target="_blank" variant="secondary" rounded="full">
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
            className="transition-colors text-brand600 md:hidden hover:bg-brand200/40 focus:outline-primary"
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