import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { ZipSearch } from "./ZipSearch";

describe("ZipSearch (Vitest)", () => {
  it("submits a valid zip and prevents submit for empty", async () => {
    const user = userEvent.setup();
    const onZipSubmit = vi.fn();
    render(<ZipSearch onSubmit={onZipSubmit} />);

    const input = screen.getByLabelText(/ZIP code/i) as HTMLInputElement;
    const button = screen.getByRole("button", { name: /Search/i });
    expect(input).toBeInTheDocument();

    await user.type(input, "10001");
    await user.click(button);
    expect(onZipSubmit).toHaveBeenCalledWith("10001");
  });
});
