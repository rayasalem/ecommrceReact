import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import HotDeals from "../components/HotDeals";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FeaturedItems from "../components/FeaturedItems";
const HomePage = () => {
  return (
    <>
    
      <HeroSlider />
     <FeaturedItems type={"category"}/>
     <FeaturedItems/>
      <HotDeals />
      <Newsletter />
    
    </>
  );
};

export default HomePage;
