import React, { useState, useEffect, useRef } from 'react';
import PageWrapper from '../components/PageWrapper';
import { MapPin, Star, Filter, Search, Heart, SlidersHorizontal, Sparkles, Building2, Palmtree } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Villas.css';

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

const Villas = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [villas, setVillas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/villas`)
      .then(res => res.json())
      .then(data => {
        setVillas(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching villas:", err);
        setVillas([
          { id: 1, name: "Ocean View Paradise", location: "Malibu, California", price: "$1,200", rating: 4.9, category: "Beachfront", images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200"] },
          { id: 2, name: "Mountain Retreat", location: "Aspen, Colorado", price: "$950", rating: 4.8, category: "Mountain", images: ["https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200"] },
          { id: 3, name: "Modern Zen Villa", location: "Kyoto, Japan", price: "$1,500", rating: 5.0, category: "Modern", images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200"] },
          { id: 4, name: "Sapphire Bay Estate", location: "Greek Islands", price: "$2,500", rating: 4.9, category: "Beachfront", images: ["https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200"] },
          { id: 5, name: "Nordic Pine Villa", location: "Norway", price: "$1,800", rating: 4.7, category: "Mountain", images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200"] },
          { id: 6, name: "Desert Oasis", location: "Palm Springs", price: "$1,100", rating: 4.8, category: "Modern", images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"] }
        ]);
        setLoading(false);
      });
  }, []);

  const categories = ['All', 'Beachfront', 'Mountain', 'Modern'];
  const filteredVillas = villas.filter(v => {
    const matchesFilter = filter === 'All' || v.category === filter;
    const matchesSearch = v.name.toLowerCase().includes(search.toLowerCase()) || v.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
      <div className="villas-page">
        {/* Cinematic Hero */}
        <section ref={heroRef} className="villas-hero hero-with-bg">
          <motion.div style={{ y, scale }} className="hero-bg">
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600" 
              alt="Luxury Villas" 
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
              <span className="badge-gold">Curated Collection</span>
            </motion.div>
            <h1>
              <WordReveal text="Explore Your Next" delay={0.4} />
              <br />
              <span className="text-gold">
                <WordReveal text="Coastal Escape" delay={0.7} />
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              A distinguished portfolio of the most exclusive properties in the world's most desired locations.
            </motion.p>
          </motion.div>
        </section>

        <section className="villas-container container">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="villas-controls glass-dark"
          >
            <div className="search-bar">
              <Search size={20} color="var(--accent)" />
              <input 
                type="text" 
                placeholder="Search estates or locations..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <SlidersHorizontal size={20} color="var(--accent)" />
              <div className="category-tabs">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    className={`tab-btn ${filter === cat ? 'active' : ''}`}
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {loading ? (
            <div className="villas-loader">
              <div className="luxury-spinner"></div>
              <p>Curating portfolio...</p>
            </div>
          ) : (
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.05 }}
              className="villas-grid"
            >
              {filteredVillas.map((villa) => (
                <TiltCard key={villa.id}>
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' },
                      whileInView: { opacity: 1, scale: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="villa-card premium-card-hover"
                  >
                    <div className="villa-img" onClick={() => navigate(`/villa-details/${villa.id}`)}>
                      <div className="reveal-scale-container">
                        <motion.img 
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          src={villa.images[0]} 
                          alt={villa.name} 
                          className="reveal-scale-img"
                        />
                      </div>
                      <div className="villa-badge glass">{villa.category}</div>
                      <motion.button whileHover={{ scale: 1.1 }} className="heart-btn glass" onClick={(e) => {e.stopPropagation();}}><Heart size={18} /></motion.button>
                    </div>
                    <div className="villa-content">
                      <div className="villa-header">
                        <div className="villa-rating">
                          <Star size={14} fill="var(--accent)" color="var(--accent)" />
                          <span>{villa.rating}</span>
                        </div>
                        <span className="villa-price">{villa.price}<span> / night</span></span>
                      </div>
                      <h3 onClick={() => navigate(`/villa-details/${villa.id}`)}>{villa.name}</h3>
                      <p><MapPin size={14} color="var(--accent)" /> {villa.location}</p>
                      <div className="villa-footer">
                        <MagneticButton>
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            className="btn-gold btn-glow" 
                            onClick={() => navigate(`/villa-details/${villa.id}`)}
                          >
                            View Details
                          </motion.button>
                        </MagneticButton>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>
          )}

          {!loading && filteredVillas.length === 0 && (
            <div className="no-results">
              <h3>No estates found</h3>
              <p>Adjust your refined search to find your perfect sanctuary.</p>
              <MagneticButton>
                <button className="btn-gold btn-glow" onClick={() => {setFilter('All'); setSearch('');}}>Reset Filters</button>
              </MagneticButton>
            </div>
          )}
        </section>
      </div>
    </PageWrapper>
  );
};



export default Villas;
