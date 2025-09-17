import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const image = product.images?.[0]?.startsWith("http") ? product.images[0] : null;

  return (
    <Card sx={{ maxWidth: 350, m: "auto", borderRadius: 3, boxShadow: 1 }}>
      {image && (
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={product.title || "Product"}
          sx={{ objectFit: "cover", cursor: "pointer" }}
          onClick={() => navigate(`/products/${product.id}`)}
        />
      )}
      <CardContent>
        <Typography variant="h6" noWrap>
          {product.title || "No Title"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 50 }}>
          {product.description?.slice(0, 80) || "No Description"}...
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price || "0"}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<ShoppingCartIcon />}
        fullWidth
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
