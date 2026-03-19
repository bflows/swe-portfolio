"use client";

import { useState } from "react";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-6 right-6 top-6 py-4 px-4 rounded-2xl border backdrop-blur-sm bg-brand100/90 border-brand300">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-primary text-h6 font-bold p-1 rounded-lg focus:outline-primary">
          {"<flowz />"}
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="p-1 rounded-lg transition-colors text-brand600 hover:bg-brand200/40 focus:outline-primary"
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

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
}