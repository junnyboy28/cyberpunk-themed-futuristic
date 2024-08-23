import React from 'react';


const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">HEAR THEM OUT!</h2>
      <hr className="testimonial-divider" />
      <div className="testimonial-content">
        <span className="testimonial-quote-left">“</span>
        <p>
        The world hadn’t ever had so many moving parts or so few labels. So many people were running this way and that, dodging the elaborate traffic of choice, caught in some motion blur of hope and information.
        </p>
        <span className="testimonial-quote-right">”</span>
      </div>
      <hr className="testimonial-divider" />
      <div className="profile-container">
        <img src="assets\images\Maskuserpic.jpeg" alt="Jessey Kirk" className="profile-picture" />
        <div className="profile-info">
          <p className="profile-name">William Gibson</p>
          <p className="profile-affiliation">Father of cyberpunk</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
