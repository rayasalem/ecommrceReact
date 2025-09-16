import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        width: "100vw",          // عرض كامل الشاشة
        bgcolor: "#ffffff",
        color: "#000",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "64px",
          px: 3,
          width: "100%",
          maxWidth: "100%",       // تأكيد عدم وجود أي حد
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          My E-Commerce
        </Typography>
        <div>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
