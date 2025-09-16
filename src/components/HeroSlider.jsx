import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import hero from "../images/hero.jpg"; // استيراد الصورة المحلية

const HeroSlider = () => {
  const navigate = useNavigate(); // لإنشاء التنقل

  return (
    <Box sx={{ position: "relative", width: "100%", height: 500, mt: 2 }}>
      {/* الصورة */}
      <img
        src={hero}
        alt="أفضل العروض"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* نص على الصورة */}
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
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          أفضل العروض لدينا
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          تسوق الآن واستمتع بأفضل المنتجات
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/products")} // يذهب لصفحة المنتجات
        >
          تسوق الآن
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSlider;
