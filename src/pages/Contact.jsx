import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Mail, Phone, MapPin, Send, Plus, Minus } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      alert(data.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Submission failed. Please try again.");
    }
  };

  const faqs = [
    { q: "How do I book a villa?", a: "You can book directly through our website by choosing a villa and filling out the booking form, or by contacting our agents." },
    { q: "What is your cancellation policy?", a: "Cancellations made 30 days prior to arrival receive a full refund. 15-30 days receive 50%. Less than 15 days are non-refundable." },
    { q: "Are pets allowed in the villas?", a: "Pet policies vary by property. Please check the villa details or ask our concierge service." },
    { q: "Do you offer airport transfers?", a: "Yes, we provide luxury airport transfers and private chauffeur services upon request." }
  ];

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <PageWrapper>
      <div className="contact-page">
        <section className="page-header">
          <div className="container">
            <h1 data-aos="fade-down">Contact Us</h1>
            <p data-aos="fade-up">We're here to help you find your dream home</p>
          </div>
        </section>

        <section className="contact-info-section container">
          <div className="contact-grid">
            <div className="contact-details-box" data-aos="fade-right">
              <div className="section-title" style={{ textAlign: 'left' }}>
                <h2>Get in Touch</h2>
                <p>Reach out to us for any inquiries or bookings</p>
              </div>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="icon-box"><Phone /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box"><Mail /></div>
                  <div>
                    <h4>Email</h4>
                    <p>info@villaagency.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box"><MapPin /></div>
                  <div>
                    <h4>Office</h4>
                    <p>123 Luxury Way, Beverly Hills, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-box glass" data-aos="fade-left">
              <form className="contact-form" onSubmit={handleSubmit}>
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
                  <label>Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Villa Inquiry" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn-accent w-full">
                  Send Message <Send size={18} style={{ marginLeft: '10px' }} />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="map-section container" data-aos="zoom-in">
          <div className="google-map glass">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.6923483!3d34.0259216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29f63f53835e1%3A0xc023f03b57223b36!2sMalibu%2C%20CA!5e0!3m2!1sen!2sus!4v1715152000000!5m2!1sen!2sus" 
              width="100%" height="450" style={{border:0, borderRadius: '20px'}} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </section>

        <section className="faq-section container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our services</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`} onClick={() => toggleFaq(idx)}>
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  {activeFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Contact;
