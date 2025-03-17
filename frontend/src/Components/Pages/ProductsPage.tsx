import { Typography, Paper, Container, CircularProgress } from "@mui/material";
import Filters from "../ProductsPageCompos/Filters";
import Product from "../Cards/ProductCard";
import useProducts from "../../helpers/hooks/useProducts";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
const PAGE_SIZE = 5;
const ProductsPage = () => {
  console.log("product page");
  const [currentpage, setCP] = useState(1);

  const { products, loading } = useProducts();
  const totalProducts = products.length;
  const noofpages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = (currentpage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log("currentpage", currentpage);
    console.log("value", value);
    setCP(value);
  };

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
        <Grid size={{ xs: 12, md: 3 }}>
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

        <Grid size={{ xs: 12, md: 9 }}>
          {loading ? (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ height: "300px" }}
            >
              <CircularProgress size={50} />
            </Grid>
          ) : products.length > 0 ? (
            <Grid container spacing={3}>
              {products.slice(start, end).map((product, index) => (
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
      <Grid container justifyContent="center">
        <Stack spacing={2}>
          <Pagination
            count={noofpages}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Stack>
      </Grid>
    </Container>
  );
};

export default ProductsPage;
