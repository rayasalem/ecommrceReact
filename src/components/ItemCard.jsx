import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ item, type }) => {
  const navigate = useNavigate();
  const image = type === "product" ?
   item.images?.[0] : item.image;

  const handleClick = () => {

  if (type === "product") {
    navigate(`/products/${item.id}`);
  } else {
    navigate(`/categories/${item.id}`);
  }
}


  return (
    <Card
      sx={{
        maxWidth: 350,
        width: "100%",
        borderRadius: 3,
        boxShadow: 1,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        "&:hover": { transform: "scale(1.03)", boxShadow: 4 },
        transition: "0.3s"
      }}
      onClick={handleClick}
    >
      {image && (
        <CardMedia
          component="img"
          height={200}
          image={image}
          alt={item.title || item.name || "Item"}
          sx={{ objectFit: "cover" }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, minHeight: 80 }}>
        <Typography variant="h6" align="center" sx={{ fontWeight: 400, mb: 1 }}>
          {item.title || item.name || "No Title"}
        </Typography>
        {type === "product" && (
          <>
            <Typography variant="body2" color="text.secondary" sx={{ minHeight: 50 }}>
              {item.description?.slice(0, 80) || "No Description"}...
            </Typography>
            <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
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
        >
          Add to Cart
        </Button>
      )}
    </Card>
  );
};

export default ItemCard;
