import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Box } from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#fff", color: "#000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ height: 50, cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        {/* Search */}
        <Box sx={{ flexGrow: 1, mx: 2, maxWidth: 400 }}>
          <SearchBar onProductSelect={(product) => navigate(`/products/${product.id}`)} />
        </Box>

        {/* Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
