import "./VehicleCard.css";
import type { Vehicle } from "../../types";
import { Image } from "../Image/Image";

type Props = { vehicle: Vehicle };

export function VehicleCard({ vehicle }: Props) {
  const { make, model, trim, year, color, mileage, price, imageUrl } = vehicle;
  return (
    <article className="vehicle-card">
      <div className="image-wrap">
        <Image
          src={imageUrl}
          alt={`${year} ${make} ${model} in ${color}`}
          loading="lazy"
        />
      </div>
      <div className="vehicle-body">
        <h3 className="title">
          {year} {make} {model}
        </h3>
        <p className="subtitle">{trim}</p>
        <ul className="meta">
          <li>Color: {color}</li>
          <li>Mileage: {mileage.toLocaleString()} mi</li>
        </ul>
        <div className="price">${price.toLocaleString()}</div>
      </div>
    </article>
  );
}
