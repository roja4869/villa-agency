import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { MapPin, Star, Filter, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Villas.css';

const Villas = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [villas, setVillas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/villas')
      .then(res => res.json())
      .then(data => {
        setVillas(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching villas:", err);
        setLoading(false);
      });
  }, []);

  const categories = ['All', 'Beachfront', 'Mountain', 'Modern'];
  const filteredVillas = filter === 'All' ? villas : villas.filter(v => v.category === filter);

  if (loading) return <div className="loader">Loading Villas...</div>;

  return (
    <PageWrapper>
      <div className="villas-page">
        <section className="page-header">
          <div className="container">
            <h1 data-aos="fade-down">Our Villa Collection</h1>
            <p data-aos="fade-up">Find your perfect home away from home</p>
          </div>
        </section>

        <section className="villas-content container">
          <div className="filters-bar glass" data-aos="fade-up">
            <div className="category-filters">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="search-box">
              <Search size={20} />
              <input type="text" placeholder="Search villas..." />
            </div>
          </div>

          <div className="villas-grid">
            {filteredVillas.map((villa, index) => (
              <div 
                key={villa.id} 
                className="villa-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                onClick={() => navigate(`/villas/${villa.id}`)}
              >
                <div className="villa-img">
                  <img src={villa.images[0]} alt={villa.name} />
                  <div className="villa-category">{villa.category}</div>
                  <div className="villa-price">{villa.price} / night</div>
                </div>
                <div className="villa-info">
                  <div className="villa-rating">
                    <Star size={16} fill="var(--accent)" color="var(--accent)" />
                    <span>{villa.rating}</span>
                  </div>
                  <h3>{villa.name}</h3>
                  <p><MapPin size={14} /> {villa.location}</p>
                  <button className="btn-accent">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Villas;
