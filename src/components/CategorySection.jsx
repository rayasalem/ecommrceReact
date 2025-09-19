import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { getAllCategories } from "../api/Product"; 
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        const validCategories = data
          .filter(cat => cat.image && (cat.image.startsWith("http") || cat.image.startsWith("https")))
          .slice(0, 3);
        setCategories(validCategories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: 700, textAlign: "center", color: "#9c27b0" }}
        >
          Our Categories
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {categories.map((category) => (
            <Card
              key={category.id}
              sx={{
                width: { xs: "100%", sm: "48%", md: "30%" },
                cursor: "pointer",
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                transition: "0.3s",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => navigate(`/categories/${category.id}`)}
            >
              <CardMedia
                component="img"
                image={category.image}
                alt={category.name}
                sx={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" align="center" sx={{ fontWeight: 600 }}>
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ px: 5, py: 1.5, fontWeight: 600 }}
            onClick={() => navigate("/categories")}
          >
            View All Categories
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CategorySection;
