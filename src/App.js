import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Experiences from './components/Aspects';
import ShipImage from './components/neonGuy';
// import Gallery from './components/Gallery';
import Testimonials from './components/HearOut';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set initial zoom
    document.body.style.zoom = "125%";

    const handleScroll = () => {
      const header = document.querySelector('.header');
      const hero = document.querySelector('.hero');
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        header.classList.add('scrolled');
        hero.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        hero.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="App">
      <Hero />
      <Experiences />
      <ShipImage />
      {/* <Gallery /> */}
      <Testimonials />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;