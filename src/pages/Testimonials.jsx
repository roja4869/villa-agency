import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Arthur Sterling",
      role: "Venture Capitalist",
      text: "The Sapphire Bay Estate was beyond any expectation. The concierge service handled every detail of our event with absolute precision. A truly world-class experience.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Elara Vance",
      role: "Luxury Lifestyle Blogger",
      text: "As someone who travels the world for a living, I can say Villa Agency represents the pinnacle of high-end property curation. The attention to detail is remarkable.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Maximilian Thorne",
      role: "CEO, Thorne Enterprises",
      text: "Total privacy and impeccable security. For high-profile individuals, Villa Agency is the only choice when it comes to exclusive seasonal rentals.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageWrapper>
      <div className="testimonials-page page-fade-in">
        <section className="testimonials-hero hero-with-bg">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" alt="Luxury Interior" />
            <div className="hero-overlay-dark"></div>
          </div>
          <div className="container hero-content-rel">
            <span className="badge-gold" data-aos="fade-down">Guest Experiences</span>
            <h1 data-aos="fade-up">Client <span className="text-gold">Testimonials</span></h1>
            <p data-aos="fade-up" data-aos-delay="200">The words of our esteemed guests speak volumes about our commitment to excellence.</p>
          </div>
        </section>

        <section className="testimonials-main container">
          <div className="carousel-wrapper" data-aos="zoom-in">
            <div className="main-testimonial-card glass">
              <Quote className="testimonial-quote" size={80} strokeWidth={1} />
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={22} fill="var(--primary)" color="var(--primary)" />
                  ))}
                </div>
                <p className="testimonial-text">"{reviews[currentIndex].text}"</p>
                <div className="testimonial-author">
                  <div className="author-img-wrapper">
                    <img src={reviews[currentIndex].img} alt={reviews[currentIndex].name} />
                  </div>
                  <div className="author-details">
                    <h4>{reviews[currentIndex].name}</h4>
                    <span>{reviews[currentIndex].role}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-nav">
              <button onClick={prevReview} className="nav-btn-luxury"><ChevronLeft size={24} /></button>
              <div className="nav-dots">
                {reviews.map((_, idx) => (
                  <span key={idx} className={`dot ${currentIndex === idx ? 'active' : ''}`} onClick={() => setCurrentIndex(idx)}></span>
                ))}
              </div>
              <button onClick={nextReview} className="nav-btn-luxury"><ChevronRight size={24} /></button>
            </div>
          </div>
        </section>

        <section className="review-grid-section container section-padding">
          <div className="section-title">
            <span className="badge-gold">Recent Feedback</span>
            <h2 className="gold-underline">Client Reviews</h2>
          </div>
          <div className="review-grid-luxury">
            {reviews.map((review, idx) => (
              <div key={idx} className="luxury-review-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="card-stars">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="var(--primary)" color="var(--primary)" />)}
                </div>
                <p>"{review.text}"</p>
                <div className="card-author">
                  <img src={review.img} alt={review.name} />
                  <div>
                    <h5>{review.name}</h5>
                    <span>Verified Guest</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Testimonials;
