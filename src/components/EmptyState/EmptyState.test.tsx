import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders title, description button, and calls onReset on click", async () => {
    const user = userEvent.setup();
    const onReset = vi.fn();
    render(
      <EmptyState
        title="No vehicles found for this ZIP."
        description="Try a nearby ZIP or reset filters."
        onReset={onReset}
      />
    );
    expect(screen.getByRole("status")).toHaveTextContent(
      /No vehicles found for this ZIP\./i
    );
    const btn = screen.getByRole("button", {
      name: /Try a nearby ZIP or reset filters\./i,
    });

    expect(btn).toBeInTheDocument();
    await user.click(btn);
    expect(onReset).toHaveBeenCalledTimes(1);
  });
});
