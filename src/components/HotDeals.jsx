import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ProductsGrid from "./ProductGrid";
import { getAllProducts } from "../api/Product";

const HotDeals = ({ limit = 3 }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data.slice(12, 12 + limit)); // أخذ 3 منتجات فقط
    };
    fetchProducts();
  }, [limit]);

  return (
    <Box sx={{ py: 8, bgcolor: "#f9f9f9" }}>
      <Container>
        {/* عنوان القسم */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            textAlign: "center",
            color: "#d32f2f",
          }}
        >
          عروض سريعة 🔥
        </Typography>

        {/* شبكة المنتجات 3 أعمدة */}
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={4} key={product.id}> {/* 3 منتجات في السطر */}
              <ProductsGrid products={[product]} /> {/* تمرير منتج واحد لكل Grid */}
            </Grid>
          ))}
        </Grid>

        {/* زر لعرض كل العروض */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ px: 5, py: 1.5, fontWeight: 600 }}
            onClick={() => window.location.href = "/products"}
          >
            عرض كل العروض
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HotDeals;
