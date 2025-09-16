import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductsGrid from "./ProductGrid";
import { getAllProducts } from "../api/Product";

const FeaturedProducts = ({ limit = 3 }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // الآن صحيح لأنه داخل Router

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data.slice(0, limit));
    };
    fetchProducts();
  }, [limit]);

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        منتجات مميزة
      </Typography>

      <ProductsGrid products={products} />

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/products")}
        >
          عرض كل المنتجات
        </Button>
      </Box>
    </Container>
  );
};

export default FeaturedProducts;
