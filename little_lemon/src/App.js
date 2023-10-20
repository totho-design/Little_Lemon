import React from "react";
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import Specials from "./components/specials/Specials"
import Testimonials from "./components/testimonials/Testimonials"
import About from "./components/about/About"
import Booking from "./components/booking/Booking";
import Footer from "./components/footer/Footer"


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
