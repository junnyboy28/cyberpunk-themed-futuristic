import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/assets/images/loogo.png" alt="Maritime Marvel" />
        
      </div>
      <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
          <li><a href="AboutUs.js" onClick={toggleMobileMenu}>About</a></li>
          <li><a href="#gallery" onClick={toggleMobileMenu}>Gallery</a></li>
          <li><a href="#destination" onClick={toggleMobileMenu}>Destination</a></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;