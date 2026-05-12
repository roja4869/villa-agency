import React, { useState, useRef } from 'react';
import PageWrapper from '../components/PageWrapper';
import { X, Maximize2, Camera, Image as ImageIcon } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import './Gallery.css';

const WordReveal = ({ text, delay = 0 }) => {
  const words = text.split(' ');
  return (
    <span className="text-reveal-mask">
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', marginRight: '0.12em', overflow: 'hidden' }}>
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: delay + (i * 0.08), ease: [0.22, 1, 0.36, 1] }}
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

const Gallery = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800", category: "Exterior", title: "Sunset Terrace", speed: 1.1 },
    { id: 2, src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800", category: "Interior", title: "Grand Suite", speed: 1.3 },
    { id: 3, src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800", category: "Amenities", title: "Infinity Pool", speed: 1.2 },
    { id: 4, src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800", category: "Living", title: "Panoramic Lounge", speed: 1.4 },
    { id: 5, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", category: "Kitchen", title: "Chef's Kitchen", speed: 1.1 },
    { id: 6, src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800", category: "Bedroom", title: "Master Retreat", speed: 1.3 },
    { id: 7, src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800", category: "Exterior", title: "Garden Path", speed: 1.2 },
    { id: 8, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", category: "Amenities", title: "Coastal View", speed: 1.4 },
  ];

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <PageWrapper>
      <div className="gallery-page">
        {/* Cinematic Gallery Hero */}
        <section ref={heroRef} className="gallery-hero hero-with-bg">
          <motion.div style={{ y, scale }} className="hero-bg">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600" alt="Hero" />
            <div className="hero-overlay-dark"></div>
          </motion.div>
          <motion.div style={{ opacity }} className="container hero-content-rel">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="badge-gold">Visual Portfolio</span>
            </motion.div>
            <h1 className="hero-title"><WordReveal text="The Masterpiece Collection" delay={0.4} /></h1>
            <p className="hero-desc">Immerse yourself in architectural splendor and cinematic living spaces.</p>
          </motion.div>
        </section>

        {/* Premium Gallery Grid */}
        <section className="gallery-grid-container container">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.05 }}
            className="gallery-grid"
          >
            {images.map((img) => (
              <motion.div 
                key={img.id} 
                variants={{
                  initial: { opacity: 0, y: 60, skewX: -3, filter: 'blur(15px)' },
                  whileInView: { 
                    opacity: 1, 
                    y: 0, 
                    skewX: 0, 
                    filter: 'blur(0)', 
                    transition: { duration: 1.2 * img.speed, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className={`gallery-item premium-card-hover`}
                onClick={() => setSelectedImg(img)}
              >
                <div className="gallery-img-wrapper">
                  <motion.img 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    src={img.src} 
                    alt={img.title} 
                    className="reveal-scale-img" 
                  />
                  <div className="gallery-overlay glass-dark">
                    <div className="overlay-info">
                      <motion.span initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>{img.category}</motion.span>
                      <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>{img.title}</motion.h3>
                    </div>
                    <div className="zoom-icon-wrap glass">
                      <Maximize2 className="zoom-icon" size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Cinematic Lightbox */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.6 }}
              className="lightbox glass-dark" 
              onClick={() => setSelectedImg(null)}
            >
              <motion.button 
                whileHover={{ rotate: 90, scale: 1.1 }}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                className="close-btn"
              >
                <X size={32} />
              </motion.button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50, filter: 'blur(20px)' }}
                animate={{ scale: 1, opacity: 1, y: 0, filter: 'blur(0)' }}
                exit={{ scale: 0.8, opacity: 0, y: 50, filter: 'blur(20px)' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selectedImg.src} alt={selectedImg.title} />
                <div className="lightbox-caption glass-dark">
                  <span className="badge-gold">{selectedImg.category}</span>
                  <h3>{selectedImg.title}</h3>
                  <p>Experience the ultimate in architectural excellence.</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
};



export default Gallery;
