import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      const scriptURL = 'https://script.google.com/macros/s/AKfycbw9-iBFNG-zQdykUFZ8FiAHU5Pqbi7WB8rgjq6hUHlUYGuujaywySDK6LaE4sR9HsXakA/exec';
      
      // Create a new form data object
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }

      // Create a script element
      const script = document.createElement('script');
      script.src = `${scriptURL}?callback=handleResponse&${new URLSearchParams(form).toString()}`;
      
      // Define the callback function
      window.handleResponse = (response) => {
        setIsSubmitting(false);
        if (response.result === 'success') {
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitSuccess(false), 5000);
        } else {
          console.error('Form submission error:', response.message);
          alert('Form submission failed. Please try again. Error: ' + response.message);
        }
        document.body.removeChild(script);
        delete window.handleResponse;
      };

      // Append the script to the body
      document.body.appendChild(script);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="get-in-touch">
          <h2>Get in Touch</h2>
          <p>Phone: +91 9175045787</p>
          <p>Email: jimilmandani28@gmail.com</p>
          <p>Address: Miramar, Caranzalem, Panji, Goa</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
        <div className="contact-form">
          <h2>We'd love to hear from you</h2>
          {submitSuccess && (
            <div className="success-message">Thank you for your message! We'll get back to you soon.</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit" className="send-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'SEND'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;