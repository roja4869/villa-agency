import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "Business Traveler",
      text: "The service was impeccable. The villa was even more beautiful than the pictures. Highly recommended for anyone seeking true luxury.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Sarah Williams",
      role: "Interior Designer",
      text: "As a designer, I'm very picky about aesthetics. Every detail in the Modern Zen Villa was perfectly thought out. A masterpiece.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Michael Chen",
      role: "Family Vacation",
      text: "Our family had the most amazing time. The security and privacy provided gave us total peace of mind. We'll be back next year!",
      rating: 4,
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
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageWrapper>
      <div className="testimonials-page">
        <section className="page-header">
          <div className="container">
            <h1 data-aos="fade-down">Client Testimonials</h1>
            <p data-aos="fade-up">What our esteemed guests have to say</p>
          </div>
        </section>

        <section className="testimonials-carousel-section container">
          <div className="carousel-container" data-aos="zoom-in">
            <div className="review-card glass">
              <Quote className="quote-icon" size={60} />
              <div className="review-content">
                <div className="stars">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>
                <p className="review-text">"{reviews[currentIndex].text}"</p>
                <div className="reviewer-info">
                  <img src={reviews[currentIndex].img} alt={reviews[currentIndex].name} />
                  <div>
                    <h4>{reviews[currentIndex].name}</h4>
                    <span>{reviews[currentIndex].role}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button onClick={prevReview}><ChevronLeft size={30} /></button>
              <button onClick={nextReview}><ChevronRight size={30} /></button>
            </div>
          </div>
        </section>

        <section className="more-reviews container">
          <div className="section-title">
            <h2>Recent Reviews</h2>
          </div>
          <div className="reviews-grid">
            {reviews.map((review, idx) => (
              <div key={idx} className="small-review-card glass" data-aos="fade-up" data-aos-delay={idx * 100}>
                <p>"{review.text.substring(0, 100)}..."</p>
                <div className="reviewer-small">
                  <img src={review.img} alt={review.name} />
                  <h5>{review.name}</h5>
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
