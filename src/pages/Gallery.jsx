import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { X, ZoomIn, Maximize2 } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", size: "large", title: "Malibu Oceanfront" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", size: "small", title: "Modern Interior" },
    { url: "https://images.unsplash.com/photo-1600607687940-c52af04657b3", size: "medium", title: "Greek Island Suite" },
    { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", size: "large", title: "Luxury Poolside" },
    { url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea", size: "medium", title: "Penthouse View" },
    { url: "https://images.unsplash.com/photo-1600585154542-630847ff76d7", size: "small", title: "Master Bedroom" },
    { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", size: "large", title: "Nordic Retreat" },
    { url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914", size: "medium", title: "Kyoto Zen Villa" },
  ];

  return (
    <PageWrapper>
      <div className="gallery-page page-fade-in">
        <section className="gallery-hero">
          <div className="container">
            <span className="badge-gold" data-aos="fade-down">Visual Journey</span>
            <h1 data-aos="fade-up">Luxury <span className="text-gold">Portfolio</span></h1>
            <p data-aos="fade-up" data-aos-delay="200">A curated collection of the world's most exquisite properties captured through the lens.</p>
          </div>
        </section>

        <section className="gallery-grid-container container">
          <div className="masonry-gallery">
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`masonry-card ${img.size}`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onClick={() => setSelectedImg(img.url)}
              >
                <div className="masonry-img-wrapper">
                  <img src={`${img.url}?auto=format&fit=crop&q=80&w=800`} alt={img.title} />
                  <div className="masonry-overlay">
                    <Maximize2 color="white" size={32} />
                    <h4>{img.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedImg && (
          <div className="gallery-lightbox" onClick={() => setSelectedImg(null)}>
            <div className="lightbox-overlay"></div>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={`${selectedImg}?auto=format&fit=crop&q=80&w=1200`} alt="Enlarged View" />
              <button className="lightbox-close" onClick={() => setSelectedImg(null)}><X size={32} /></button>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Gallery;
