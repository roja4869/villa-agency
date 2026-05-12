import React, { useState, useRef } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Mail, Phone, MapPin, Send, Plus, Minus, Globe, MessageSquare, Sparkles, Building2 } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './Contact.css';

// Word-by-word reveal helper
const WordReveal = ({ text, delay = 0 }) => {
  const words = text.split(' ');
  return (
    <span className="text-reveal-mask">
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', marginRight: '0.12em', overflow: 'hidden' }}>
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ 
              duration: 1, 
              delay: delay + (i * 0.1), 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

import { MagneticButton } from '../components/PremiumInteractions';

const Contact = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const faqs = [
    { q: "How do I secure a villa booking?", a: "You can initiate a booking request through each villa's dedicated page. Our concierge team will then contact you to finalize the contract and secure payment." },
    { q: "What are your luxury guarantees?", a: "Every property in our portfolio undergoes a rigorous 200-point inspection to ensure it meets our 5-star ultra-luxury standards." },
    { q: "Do you handle special requests?", a: "Absolutely. From private aviation and yacht charters to specialized event planning, our team is equipped to handle any bespoke requirement." },
    { q: "What is your privacy policy for clients?", a: "We maintain the highest level of confidentiality for our elite clientele, ensuring all transactions and stays remain strictly private." }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Message sent! Our concierge team will get back to you within 24 hours.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60, filter: 'blur(10px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0)' },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageWrapper>
      <div className="contact-page page-fade-in">
        {/* Floating Icons */}
        <div className="floating-icon animate-float" style={{ top: '25%', right: '10%' }}><MessageSquare size={50} /></div>
        <div className="floating-icon animate-float" style={{ bottom: '20%', left: '8%', animationDelay: '-4s' }}><Globe size={45} /></div>

        <section ref={heroRef} className="contact-hero hero-with-bg">
          <motion.div style={{ y, scale }} className="hero-bg reveal-scale-container">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
              alt="Office" 
            />
            <div className="hero-overlay-dark"></div>
          </motion.div>
          <motion.div style={{ opacity }} className="container hero-content-rel">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="animate-float"
            >
              <span className="badge-gold">Concierge Services</span>
            </motion.div>
            <h1>
              <WordReveal text="Get in" delay={0.4} /> <span className="text-gold"><WordReveal text="Touch" delay={0.6} /></span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Our expert advisors are available 24/7 to assist with your global property requirements and bespoke lifestyle needs.
            </motion.p>
          </motion.div>
        </section>

        <section className="contact-main container">
          <div className="contact-grid">
            <motion.div 
              initial={{ opacity: 0, x: -60, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="contact-info-cards"
            >
              {[
                { icon: <Phone size={24} />, title: "Direct Line", p: "+1 (555) 123-4567", s: "Priority for active clients" },
                { icon: <Mail size={24} />, title: "Email Inquiry", p: "concierge@villaagency.com", s: "Responds within 24 hours" },
                { icon: <MapPin size={24} />, title: "HQ Office", p: "123 Luxury Way, Beverly Hills", s: "California, 90210" },
                { icon: <Globe size={24} />, title: "Global Reach", p: "Offices in Monaco, Kyoto & Mykonos", s: "Available worldwide" }
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="info-card glass premium-card-hover"
                >
                  <div className="info-icon-gold">{card.icon}</div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.p}</p>
                    <span className="text-gold">{card.s}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 60, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="contact-form-container glass-dark"
            >
              <div className="form-header">
                <Sparkles className="sparkle-icon" size={24} color="var(--accent)" />
                <h2>Bespoke Inquiry</h2>
                <p>Fill out the form below and an advisor will contact you shortly.</p>
              </div>
              <form className="luxury-form" onSubmit={handleSubmit}>
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="form-row"
                >
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
                      whileInView: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="form-group underline-reveal"
                  >
                    <label>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                  </motion.div>
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
                      whileInView: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="form-group underline-reveal"
                  >
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                  </motion.div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="form-group underline-reveal"
                >
                  <label>Subject of Inquiry</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Select Topic</option>
                    <option value="Booking">Villa Booking</option>
                    <option value="Management">Property Management</option>
                    <option value="Investment">Investment Opportunities</option>
                    <option value="Other">Other Bespoke Request</option>
                  </select>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="form-group underline-reveal"
                >
                  <label>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="How can our team assist you?" required></textarea>
                </motion.div>
                <div className="form-footer">
                  <MagneticButton>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="btn-gold btn-glow w-full"
                    >
                      Submit Inquiry <Send size={18} style={{ marginLeft: '10px' }} />
                    </motion.button>
                  </MagneticButton>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        <section className="faq-section-luxury container section-padding">
          <motion.div 
            {...fadeInUp}
            className="section-title"
          >
            <span className="badge-gold">Knowledge Base</span>
            <h2 className="gold-underline">Frequently Asked Questions</h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.1 }}
            className="faq-grid-luxury"
          >
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
                  whileInView: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={`faq-card-luxury glass-dark ${activeFaq === idx ? 'active' : ''}`} 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-header-luxury">
                  <h4>{faq.q}</h4>
                  <motion.div
                    animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {activeFaq === idx ? <Minus size={20} color="var(--accent)" /> : <Plus size={20} />}
                  </motion.div>
                </div>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-body-luxury"
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="map-luxury container section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 100, filter: 'blur(30px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="map-frame-luxury glass"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.6923483!3d34.0259216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29f63f53835e1%3A0xc023f03b57223b36!2sMalibu%2C%20CA!5e0!3m2!1sen!2sus!4v1715152000000!5m2!1sen!2sus" 
              width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy">
            </iframe>
          </motion.div>
        </section>
      </div>
    </PageWrapper>
  );
};


export default Contact;
