import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCategoryById, getAllProducts } from "../api/Product";
import { Box, Container, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";

const CategoryProductsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cat = await getCategoryById(id);
        setCategory(cat);

        const allProducts = await getAllProducts();
        const filtered = allProducts.filter(p => p.category?.id === Number(id));
        setProducts(filtered);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  if (!category) return <Typography align="center" sx={{ mt: 5 }}>Loading...</Typography>;

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        {category.name}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}>
        {products.length ? (
          products.map(product => (
            <Card key={product.id} sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}>
              <CardMedia
                component="img"
                image={product.images?.[0] || "/placeholder.png"}
                alt={product.title || "Product"}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography noWrap>{product.title || "No Title"}</Typography>
                <Typography>${product.price ?? 0}</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography align="center" sx={{ mt: 5 }}>
            No products found in this category.
          </Typography>
        )}
      </Box>

      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Button variant="contained" onClick={() => navigate("/categories")}>
          Back to Categories
        </Button>
      </Box>
    </Container>
  );
};

export default CategoryProductsPage;
