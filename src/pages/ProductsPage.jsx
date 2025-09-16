import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getAllProducts } from "../api/Product";
import ProductsGrid from "../components/ProductGrid";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  // قراءة query param
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      if (categoryId) {
        // فلترة المنتجات حسب القسم
        const filtered = data.filter(
          (product) => product.category?.id === parseInt(categoryId)
        );
        setProducts(filtered);
      } else {
        setProducts(data); // كل المنتجات
      }
    };
    fetchProducts();
  }, [categoryId]);

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
        {categoryId ? `منتجات القسم` : "كل المنتجات"}
      </Typography>
      <ProductsGrid products={products} />
    </Container>
  );
};

export default ProductsPage;
