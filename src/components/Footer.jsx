import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Mail, Phone, MapPin, Globe, Send, Users, Award } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer className="footer">
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="container"
      >
        <div className="footer-grid">
          <motion.div variants={itemVariants} className="footer-brand">
            <Link to="/" className="logo underline-reveal">
              VILLA<span>AGENCY</span>
            </Link>
            <p className="footer-desc">
              Redefining luxury living since 2010. We curate the finest properties in the world's most prestigious locations for our elite clientele.
            </p>
            <div className="social-links">
              <motion.a whileHover={{ y: -5, color: 'var(--white)' }} href="#"><Globe size={20} /></motion.a>
              <motion.a whileHover={{ y: -5, color: 'var(--white)' }} href="#"><Send size={20} /></motion.a>
              <motion.a whileHover={{ y: -5, color: 'var(--white)' }} href="#"><Users size={20} /></motion.a>
              <motion.a whileHover={{ y: -5, color: 'var(--white)' }} href="#"><Award size={20} /></motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="footer-nav">
            <h3 className="gold-underline">Quick Links</h3>
            <ul>
              <li><Link to="/" className="underline-reveal">Home</Link></li>
              <li><Link to="/about" className="underline-reveal">About Us</Link></li>
              <li><Link to="/villas" className="underline-reveal">Villas</Link></li>
              <li><Link to="/services" className="underline-reveal">Services</Link></li>
              <li><Link to="/gallery" className="underline-reveal">Gallery</Link></li>
              <li><Link to="/contact" className="underline-reveal">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="footer-contact">
            <h3 className="gold-underline">Contact Info</h3>
            <ul>
              <li><MapPin size={18} color="var(--accent)" /> 123 Luxury Way, Beverly Hills, CA</li>
              <li><Phone size={18} color="var(--accent)" /> +1 (555) 123-4567</li>
              <li><Mail size={18} color="var(--accent)" /> concierge@villaagency.com</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="footer-newsletter">
            <h3 className="gold-underline">Newsletter</h3>
            <p>Subscribe for exclusive property releases and market updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" required className="glass" />
              <button type="submit" className="btn-gold btn-glow">Join Now</button>
            </form>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Villa Agency. Crafted for Excellence.</p>
          <div className="footer-policy">
            <a href="#" className="underline-reveal">Privacy Policy</a>
            <a href="#" className="underline-reveal">Terms of Service</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};


export default Footer;
