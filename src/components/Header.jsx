import React from "react";
import { AppBar, Toolbar, IconButton, Badge, InputBase, Box } from "@mui/material";
import { ShoppingCart, AccountCircle, Search } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.pg"; // صورة اللوجو

// صندوق البحث
const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": { backgroundColor: alpha(theme.palette.common.black, 0.1) },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(1), width: "auto" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: { width: "20ch", "&:focus": { width: "30ch" } },
  },
}));

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky" // يبقى ثابت عند التمرير
      sx={{
        bgcolor: "#ffffff",
        color: "#000",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        width: "100vw",
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        
        {/* شعار الموقع - الضغط عليه يذهب للصفحة الرئيسية */}
        <Box
          component="img"
          src={logo}
          alt="EngStore Logo"
          sx={{ height: 50, cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        {/* البحث */}
        <Box sx={{ flexGrow: 1, mx: 3 }}>
          <SearchBox>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase placeholder="ابحث عن منتجات…" inputProps={{ "aria-label": "search" }} />
          </SearchBox>
        </Box>

        {/* أيقونات الحساب والعربة */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
