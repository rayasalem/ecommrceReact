import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import HotDeals from "../components/HotDeals";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
    
      <HeroSlider />
      <CategorySection />
      <FeaturedProducts />
      <HotDeals />
      <Newsletter />
    
    </>
  );
};

export default HomePage;
