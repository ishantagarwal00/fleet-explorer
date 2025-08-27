import type { Vehicle, SortKey } from "../types";

export function sortVehicles(items: Vehicle[], key: SortKey) {
  const arr = [...items];
  switch (key) {
    case "priceAsc":
      return arr.sort((a, b) => a.price - b.price);
    case "priceDesc":
      return arr.sort((a, b) => b.price - a.price);
    case "modelAsc":
      return arr.sort((a, b) => a.model.localeCompare(b.model));
    default:
      return arr;
  }
}
