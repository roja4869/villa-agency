import React, { useState, useRef } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Calendar, Users, Home, CreditCard, Shield, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Booking.css';

const Booking = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [formData, setFormData] = useState({
    villa: '',
    checkIn: '',
    checkOut: '',
    guests: '1-2 Guests',
    name: '',
    email: ''
  });

  const villas = [
    "Ocean View Paradise",
    "Mountain Retreat",
    "Modern Zen Villa",
    "Sapphire Bay Estate",
    "Nordic Pine Villa",
    "Desert Oasis"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request submitted! Our luxury concierge will contact you within the hour to finalize your reservation.");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <PageWrapper>
      <div className="booking-page page-fade-in">
        <section ref={heroRef} className="booking-hero hero-with-bg">
          <motion.div style={{ y }} className="hero-bg">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" 
              alt="Booking Background" 
            />
            <div className="hero-overlay-dark"></div>
          </motion.div>
          <motion.div style={{ opacity }} className="container hero-content-rel">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="badge-gold"
            >
              Reservations
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              Book Your <span className="text-gold">Stay</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >
              Secure your place in paradise. Experience the world's most exclusive properties.
            </motion.p>
          </motion.div>
        </section>

        <section className="booking-content container">
          <div className="booking-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="booking-form-container glass"
            >
              <h3>Reservation Details</h3>
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-group">
                  <label><Home size={18} /> Select Villa</label>
                  <select 
                    required 
                    value={formData.villa}
                    onChange={(e) => setFormData({...formData, villa: e.target.value})}
                  >
                    <option value="">Choose a property...</option>
                    {villas.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label><Calendar size={18} /> Check In</label>
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <label><Calendar size={18} /> Check Out</label>
                    <input type="date" required />
                  </div>
                </div>

                <div className="form-group">
                  <label><Users size={18} /> Number of Guests</label>
                  <select>
                    <option>1-2 Guests</option>
                    <option>3-4 Guests</option>
                    <option>5-6 Guests</option>
                    <option>7+ Guests</option>
                  </select>
                </div>

                <div className="divider"></div>

                <h3>Personal Information</h3>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" required />
                </div>

                <div className="divider"></div>

                <h3><CreditCard size={18} /> Payment Information</h3>
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="password" placeholder="***" />
                  </div>
                </div>

                <button type="submit" className="btn-gold w-full mt-2">Confirm Reservation</button>
                <p className="secure-note"><Shield size={12} /> Your payment information is encrypted and secure.</p>
              </form>
            </motion.div>

            <motion.aside 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="booking-summary-container"
            >
              <div className="summary-card glass">
                <h4>Booking Summary</h4>
                <div className="summary-details">
                  <div className="summary-item">
                    <span>Villa</span>
                    <span>{formData.villa || "Not selected"}</span>
                  </div>
                  <div className="summary-item">
                    <span>Stay Duration</span>
                    <span>7 Nights (Est.)</span>
                  </div>
                  <div className="summary-item">
                    <span>Guests</span>
                    <span>{formData.guests}</span>
                  </div>
                </div>
                <div className="summary-price">
                  <div className="price-row">
                    <span>Subtotal</span>
                    <span>$8,400</span>
                  </div>
                  <div className="price-row">
                    <span>Service Fee</span>
                    <span>$250</span>
                  </div>
                  <div className="price-total">
                    <span>Total Amount</span>
                    <span>$8,650</span>
                  </div>
                </div>
                <div className="summary-benefits">
                  <div className="benefit"><CheckCircle size={14} /> VIP Concierge Access</div>
                  <div className="benefit"><CheckCircle size={14} /> Complimentary Airport Transfer</div>
                  <div className="benefit"><CheckCircle size={14} /> Flexible Cancellation</div>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Booking;
