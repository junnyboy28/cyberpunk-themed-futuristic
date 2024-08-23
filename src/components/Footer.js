import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>CYBERCITY SOLUTIONS</h3>
          <p>We are a team of visionary thinkers, technologists, and urban planners passionate about harnessing the potential of smart city solutions. Our diverse backgrounds enable us to tackle the challenges of urbanization and create intelligent systems that respond to the needs of modern life.</p>
        </div>
        <div className="footer-right">
          <p><strong>Connect with us</strong></p>
          <p>+91 9175045787</p>
          <p>jimilmandani28@gmail.com</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-dribbble"></i>
            <i className="fab fa-behance"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Terms & Conditions | Privacy Notice and Cookies | Imprint</p>
        <p>CS © All rights reserved 2024-2025</p>
      </div>
    </footer>
  );
};

export default Footer;
