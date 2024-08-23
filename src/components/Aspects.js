import React, { useState, useEffect, useCallback } from 'react';

function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const experiences = [
    { title: 'Smart Infrastructure', image: '/assets/images/exp1.jpg' },
    { title: 'Cybersecurity & Surveillance', image: '/assets/images/exp2.jpg' },
    { title: 'Human-Tech Interface', image: '/assets/images/exp3.jpg' },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  }, [experiences.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  }, [experiences.length]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isMobile) {
      intervalId = setInterval(nextSlide, 3000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isMobile, nextSlide]);

  return (
    <section className="experiences">
      <h2>Marvel Aspects</h2>
  
      <div className="carousel-wrapper">
        <button className="carousel-control prev" onClick={prevSlide}>
          <img src="/assets/images/left-arrow.png" alt="Previous" />
        </button>
        <div className="carousel">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`carousel-item ${isMobile && index === currentIndex ? 'active' : ''}`}
            >
              <img src={exp.image} alt={exp.title} />
              <h3>{exp.title}</h3>
            </div>
          ))}
        </div>
        <button className="carousel-control next" onClick={nextSlide}>
          <img src="/assets/images/right-arrow.png" alt="Next" />
        </button>
      </div>
    </section>
  );
}

export default Experiences;