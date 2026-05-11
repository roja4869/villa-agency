import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Layout, Waves, Cpu, Shield, Car, Headphones, Paintbrush, Wifi, Key, Wine, Coffee, Utensils } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    { icon: <Paintbrush />, title: "Interior Design", desc: "Expert interior designers to customize your villa to your personal taste and lifestyle." },
    { icon: <Waves />, title: "Infinity Pools", desc: "Crystal clear infinity pools with regular maintenance and automated heating systems." },
    { icon: <Cpu />, title: "Smart Living", desc: "Fully integrated smart home systems for climate, security, and cinematic entertainment." },
    { icon: <Shield />, title: "Elite Security", desc: "Professional 24/7 security personnel and state-of-the-art biometric surveillance." },
    { icon: <Car />, title: "Private Fleet", desc: "Secure multi-car galleries and access to our private chauffeur services." },
    { icon: <Headphones />, title: "24/7 Concierge", desc: "Dedicated lifestyle managers available around the clock for any bespoke requests." },
    { icon: <Utensils />, title: "Private Chef", desc: "World-class culinary experts available to prepare exquisite meals in your villa." },
    { icon: <Key />, title: "Management", desc: "Comprehensive property management to ensure your estate is always in pristine condition." }
  ];

  return (
    <PageWrapper>
      <div className="services-page page-fade-in">
        <section className="services-hero hero-with-bg">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1600" alt="Luxury Services" />
            <div className="hero-overlay-dark"></div>
          </div>
          <div className="container hero-content-rel">
            <span className="badge-gold" data-aos="fade-down">Bespoke Excellence</span>
            <h1 data-aos="fade-up">Exceptional <span className="text-gold">Services</span></h1>
            <p data-aos="fade-up" data-aos-delay="200">We provide more than just a home; we provide an elevated lifestyle curated for the world's most discerning individuals.</p>
          </div>
        </section>

        <section className="services-grid-container container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-luxury" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-icon-wrapper">
                  {React.cloneElement(service.icon, { size: 32, strokeWidth: 1.5 })}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-hover-content" onClick={() => navigate('/contact')}>
                  <span>Learn More</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bespoke-cta container">
          <div className="bespoke-content glass" data-aos="zoom-in">
            <h2>Bespoke Requirements?</h2>
            <p>Our dedicated team is ready to accommodate any special requests, from private aviation to specialized event planning.</p>
            <button className="btn-gold" onClick={() => navigate('/contact')}>Consult Our Team</button>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Services;
