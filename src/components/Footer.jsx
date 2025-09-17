import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#333333", color: "#ffffff", py: 4, mt: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        EngStore
      </Typography>
      <Typography variant="body2" align="center">
        &copy; 2025 EngStore. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1, gap: 2 }}>
        <Link href="#" color="inherit">Facebook</Link>
        <Link href="#" color="inherit">Instagram</Link>
        <Link href="#" color="inherit">Twitter</Link>
      </Box>
    </Box>
  );
};

export default Footer;
