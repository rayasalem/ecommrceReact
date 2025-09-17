import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
         <Route path="/products/:id" element={<ProductDetailsPage /> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
