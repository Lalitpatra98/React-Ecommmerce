import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import ProductSection from "./Component/ProductSection";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Top_Product from "./Component/Top_Product";
import Banner from "./Component/Banner";
import Email from "./Component/Email";
import Testimonial from "./Component/Testimonial";
import Footer from "./Component/Footer";

// ..
AOS.init();
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection heading={"Product"} />
      <Top_Product />
      <Banner />
      <Email />
      <ProductSection heading={"Top product"} />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
