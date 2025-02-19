import { Typography, Slider } from "@mui/material";
import useFilterStore from "../../Stores/FilterSore";
import { useCallback } from "react";
function PriceRange() {
  const { priceRange, setPriceRange } = useFilterStore();
  const handlePriceChange = useCallback(
    (_event: Event, newValue: number | number[]) => {
      if (Array.isArray(newValue)) {
        setPriceRange([newValue[0], newValue[1]]);
      }
    },
    []
  );
  return (
    <>
      <Typography
        variant="body2"
        sx={{ mb: 2, fontWeight: "500", color: "#555" }}
      >
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={2500}
        step={10}
        sx={{ mb: 3 }}
      />
    </>
  );
}
export default PriceRange;
