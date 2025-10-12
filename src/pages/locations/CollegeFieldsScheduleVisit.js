import React, { useState } from 'react';

const CollegeFieldsScheduleVisit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    visitors: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('College Fields visit scheduled:', formData);
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
          <h1>Schedule Visit - College Fields</h1>
          <p>Book your visit to Bellavista College Fields</p>
        </div>
      </div>
      
      <div className="container">
        <div className="visit-form">
          <h2>Schedule Your Visit</h2>
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
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Preferred Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Preferred Time</label>
              <select name="time" value={formData.time} onChange={handleChange} required>
                <option value="">Select time</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
              </select>
            </div>
            <div className="form-group">
              <label>Number of Visitors</label>
              <input type="number" name="visitors" value={formData.visitors} onChange={handleChange} min="1" max="4" required />
            </div>
            <button type="submit" className="btn-primary">Schedule Visit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CollegeFieldsScheduleVisit;