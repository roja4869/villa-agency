import React from 'react'; // Redesigned for Luxury Blue-and-Gold Theme
import PageWrapper from '../components/PageWrapper';
import { Search, MapPin, Star, Users, Home as HomeIcon, Award, Filter, Calendar, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const featuredVillas = [
    {
      id: 1,
      name: "Ocean View Paradise",
      location: "Malibu, California",
      price: "$1,200",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
      tag: "Featured"
    },
    {
      id: 2,
      name: "Mountain Retreat",
      location: "Aspen, Colorado",
      price: "$950",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
      tag: "Luxury"
    },
    {
      id: 3,
      name: "Modern Zen Villa",
      location: "Kyoto, Japan",
      price: "$1,500",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
      tag: "Exclusive"
    }
  ];

  return (
    <PageWrapper>
      <div className="home-page page-fade-in">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" alt="Luxury Villa" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content container">
            <span className="badge-gold" data-aos="fade-down">Premium Real Estate</span>
            <h1 data-aos="fade-up">Find Your Dream <br /><span className="text-gold">Luxury Villa</span></h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Experience the pinnacle of elegant living with our curated collection of premium properties in the world's most prestigious locations.
            </p>
            <div className="hero-btns" data-aos="fade-up" data-aos-delay="400">
              <button className="btn-gold" onClick={() => navigate('/villas')}>Explore Villas</button>
              <button className="btn-outline" onClick={() => navigate('/gallery')}>View Collection</button>
            </div>
          </div>

          {/* Search Box */}
          <div className="search-box-container container" data-aos="fade-up" data-aos-delay="600">
            <div className="search-box glass">
              <div className="search-field">
                <MapPin size={20} color="var(--primary)" />
                <div className="field-inputs">
                  <label>Location</label>
                  <input type="text" placeholder="Where are you going?" />
                </div>
              </div>
              <div className="search-field border-left">
                <HomeIcon size={20} color="var(--primary)" />
                <div className="field-inputs">
                  <label>Villa Type</label>
                  <select>
                    <option>Select Type</option>
                    <option>Modern Villa</option>
                    <option>Oceanfront</option>
                    <option>Mountain Cabin</option>
                  </select>
                </div>
              </div>
              <div className="search-field border-left">
                <Calendar size={20} color="var(--primary)" />
                <div className="field-inputs">
                  <label>Check In/Out</label>
                  <input type="text" placeholder="Add dates" />
                </div>
              </div>
              <div className="search-field border-left">
                <Users size={20} color="var(--primary)" />
                <div className="field-inputs">
                  <label>Guests</label>
                  <input type="text" placeholder="Add guests" />
                </div>
              </div>
              <button className="btn-navy search-btn">Search Villas</button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card" data-aos="zoom-in">
                <div className="stat-icon"><Award size={32} /></div>
                <h3>500+</h3>
                <p>Luxury Villas</p>
              </div>
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                <div className="stat-icon"><Users size={32} /></div>
                <h3>10K+</h3>
                <p>Happy Guests</p>
              </div>
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                <div className="stat-icon"><MapPin size={32} /></div>
                <h3>50+</h3>
                <p>Top Locations</p>
              </div>
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                <div className="stat-icon"><Award size={32} /></div>
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Villas */}
        <section className="featured container section-padding">
          <div className="section-title">
            <span className="badge-gold">Our Selection</span>
            <h2 className="gold-underline">Featured Villas</h2>
            <p>Handpicked properties that represent the absolute zenith of luxury and architectural excellence.</p>
          </div>
          <div className="villas-grid">
            {featuredVillas.map((villa, index) => (
              <div key={villa.id} className="villa-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="villa-img">
                  <img src={villa.image} alt={villa.name} />
                  <div className="villa-tag">{villa.tag}</div>
                  <button className="favorite-btn"><Heart size={18} /></button>
                </div>
                <div className="villa-info">
                  <div className="villa-meta">
                    <div className="villa-rating">
                      <Star size={16} fill="var(--primary)" color="var(--primary)" />
                      <span>{villa.rating}</span>
                    </div>
                    <span className="villa-price">From {villa.price}/night</span>
                  </div>
                  <h3>{villa.name}</h3>
                  <p><MapPin size={14} /> {villa.location}</p>
                  <div className="villa-card-footer">
                    <button className="btn-navy" onClick={() => navigate(`/villa-details/${villa.id}`)}>Book Now</button>
                    <button className="btn-text" onClick={() => navigate(`/villa-details/${villa.id}`)}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <button className="btn-gold" onClick={() => navigate('/villas')}>Explore All Properties</button>
          </div>
        </section>

        {/* Luxury CTA */}
        <section className="luxury-cta">
          <div className="container">
            <div className="cta-content glass" data-aos="fade-up">
              <h2>Ready to Experience <br />True Paradise?</h2>
              <p>Contact our luxury real estate experts today for a personalized selection of the world's most exclusive properties.</p>
              <button className="btn-gold" onClick={() => navigate('/contact')}>Contact Our Concierge</button>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
