import React, { useState, useEffect, useRef } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Heart, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import './Testimonials.css';

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

const Testimonials = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const reviews = [
    {
      name: "Arthur Sterling",
      role: "Venture Capitalist",
      text: "The Sapphire Bay Estate was beyond any expectation. The concierge service handled every detail of our event with absolute precision. A truly world-class experience.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Elara Vance",
      role: "Luxury Lifestyle Blogger",
      text: "As someone who travels the world for a living, I can say Villa Agency represents the pinnacle of high-end property curation. The attention to detail is remarkable.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Maximilian Thorne",
      role: "CEO, Thorne Enterprises",
      text: "Total privacy and impeccable security. For high-profile individuals, Villa Agency is the only choice when it comes to exclusive seasonal rentals.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 8000);
    return () => clearInterval(timer);
  }, []);

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
        staggerChildren: 0.15
      }
    }
  };

  return (
    <PageWrapper>
      <div className="testimonials-page page-fade-in">
        {/* Floating Icons */}
        <div className="floating-icon animate-float" style={{ top: '20%', right: '5%' }}><MessageSquare size={50} /></div>
        <div className="floating-icon animate-float" style={{ bottom: '25%', left: '8%', animationDelay: '-3s' }}><Heart size={45} /></div>

        <section ref={heroRef} className="testimonials-hero hero-with-bg">
          <motion.div style={{ y, scale }} className="hero-bg">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" 
              alt="Luxury Interior" 
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
              <span className="badge-gold">Guest Experiences</span>
            </motion.div>
            <h1>
              <WordReveal text="Exquisite" delay={0.4} /> <span className="text-gold"><WordReveal text="Testimonials" delay={0.6} /></span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              The words of our esteemed guests speak volumes about our commitment to excellence and precision.
            </motion.p>
          </motion.div>
        </section>

        <section className="testimonials-main container">
          <motion.div 
            initial={{ opacity: 0, y: 100, filter: 'blur(30px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="carousel-wrapper"
          >
            <div className="main-testimonial-card glass">
              <Quote className="testimonial-quote" size={80} strokeWidth={1} color="var(--accent)" />
              <div className="testimonial-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="testimonial-stars">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={22} fill="var(--accent)" color="var(--accent)" />
                      ))}
                    </div>
                    <p className="testimonial-text">"{reviews[currentIndex].text}"</p>
                    <div className="testimonial-author">
                      <div className="reveal-scale-container author-img-wrapper" style={{ borderRadius: '50%', width: '70px', height: '70px' }}>
                        <img 
                          src={reviews[currentIndex].img} 
                          alt={reviews[currentIndex].name} 
                          className="reveal-scale-img"
                        />
                      </div>
                      <div className="author-details">
                        <h4>{reviews[currentIndex].name}</h4>
                        <span className="text-gold">{reviews[currentIndex].role}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="testimonial-nav">
              <MagneticButton>
                <button onClick={prevReview} className="nav-btn-luxury"><ChevronLeft size={24} /></button>
              </MagneticButton>
              <div className="nav-dots">
                {reviews.map((_, idx) => (
                  <motion.span 
                    key={idx} 
                    whileHover={{ scale: 1.5 }}
                    className={`dot ${currentIndex === idx ? 'active' : ''}`} 
                    onClick={() => setCurrentIndex(idx)}
                  ></motion.span>
                ))}
              </div>
              <MagneticButton>
                <button onClick={nextReview} className="nav-btn-luxury"><ChevronRight size={24} /></button>
              </MagneticButton>
            </div>
          </motion.div>
        </section>

        <section className="review-grid-section container section-padding">
          <motion.div 
            {...fadeInUp}
            className="section-title"
          >
            <span className="badge-gold">Refined Feedback</span>
            <h2 className="gold-underline">Client Perspectives</h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.1 }}
            className="review-grid-luxury"
          >
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  initial: { opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' },
                  whileInView: { opacity: 1, scale: 1, y: 0, filter: 'blur(0)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ y: -15, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }}
                className="luxury-review-card glass premium-card-hover"
              >
                <div className="card-stars">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <p>"{review.text}"</p>
                <div className="card-author">
                  <div className="reveal-scale-container" style={{ borderRadius: '50%', width: '45px', height: '45px' }}>
                    <img src={review.img} alt={review.name} className="reveal-scale-img" />
                  </div>
                  <div>
                    <h5>{review.name}</h5>
                    <span className="text-gold">Verified Resident</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </PageWrapper>
  );
};


export default Testimonials;
