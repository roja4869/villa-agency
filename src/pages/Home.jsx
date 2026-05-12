import React, { useRef, useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Search, MapPin, Star, Users, Home as HomeIcon, Award, Filter, Calendar, Heart, Sparkles, Building2, Map as MapIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import './Home.css';

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ''));
      const controls = animate(0, numericValue, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}{value.includes('+') ? '+' : ''}</span>;
};

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

import { MagneticButton, TiltCard } from '../components/PremiumInteractions';

const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const featuredVillas = [
    { id: 1, name: "Ocean View Paradise", location: "Malibu, California", price: "$1,200", rating: 4.9, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200", tag: "Featured" },
    { id: 2, name: "Mountain Retreat", location: "Aspen, Colorado", price: "$950", rating: 4.8, image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200", tag: "Luxury" },
    { id: 3, name: "Modern Zen Villa", location: "Kyoto, Japan", price: "$1,500", rating: 5.0, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200", tag: "Exclusive" }
  ];

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <PageWrapper>
      <div className="home-page">
        {/* Cinematic Hero */}
        <section ref={heroRef} className="hero hero-with-bg">
          <motion.div style={{ y, scale, rotateX }} className="hero-bg">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" 
              alt="Luxury Villa" 
            />
            <div className="hero-overlay-dark"></div>
          </motion.div>
          
          <motion.div style={{ opacity }} className="hero-content hero-content-rel container">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float"
            >
              <span className="badge-gold">Bespoke Real Estate Portfolio</span>
            </motion.div>
            
            <h1 className="hero-title">
              <WordReveal text="Architecting Your" delay={0.5} />
              <br />
              <span className="text-gold">
                <WordReveal text="Luxury Lifestyle" delay={0.9} />
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 1.5, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Discover an exclusive collection of world-class villas, where architectural excellence meets cinematic living in the most prestigious global destinations.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="hero-btns"
            >
              <MagneticButton>
                <button className="btn-gold btn-glow" onClick={() => navigate('/villas')}>Explore Estates</button>
              </MagneticButton>
              <MagneticButton>
                <button className="btn-outline underline-reveal" onClick={() => navigate('/gallery')}>Visual Journey</button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="search-box-container container"
          >
            <div className="search-box glass">
              <div className="search-field">
                <MapPin size={20} color="var(--accent)" />
                <div className="field-inputs">
                  <label>Destination</label>
                  <input type="text" placeholder="Where to?" />
                </div>
              </div>
              <div className="search-field border-left">
                <Building2 size={20} color="var(--accent)" />
                <div className="field-inputs">
                  <label>Property Type</label>
                  <select>
                    <option>Modern Mansion</option>
                    <option>Coastal Estate</option>
                    <option>Mountain Retreat</option>
                  </select>
                </div>
              </div>
              <div className="search-field border-left">
                <Calendar size={20} color="var(--accent)" />
                <div className="field-inputs">
                  <label>Booking Period</label>
                  <input type="text" placeholder="Select dates" />
                </div>
              </div>
              <MagneticButton>
                <button className="btn-navy search-btn btn-glow">Search Collection</button>
              </MagneticButton>
            </div>
          </motion.div>
        </section>

        {/* Cinematic Split Reveal - About Section */}
        <section ref={aboutRef} className="about-split section-padding">
          <div className="container">
            <div className="split-grid">
              <motion.div 
                initial={{ opacity: 0, x: -100, filter: 'blur(20px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="split-content"
              >
                <span className="badge-gold">Our Philosophy</span>
                <h2 className="gold-underline">Precision in Luxury</h2>
                <p>
                  We don't just sell properties; we facilitate a lifestyle of unparalleled luxury. Our approach combines the precision of modern architecture with the timeless elegance of high-end hospitality.
                </p>
                <ul className="premium-list">
                  <li><Sparkles size={18} color="var(--accent)" /> 5-Star Curation Standard</li>
                  <li><Award size={18} color="var(--accent)" /> Global Award Winning Portfolio</li>
                  <li><Users size={18} color="var(--accent)" /> 24/7 Private Concierge</li>
                </ul>
                <MagneticButton className="mt-4">
                  <button className="btn-gold btn-glow" onClick={() => navigate('/about')}>Discover More</button>
                </MagneticButton>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 100, scale: 0.8, filter: 'blur(30px)' }}
                whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="split-image"
              >
                <div className="image-reveal-container">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2 }}
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200" 
                    alt="About Luxury" 
                  />
                  <div className="image-overlay-gold"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.3 }}
              className="stats-grid"
            >
              {[
                { icon: <Award size={32} />, value: "850+", label: "Elite Properties" },
                { icon: <Users size={32} />, value: "15K+", label: "Global Clients" },
                { icon: <MapPin size={32} />, value: "45+", label: "Destinations" },
                { icon: <Sparkles size={32} />, value: "20+", label: "Awards Won" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    initial: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                    whileInView: { opacity: 1, scale: 1, filter: 'blur(0)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ y: -10, transition: { duration: 0.4 } }}
                  className="stat-card glass"
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <h3><AnimatedCounter value={stat.value} /></h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Villas */}
        <section className="featured container section-padding">
          <div className="section-header-cinematic">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="section-title text-left"
            >
              <span className="badge-gold">Curated Masterpieces</span>
              <h2 className="gold-underline">Featured Estates</h2>
              <p>Handpicked properties that represent the absolute zenith of luxury living.</p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.1 }}
            className="villas-grid"
          >
            {featuredVillas.map((villa, index) => (
              <TiltCard key={villa.id}>
                <motion.div 
                  variants={{
                    initial: { opacity: 0, y: 50, rotateX: 10 },
                    whileInView: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="villa-card premium-card-hover"
                >
                  <div className="villa-img">
                    <div className="reveal-scale-container">
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        src={villa.image} 
                        alt={villa.name} 
                        className="reveal-scale-img"
                      />
                    </div>
                    <div className="villa-tag glass">{villa.tag}</div>
                    <motion.button whileHover={{ scale: 1.1 }} className="favorite-btn glass"><Heart size={18} /></motion.button>
                  </div>
                  <div className="villa-info">
                    <div className="villa-meta">
                      <div className="villa-rating">
                        <Star size={16} fill="var(--accent)" color="var(--accent)" />
                        <span>{villa.rating}</span>
                      </div>
                      <span className="villa-price">From {villa.price} / night</span>
                    </div>
                    <h3 onClick={() => navigate(`/villa-details/${villa.id}`)}>{villa.name}</h3>
                    <p><MapPin size={14} color="var(--accent)" /> {villa.location}</p>
                    <div className="villa-card-footer">
                      <MagneticButton>
                        <button className="btn-navy btn-glow" onClick={() => navigate(`/villa-details/${villa.id}`)}>Book Experience</button>
                      </MagneticButton>
                      <button className="btn-text underline-reveal" onClick={() => navigate(`/villa-details/${villa.id}`)}>View Blueprint</button>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="view-all"
          >
            <MagneticButton>
              <button className="btn-gold btn-glow" onClick={() => navigate('/villas')}>View Entire Collection</button>
            </MagneticButton>
          </motion.div>
        </section>

        {/* Luxury CTA */}
        <section className="luxury-cta">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 100, filter: 'blur(30px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="cta-content glass-dark"
            >
              <h2 className="title-reveal">
                <WordReveal text="Embark on Your" delay={0.2} />
                <br />
                <WordReveal text="Next Grand Adventure" delay={0.5} />
              </h2>
              <p>Connect with our private office for a tailored consultation and early access to off-market listings.</p>
              <MagneticButton>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gold btn-glow" 
                  onClick={() => navigate('/contact')}
                >
                  Inquire with Concierge
                </motion.button>
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};



export default Home;
