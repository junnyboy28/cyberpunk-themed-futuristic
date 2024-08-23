import React from 'react';
import Header from './Header';

function Hero() {
  return (
    <section className="hero">
      <Header />
      <video autoPlay loop muted className="hero-video">
        <source src="/assets/videos/website_vid.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Welcome to the Edge of Tomorrow</h1>
        <p>"The future is closer than you think, and it’s more unpredictable than ever. Prepare for a world where innovation drives every decision, and only the bold can survive the digital revolution.</p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;