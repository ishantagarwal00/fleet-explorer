import type { Vehicle, SortKey } from "../types";
import { ZipSearch } from "../components/ZipSearch/ZipSearch";
import { Filters } from "../components/Filters/Filters";
import { SortBar } from "../components/SortBar/SortBar";
import { VehicleGrid } from "../components/VehicleGrid/VehicleGrid";
import { EmptyState } from "../components/EmptyState/EmptyState";
import { ErrorBanner } from "../components/ErrorBanner/ErrorBanner";
import "./InventoryTemplate.css";

type Props = {
  zip: string | null;
  make: string;
  color: string;
  sort: SortKey;
  makeOptions: string[];
  colorOptions: string[];
  makeCounts: Record<string, number>;
  colorCounts: Record<string, number>;
  vehicles: Vehicle[];
  error: string | null;
  onZipSubmit(zip: string): void;
  onMakeChange(make: string): void;
  onColorChange(color: string): void;
  onSortChange(sort: SortKey): void;
  onReset(): void;
};

const InventoryTemplate = (props: Props) => {
  const {
    zip,
    make,
    color,
    makeOptions,
    colorOptions,
    makeCounts,
    colorCounts,
    sort,
    error,
    vehicles,
    onZipSubmit,
    onMakeChange,
    onColorChange,
    onSortChange,
    onReset,
  } = props;

  const disabled = !zip;

  const renderContent = () => {
    if (disabled) {
      return (
        <EmptyState
          title="Please enter ZIP"
          description="Enter a valid ZIP code to view vehicles in that area."
        />
      );
    } else if (error) {
      return <ErrorBanner message={error} />;
    } else if (vehicles.length === 0) {
      return (
        <EmptyState
          title="Please enter ZIP"
          description="Enter a valid ZIP code to view vehicles in that area."
          onReset={onReset}
        />
      );
    } else
      return (
        <>
          <SortBar sort={sort} onSortChange={onSortChange} />
          <VehicleGrid vehicles={vehicles} />
        </>
      );
  };

  return (
    <div className="inventory-layout">
      <div className="inventory-header">Fleet Explorer</div>
      <div className="inventory-content">
        <aside className="inventory-sidebar">
          <ZipSearch onSubmit={onZipSubmit} />
          {!disabled && (
            <Filters
              make={make}
              color={color}
              makeOptions={makeOptions}
              colorOptions={colorOptions}
              makeCounts={makeCounts}
              colorCounts={colorCounts}
              onMakeChange={onMakeChange}
              onColorChange={onColorChange}
            />
          )}
        </aside>
        <main className="inventory-main">{renderContent()}</main>
      </div>
    </div>
  );
};

export default InventoryTemplate;
