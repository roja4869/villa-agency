import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Bed, Bath, Maximize, CheckCircle, Wifi, Coffee, Car, Shield } from 'lucide-react';
import './VillaDetails.css';

const VillaDetails = () => {
  const { id } = useParams();
  const [villa, setVilla] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/villas/${id}`)
      .then(res => res.json())
      .then(data => {
        setVilla(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching villa details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loader">Loading Villa Details...</div>;
  if (!villa) return <div className="error">Villa not found</div>;

  return (
    <PageWrapper>
      <div className="villa-details">
        <section className="villa-hero">
          <div className="villa-gallery">
            <div className="main-img" data-aos="fade-right">
              <img src={villa.images[0]} alt={villa.name} />
            </div>
            <div className="side-imgs" data-aos="fade-left">
              <img src={villa.images[1]} alt="Interior" />
              <img src={villa.images[2]} alt="Pool" />
            </div>
          </div>
        </section>

        <section className="villa-info-section container">
          <div className="villa-info-grid">
            <div className="villa-main-content" data-aos="fade-up">
              <div className="villa-header">
                <div className="villa-rating">
                  <Star size={18} fill="var(--accent)" color="var(--accent)" />
                  <span>{villa.rating} (120 reviews)</span>
                </div>
                <h1>{villa.name}</h1>
                <p><MapPin size={18} /> {villa.location}</p>
              </div>

              <div className="villa-specs glass">
                <div className="spec">
                  <Bed /> <span>{villa.beds} Beds</span>
                </div>
                <div className="spec">
                  <Bath /> <span>{villa.baths} Baths</span>
                </div>
                <div className="spec">
                  <Maximize /> <span>{villa.size}</span>
                </div>
              </div>

              <div className="villa-description">
                <h3>Description</h3>
                <p>{villa.description}</p>
              </div>

              <div className="villa-amenities">
                <h3>Amenities</h3>
                <div className="amenities-grid">
                  {villa.amenities.map((item, idx) => (
                    <div key={idx} className="amenity-item">
                      <CheckCircle size={18} color="var(--accent)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="villa-map">
                <h3>Location</h3>
                <div className="map-placeholder glass">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.6923483!3d34.0259216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29f63f53835e1%3A0xc023f03b57223b36!2sMalibu%2C%20CA!5e0!3m2!1sen!2sus!4v1715152000000!5m2!1sen!2sus" 
                    width="100%" height="300" style={{border:0, borderRadius: '15px'}} allowFullScreen="" loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>

            <aside className="booking-sidebar" data-aos="fade-left">
              <div className="booking-card glass">
                <div className="booking-price">
                  <h3>{villa.price} <span>/ night</span></h3>
                </div>
                <form className="booking-form" onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData);
                  data.villaId = id;
                  data.villaName = villa.name;
                  try {
                    const response = await fetch('http://localhost:5000/api/bookings', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data)
                    });
                    const res = await response.json();
                    alert(res.message);
                  } catch (err) {
                    console.error("Booking error:", err);
                    alert("Booking failed.");
                  }
                }}>
                  <div className="form-group">
                    <label>Check In</label>
                    <input type="date" name="checkIn" required />
                  </div>
                  <div className="form-group">
                    <label>Check Out</label>
                    <input type="date" name="checkOut" required />
                  </div>
                  <div className="form-group">
                    <label>Guests</label>
                    <select name="guests">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-accent w-full">Reserve Now</button>
                </form>
                <p className="no-charge">You won't be charged yet</p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default VillaDetails;
