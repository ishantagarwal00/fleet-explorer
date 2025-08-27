import type { Vehicle } from "../types";

export function filterByMakeColor(
  items: Vehicle[],
  make?: string,
  color?: string
) {
  return items.filter((v) => {
    const makeOk = !make || make === "All" || v.make === make;
    const colorOk = !color || color === "All" || v.color === color;
    return makeOk && colorOk;
  });
}

export function facetCounts(items: Vehicle[]) {
  const makes: Record<string, number> = {};
  const colors: Record<string, number> = {};
  for (const v of items) {
    makes[v.make] = (makes[v.make] || 0) + 1;
    colors[v.color] = (colors[v.color] || 0) + 1;
  }
  return { makes, colors };
}
