import { useInventoryState } from "../../hooks/useInventoryState/useInventoryState";
import { vehicles as allVehicles } from "../../mockdata/vehicles";
import InventoryTemplate from "../../templates/InventoryTemplate";

const Inventory = () => {
  const { state, options, counts, derived, handlers } =
    useInventoryState(allVehicles);

  return (
    <InventoryTemplate
      zip={state.zip}
      make={state.make}
      color={state.color}
      sort={state.sort}
      makeOptions={options.makeOptions}
      colorOptions={options.colorOptions}
      makeCounts={counts.makeCounts}
      colorCounts={counts.colorCounts}
      vehicles={derived.vehicles}
      error={state.error}
      onZipSubmit={handlers.onZipSubmit}
      onMakeChange={handlers.onMakeChange}
      onColorChange={handlers.onColorChange}
      onSortChange={handlers.onSortChange}
      onReset={handlers.onReset}
    />
  );
};

export default Inventory;
