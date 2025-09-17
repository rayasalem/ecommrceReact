import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import hero from "../images/hero.jpg";

const HeroSlider = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: "relative", width: "100%", height: 500, mt: 2 }}>
      <Box
        component="img"
        src={hero}
        alt="Best Deals"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.4)",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" fontWeight={700} mb={1}>
          Best Deals
        </Typography>
        <Typography variant="h6" mb={2}>
          Shop now and enjoy the best products
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSlider;
