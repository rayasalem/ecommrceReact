import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Newsletter = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 5, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        اشترك في النشرة البريدية
      </Typography>
      <Typography sx={{ mb: 3 }}>لا تفوت أي عروض جديدة!</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
        <TextField placeholder="أدخل بريدك الإلكتروني" variant="outlined" />
        <Button variant="contained" color="secondary">
          اشترك
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
