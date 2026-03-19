"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import MobileMenu from "./MobileMenu";

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

  useEffect(() => {
    if (!menuOpen) return;

    const handleInteractionOutside = (target: EventTarget | null) => {
      if (!(target instanceof Node)) return;
      if (navRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      setMenuOpen(false);
    };

    const handlePointerDown = (event: PointerEvent) => {
      handleInteractionOutside(event.target);
    };

    const handleFocusIn = (event: FocusEvent) => {
      handleInteractionOutside(event.target);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <nav ref={navRef} className="fixed h-20 z-50 left-4 right-4 top-4 px-6 rounded-2xl border backdrop-blur-lg shadow-2xl bg-brand100/80 border-brand200 shadow-brand100">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-primary text-h6 font-bold p-1 rounded-lg focus:outline-primary">
            {"<flowz />"}
          </Link>

          {/* Desktop: Nav Links */}
          <div className="hidden p-1 md:block">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="px-3 py-2 rounded-xl text-brand600 hover:bg-brand200">
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop: Other Links */}
          <div className="hidden lg:flex">
            <Link href="/">
              View CV
            </Link>
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