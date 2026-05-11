import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Mail, Phone, MapPin, Send, Plus, Minus, Globe, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Message sent! Our concierge team will get back to you within 24 hours.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    { q: "How do I secure a villa booking?", a: "You can initiate a booking request through each villa's dedicated page. Our concierge team will then contact you to finalize the contract and secure payment." },
    { q: "What are your luxury guarantees?", a: "Every property in our portfolio undergoes a rigorous 200-point inspection to ensure it meets our 5-star ultra-luxury standards." },
    { q: "Do you handle special requests?", a: "Absolutely. From private aviation and yacht charters to specialized event planning, our team is equipped to handle any bespoke requirement." },
    { q: "What is your privacy policy for clients?", a: "We maintain the highest level of confidentiality for our elite clientele, ensuring all transactions and stays remain strictly private." }
  ];

  return (
    <PageWrapper>
      <div className="contact-page page-fade-in">
        <section className="contact-hero hero-with-bg">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1600" alt="Luxury Concierge" />
            <div className="hero-overlay-dark"></div>
          </div>
          <div className="container hero-content-rel">
            <span className="badge-gold" data-aos="fade-down">Concierge Services</span>
            <h1 data-aos="fade-up">Get in <span className="text-gold">Touch</span></h1>
            <p data-aos="fade-up" data-aos-delay="200">Our expert advisors are available 24/7 to assist with your global property requirements.</p>
          </div>
        </section>

        <section className="contact-main container">
          <div className="contact-grid">
            <div className="contact-info-cards" data-aos="fade-right">
              <div className="info-card glass">
                <Phone color="var(--primary)" size={24} />
                <div>
                  <h3>Direct Line</h3>
                  <p>+1 (555) 123-4567</p>
                  <span>Priority for active clients</span>
                </div>
              </div>
              <div className="info-card glass">
                <Mail color="var(--primary)" size={24} />
                <div>
                  <h3>Email Inquiry</h3>
                  <p>concierge@villaagency.com</p>
                  <span>Responds within 24 hours</span>
                </div>
              </div>
              <div className="info-card glass">
                <MapPin color="var(--primary)" size={24} />
                <div>
                  <h3>HQ Office</h3>
                  <p>123 Luxury Way, Beverly Hills</p>
                  <span>California, 90210</span>
                </div>
              </div>
              <div className="info-card glass">
                <Globe color="var(--primary)" size={24} />
                <div>
                  <h3>Global Reach</h3>
                  <p>Offices in Monaco, Kyoto & Mykonos</p>
                  <span>Available worldwide</span>
                </div>
              </div>
            </div>

            <div className="contact-form-container glass" data-aos="fade-left">
              <div className="form-header">
                <h2>Bespoke Inquiry</h2>
                <p>Please fill out the form below and an advisor will contact you shortly.</p>
              </div>
              <form className="luxury-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject of Inquiry</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Select Topic</option>
                    <option value="Booking">Villa Booking</option>
                    <option value="Management">Property Management</option>
                    <option value="Investment">Investment Opportunities</option>
                    <option value="Other">Other Bespoke Request</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="How can our team assist you?" required></textarea>
                </div>
                <button type="submit" className="btn-gold w-full">
                  Submit Inquiry <Send size={18} style={{ marginLeft: '10px' }} />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="faq-section-luxury container section-padding">
          <div className="section-title">
            <span className="badge-gold">Knowledge Base</span>
            <h2 className="gold-underline">Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid-luxury">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-card-luxury ${activeFaq === idx ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                <div className="faq-header-luxury">
                  <h4>{faq.q}</h4>
                  {activeFaq === idx ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} />}
                </div>
                <div className="faq-body-luxury">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="map-luxury container">
          <div className="map-frame-luxury glass" data-aos="zoom-in">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.6923483!3d34.0259216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29f63f53835e1%3A0xc023f03b57223b36!2sMalibu%2C%20CA!5e0!3m2!1sen!2sus!4v1715152000000!5m2!1sen!2sus" 
              width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Contact;
