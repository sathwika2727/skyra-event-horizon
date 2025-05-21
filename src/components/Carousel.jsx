
import { useState, useEffect } from 'react';

const Carousel = ({ images, autoSlide = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    
    const slideTimer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);
    
    return () => clearInterval(slideTimer);
  }, [autoSlide, images.length, interval]);

  return (
    <div className="carousel w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          style={{ 
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center max-w-4xl px-4">
              {image.title && (
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-playfair">
                  {image.title}
                </h1>
              )}
              {image.subtitle && (
                <p className="text-xl md:text-2xl text-white mb-8">
                  {image.subtitle}
                </p>
              )}
              {image.cta && (
                <a href={image.ctaLink} className="btn-primary">
                  {image.cta}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
