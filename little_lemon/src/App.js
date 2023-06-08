import React from "react";
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import Specials from "./components/specials/Specials"
import Testimonials from "./components/testimonials/Testimonials"

import Featured from "./components/featured/Featured"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
