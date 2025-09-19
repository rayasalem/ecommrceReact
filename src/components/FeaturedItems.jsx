import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductsGrid from "./ProductGrid";
import { getAllProducts, getAllCategories } from "../api/Product";

const FeaturedItems = ({ type = "product", limit = 3 }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let data = [];
        if (type === "product") {
          data = await getAllProducts();
        } else if (type === "category") {
          data = await getAllCategories();
        }
        setItems(data.slice(0, limit));
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, [type, limit]);

  return (
    <Container sx={{ py: 5 }}>
      <Typography 
        variant="h5" 
        sx={{ mb: 3, fontWeight: 700, textAlign: "center", color: "#9c27b0" }}
      >
        {type === "product" ? "Featured Products" : "Featured Categories"}
      </Typography>

      <ProductsGrid items={items} type={type} />

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(type === "product" ? "/products" : "/categories")}
        >
          {type === "product" ? "View All Products" : "View All Categories"}
        </Button>
      </Box>
    </Container>
  );
};

export default FeaturedItems;
