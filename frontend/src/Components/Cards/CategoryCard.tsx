import { Grid, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { CategoryCardProps } from "../../utils/Types/PropTypes";
import { memo } from "react";
function CategoryCard({ icon, name, index }: CategoryCardProps) {
  return (
    <Grid item xs={6} sm={3} key={index}>
      <Paper
        component={Link}
        to={`/products/categories?q=${name}`}
        elevation={2}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "8px",
          transition: "0.3s",
          textDecoration: "none",
          color: "inherit",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#e3f2fd",
          },
        }}
      >
        {icon}
        <Typography
          variant="subtitle1"
          sx={{ mt: 1, fontWeight: "500", color: "#333" }}
        >
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default memo(CategoryCard);
