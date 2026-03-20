"use client";

import { useEffect, useMemo, useState } from "react";

export function getSectionIdFromHref(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  const hash = href.slice(hashIndex + 1);
  if (!hash) return null;
  return decodeURIComponent(hash);
}

export type UseScrollSpyParams = {
  /**
   * Hrefs like `"/#about"` or `"/#projects"`; the hash fragment is used as the section id.
   */
  sectionHrefs: string[];
  /**
   * Approximate "top threshold" used to decide which section is active.
   */
  activeSectionOffsetPx?: number;
  /**
   * When false, avoids registering scroll/resize listeners.
   */
  enabled?: boolean;
};

const DEFAULT_ACTIVE_SECTION_OFFSET_PX = 250;

export function useScrollSpy({
  sectionHrefs,
  activeSectionOffsetPx = DEFAULT_ACTIVE_SECTION_OFFSET_PX,
  enabled = true,
}: UseScrollSpyParams) {
  const sectionIds = useMemo(
    () => sectionHrefs.map(getSectionIdFromHref).filter((v): v is string => Boolean(v)),
    [sectionHrefs],
  );

  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let rafId: number | null = null;

    const computeActiveSection = () => {
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));

      if (elements.length === 0) return;

      // Sort by actual position in the document.
      elements.sort(
        (a, b) =>
          a.getBoundingClientRect().top + window.scrollY - (b.getBoundingClientRect().top + window.scrollY),
      );

      let currentId: string | null = elements[0]?.id ?? null;
      for (const el of elements) {
        const topRelativeToViewport = el.getBoundingClientRect().top;
        if (topRelativeToViewport - activeSectionOffsetPx <= 0) {
          currentId = el.id;
        } else {
          break;
        }
      }

      setActiveSectionId((prev) => (prev === currentId ? prev : currentId));
    };

    const scheduleCompute = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        computeActiveSection();
      });
    };

    const initFromHashOrScroll = () => {
      const hashId = window.location.hash ? decodeURIComponent(window.location.hash.slice(1)) : null;
      if (hashId && sectionIds.includes(hashId) && document.getElementById(hashId)) {
        setActiveSectionId(hashId);
      } else {
        computeActiveSection();
      }
    };

    initFromHashOrScroll();
    window.addEventListener("scroll", scheduleCompute, { passive: true });
    window.addEventListener("resize", scheduleCompute);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleCompute);
      window.removeEventListener("resize", scheduleCompute);
    };
  }, [enabled, sectionIds, activeSectionOffsetPx]);

  return { activeSectionId, sectionIds } as const;
}

