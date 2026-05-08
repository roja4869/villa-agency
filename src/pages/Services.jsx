import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Layout, Waves, Cpu, Shield, Car, Headphones, Paintbrush, Wifi } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    { icon: <Paintbrush />, title: "Interior Design", desc: "Expert interior designers to customize your villa to your personal taste." },
    { icon: <Waves />, title: "Swimming Pool", desc: "Crystal clear infinity pools with regular maintenance and cleaning services." },
    { icon: <Cpu />, title: "Smart Home", desc: "Fully integrated smart home systems for lighting, climate, and entertainment." },
    { icon: <Shield />, title: "Security 24/7", desc: "Professional security personnel and advanced surveillance systems." },
    { icon: <Car />, title: "Private Parking", desc: "Spacious and secure parking facilities for multiple vehicles." },
    { icon: <Headphones />, title: "24/7 Support", desc: "Dedicated concierge service available around the clock for any requests." },
    { icon: <Wifi />, title: "High-Speed WiFi", desc: "Seamless fiber-optic internet connection throughout the entire property." },
    { icon: <Layout />, title: "Property Management", desc: "Complete property management services to ensure your home is always ready." }
  ];

  return (
    <PageWrapper>
      <div className="services-page">
        <section className="page-header">
          <div className="container">
            <h1 data-aos="fade-down">Our Services</h1>
            <p data-aos="fade-up">Exceptional care for an exceptional lifestyle</p>
          </div>
        </section>

        <section className="services-grid-section container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card glass" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="extra-cta container" data-aos="zoom-in">
          <div className="cta-box glass">
            <h2>Need a Custom Service?</h2>
            <p>Our team is ready to accommodate any special requests you may have.</p>
            <button className="btn-accent">Inquire Now</button>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Services;
