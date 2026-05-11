import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { MapPin, Star, Filter, Search, Heart, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Villas.css';

const Villas = () => {
  const navigate = useNavigate();
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
        // Fallback data if backend is down for preview
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

  return (
    <PageWrapper>
      <div className="villas-page page-fade-in">
        <section className="villas-hero hero-with-bg">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600" alt="Luxury Villas" />
            <div className="hero-overlay-dark"></div>
          </div>
          <div className="container hero-content-rel">
            <span className="badge-gold" data-aos="fade-down">Our Collection</span>
            <h1 data-aos="fade-up">Find Your Perfect <br /><span className="text-gold">Sanctuary</span></h1>
            <p data-aos="fade-up" data-aos-delay="200">Explore our handpicked selection of the world's most extraordinary properties.</p>
          </div>
        </section>

        <section className="villas-container container">
          <div className="villas-controls glass" data-aos="fade-up">
            <div className="search-bar">
              <Search size={20} color="var(--primary)" />
              <input 
                type="text" 
                placeholder="Search by name or location..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <SlidersHorizontal size={20} color="var(--primary)" />
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
          </div>

          {loading ? (
            <div className="villas-loader">
              <div className="luxury-spinner"></div>
              <p>Curating properties...</p>
            </div>
          ) : (
            <div className="villas-grid">
              {filteredVillas.map((villa, index) => (
                <div 
                  key={villa.id} 
                  className="villa-card" 
                  data-aos="fade-up" 
                  data-aos-delay={(index % 3) * 100}
                >
                  <div className="villa-img" onClick={() => navigate(`/villa-details/${villa.id}`)}>
                    <img src={villa.images[0]} alt={villa.name} />
                    <div className="villa-badge">{villa.category}</div>
                    <button className="heart-btn" onClick={(e) => {e.stopPropagation();}}><Heart size={18} /></button>
                  </div>
                  <div className="villa-content">
                    <div className="villa-header">
                      <div className="villa-rating">
                        <Star size={14} fill="var(--primary)" color="var(--primary)" />
                        <span>{villa.rating}</span>
                      </div>
                      <span className="villa-price">{villa.price}<span>/night</span></span>
                    </div>
                    <h3 onClick={() => navigate(`/villa-details/${villa.id}`)}>{villa.name}</h3>
                    <p><MapPin size={14} /> {villa.location}</p>
                    <div className="villa-footer">
                      <button className="btn-gold" onClick={() => navigate(`/villa-details/${villa.id}`)}>View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredVillas.length === 0 && (
            <div className="no-results">
              <h3>No properties found</h3>
              <p>Try adjusting your search or filters to find your dream villa.</p>
              <button className="btn-outline" onClick={() => {setFilter('All'); setSearch('');}}>Clear All Filters</button>
            </div>
          )}
        </section>
      </div>
    </PageWrapper>
  );
};

export default Villas;
