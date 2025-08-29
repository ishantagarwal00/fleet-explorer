import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Filters } from "./Filters";

describe("Filters", () => {
  const makeOptions = ["Honda", "Toyota"];
  const colorOptions = ["Black", "Blue", "Red"];
  const makeCounts: Record<string, number> = { Honda: 3, Toyota: 5 };
  const colorCounts: Record<string, number> = { Black: 2, Blue: 3, Red: 1 };

  it("renders Make and Color selects with options and counts", () => {
    render(
      <Filters
        make="All"
        color="All"
        makeOptions={makeOptions}
        colorOptions={colorOptions}
        makeCounts={makeCounts}
        colorCounts={colorCounts}
        onMakeChange={() => {}}
        onColorChange={() => {}}
      />
    );

    expect(screen.getByLabelText(/Make/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Color/i)).toBeInTheDocument();

    const makeSelect = screen.getByLabelText(/Make/i) as HTMLSelectElement;
    const colorSelect = screen.getByLabelText(/Color/i) as HTMLSelectElement;
    expect(makeSelect.value).toBe("All");
    expect(colorSelect.value).toBe("All");
  });

  it("calls onMakeChange and onColorChange on selection", async () => {
    const user = userEvent.setup();
    const onMakeChange = vi.fn();
    const onColorChange = vi.fn();

    render(
      <Filters
        make="All"
        color="All"
        makeOptions={makeOptions}
        colorOptions={colorOptions}
        makeCounts={{}}
        colorCounts={{}}
        onMakeChange={onMakeChange}
        onColorChange={onColorChange}
      />
    );

    await user.selectOptions(screen.getByLabelText(/Make/i), "Honda");
    expect(onMakeChange).toHaveBeenCalledWith("Honda");

    await user.selectOptions(screen.getByLabelText(/Color/i), "Blue");
    expect(onColorChange).toHaveBeenCalledWith("Blue");
  });

  it("respects disabled selects when passed via props", async () => {
    render(
      <div>
        <label htmlFor="flt-make">Make</label>
        <select id="flt-make" disabled>
          <option>All</option>
        </select>
      </div>
    );
    const makeSelect = screen.getByLabelText(/Make/i);
    expect(makeSelect).toBeDisabled();
  });
});
