export type Vehicle = {
  id: string;
  zip: string;
  make: string;
  model: string;
  trim: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  imageUrl: string;
};

export type SortKey = "priceAsc" | "priceDesc" | "modelAsc";

export type ZipValidation =
  | { status: true; zip: string }
  | { status: false; error: string };
