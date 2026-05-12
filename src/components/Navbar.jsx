import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Determine if we are on a page that starts with a light background
  const isLightPage = ['/villa-details'].some(path => location.pathname.startsWith(path));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Villas', path: '/villas' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-dark' : ''} ${isLightPage && !isScrolled ? 'light-page' : ''}`}>
      <div className="nav-container container">
        <Link to="/" className="logo">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            VILLA <span>AGENCY</span>
          </motion.div>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={link.path}
                className={`nav-item ${location.pathname === link.path ? 'active' : ''} underline-reveal`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span 
                    layoutId="active-indicator"
                    className="active-indicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              to="/book-now" 
              className={`btn-gold btn-glow nav-btn ${location.pathname === '/book-now' ? 'active-btn' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </motion.div>
        </div>

        <div className="nav-actions">
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
