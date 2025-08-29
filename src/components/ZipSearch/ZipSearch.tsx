import { useState } from "react";
import "./ZipSearch.css";

type Props = {
  onSubmit(zip: string): void;
};

export function ZipSearch({ onSubmit }: Props) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
      aria-label="ZIP search"
      className="zip-search"
    >
      <label htmlFor="zip">ZIP code</label>
      <div className="zip-row">
        <input
          id="zip"
          name="zip"
          inputMode="numeric"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g., 02139"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}
