import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ErrorBanner } from "./ErrorBanner";

describe("ErrorBanner", () => {
  it("renders the error message and exposes role=alert", () => {
    render(<ErrorBanner message="Please enter ZIP" />);

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(/Please enter ZIP/i)).toBeInTheDocument();
  });
});
