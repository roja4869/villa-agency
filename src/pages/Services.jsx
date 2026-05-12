import React, { useRef } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Layout, Waves, Cpu, Shield, Car, Headphones, Paintbrush, Wifi, Key, Wine, Coffee, Utensils, Sparkles, Building2, Palmtree } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Services.css';

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

const Services = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  const services = [
    { icon: <Paintbrush />, title: "Interior Design", desc: "Expert interior designers to customize your villa to your personal taste and lifestyle." },
    { icon: <Waves />, title: "Infinity Pools", desc: "Crystal clear infinity pools with regular maintenance and automated heating systems." },
    { icon: <Cpu />, title: "Smart Living", desc: "Fully integrated smart home systems for climate, security, and cinematic entertainment." },
    { icon: <Shield />, title: "Elite Security", desc: "Professional 24/7 security personnel and state-of-the-art biometric surveillance." },
    { icon: <Car />, title: "Private Fleet", desc: "Secure multi-car galleries and access to our private chauffeur services." },
    { icon: <Headphones />, title: "24/7 Concierge", desc: "Dedicated lifestyle managers available around the clock for any bespoke requests." },
    { icon: <Utensils />, title: "Private Chef", desc: "World-class culinary experts available to prepare exquisite meals in your villa." },
    { icon: <Key />, title: "Management", desc: "Comprehensive property management to ensure your estate is always in pristine condition." }
  ];

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <PageWrapper>
      <div className="services-page">
        {/* Cinematic Hero */}
        <section ref={heroRef} className="services-hero hero-with-bg">
          <motion.div style={{ y, scale }} className="hero-bg">
            <img 
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1600" 
              alt="Luxury Services" 
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
              <span className="badge-gold">Bespoke Excellence</span>
            </motion.div>
            <h1>
              <WordReveal text="Exceptional" delay={0.4} /> <span className="text-gold"><WordReveal text="Concierge" delay={0.6} /></span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              We provide more than just a home; we provide an elevated lifestyle curated for the world's most discerning individuals.
            </motion.p>
          </motion.div>
        </section>

        <section className="services-grid-container container">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.05 }}
            className="services-grid"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={{
                  initial: { opacity: 0, y: 60, skewY: 5, filter: 'blur(15px)' },
                  whileInView: { 
                    opacity: 1, 
                    y: 0, 
                    skewY: 0, 
                    filter: 'blur(0)', 
                    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                whileHover={{ y: -15, transition: { duration: 0.5 } }}
                className="service-card-luxury glass-dark premium-card-hover"
              >
                <div className="service-icon-wrapper glass">
                  <motion.div
                    initial={{ scale: 0.8, rotate: -15 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    {React.cloneElement(service.icon, { size: 36, strokeWidth: 1.5, color: "var(--accent)" })}
                  </motion.div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="service-hover-content underline-reveal" 
                  onClick={() => navigate('/contact')}
                >
                  <span>Inquire Further →</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Luxury CTA */}
        <section className="bespoke-cta container">
          <motion.div 
            initial={{ opacity: 0, y: 100, filter: 'blur(30px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="bespoke-content glass-dark"
          >
            <div className="bespoke-header">
              <Sparkles className="sparkle-icon" size={32} color="var(--accent)" />
              <h2 className="title-reveal">
                <WordReveal text="Tailored Luxury" delay={0.2} />
                <br />
                <span className="text-gold"><WordReveal text="Without Limits" delay={0.5} /></span>
              </h2>
            </div>
            <p>Our dedicated private office is ready to accommodate any unique requests, from global aviation logistics to exclusive event planning.</p>
            <MagneticButton>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gold btn-glow" 
                onClick={() => navigate('/contact')}
              >
                Consult Our Office
              </motion.button>
            </MagneticButton>
          </motion.div>
        </section>
      </div>
    </PageWrapper>
  );
};



export default Services;
