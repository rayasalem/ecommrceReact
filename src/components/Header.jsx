import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#fff",
        color: "#000",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Logo - click to navigate home */}
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ height: 50, cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        {/* Search Bar */}
        <Box sx={{ mx: 3, flexGrow: 1, maxWidth: 400 }}>
          <SearchBar
            onProductSelect={(product) => {
              navigate(`/products/${product.id}`);
            }}
          />
        </Box>

        {/* Icons: Cart & Account */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Cart with badge */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* Account icon */}
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
