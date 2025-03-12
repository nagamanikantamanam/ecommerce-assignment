import { Typography, Rating, Box } from "@mui/material";
import { ProductReviewType } from "../../utils/Types/CommonTypes";
import { memo } from "react";
function ProductReviews({ product }: ProductReviewType) {
  return (
    <>
    
      
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h6">Customer Reviews</Typography>
        {product?.reviews.map((review, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "grey.100",
              padding: 2,
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Rating value={review.rating} readOnly />
            <Typography
              sx={{
                fontSize: "1rem",
                fontStyle: "italic",
                color: "text.primary",
              }}
            >
              {review.review}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: "bold",
                color: "text.secondary",
              }}
            >
              - {review.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
export default memo(ProductReviews);
