"use client";

import { useEffect } from "react";

/**
 * Locks or unlocks body scroll. When locked is true, prevents scrolling on the document body.
 * Restores overflow on unlock or when the component unmounts.
 */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);
}
