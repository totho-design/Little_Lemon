import React from "react";
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import Specials from "./components/specials/Specials"
import Featured from "./components/featured/Featured"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specials />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
