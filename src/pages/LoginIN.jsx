import React, { useState } from "react";
import { Container, Box, TextField, Button, Typography, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 10, p: 4, borderRadius: 3, bgcolor: "#f3e5f5" }}>
        <Typography
          variant="h5"
          sx={{ mb: 3, textAlign: "center", fontWeight: 600, color: "#6a1b9a" }}
        >
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, bgcolor: "#9c27b0", "&:hover": { bgcolor: "#7b1fa2" } }}
          >
            Login
          </Button>
        </Box>
        <Typography sx={{ mt: 2, textAlign: "center" }}>
          Don't have an account?{" "}
          <Link
            sx={{ cursor: "pointer", color: "#6a1b9a" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;
