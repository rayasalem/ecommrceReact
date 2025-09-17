import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Card, CardMedia, Container, CircularProgress } from "@mui/material";
import { ShoppingCart, Home } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/Product";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(Number(id));
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <CircularProgress sx={{ display: "block", m: "50px auto" }} />;
  if (!product)
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h5" color="error">Product not found!</Typography>
        <Button startIcon={<Home />} onClick={() => navigate("/")} sx={{ mt: 2 }}>Back to Home</Button>
      </Box>
    );

  const imageUrl = product.images?.[0]?.startsWith("http") ? product.images[0] : null;

  return (
    <Container sx={{ py: 5 }}>
      <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, maxWidth: 900, m: "auto", p: 2 }}>
        {imageUrl && <CardMedia component="img" src={imageUrl} alt={product.title} sx={{ width: { xs: "100%", md: "50%" }, objectFit: "cover" }} />}
        <Box sx={{ flex: 1, p: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>{product.title}</Typography>
            <Typography sx={{ mb: 2 }}>{product.description}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>${product.price}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="contained" startIcon={<ShoppingCart />} fullWidth>Add to Cart</Button>
            <Button variant="outlined" startIcon={<Home />} fullWidth onClick={() => navigate("/")}>Back to Home</Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default ProductDetails;
