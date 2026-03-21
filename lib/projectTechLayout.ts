/** Flex-wrap line count for items laid out in a single row with a fixed gap. */
export function lineCount(
  widths: number[],
  gap: number,
  containerWidth: number,
  epsilon = 0.5
): number {
  if (containerWidth <= 0 || widths.length === 0) return 0;
  let lines = 1;
  let rowWidth = 0;
  for (const w of widths) {
    const add = rowWidth > 0 ? gap + w : w;
    if (rowWidth + add > containerWidth + epsilon) {
      lines++;
      rowWidth = w;
    } else {
      rowWidth += add;
    }
  }
  return lines;
}

export type TechStackSplit = {
  visibleCount: number;
  overflowCount: number;
};

/**
 * Chooses how many tech chips to show so the row fits in at most two lines,
 * accounting for the real width of a "+N more" chip.
 */
export function computeTechStackSplit(
  techWidths: number[],
  overflowChipWidths: number[],
  gap: number,
  containerWidth: number
): TechStackSplit {
  const n = techWidths.length;
  if (n === 0) return { visibleCount: 0, overflowCount: 0 };

  if (lineCount(techWidths, gap, containerWidth) <= 2) {
    return { visibleCount: n, overflowCount: 0 };
  }

  for (let visible = n - 1; visible >= 0; visible--) {
    const overflowCount = n - visible;
    const overflowWidth = overflowChipWidths[overflowCount - 1];
    if (overflowWidth === undefined) continue;
    const combined = [...techWidths.slice(0, visible), overflowWidth];
    if (lineCount(combined, gap, containerWidth) <= 2) {
      return { visibleCount: visible, overflowCount };
    }
  }
  return { visibleCount: 0, overflowCount: n };
}
