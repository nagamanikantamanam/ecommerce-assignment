import PriceRange from "./PriceRange";
import MinRating from "./MinRating";
import { Button, Typography } from "@mui/material";
import useFilterStore from "../../Stores/FilterSore";
import { useNavigate } from "react-router-dom";


import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
function Filters() {
  const { priceRange } = useFilterStore();
  const { rating } = useFilterStore();
  const navigate=useNavigate();
  const handleClick = () => {
    navigate(`?searchquery=&category=&minp=${priceRange[0]}&maxp=${priceRange[1]}&minrat=${rating}`);
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{ mb: 3, fontWeight: "bold", color: "#333" }}
      >
        Filters
      </Typography>
      <PriceRange></PriceRange>
      <MinRating></MinRating>
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
        apply
      </Button>
    
    </>
  );
}
export default Filters;
