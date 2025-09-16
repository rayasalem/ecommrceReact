import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { getAllCategories } from "../api/Product"; 
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("خطأ في جلب الأقسام:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Box sx={{ py: 8, bgcolor: "#f5f5f5", width: "100%" }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: 700, textAlign: "center", color: "#1976d2" }}
      >
        تصنيفاتنا
      </Typography>

      <Grid 
        container 
        spacing={4} 
        sx={{ justifyContent: "center", px: { xs: 2, sm: 3, md: 5 } }}
      >
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
            <Card
              sx={{
                cursor: "pointer",
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                transition: "0.3s",
                height: 250,  // زيادة ارتفاع البطاقة
              }}
              onClick={() => navigate(`/products?category=${category.id}`)}
            >
              <CardMedia
                component="img"
                height="180"  // زيادة حجم الصورة داخل البطاقة
                image={category.image || "https://via.placeholder.com/300x180?text=No+Image"}
                alt={category.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" align="center" sx={{ fontWeight: 600 }}>
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySection;
