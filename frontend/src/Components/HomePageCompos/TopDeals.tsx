import { useRef } from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Product from "../Cards/ProductCard";
import settings from "../../utils/slidersettings";
import { ProductType } from "../../utils/Types/CommonTypes";
import useTopDeals from "../../helpers/hooks/useTopDeals";
function TopDeals() {
  const sliderRef = useRef(null);
  const products: ProductType[] = useTopDeals();
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "#fff",
        py: 4,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{ mb: 3, fontWeight: "bold", textAlign: "center", color: "#333" }}
        >
          🔥 Top Deals
        </Typography>

        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={() => sliderRef.current?.slickPrev()}
            sx={{
              position: "absolute",
              top: "50%",
              left: "-40px",
              transform: "translateY(-50%)",
              zIndex: 2,
              backgroundColor: "#fff",
              boxShadow: 2,
              "&:hover": { backgroundColor: "#ddd" },
              display: { xs: "none", sm: "flex" }, // Hide on small screens
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <Slider ref={sliderRef} {...settings}>
            {products.map((product, index) => (
              <Product product={product} index={index}></Product>
            ))}
          </Slider>

          <IconButton
            onClick={() => sliderRef.current?.slickNext()}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-40px",
              transform: "translateY(-50%)",
              zIndex: 2,
              backgroundColor: "#fff",
              boxShadow: 2,
              "&:hover": { backgroundColor: "#ddd" },
              display: { xs: "none", sm: "flex" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default TopDeals;
