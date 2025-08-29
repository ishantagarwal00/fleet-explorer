import type { SortKey } from "../../types";
import "./SortBar.css";

type Props = {
  sort: SortKey;
  onSortChange(next: SortKey): void;
};

export function SortBar({ sort, onSortChange }: Props) {
  return (
    <div className="sortbar" aria-label="Sort options">
      <label htmlFor="sort">Sort by</label>
      <select
        id="sort"
        value={sort}
        onChange={(e) => onSortChange(e.target.value as SortKey)}
        className="sort-dropdown"
      >
        <option value="priceAsc">Price Low</option>
        <option value="priceDesc">Price High</option>
        <option value="modelAsc">Model</option>
      </select>
    </div>
  );
}
