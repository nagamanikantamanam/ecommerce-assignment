import { Typography, Rating } from "@mui/material";
import useFilterStore from "../../Stores/FilterSore";
import { useCallback } from "react";
function MinRating() {
  const { rating, setRating } = useFilterStore();
  const handleRatingChange = useCallback(
    (_event: React.SyntheticEvent, newValue: number | null) => {
      setRating(newValue ?? 0);
    },
    []
  );
  return (
    <>
      <Typography
        variant="body2"
        sx={{ mb: 2, fontWeight: "500", color: "#555" }}
      >
        Minimum Rating
      </Typography>
      <Rating
        name="rating-filter"
        value={rating}
        onChange={handleRatingChange}
        precision={0.5}
        sx={{ mb: 3 }}
      />
    </>
  );
}
export default MinRating;
