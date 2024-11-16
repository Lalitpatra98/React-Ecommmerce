import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import ProductSection from './Component/ProductSection'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <ProductSection/>
    </div>
  )
}

export default App
