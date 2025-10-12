import React, { useState } from 'react';

const CardiffEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cardiff enquiry:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Cardiff Enquiry</h1>
          <p>Get in touch about Bellavista Cardiff</p>
        </div>
      </div>
      
      <div className="container">
        <div className="enquiry-form">
          <h2>Enquire About Cardiff Care Home</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardiffEnquiry;