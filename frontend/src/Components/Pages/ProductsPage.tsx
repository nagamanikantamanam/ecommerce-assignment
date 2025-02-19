import {
  Grid,
  Typography,
  Paper,
  Container,
  CircularProgress,
} from "@mui/material";
import Filters from "../ProductsPageCompos/Filters";
import Product from "../Cards/ProductCard";
import useProducts from "../../helpers/hooks/useProducts";
import useFilterStore from "../../Stores/FilterSore";

function ProductsPage() {
  console.log("product page");
  const { priceRange, rating, discount } = useFilterStore();

  const { products, loading } = useProducts();

  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      product.rating >= rating &&
      product.discountPercentage >= discount
  );

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper
            sx={{
              p: 3,
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              backgroundColor: "#fff",
              position: "sticky",
              top: "80px",
              height: "auto",
            }}
          >
            <Typography
              variant="h6"
              sx={{ mb: 3, fontWeight: "bold", color: "#333" }}
            >
              Filters
            </Typography>
            <Filters />
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          {loading ? (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ height: "300px" }}
            >
              <CircularProgress size={50} />
            </Grid>
          ) : filteredProducts.length > 0 ? (
            <Grid container spacing={3}>
              {filteredProducts.map((product, index) => (
                <Product product={product} index={index} key={index} />
              ))}
            </Grid>
          ) : (
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "#666" }}
            >
              No products found
            </Typography>
          )}
        </Grid>
      </Grid>
      {(() => {
        console.log("nedered jsx");
        return 1;
      })()}
    </Container>
  );
}

export default ProductsPage;
