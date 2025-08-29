import type { Vehicle } from "../../types";
import { VehicleCard } from "../VehicleCard/VehicleCard";
import { RenderIfVisible } from "../RenderIfVisible/RenderIfVisible";
import "./VehicleGrid.css";

type Props = { vehicles: Vehicle[] };

export function VehicleGrid({ vehicles }: Props) {
  return (
    <div className="vehicle-grid" role="list">
      {vehicles.map((vehicle) => (
        <div role="listitem" key={vehicle.id}>
          <RenderIfVisible rootMargin="300px" minHeight={260}>
            <VehicleCard vehicle={vehicle} />
          </RenderIfVisible>
        </div>
      ))}
    </div>
  );
}
