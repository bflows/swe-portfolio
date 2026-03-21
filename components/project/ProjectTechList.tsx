"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { computeTechStackSplit, type TechStackSplit } from "@/lib/projectTechLayout";
import ProjectTechCard from "./ProjectTechCard";

const OFFSCREEN_ROOT =
  "pointer-events-none fixed -left-[9999px] top-0 flex flex-col gap-0";
const OFFSCREEN_ROW = "flex flex-nowrap gap-2";

type Props = { techStack: string[] };

export default function ProjectTechList({ techStack }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState<TechStackSplit | null>(null);

  const recompute = useCallback(() => {
    const container = containerRef.current;
    const measureRoot = measureRef.current;
    if (!container || !measureRoot) return;

    const w = container.offsetWidth;
    const gap = parseFloat(getComputedStyle(container).columnGap) || 8;

    const techWidths = Array.from(
      measureRoot.querySelectorAll<HTMLElement>("[data-tech-measure]")
    ).map((el) => el.offsetWidth);

    const overflowWidths = Array.from(
      measureRoot.querySelectorAll<HTMLElement>("[data-overflow-measure]")
    ).map((el) => el.offsetWidth);

    setSplit(computeTechStackSplit(techWidths, overflowWidths, gap, w));
  }, []);

  useLayoutEffect(() => {
    recompute();
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(recompute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [techStack, recompute]);

  const visibleCount = split?.visibleCount ?? techStack.length;
  const overflowCount = split?.overflowCount ?? 0;
  const showOverflow = overflowCount > 0;

  return (
    <>
      <div ref={measureRef} className={OFFSCREEN_ROOT} aria-hidden>
        <div className={OFFSCREEN_ROW}>
          {techStack.map((tech, index) => (
            <div key={`m-${tech}-${index}`} data-tech-measure>
              <ProjectTechCard label={tech} />
            </div>
          ))}
        </div>
        <div className={OFFSCREEN_ROW}>
          {techStack.map((_, index) => (
            <div key={`o-${index}`} data-overflow-measure>
              <ProjectTechCard label={`+${index + 1} more`} />
            </div>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="mt-4 flex flex-wrap gap-2">
        {techStack.slice(0, visibleCount).map((tech, index) => (
          <ProjectTechCard key={`${tech}-${index}`} label={tech} />
        ))}
        {showOverflow && <ProjectTechCard label={`+${overflowCount} more`} variant="secondary" />}
      </div>
    </>
  );
}
