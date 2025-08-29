import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VehicleGrid } from "./VehicleGrid";
import type { Vehicle } from "../../types";

describe("VehicleGrid (unit)", () => {
  it("renders an empty list when vehicles is empty", () => {
    render(<VehicleGrid vehicles={[]} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("renders one listitem per vehicle", () => {
    const vehicles: Vehicle[] = [
      {
        id: "1",
        make: "Toyota",
        model: "Camry",
        color: "Red",
        zip: "10001",
        price: 10,
        year: 2020,
        mileage: 15000,
        trim: "LE",
        imageUrl: "http://example.com/image1.jpg",
      },
      {
        id: "2",
        make: "Honda",
        model: "Civic",
        color: "Blue",
        zip: "10001",
        price: 12,
        year: 2019,
        mileage: 20000,
        trim: "LE",
        imageUrl: "http://example.com/image2.jpg",
      },
      {
        id: "3",
        make: "Ford",
        model: "Focus",
        color: "Black",
        zip: "10002",
        price: 9,
        year: 2018,
        mileage: 25000,
        trim: "LE",
        imageUrl: "http://example.com/image3.jpg",
      },
    ];
    render(<VehicleGrid vehicles={vehicles} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(vehicles.length);
  });
});
