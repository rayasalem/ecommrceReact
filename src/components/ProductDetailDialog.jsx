import React from "react";
import { Dialog, DialogContent, DialogTitle, Typography, Button, CardMedia } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductDetailDialog = ({ open, onClose, product }) => {
  if (!product) return null;

  const imageUrl = product.images?.[0]?.startsWith("http") ? product.images[0] : null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        {product.title || "No Title"}
      </DialogTitle>
      <DialogContent>
        {imageUrl && (
          <CardMedia
            component="img"
            height="300"
            image={imageUrl}
            alt={product.title}
            sx={{ objectFit: "cover", borderRadius: 2, mb: 2 }}
          />
        )}
        <Typography variant="body1" sx={{ mb: 2 }}>
          {product.description || "No Description"}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 2 }}>
          ${product.price || "0"}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ShoppingCartIcon />}
          fullWidth
          sx={{ fontWeight: 600 }}
        >
          Add to Cart
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailDialog;
