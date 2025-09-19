import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ProductsGrid from "./ProductGrid";
import { getAllProducts } from "../api/Product";
import { useNavigate } from "react-router-dom";

const HotDeals = ({ limit = 3 }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data.slice(2, 2 + limit));
    };
    fetchProducts();
  }, [limit]);

  return (
    <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            textAlign: "center",
            color: "#d32f2f",
          }}
        >
          Hot Deals 🔥
        </Typography>

        <ProductsGrid items={products} type="product" />

        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ px: 5, py: 1.5, fontWeight: 600 }}
            onClick={() => navigate("/products")}
          >
            View All Deals
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HotDeals;
