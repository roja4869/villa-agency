import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Target, Eye, Users, Award, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const team = [
    { name: "Julian Vance", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Isabella Sterling", role: "Director of Operations", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Marcus Thorne", role: "Lead Property Expert", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <PageWrapper>
      <div className="about-page page-fade-in">
        {/* About Hero Section */}
        <section className="about-hero">
          <div className="about-hero-bg">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" alt="About Hero" />
            <div className="about-hero-overlay"></div>
          </div>
          <div className="container about-hero-content">
            <span className="badge-gold" data-aos="fade-down">The Agency</span>
            <h1 data-aos="fade-up">Redefining <br /><span className="text-gold">Luxury Living</span></h1>
            <p data-aos="fade-up" data-aos-delay="200">Established in 2010 with a singular vision: to curate the world's most prestigious real estate portfolio.</p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision section-padding">
          <div className="container">
            <div className="mv-grid">
              <div className="mv-content" data-aos="fade-right">
                <span className="badge-gold">Our Philosophy</span>
                <h2 className="gold-underline">Visionary Excellence</h2>
                <p>
                  At Villa Agency, we don't just sell properties; we facilitate a lifestyle of unparalleled luxury. Our approach combines the precision of modern architecture with the timeless elegance of high-end hospitality.
                </p>
                <div className="mv-features">
                  <div className="mv-feature-item">
                    <CheckCircle size={20} color="var(--primary)" />
                    <div>
                      <h4>Global Reach</h4>
                      <p>Exclusive access to off-market properties worldwide.</p>
                    </div>
                  </div>
                  <div className="mv-feature-item">
                    <CheckCircle size={20} color="var(--primary)" />
                    <div>
                      <h4>Precision Curation</h4>
                      <p>Each villa is hand-inspected for 5-star quality standards.</p>
                    </div>
                  </div>
                  <div className="mv-feature-item">
                    <CheckCircle size={20} color="var(--primary)" />
                    <div>
                      <h4>White-Glove Service</h4>
                      <p>Dedicated concierge available 24/7 for our clients.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mv-image" data-aos="fade-left">
                <div className="image-stack">
                  <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800" alt="Villa Exterior" className="img-main" />
                  <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400" alt="Villa Interior" className="img-sub glass" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Achievements */}
        <section className="timeline-section section-padding">
          <div className="container">
            <div className="section-title">
              <span className="badge-gold">Our Journey</span>
              <h2 className="text-white">A Decade of Excellence</h2>
            </div>
            <div className="timeline-container">
              <div className="timeline-item" data-aos="fade-up">
                <div className="timeline-year">2010</div>
                <div className="timeline-content glass">
                  <h4>Foundation</h4>
                  <p>Villa Agency founded in Beverly Hills with 5 exclusive beachfront properties.</p>
                </div>
              </div>
              <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                <div className="timeline-year">2015</div>
                <div className="timeline-content glass">
                  <h4>Expansion</h4>
                  <p>Expanded to the European market, establishing offices in Monaco and Mykonos.</p>
                </div>
              </div>
              <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                <div className="timeline-year">2020</div>
                <div className="timeline-content glass">
                  <h4>Excellence</h4>
                  <p>Voted 'World's Leading Luxury Real Estate Agency' at the Property Awards.</p>
                </div>
              </div>
              <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                <div className="timeline-year">2024</div>
                <div className="timeline-content glass">
                  <h4>Innovation</h4>
                  <p>Managing over 500+ ultra-luxury properties across 5 continents.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team section-padding">
          <div className="container">
            <div className="section-title">
              <span className="badge-gold">The Experts</span>
              <h2 className="gold-underline">Our Executive Team</h2>
              <p>Meet the visionaries behind the world's most prestigious real estate agency.</p>
            </div>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="team-img-wrapper">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <div className="team-social">
                      <Linkedin size={18} />
                      <Twitter size={18} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;

const Linkedin = ({ size }) => <Users size={size} />; // Placeholder for social icons
const Twitter = ({ size }) => <Users size={size} />;
