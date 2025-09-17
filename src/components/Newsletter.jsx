import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Newsletter = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 5, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        Subscribe to Our Newsletter
      </Typography>
      <Typography sx={{ mb: 3 }}>Don't miss out on our latest deals!</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
        <TextField placeholder="Enter your email address" variant="outlined" />
        <Button variant="contained" color="secondary">
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
