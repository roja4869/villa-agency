import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Search, MapPin, Star, Users, Home as HomeIcon, Award, Filter } from 'lucide-react';
import './Home.css';
import heroImg from '../assets/images/hero.png';

const Home = () => {
  const featuredVillas = [
    {
      id: 1,
      name: "Ocean View Paradise",
      location: "Malibu, California",
      price: "$1,200 / night",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Mountain Retreat",
      location: "Aspen, Colorado",
      price: "$950 / night",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Modern Zen Villa",
      location: "Kyoto, Japan",
      price: "$1,500 / night",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <PageWrapper>
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600" alt="High-End Sunset Villa" />
            <div className="hero-overlay-maroon"></div>
          </div>
          <div className="hero-content container">
            <h1 data-aos="fade-up" className="massive-pure-white-title floating-slow">
              Luxury Villa
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className="pure-white-subtitle">
              Experience the pinnacle of elegant living with our curated collection of premium properties worldwide.
            </p>
            <div className="hero-search maroon-glass floating-fast" data-aos="fade-up" data-aos-delay="400">
              <div className="search-group">
                <MapPin size={20} color="var(--accent)" />
                <input type="text" placeholder="Location" className="pure-white-input" />
              </div>
              <div className="search-group">
                <Filter size={20} color="var(--accent)" />
                <select className="pure-white-input">
                  <option>Villa Type</option>
                  <option>Sunset Suite</option>
                  <option>Crimson Estate</option>
                  <option>Waterfront</option>
                </select>
              </div>
              <div className="search-group">
                <Search size={20} color="var(--accent)" />
                <input type="text" placeholder="Price Range" className="pure-white-input" />
              </div>
              <button className="btn-radiant">Search Now</button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="stats container">
          <div className="stats-grid">
            <div className="stat-card glass" data-aos="zoom-in">
              <h3>500+</h3>
              <p>Luxury Villas</p>
            </div>
            <div className="stat-card glass" data-aos="zoom-in" data-aos-delay="100">
              <h3>20+</h3>
              <p>Countries</p>
            </div>
            <div className="stat-card glass" data-aos="zoom-in" data-aos-delay="200">
              <h3>12k+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card glass" data-aos="zoom-in" data-aos-delay="300">
              <h3>150+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </section>

        {/* Featured Villas */}
        <section className="featured container">
          <div className="section-title">
            <h2>Featured Villas</h2>
            <p>Handpicked properties just for you</p>
          </div>
          <div className="villas-grid">
            {featuredVillas.map((villa, index) => (
              <div key={villa.id} className="villa-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="villa-img">
                  <img src={villa.image} alt={villa.name} />
                  <div className="villa-price">{villa.price}</div>
                </div>
                <div className="villa-info">
                  <div className="villa-rating">
                    <Star size={16} fill="var(--accent)" color="var(--accent)" />
                    <span>{villa.rating}</span>
                  </div>
                  <h3>{villa.name}</h3>
                  <p><MapPin size={14} /> {villa.location}</p>
                  <button className="btn-primary-outline">View Details</button>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <button className="btn-primary">Explore All Villas</button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-us">
          <div className="container">
            <div className="why-us-grid">
              <div className="why-us-content" data-aos="fade-right">
                <div className="section-title" style={{ textAlign: 'left' }}>
                  <h2>Why Choose Us?</h2>
                  <p>We provide the best luxury experience</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Award /></div>
                  <div>
                    <h4>Premium Selection</h4>
                    <p>Only the most exclusive villas meet our rigorous standards.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Users /></div>
                  <div>
                    <h4>Personalized Service</h4>
                    <p>Dedicated concierge for all your needs during your stay.</p>
                  </div>
                </div>
              </div>
              <div className="why-us-img" data-aos="fade-left">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Luxury Interior" className="glass" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="cta-banner container" data-aos="zoom-in">
          <div className="cta-content glass">
            <h2>Ready to Find Your Paradise?</h2>
            <p>Contact our luxury real estate experts today.</p>
            <button className="btn-accent">Contact Us</button>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
