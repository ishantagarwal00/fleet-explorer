import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { SortBar } from "./SortBar";

describe("SortBar", () => {
  it("renders with current sort selected and changes on user input", async () => {
    const user = userEvent.setup();
    const onSortChange = vi.fn();
    render(<SortBar sort="priceAsc" onSortChange={onSortChange} />);

    const select = screen.getByLabelText(/Sort by/i) as HTMLSelectElement;
    expect(select.value).toBe("priceAsc");

    await user.selectOptions(select, "priceDesc");
    expect(onSortChange).toHaveBeenCalledWith("priceDesc");
  });
});
