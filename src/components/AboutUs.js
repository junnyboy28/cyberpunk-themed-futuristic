// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
    return (
      <section className="about-us">
        <div className="about-us-container">
          <div className="about-us-image">
            <img src="assets/images/capimage.png" alt="Cruise Captain" className="captain-image" />
            {/* <img src="assets/images/shipimage.png" alt="Cruise Ship" className="shipimage" /> */}
          </div>
          <div className="about-us-content">
            <h2>CYBERCITY SOLUTIONS</h2>
            <h1>ABOUT US</h1>
            <p>
            Welcome to CYBERCITY SOLUTIONS, where the future of urban living is being reimagined.

In a world defined by rapid technological advancement and urban transformation, we stand at the forefront of the smart city revolution. Our mission is to create connected, sustainable, and resilient urban environments that enhance the quality of life for all citizens while embracing the complexities of the digital age.


            </p>
            <p>What We Do?

Smart Infrastructure: We design and implement innovative solutions that enhance urban infrastructure, from IoT networks to energy-efficient buildings, ensuring that our cities are equipped for the future.

Advanced Mobility: Our smart transportation systems prioritize efficiency and sustainability, providing seamless connectivity that reduces congestion and enhances the urban experience.

Security and Resilience: In an increasingly digital world, we prioritize safety through advanced cybersecurity measures, ensuring that our cities remain secure while promoting trust and transparency.</p>
            <button className="explore-button">EXPLORE</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;