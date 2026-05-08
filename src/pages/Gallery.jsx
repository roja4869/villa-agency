import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { url: "/images/villa_1.png", size: "large", isLocal: true },
    { url: "/images/villa_2.png", size: "large", isLocal: true },
    { url: "/images/villa_3.png", size: "large", isLocal: true },
    { url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", size: "large" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6199f7d009", size: "small" },
    { url: "https://images.unsplash.com/photo-1600607687940-c52af04657b3", size: "medium" },
    { url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea", size: "small" },
    { url: "https://images.unsplash.com/photo-1600585154542-630847ff76d7", size: "large" },
  ];

  return (
    <PageWrapper>
      <div className="gallery-page">
        <section className="page-header">
          <div className="container">
            <h1 data-aos="fade-down">Our Gallery</h1>
            <p data-aos="fade-up">A visual journey through our finest properties</p>
          </div>
        </section>

        <section className="gallery-masonry container">
          <div className="masonry">
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`masonry-item ${img.size}`}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                onClick={() => setSelectedImg(img.url)}
              >
                <img src={img.isLocal ? img.url : `${img.url}?auto=format&fit=crop&q=80&w=800`} alt="Villa" />
                <div className="overlay">
                  <ZoomIn color="white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedImg && (
          <div className="lightbox" onClick={() => setSelectedImg(null)}>
            <div className="lightbox-content">
              <img src={selectedImg.startsWith('/') ? selectedImg : `${selectedImg}?auto=format&fit=crop&q=80&w=1200`} alt="Enlarged" />
              <button className="close-btn" onClick={() => setSelectedImg(null)}><X size={32} /></button>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default Gallery;
