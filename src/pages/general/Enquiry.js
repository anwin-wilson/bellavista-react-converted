import React, { useState } from 'react';
import '../../styles/enquiry.css';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredHome: '',
    careType: '',
    message: '',
    urgency: '',
    preferredContact: 'email'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry form submitted:', formData);
    alert('Thank you for your enquiry. We will contact you within 24 hours!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredHome: '',
      careType: '',
      message: '',
      urgency: '',
      preferredContact: 'email'
    });
  };

  return (
    <div className="enquiry-page">
      <section className="enquiry-hero">
        <div className="container">
          <div className="enquiry-hero-content">
            <h1>Care Enquiry</h1>
            <p>Get in touch to learn more about our personalized care services and find the perfect home for your loved one.</p>
          </div>
        </div>
      </section>

      <section className="enquiry-content">
        <div className="container">
          <div className="enquiry-layout">
            <div className="enquiry-info">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Personalized Care</h3>
                <p>Every resident receives an individually tailored care plan developed by our multidisciplinary team.</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock professional care and support from our qualified nursing staff.</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h3>Home-Like Environment</h3>
                <p>Warm, welcoming environments designed to feel like home with modern amenities.</p>
              </div>

              <div className="contact-details">
                <h3>Get in Touch</h3>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <strong>Phone:</strong>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email:</strong>
                    <p>enquiries@bellavista.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Address:</strong>
                    <p>South Wales, UK</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="enquiry-form-container">
              <div className="form-header">
                <h2>Send us your enquiry</h2>
                <p>Please fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form className="enquiry-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredHome">Preferred Home</label>
                    <select
                      id="preferredHome"
                      name="preferredHome"
                      value={formData.preferredHome}
                      onChange={handleChange}
                    >
                      <option value="">Select a home</option>
                      <option value="cardiff">Cardiff Bay</option>
                      <option value="barry">Barry Seaside</option>
                      <option value="waverley">Waverley Centre</option>
                      <option value="college-fields">College Fields</option>
                      <option value="any">Open to any location</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="careType">Type of Care Needed</label>
                    <select
                      id="careType"
                      name="careType"
                      value={formData.careType}
                      onChange={handleChange}
                    >
                      <option value="">Select care type</option>
                      <option value="residential">Residential Care</option>
                      <option value="nursing">Nursing Care</option>
                      <option value="dementia">Dementia Care</option>
                      <option value="respite">Respite Care</option>
                      <option value="palliative">Palliative Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="urgency">Urgency</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                    >
                      <option value="">Select urgency</option>
                      <option value="immediate">Immediate (within 1 week)</option>
                      <option value="soon">Soon (within 1 month)</option>
                      <option value="planning">Planning ahead (1-3 months)</option>
                      <option value="future">Future planning (3+ months)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please tell us about your care needs, any specific requirements, or questions you have..."
                    rows="6"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                      />
                      <span className="radio-text">Email</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                      />
                      <span className="radio-text">Phone</span>
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-submit">
                    <i className="fas fa-paper-plane"></i>
                    Send Enquiry
                  </button>
                </div>

                <div className="form-note">
                  <p><i className="fas fa-info-circle"></i> We typically respond within 24 hours. For urgent enquiries, please call us directly.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
