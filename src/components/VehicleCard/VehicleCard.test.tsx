import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VehicleCard } from "./VehicleCard";
import type { Vehicle } from "../../types";

describe("VehicleCard (unit)", () => {
  const vehicle = {
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
  } as Vehicle;

  it("renders image, title, trim, mileage, and price", () => {
    render(<VehicleCard vehicle={vehicle} />);
    expect(
      screen.getByAltText("2020 Toyota Corolla in Red")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /2020 Toyota Corolla/i })
    ).toBeInTheDocument();

    expect(screen.getByText("LE")).toBeInTheDocument();

    expect(screen.getByText(/12,345 mi/i)).toBeInTheDocument();

    expect(screen.getByText(/\$18,999/i)).toBeInTheDocument();
  });
});
