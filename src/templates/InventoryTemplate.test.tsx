import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import InventoryTemplate from "./InventoryTemplate";
import type { Vehicle, SortKey } from "../types";

const baseProps = {
  zip: null as string | null,
  make: "All",
  color: "All",
  sort: "priceAsc" as SortKey,
  makeOptions: [] as string[],
  colorOptions: [] as string[],
  makeCounts: {} as Record<string, number>,
  colorCounts: {} as Record<string, number>,
  vehicles: [] as Vehicle[],
  error: null as string | null,
  onZipSubmit: () => {},
  onMakeChange: () => {},
  onColorChange: () => {},
  onSortChange: () => {},
  onReset: () => {},
};

describe("InventoryTemplate", () => {
  it("when zip is null it shows 'Please enter ZIP' and hides filters, sort with vehicle inventory", () => {
    render(<InventoryTemplate {...baseProps} />);

    expect(screen.getByText(/Fleet Explorer/i)).toBeInTheDocument();

    expect(screen.getByText(/Please enter ZIP/i)).toBeInTheDocument();

    expect(screen.queryByLabelText(/Make/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Color/i)).not.toBeInTheDocument();

    expect(screen.queryByText(/Sort/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("grid")).not.toBeInTheDocument();
  });

  it("after zip exists and vehicles available it shows filters, sort with vehicle inventory", () => {
    render(
      <InventoryTemplate
        {...baseProps}
        zip={"10001"}
        makeOptions={["Toyota"]}
        colorOptions={["Red"]}
        vehicles={[
          {
            id: "v1",
            make: "Toyota",
            model: "Corolla",
            trim: "LE",
            year: 2020,
            color: "Red",
            mileage: 12345,
            price: 18999,
            imageUrl: "https://example.com/corolla.jpg",
            zip: "10001",
          } as Vehicle,
        ]}
      />
    );

    expect(screen.queryByText(/Please enter ZIP/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText(/Make/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Color/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort/i)).toBeInTheDocument();
  });
});
