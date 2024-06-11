import "./App.css";

import Navbar from "./Navbar";
import ContactBtn from "./ContactBtn";
import ResponsiveNavbar from "./ResponsiveNavbar";

//Pages
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Pages/Footer";
import ContactModal from "./ContactModal";

import { useState, useRef } from "react";

function App() {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);
  const showContactModalRef = useRef(null);

  function handleShowContactModal() {
    if (showContactModalRef.current) {
      if (showContactModalRef.current.style.display === "block") {
        showContactModalRef.current.style.display = "none";
      } else {
        showContactModalRef.current.style.display = "block";
      }
    }
  }
  return (
    <main>
      <Navbar setShowResponsiveNavbar={setShowResponsiveNavbar} />
      <Hero />
      <About />
      <Services />
      <ContactBtn handleShowContactModal={handleShowContactModal} />
      <Portfolio />
      <ContactModal ref={showContactModalRef} />
      <Footer />
      <ResponsiveNavbar
        showResponsiveNavbar={showResponsiveNavbar}
        setShowResponsiveNavbar={setShowResponsiveNavbar}
      />
    </main>
  );
}

export default App;
