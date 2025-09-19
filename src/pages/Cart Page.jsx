import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Your cart is empty
        </Typography>
        <Button variant="contained" color="secondary" href="/">
          Go to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
        Your Cart
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {cartItems.map((item) => (
          <Card key={item.id} sx={{ display: "flex", alignItems: "center", p: 2 }}>
            <CardMedia
              component="img"
              image={item.images?.[0] || ""}
              alt={item.title}
              sx={{ width: 120, height: 120, objectFit: "cover", borderRadius: 2 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1" color="text.secondary">
                ${item.price}
              </Typography>
            </CardContent>
            <IconButton color="error" onClick={() => removeItem(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}
      </Box>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Total: ${totalPrice.toFixed(2)}
        </Typography>
        <Button variant="contained" color="secondary">
          Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default CartPage;
