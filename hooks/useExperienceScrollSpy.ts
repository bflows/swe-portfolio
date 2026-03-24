"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type UseExperienceScrollSpyParams = {
  itemCount: number;
};

export function useExperienceScrollSpy({ itemCount }: UseExperienceScrollSpyParams) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const orderedIndexes = useMemo(() => Array.from({ length: itemCount }, (_, index) => index), [itemCount]);

  useEffect(() => {
    const visibleRatios = new Map<number, number>();

    const updateActiveFromVisible = () => {
      if (visibleRatios.size === 0) return;

      const nextActiveIndex = [...visibleRatios.entries()].reduce(
        (best, current) => (current[1] > best[1] ? current : best),
        [0, -1] as [number, number],
      )[0];

      setActiveIndex((prev) => (prev === nextActiveIndex ? prev : nextActiveIndex));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          const index = Number(target.dataset.index);
          if (Number.isNaN(index)) return;

          if (entry.isIntersecting) {
            visibleRatios.set(index, entry.intersectionRatio);
          } else {
            visibleRatios.delete(index);
          }
        });

        updateActiveFromVisible();
      },
      {
        threshold: [0.15, 0.35, 0.55, 0.75],
        rootMargin: "-15% 0px -15% 0px",
      },
    );

    orderedIndexes.forEach((index) => {
      const element = cardRefs.current[index];
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [orderedIndexes]);

  return {
    activeIndex,
    setCardRef: (index: number, element: HTMLDivElement | null) => {
      cardRefs.current[index] = element;
    },
  } as const;
}
