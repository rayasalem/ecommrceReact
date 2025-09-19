import React from "react";
import { Box } from "@mui/material";
import ItemCard from "./ItemCard";

const ProductsGrid = ({ items = [], type="product "}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {items.map((item) => (
        <Box key={item.id} sx={{ flex: "1 1 250px", maxWidth: 350 }}>
          <ItemCard item={item} type={type} />
        </Box>
      ))}
    </Box>
  );
};

export default ProductsGrid;
