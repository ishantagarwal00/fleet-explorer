import type { ZipValidation } from "../types";

const ZIP_REGEX = /^\d{5}(-\d{4})?$/;

export function validateZip(input: string): ZipValidation {
  const value = input.trim();
  if (!value) return { status: false, error: "ZIP code is required" };
  if (!ZIP_REGEX.test(value))
    return { status: false, error: "Enter a valid US ZIP (e.g., 02139)" };
  return { status: true, zip: value };
}
