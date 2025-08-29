import { useMemo, useState } from "react";
import type { Vehicle, SortKey } from "../../types";
import { validateZip } from "../../utils/zip";
import { sortVehicles } from "../../utils/sort";

type Counts = Record<string, number>;

export function useInventoryState(all: Vehicle[]) {
  const [zip, setZip] = useState<string | null>(null);
  const [make, setMake] = useState<string>("All");
  const [color, setColor] = useState<string>("All");
  const [sort, setSort] = useState<SortKey>("priceAsc");
  const [inlineError, setInlineError] = useState<string | null>(null);

  const base = useMemo(
    () => (zip ? all.filter((v) => v.zip === zip) : []),
    [zip, all]
  );

  const { vehicles, makeOptions, colorOptions, makeCounts, colorCounts } =
    useMemo(() => {
      const afterMake =
        make === "All" ? base : base.filter((v) => v.make === make);
      const afterColor =
        color === "All"
          ? afterMake
          : afterMake.filter((v) => v.color === color);

      const poolForMakes =
        color === "All" ? base : base.filter((v) => v.color === color);

      const poolForColors = afterMake;

      const makeOptions = Array.from(
        new Set(poolForMakes.map((v) => v.make))
      ).sort();
      const colorOptions = Array.from(
        new Set(poolForColors.map((v) => v.color))
      ).sort();

      const makeCounts: Counts = {};
      for (const v of poolForMakes)
        makeCounts[v.make] = (makeCounts[v.make] ?? 0) + 1;

      const colorCounts: Counts = {};
      for (const v of poolForColors)
        colorCounts[v.color] = (colorCounts[v.color] ?? 0) + 1;

      const vehicles = sortVehicles(afterColor, sort);

      return { vehicles, makeOptions, colorOptions, makeCounts, colorCounts };
    }, [base, make, color, sort]);

  function onZipSubmit(next: string) {
    const res = validateZip(next);
    if (!res.status) {
      setInlineError(res.error);
      return;
    }
    setInlineError(null);
    setZip(res.zip);
    setMake("All");
    setColor("All");
  }

  function onMakeChange(next: string) {
    const pool = next === "All" ? base : base.filter((v) => v.make === next);
    const validColors = new Set(pool.map((v) => v.color));
    setMake(next);
    setColor((prev) =>
      prev === "All" || validColors.has(prev) ? prev : "All"
    );
  }

  function onColorChange(next: string) {
    setColor(next);
  }

  function onSortChange(next: SortKey) {
    setSort(next);
  }

  function onReset() {
    setMake("All");
    setColor("All");
  }

  const topError =
    inlineError ||
    (zip && base.length === 0 ? "No vehicles found for this ZIP." : null);

  return {
    state: { zip, make, color, sort, error: topError },
    options: { makeOptions, colorOptions },
    counts: { makeCounts, colorCounts },
    derived: { vehicles },
    handlers: {
      onZipSubmit,
      onMakeChange,
      onColorChange,
      onSortChange,
      onReset,
    },
  };
}
