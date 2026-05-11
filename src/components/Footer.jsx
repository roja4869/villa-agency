import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Send, Users, Award } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              VILLA<span>AGENCY</span>
            </Link>
            <p className="footer-desc">
              Redefining luxury living since 2010. We curate the finest properties in the world's most prestigious locations for our elite clientele.
            </p>
            <div className="social-links">
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Send size={20} /></a>
              <a href="#"><Users size={20} /></a>
              <a href="#"><Award size={20} /></a>
            </div>
          </div>

          <div className="footer-nav">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/villas">Villas</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li><MapPin size={18} color="var(--primary)" /> 123 Luxury Way, Beverly Hills, CA</li>
              <li><Phone size={18} color="var(--primary)" /> +1 (555) 123-4567</li>
              <li><Mail size={18} color="var(--primary)" /> concierge@villaagency.com</li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe for exclusive property releases and market updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="btn-gold">Join Now</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Villa Agency. Crafted for Excellence.</p>
          <div className="footer-policy">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
