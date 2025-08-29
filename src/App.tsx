import InventoryPage from "./pages/InventoryPage/Inventory";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <InventoryPage />
      <Analytics />
    </div>
  );
}
