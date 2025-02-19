import { Typography, Slider } from "@mui/material";
import useFilterStore from "../../Stores/FilterSore";
import { useCallback } from "react";
function MinimumDiscount() {
  const { discount, setDiscount } = useFilterStore();
  const handleDiscountChange = useCallback(
    (_event: Event, newValue: number | number[]) => {
      if (typeof newValue === "number") {
        setDiscount(newValue);
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
        Minimum Discount (%)
      </Typography>
      <Slider
        value={discount}
        onChange={handleDiscountChange}
        valueLabelDisplay="auto"
        min={0}
        max={50}
        step={5}
        sx={{ mb: 3 }}
      />
    </>
  );
}
export default MinimumDiscount;
