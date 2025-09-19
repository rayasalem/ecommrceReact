import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCategoryById } from "../api/Product";
import { Box, Container, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";

const CategoryProductsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getCategoryById(id);
      setCategory(data);
    };
    fetchCategory();
  }, [id]);

  if (!category) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        {category.name}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {category.products?.map((product) => (
          <Card key={product.id} sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}>
            <CardMedia
              component="img"
              image={product.images?.[0]}
              alt={product.title}
              sx={{ height: 200, objectFit: "cover" }}
            />
            <CardContent>
              <Typography>{product.title}</Typography>
              <Typography>${product.price}</Typography>
            </CardContent>
          </Card>
        ))}
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
