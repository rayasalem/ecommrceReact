import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductDetailDialog from "./ProductDetailDialog";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const imageUrl = product.images?.[0]?.startsWith("http") ? product.images[0] : null;

  return (
    <>
      <Card
        sx={{
          width: "100%",
          maxWidth: 350,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
          },
          backgroundColor: "#ffffff",
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        {imageUrl && (
          <CardMedia
            component="img"
            height="200"
            image={imageUrl}
            alt={product.title || "منتج"}
            sx={{ objectFit: "cover", cursor: "pointer" }}
            onClick={() => setOpen(true)} // فتح التفاصيل عند الضغط
          />
        )}

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" noWrap sx={{ fontWeight: 600 }}>
            {product.title || "منتج بدون عنوان"}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, minHeight: 50 }}>
            {product.description?.slice(0, 80) || "لا يوجد وصف."}...
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
          sx={{ mt: 2, borderRadius: 2, fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
        >
          إضافة للسلة
        </Button>
      </Card>

      {/* نافذة التفاصيل */}
      <ProductDetailDialog open={open} onClose={() => setOpen(false)} product={product} />
    </>
  );
};

export default ProductCard;
