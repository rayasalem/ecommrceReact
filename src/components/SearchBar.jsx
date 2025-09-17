import React, { useState, useEffect } from "react";
import { TextField, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import { getAllProducts } from "../api/Product";

const SearchBar = ({ onProductSelect }) => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }
      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }, 500); // debounce 500ms

    return () => clearTimeout(handler);
  }, [query, products]);

  return (
    <div style={{ position: "relative" }}>
      <TextField
        fullWidth
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        size="small"
      />
      {results.length > 0 && (
        <Paper
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 10,
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
          <List>
            {results.map((product) => (
              <ListItem key={product.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    onProductSelect(product);
                    setQuery("");
                    setResults([]);
                  }}
                >
                  <ListItemText primary={product.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default SearchBar;
