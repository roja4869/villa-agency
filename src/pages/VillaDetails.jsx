import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Bed, Bath, Maximize, CheckCircle, Wifi, Coffee, Car, Shield, Calendar, Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './VillaDetails.css';

const VillaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [villa, setVilla] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/villas/${id}`)
      .then(res => res.json())
      .then(data => {
        setVilla(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching villa details:", err);
        // Fallback for preview
        setVilla({
          id: id,
          name: "Ocean View Paradise",
          location: "Malibu, California",
          price: "$1,200",
          rating: 4.9,
          beds: 4,
          baths: 3,
          size: "3,500 sq ft",
          description: "This stunning beachfront villa offers unparalleled views of the Pacific Ocean. Designed with a modern aesthetic and equipped with high-end amenities, it provides the perfect sanctuary for those seeking a luxurious coastal escape.",
          amenities: ["Private Pool", "Smart Home System", "Wine Cellar", "Gourmet Kitchen", "24/7 Security", "Private Parking"],
          images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
          ]
        });
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loader-container"><div className="luxury-spinner"></div></div>;
  if (!villa) return <div className="error-container"><h2>Villa not found</h2><button className="btn-gold" onClick={() => navigate('/villas')}>Back to Villas</button></div>;

  return (
    <PageWrapper>
      <div className="villa-details-page page-fade-in">
        <section className="villa-gallery-section">
          <div className="container">
            <button className="back-link" onClick={() => navigate('/villas')}>
              <ArrowLeft size={18} /> Back to Collection
            </button>
            <div className="gallery-grid">
              <div className="gallery-main" data-aos="fade-right">
                <img src={villa.images[0]} alt={villa.name} />
              </div>
              <div className="gallery-side" data-aos="fade-left">
                <div className="side-img"><img src={villa.images[1]} alt="Interior" /></div>
                <div className="side-img"><img src={villa.images[2]} alt="Pool" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="villa-content-section container">
          <div className="villa-main-grid">
            <div className="villa-details-info" data-aos="fade-up">
              <div className="villa-header">
                <span className="badge-gold">Exclusive Property</span>
                <div className="title-row">
                  <h1>{villa.name}</h1>
                  <div className="price-tag">{villa.price}<span>/night</span></div>
                </div>
                <p className="location-text"><MapPin size={18} color="var(--primary)" /> {villa.location}</p>
              </div>

              <div className="villa-quick-specs">
                <div className="spec-item">
                  <Bed size={24} />
                  <div>
                    <label>Bedrooms</label>
                    <span>{villa.beds} Beds</span>
                  </div>
                </div>
                <div className="spec-item">
                  <Bath size={24} />
                  <div>
                    <label>Bathrooms</label>
                    <span>{villa.baths} Baths</span>
                  </div>
                </div>
                <div className="spec-item">
                  <Maximize size={24} />
                  <div>
                    <label>Villa Size</label>
                    <span>{villa.size}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <Star size={24} color="var(--primary)" />
                  <div>
                    <label>Rating</label>
                    <span>{villa.rating} (120+ Reviews)</span>
                  </div>
                </div>
              </div>

              <div className="detail-block">
                <h3>The Experience</h3>
                <p>{villa.description}</p>
              </div>

              <div className="detail-block">
                <h3>Premium Amenities</h3>
                <div className="amenities-grid">
                  {villa.amenities.map((item, idx) => (
                    <div key={idx} className="amenity-card">
                      <CheckCircle size={20} color="var(--primary)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-block">
                <h3>Location</h3>
                <div className="map-wrapper glass">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.6923483!3d34.0259216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29f63f53835e1%3A0xc023f03b57223b36!2sMalibu%2C%20CA!5e0!3m2!1sen!2sus!4v1715152000000!5m2!1sen!2sus" 
                    width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>

            <aside className="villa-booking-sidebar">
              <div className="booking-card-premium glass" data-aos="fade-left">
                <h3>Secure Your Stay</h3>
                <p>Reserve this exclusive property today.</p>
                <form className="booking-form-premium" onSubmit={(e) => {
                  e.preventDefault();
                  alert("Booking request sent! Our concierge will contact you shortly.");
                }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label><Calendar size={14} /> Check In</label>
                      <input type="date" required />
                    </div>
                    <div className="form-group">
                      <label><Calendar size={14} /> Check Out</label>
                      <input type="date" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label><Users size={14} /> Guests</label>
                    <select>
                      <option>1-2 Guests</option>
                      <option>3-4 Guests</option>
                      <option>5-6 Guests</option>
                      <option>7+ Guests</option>
                    </select>
                  </div>
                  <div className="price-breakdown">
                    <div className="breakdown-row">
                      <span>Rate per night</span>
                      <span>{villa.price}</span>
                    </div>
                    <div className="breakdown-row">
                      <span>Service Fee</span>
                      <span>$150</span>
                    </div>
                    <div className="breakdown-total">
                      <span>Estimated Total</span>
                      <span>{villa.price}</span>
                    </div>
                  </div>
                  <button type="submit" className="btn-gold w-full">Request Booking</button>
                  <p className="booking-note"><Shield size={12} /> Secure payments & luxury guarantee.</p>
                </form>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default VillaDetails;
