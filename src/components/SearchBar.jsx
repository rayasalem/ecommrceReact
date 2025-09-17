import React, { useState, useEffect } from "react";
import { TextField, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import { getAllProducts } from "../api/Product";

const SearchBar = ({ onProductSelect }) => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query.trim()) return setResults([]);
      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, products]);

  return (
    <div style={{ position: "relative" }}>
      <TextField
        fullWidth
        size="small"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <Paper
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            maxHeight: 300,
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          <List>
            {results.map((p) => (
              <ListItem key={p.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    onProductSelect(p);
                    setQuery("");
                    setResults([]);
                  }}
                >
                  <ListItemText primary={p.title} />
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
