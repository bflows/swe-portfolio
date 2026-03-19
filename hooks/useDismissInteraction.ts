"use client";

import { RefObject, useEffect, useRef } from "react";

type UseDismissInteractionParams = {
  isActive: boolean;
  refs: RefObject<HTMLElement | null>[];
  onDismiss: () => void;
};

/**
 * Dismisses when users click/focus outside of the provided refs or press Escape.
 */
export function useDismissInteraction({
  isActive,
  refs,
  onDismiss,
}: UseDismissInteractionParams) {
  const refsRef = useRef(refs);

  useEffect(() => {
    refsRef.current = refs;
  }, [refs]);

  useEffect(() => {
    if (!isActive) return;

    const isOutsideAllRefs = (target: EventTarget | null) => {
      if (!(target instanceof Node)) return false;
      return refsRef.current.every((ref) => !ref.current?.contains(target));
    };

    const handleDismissIfOutside = (target: EventTarget | null) => {
      if (isOutsideAllRefs(target)) {
        onDismiss();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      handleDismissIfOutside(event.target);
    };

    const handleFocusIn = (event: FocusEvent) => {
      handleDismissIfOutside(event.target);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onDismiss();
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
  }, [isActive, onDismiss]);
}
