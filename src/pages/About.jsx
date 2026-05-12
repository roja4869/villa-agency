import React, { useRef } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Target, Eye, Users, Award, Clock, Shield, Star, CheckCircle, MessageSquare, Sparkles, Building2, Globe } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

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

const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const team = [
    { name: "Julian Vance", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Isabella Sterling", role: "Director of Operations", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Marcus Thorne", role: "Lead Property Expert", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" }
  ];

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
      <div className="about-page page-fade-in">
        {/* Floating Icons */}
        <div className="floating-icon animate-float" style={{ top: '15%', right: '8%' }}><Award size={55} /></div>
        <div className="floating-icon animate-float" style={{ bottom: '25%', left: '10%', animationDelay: '-3s' }}><Globe size={45} /></div>

        {/* About Hero Section */}
        <section ref={heroRef} className="about-hero hero-with-bg">
          <motion.div style={{ y, scale }} className="about-hero-bg">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" 
              alt="About Hero" 
            />
            <div className="about-hero-overlay"></div>
          </motion.div>
          <motion.div style={{ opacity }} className="container about-hero-content hero-content-rel">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="badge-gold">The Agency</span>
            </motion.div>
            <h1>
              <WordReveal text="Redefining" delay={0.4} />
              <br />
              <span className="text-gold"><WordReveal text="Luxury Living" delay={0.7} /></span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Established in 2010 with a singular vision: to curate the world's most prestigious real estate portfolio.
            </motion.p>
          </motion.div>
        </section>

        {/* Mission & Vision - Split Reveal */}
        <section className="mission-vision section-padding">
          <div className="container">
            <div className="mv-grid">
              <motion.div 
                initial={{ opacity: 0, x: -60, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="mv-content"
              >
                <span className="badge-gold">Our Philosophy</span>
                <h2 className="gold-underline">Visionary Excellence</h2>
                <p>
                  At Villa Agency, we don't just sell properties; we facilitate a lifestyle of unparalleled luxury. Our approach combines the precision of modern architecture with the timeless elegance of high-end hospitality.
                </p>
                <div className="mv-features">
                  {[
                    { icon: <Globe size={20} />, title: "Global Reach", desc: "Exclusive access to off-market properties worldwide." },
                    { icon: <Shield size={20} />, title: "Precision Curation", desc: "Each villa is hand-inspected for 5-star quality standards." },
                    { icon: <Clock size={20} />, title: "White-Glove Service", desc: "Dedicated concierge available 24/7 for our clients." }
                  ].map((feat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                      className="mv-feature-item"
                    >
                      <div className="feat-icon-gold">{feat.icon}</div>
                      <div>
                        <h4>{feat.title}</h4>
                        <p>{feat.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 60, filter: 'blur(15px)' }}
                whileInView={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="mv-image"
              >
                <div className="image-stack">
                  <div className="reveal-scale-container img-main-wrapper">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800" 
                      alt="Villa Exterior" 
                      className="img-main reveal-scale-img" 
                    />
                  </div>
                  <motion.div 
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    className="img-sub-wrapper glass"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400" 
                      alt="Villa Interior" 
                      className="img-sub" 
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Achievements - Waterfall Reveal */}
        <section className="timeline-section section-padding">
          <div className="container">
            <motion.div 
              {...fadeInUp}
              className="section-title"
            >
              <span className="badge-gold">Our Journey</span>
              <h2 className="text-white">A Decade of Excellence</h2>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
              className="timeline-container"
            >
              {[
                { year: "2010", title: "Foundation", desc: "Villa Agency founded in Beverly Hills with 5 exclusive beachfront properties." },
                { year: "2015", title: "Expansion", desc: "Expanded to the European market, establishing offices in Monaco and Mykonos." },
                { year: "2020", title: "Excellence", desc: "Voted 'World's Leading Luxury Real Estate Agency' at the Property Awards." },
                { year: "2024", title: "Innovation", desc: "Managing over 500+ ultra-luxury properties across 5 continents." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    initial: { opacity: 0, x: i % 2 === 0 ? -30 : 30, filter: 'blur(10px)' },
                    whileInView: { opacity: 1, x: 0, filter: 'blur(0)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="timeline-item"
                >
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content glass">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section - Staggered Cards */}
        <section className="team section-padding">
          <div className="container">
            <motion.div 
              {...fadeInUp}
              className="section-title"
            >
              <span className="badge-gold">The Experts</span>
              <h2 className="gold-underline">Our Executive Team</h2>
              <p>Meet the visionaries behind the world's most prestigious real estate agency.</p>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.1 }}
              className="team-grid"
            >
              {team.map((member, index) => (
                <motion.div 
                  key={index} 
                  variants={{
                    initial: { opacity: 0, y: 40, filter: 'blur(10px)' },
                    whileInView: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ y: -15, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }}
                  className="team-card glass"
                >
                  <div className="team-img-wrapper">
                    <div className="team-circle-wrap">
                      <div className="reveal-scale-container" style={{ borderRadius: '50%' }}>
                        <motion.img 
                          whileHover={{ scale: 1.1 }}
                          src={member.img} 
                          alt={member.name} 
                          className="reveal-scale-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <div className="team-social">
                      <Globe size={18} className="social-icon" />
                      <MessageSquare size={18} className="social-icon" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;
