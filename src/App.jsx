import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Villas from './pages/Villas';
import VillaDetails from './pages/VillaDetails';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const location = useLocation();

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/villa-details/:id" element={<VillaDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-now" element={<Booking />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
