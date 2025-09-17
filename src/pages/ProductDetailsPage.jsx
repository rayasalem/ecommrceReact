import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Container,
  CircularProgress,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/Product";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(Number(id));
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h5" color="error">
          Product not found!
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<HomeIcon />}
          sx={{ mt: 3, borderRadius: 2 }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  const imageUrl =
    product.images?.[0]?.startsWith("http") ? product.images[0] : null;

  return (
    <Container sx={{ py: 5 }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: 900,
          m: "auto",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        {imageUrl && (
          <CardMedia
            component="img"
            image={imageUrl}
            alt={product.title || "Product"}
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "auto",
              objectFit: "cover",
            }}
          />
        )}

        <Box sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              {product.title || "No Title"}
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {product.description || "No Description available"}
            </Typography>

            <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 3 }}>
              ${product.price || "0"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<ShoppingCartIcon />}
              fullWidth
              sx={{ borderRadius: 2 }}
            >
              Add to Cart
            </Button>

            <Button
              variant="outlined"
              color="primary"
              startIcon={<HomeIcon />}
              fullWidth
              sx={{ borderRadius: 2 }}
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default ProductDetails;
