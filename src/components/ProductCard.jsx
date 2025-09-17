import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductDetailDialog from "./ProductDetailDialog";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const imageUrl = product.images?.[0]?.startsWith("http") ? product.images[0] : null;

  return (
    <>
      <Card sx={{ maxWidth: 350, m: "auto", borderRadius: 3, boxShadow: 1 }}>
        {imageUrl && (
          <CardMedia
            component="img"
            height="200"
            image={imageUrl}
            alt={product.title || "Product"}
            sx={{ objectFit: "cover", cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
        )}

        <CardContent>
          <Typography variant="h6" noWrap sx={{ fontWeight: 600 }}>
            {product.title || "No Title"}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ minHeight: 50 }}>
            {product.description?.slice(0, 80) || "No Description"}...
          </Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
            ${product.price || "0"}
          </Typography>
        </CardContent>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<ShoppingCartIcon />}
          fullWidth
          sx={{ mt: 2, borderRadius: 2 }}
        >
          Add to Cart
        </Button>
      </Card>

      <ProductDetailDialog open={open} onClose={() => setOpen(false)} product={product} />
    </>
  );
};

export default ProductCard;
