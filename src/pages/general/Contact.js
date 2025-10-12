import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. We will contact you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact" style={{ padding: '60px 0', background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with us to learn more about our care services or to schedule a visit to one of our homes.
          </p>
        </div>
        
        <div className="contact-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          <div className="contact-info" style={{ padding: '30px', background: 'var(--white)', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ color: 'var(--primary-purple)', marginBottom: '20px' }}>Get in Touch</h3>
            
            <div className="contact-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div className="contact-icon" style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                background: 'linear-gradient(45deg, var(--primary-blue), var(--primary-teal))', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--white)', 
                marginRight: '15px', 
                fontSize: '20px' 
              }}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4 style={{ color: 'var(--text-dark)', marginBottom: '5px' }}>Address</h4>
                <p style={{ color: 'var(--text-light)', margin: '0' }}>South Wales, UK</p>
              </div>
            </div>
            
            <div className="contact-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div className="contact-icon" style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                background: 'linear-gradient(45deg, var(--primary-blue), var(--primary-teal))', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--white)', 
                marginRight: '15px', 
                fontSize: '20px' 
              }}>
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4 style={{ color: 'var(--text-dark)', marginBottom: '5px' }}>Phone</h4>
                <p style={{ color: 'var(--text-light)', margin: '0' }}>(555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div className="contact-icon" style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                background: 'linear-gradient(45deg, var(--primary-blue), var(--primary-teal))', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--white)', 
                marginRight: '15px', 
                fontSize: '20px' 
              }}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4 style={{ color: 'var(--text-dark)', marginBottom: '5px' }}>Email</h4>
                <p style={{ color: 'var(--text-light)', margin: '0' }}>info@bellavista.com</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form" style={{ padding: '30px', background: 'var(--white)', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ color: 'var(--primary-purple)', marginBottom: '20px' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-dark)', fontWeight: '600' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  style={{ 
                    width: '100%', 
                    padding: '12px 15px', 
                    border: '2px solid var(--bg-dark)', 
                    borderRadius: '8px', 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '16px', 
                    transition: 'all 0.3s ease' 
                  }}
                  required
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-dark)', fontWeight: '600' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  style={{ 
                    width: '100%', 
                    padding: '12px 15px', 
                    border: '2px solid var(--bg-dark)', 
                    borderRadius: '8px', 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '16px', 
                    transition: 'all 0.3s ease' 
                  }}
                  required
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-dark)', fontWeight: '600' }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  style={{ 
                    width: '100%', 
                    padding: '12px 15px', 
                    border: '2px solid var(--bg-dark)', 
                    borderRadius: '8px', 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '16px', 
                    transition: 'all 0.3s ease' 
                  }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: 'var(--text-dark)', fontWeight: '600' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                  style={{ 
                    width: '100%', 
                    padding: '12px 15px', 
                    border: '2px solid var(--bg-dark)', 
                    borderRadius: '8px', 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '16px', 
                    transition: 'all 0.3s ease',
                    resize: 'vertical',
                    minHeight: '120px'
                  }}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="form-btn"
                style={{ 
                  background: 'var(--gradient)', 
                  color: 'var(--white)', 
                  border: 'none', 
                  padding: '12px 30px', 
                  borderRadius: '30px', 
                  fontWeight: '700', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease', 
                  width: '100%', 
                  fontSize: '16px' 
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;