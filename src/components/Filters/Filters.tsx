import "./Filters.css";

type FilterProps = {
  make: string;
  color: string;
  makeOptions: string[];
  colorOptions: string[];
  makeCounts: Record<string, number>;
  colorCounts: Record<string, number>;
  onMakeChange: (v: string) => void;
  onColorChange: (v: string) => void;
};

export function Filters({
  make,
  color,
  makeOptions,
  colorOptions,
  makeCounts,
  colorCounts,
  onMakeChange,
  onColorChange,
}: FilterProps) {
  return (
    <div className="filters">
      <div className="filters-group">
        <label className="filters-label" htmlFor="flt-make">
          Make
        </label>
        <select
          id="flt-make"
          className="filters-select"
          value={make}
          onChange={(e) => onMakeChange(e.target.value)}
        >
          <option value="All">All</option>
          {makeOptions.map((eachOption) => (
            <option key={eachOption} value={eachOption}>
              {eachOption}{" "}
              {makeCounts?.[eachOption] != null
                ? `(${makeCounts[eachOption]})`
                : ""}
            </option>
          ))}
        </select>
      </div>
      <div className="filters-group">
        <label className="filters-label" htmlFor="flt-color">
          Color
        </label>
        <select
          id="flt-color"
          className="filters-select"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
        >
          <option value="All">All</option>
          {colorOptions.map((eachOption) => (
            <option key={eachOption} value={eachOption}>
              {eachOption}{" "}
              {colorCounts?.[eachOption] != null
                ? `(${colorCounts[eachOption]})`
                : ""}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
