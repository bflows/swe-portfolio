"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type UseExperienceScrollSpyParams = {
  itemCount: number;
  /**
   * Minimum visible ratio to consider a card as an activation candidate on mobile.
   */
  mobileThreshold?: number;
  /**
   * Minimum visible ratio to consider a card as an activation candidate on desktop.
   */
  desktopThreshold?: number;
};

const MOBILE_BREAKPOINT_PX = 768;
const MOBILE_CENTER_BAND_PERCENT = 36;
const DESKTOP_CENTER_BAND_PERCENT = 24;
const DEFAULT_MOBILE_THRESHOLD = 0.10;
const DEFAULT_DESKTOP_THRESHOLD = 0.22;
const CENTER_SWITCH_THRESHOLD_PX = 20;

export function useExperienceScrollSpy({
  itemCount,
  mobileThreshold = DEFAULT_MOBILE_THRESHOLD,
  desktopThreshold = DEFAULT_DESKTOP_THRESHOLD,
}: UseExperienceScrollSpyParams) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const centerDistances = useRef(new Map<number, number>());

  const orderedIndexes = useMemo(() => Array.from({ length: itemCount }, (_, index) => index), [itemCount]);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const isMobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX - 1}px)`).matches;
    const centerBandPercent = isMobile ? MOBILE_CENTER_BAND_PERCENT : DESKTOP_CENTER_BAND_PERCENT;
    const minActiveRatio = isMobile ? mobileThreshold : desktopThreshold;
    const clampedCenterBandPercent = Math.min(Math.max(centerBandPercent, 10), 60);
    const clampedMinActiveRatio = Math.min(Math.max(minActiveRatio, 0), 1);
    const centerBandDeadZone = (100 - clampedCenterBandPercent) / 2;

    const updateActiveFromVisible = () => {
      if (centerDistances.current.size === 0) return;

      const next = [...centerDistances.current.entries()].reduce(
        (best, current) => (current[1] < best[1] ? current : best),
        [-1, Number.POSITIVE_INFINITY] as [number, number],
      );
      const currentDistance = centerDistances.current.get(activeIndexRef.current);
      const shouldSwitch =
        currentDistance === undefined || next[1] < currentDistance - CENTER_SWITCH_THRESHOLD_PX;

      if (shouldSwitch && next[0] !== -1) {
        setActiveIndex((prev) => (prev === next[0] ? prev : next[0]));
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          const index = Number(target.dataset.index);
          if (Number.isNaN(index)) return;

          if (entry.isIntersecting && entry.intersectionRatio >= clampedMinActiveRatio) {
            const viewportCenterY = window.innerHeight / 2;
            const cardCenterY = entry.boundingClientRect.top + entry.boundingClientRect.height / 2;
            centerDistances.current.set(index, Math.abs(cardCenterY - viewportCenterY));
          } else {
            centerDistances.current.delete(index);
          }
        });

        updateActiveFromVisible();
      },
      {
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.75],
        rootMargin: `-${centerBandDeadZone}% 0px -${centerBandDeadZone}% 0px`,
      },
    );

    orderedIndexes.forEach((index) => {
      const element = cardRefs.current[index];
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [
    orderedIndexes,
    mobileThreshold,
    desktopThreshold,
  ]);

  return {
    activeIndex,
    setCardRef: (index: number, element: HTMLDivElement | null) => {
      cardRefs.current[index] = element;
    },
  } as const;
}
