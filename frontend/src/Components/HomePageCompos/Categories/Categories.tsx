import { Box, Grid, Typography, Container } from "@mui/material";
import CategoryCard from "../../Cards/CategoryCard";
import categories from "./categories-data";
function Categories() {
  return (
    <Box
      sx={{
        width: "90vw",
        backgroundColor: "#f5f5f5",
        py: 2,
        margin: "0 auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: "bold", textAlign: "center", color: "#333" }}
        >
          Shop by Category
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {categories.map((category, index) => (
            <CategoryCard
              name={category.name}
              index={index}
              icon={category.icon}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Categories;
