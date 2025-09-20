import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ item, type }) => {
  const navigate = useNavigate();
  const image = type === "product" ? item.images?.[0] : item.image;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...storedCart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product added to cart!");
  };

  const handleClick = () => {
    if (type === "product") {
      navigate(`/products/${item.id}`);
    } else {
      navigate(`/categories/${item.id}`);
    }
  };

  return (
    <Card
      sx={{ maxWidth: 350, borderRadius: 3, boxShadow: 1, cursor: "pointer" }}
      onClick={handleClick}
    >
      {image && (
        <CardMedia
          component="img"
          height={200}
          image={image}
          alt={item.title || item.name}
        />
      )}

      <CardContent>
        <Typography variant="h6" align="center">
          {item.title || item.name}
        </Typography>

        {type === "product" && (
          <>
            <Typography variant="body2" color="text.secondary">
              {item.description?.slice(0, 80) || "No Description"}...
            </Typography>
            <Typography variant="h6" color="primary">
              ${item.price || "0"}
            </Typography>
          </>
        )}
      </CardContent>

      {type === "product" && (
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ShoppingCartIcon />}
          fullWidth
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      )}
    </Card>
  );
};

export default ItemCard;
