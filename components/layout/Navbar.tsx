"use client";

import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { LuFileText, LuMenu, LuX } from "react-icons/lu";
import MobileMenu from "./MobileMenu";
import { useDismissInteraction } from "@/hooks/useDismissInteraction";
import { ACTIVE_SECTION_OFFSET_PX, getSectionIdFromHref, useScrollSpy } from "@/hooks/useScrollSpy";
import Button from "../ui/Button";

type NavIndicator = {
  left: number;
  top: number;
  width: number;
  height: number;
  visible: boolean;
};

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
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState<NavIndicator>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    visible: false,
  });

  const sectionHrefs = useMemo(() => navLinks.map(({ href }) => href), []);
  const { activeSectionId } = useScrollSpy({ sectionHrefs, activeSectionOffsetPx: ACTIVE_SECTION_OFFSET_PX, enabled: true });

  const activeIndex = useMemo(
    () => navLinks.findIndex(({ href }) => activeSectionId === getSectionIdFromHref(href)),
    [activeSectionId],
  );

  const updateIndicator = useCallback(() => {
    const activeEl = activeIndex >= 0 ? linkRefs.current[activeIndex] : null;
    if (!activeEl) {
      setIndicator((prev) => (prev.visible ? { ...prev, visible: false } : prev));
      return;
    }

    setIndicator({
      left: activeEl.offsetLeft,
      top: activeEl.offsetTop,
      width: activeEl.offsetWidth,
      height: activeEl.offsetHeight,
      visible: true,
    });
  }, [activeIndex]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useLayoutEffect(() => {
    const container = navLinksContainerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => updateIndicator());
    observer.observe(container);
    window.addEventListener("resize", updateIndicator);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator]);

  useDismissInteraction({
    isActive: menuOpen,
    refs: [navRef, menuRef],
    onDismiss: () => setMenuOpen(false),
  });

  return (
    <>
      <nav ref={navRef} className="fixed max-w-7xl mx-auto h-20 z-50 left-4 right-4 top-4 px-6 rounded-2xl border backdrop-blur-lg shadow-2xl bg-brand100/90 border-brand200 shadow-brand100">
        <div className="flex items-center justify-between h-full">
          <Link href="/#home" className="text-primary text-h6 font-bold p-1 rounded-lg focus:outline-primary">
            {"<flowz />"}
          </Link>

          {/* Desktop: Nav Links */}
          <div ref={navLinksContainerRef} className="relative hidden items-center gap-x-1 md:flex">
            <span
              aria-hidden
              className={`pointer-events-none absolute rounded-xl bg-primary/20 ring-1 ring-primary/40 transition-[left,top,width,height,opacity] duration-300 ease-in-out ${
                indicator.visible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                left: indicator.left,
                top: indicator.top,
                width: indicator.width,
                height: indicator.height,
              }}
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
                  className={`relative z-10 text-p px-3 py-2 rounded-xl transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "text-primary"
                      : "text-brand400 hover:bg-brand200/50 hover:text-brand600"
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