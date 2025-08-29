import type { Vehicle } from "../types";

const img = (id: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(id)}/800/450`;

const BASE: Omit<Vehicle, "id" | "imageUrl">[] = [
  {
    year: 2020,
    make: "Toyota",
    model: "Corolla",
    trim: "LE",
    color: "Silver",
    price: 20400,
    mileage: 45620,
    zip: "10001",
  },
  {
    year: 2018,
    make: "BMW",
    model: "X3",
    trim: "xDrive30i",
    color: "Black",
    price: 26800,
    mileage: 73210,
    zip: "02139",
  },
  {
    year: 2022,
    make: "Toyota",
    model: "Camry",
    trim: "SE",
    color: "Red",
    price: 27900,
    mileage: 22150,
    zip: "60601",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Mustang",
    trim: "EcoBoost",
    color: "Blue",
    price: 24900,
    mileage: 88450,
    zip: "10001",
  },
  {
    year: 2021,
    make: "Honda",
    model: "Accord",
    trim: "EX-L",
    color: "White",
    price: 31200,
    mileage: 30580,
    zip: "94016",
  },
  {
    year: 2023,
    make: "Hyundai",
    model: "Tucson",
    trim: "SEL AWD",
    color: "Gray",
    price: 33800,
    mileage: 18420,
    zip: "10001",
  },
  {
    year: 2019,
    make: "Hyundai",
    model: "Kona",
    trim: "Limited",
    color: "Red",
    price: 19950,
    mileage: 67640,
    zip: "30301",
  },
  {
    year: 2017,
    make: "Hyundai",
    model: "Elantra",
    trim: "Value Edition",
    color: "Blue",
    price: 11900,
    mileage: 95870,
    zip: "02139",
  },
  {
    year: 2016,
    make: "Hyundai",
    model: "Elantra",
    trim: "SE",
    color: "Silver",
    price: 9900,
    mileage: 121300,
    zip: "60601",
  },
  {
    year: 2023,
    make: "Honda",
    model: "Accord",
    trim: "Sport",
    color: "Black",
    price: 35500,
    mileage: 26400,
    zip: "94016",
  },
];

const COLORS = ["Black", "White", "Silver", "Gray", "Blue", "Red"];
const ZIPS = ["10001", "02139", "60601", "94016", "30301", "73301"];
const COUNT = 800;

function pad(num: number, len = 6) {
  return String(num).padStart(len, "0");
}

export const vehicles: Vehicle[] = Array.from({ length: COUNT }, (_, i) => {
  const base = BASE[i % BASE.length];
  const id = `PD-${pad(i + 1)}`;

  const color = COLORS[(i + (i % 5)) % COLORS.length];
  const zip = ZIPS[(i + (i % 7)) % ZIPS.length];
  const price = Math.max(6000, base.price + ((i % 7) - 3) * 100);
  const mileage = Math.max(0, base.mileage + (i % 9) * 250);

  return {
    id,
    year: base.year,
    make: base.make,
    model: base.model,
    trim: base.trim,
    color,
    price,
    mileage,
    zip,
    imageUrl: img(id),
  };
});
