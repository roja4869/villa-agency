import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Target, Eye, Users, Award, Clock } from 'lucide-react';
import './About.css';

const About = () => {
  const team = [
    { name: "John Doe", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Jane Smith", role: "Director of Operations", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Robert Wilson", role: "Lead Property Expert", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <PageWrapper>
      <div className="about-page">
        {/* About Hero Section */}
        <section className="about-hero">
          <div className="about-hero-bg">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" alt="About Hero" />
            <div className="hero-overlay-maroon"></div>
          </div>
          <div className="container about-hero-content">
            <h1 data-aos="fade-down" className="massive-pure-white-title-small">About Our Agency</h1>
            <p data-aos="fade-up" className="pure-white-subtitle">Redefining luxury living since 2010</p>
          </div>
        </section>

        {/* Radiant Red Split Section */}
        <section className="about-maroon-split">
          <div className="container">
            <div className="split-grid-maroon">
              {/* Left Side: Glass Content */}
              <div className="maroon-glass-content floating-slow" data-aos="fade-right">
                <h4 className="active-crimson uppercase tracking-widest font-bold mb-4">About Our Agency</h4>
                <h2 className="massive-pure-white-title-small">Redefining <br />Luxury Standards</h2>
                <p className="pale-pink-desc">
                  Villa Agency operates with a distinct vision: to merge the warmth of traditional luxury with the precision of modern architectural excellence. Our curated portfolio represents the zenith of elite property management.
                </p>
                <div className="maroon-features">
                  <div className="feature-item-maroon">
                    <span className="dot-crimson"></span>
                    <p>Sunset Portfolio Access</p>
                  </div>
                  <div className="feature-item-maroon">
                    <span className="dot-crimson"></span>
                    <p>Precision Crimson Design</p>
                  </div>
                  <div className="feature-item-maroon">
                    <span className="dot-crimson"></span>
                    <p>Deep Water Management</p>
                  </div>
                </div>
                <button className="btn-radiant">Learn Our Vision</button>
              </div>

              {/* Right Side: Floating Interior Image */}
              <div className="maroon-image-col" data-aos="fade-left">
                <div className="image-wrapper-maroon floating">
                  <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" alt="Villa Interior" className="vertical-maroon-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Gallery Grid to fill gap */}
        <section className="about-gallery-grid container">
          <div className="gallery-row">
            <div className="gallery-item floating" data-aos="zoom-in">
              <img src="/images/villa_1.png" alt="Luxury Villa Poolside" />
            </div>
            <div className="gallery-item floating-slow" data-aos="zoom-in" data-aos-delay="200">
              <img src="/images/villa_2.png" alt="Modern Villa Sea View" />
            </div>
            <div className="gallery-item floating-fast" data-aos="zoom-in" data-aos-delay="400">
              <img src="/images/villa_3.png" alt="Luxury Villa Aerial View" />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team container">
          <div className="section-title">
            <h2>Meet Our Expert Team</h2>
            <p>The professionals behind your dream home</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="team-img">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <div className="container">
            <div className="section-title">
              <h2>Our Journey</h2>
              <p>How we became the leaders in luxury</p>
            </div>
            <div className="timeline">
              <div className="timeline-item" data-aos="fade-right">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <Clock size={20} color="var(--accent)" />
                  <h4>2010</h4>
                  <p>Founded in Malibu with 5 exclusive beachfront properties.</p>
                </div>
              </div>
              <div className="timeline-item" data-aos="fade-left">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <Award size={20} color="var(--accent)" />
                  <h4>2015</h4>
                  <p>Expanded to Europe and won the 'Luxury Real Estate Award'.</p>
                </div>
              </div>
              <div className="timeline-item" data-aos="fade-right">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <Users size={20} color="var(--accent)" />
                  <h4>2024</h4>
                  <p>Now managing over 500+ properties across 20 countries.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;
