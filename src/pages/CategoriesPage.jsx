import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { getAllCategories } from "../api/Product";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories()
      .then(data => {
        
        const validCategories = data.filter(cat => cat.image && cat.name && cat.name.trim() !== "");
        setCategories(validCategories);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, color: "#9c27b0", fontWeight: 700 }}>
        All Categories
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}>
        {categories.map(cat => (
          <Card
            key={cat.id}
            sx={{ width: 300, cursor: "pointer", "&:hover": { transform: "scale(1.05)" }, transition: "0.3s" }}
            onClick={() => navigate(`/categories/${cat.id}`)}
          >
            <CardMedia
              component="img"
              image={cat.image}
              alt={cat.name}
              sx={{ height: 200, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" align="center">{cat.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Button variant="contained" color="secondary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default CategoriesPage;
