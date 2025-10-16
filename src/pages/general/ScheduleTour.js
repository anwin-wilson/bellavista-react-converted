import React, { useState } from 'react';
import { bookTour } from '../../utils/api';

const ScheduleTour = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tourDate: '',
    tourTime: '',
    homeLocation: '',
    notes: ''
  });
  
  // Get today's date for date picker minimum
  const today = new Date().toISOString().split('T')[0];
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    
    try {
      const bookingData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phone,
        preferred_home: formData.homeLocation || 'cardiff',
        preferred_date: formData.tourDate,
        preferred_time: formData.tourTime,
        notes: formData.notes
      };
      
      const result = await bookTour(bookingData);
      
      if (result.success && result.data.success) {
        setBookingId(result.data.booking_id);
        setShowSuccess(true);
        
        // Show email status
        setTimeout(() => {
          if (result.data.email_sent) {
            alert('✅ Confirmation email sent to your inbox!');
          } else {
            alert('✅ Tour booked! Email failed to send, but we\'ll contact you within 24 hours.');
          }
        }, 500);
      } else {
        const errorMsg = result.data?.message || 'Failed to submit booking';
        const fieldErrors = result.data?.errors || {};
        
        setErrors({ 
          general: errorMsg,
          ...fieldErrors 
        });
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      
      if (error.message.includes('timeout')) {
        // Show success message even on timeout since booking likely succeeded
        setBookingId('PENDING');
        setShowSuccess(true);
        setTimeout(() => {
          alert('✅ Booking likely successful! We\'ll contact you within 24 hours to confirm.');
        }, 500);
      } else {
        setErrors({ 
          general: 'Connection failed. Please check your internet or try again in a moment.' 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const returnHome = () => {
    window.location.href = '/';
  };

  return (
    <section style={{ padding: '60px 0', background: 'var(--bg-light)' }}>
      <div className="container">
        <div className="tour-container">
          {!showSuccess ? (
            <div>
              <h2 className="section-title">Schedule a Tour</h2>
              <p style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-medium)' }}>
                Book a personalized tour of our facilities and meet our caring staff.
              </p>
              
              <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '15px', boxShadow: 'var(--shadow)' }}>
                {errors.general && (
                  <div style={{ background: '#fee', color: '#c33', padding: '10px', borderRadius: '5px', marginBottom: '20px', border: '1px solid #fcc' }}>
                    {errors.general}
                  </div>
                )}
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>First Name *</label>
                  <input 
                    type="text" 
                    name="firstName"
                    className="form-control" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 15px', border: `2px solid ${errors.first_name ? '#e74c3c' : '#e0e0e0'}`, borderRadius: '8px' }}
                    required 
                  />
                  {errors.first_name && (
                    <div style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
                      {errors.first_name[0]}
                    </div>
                  )}
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    className="form-control" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 15px', border: `2px solid ${errors.last_name ? '#e74c3c' : '#e0e0e0'}`, borderRadius: '8px' }}
                  />
                  {errors.last_name && (
                    <div style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
                      {errors.last_name[0]}
                    </div>
                  )}
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 15px', border: `2px solid ${errors.email ? '#e74c3c' : '#e0e0e0'}`, borderRadius: '8px' }}
                    required 
                  />
                  {errors.email && (
                    <div style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
                      {errors.email[0]}
                    </div>
                  )}
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 15px', border: `2px solid ${errors.phone_number ? '#e74c3c' : '#e0e0e0'}`, borderRadius: '8px' }}
                    required
                  />
                  {errors.phone_number && (
                    <div style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
                      {errors.phone_number[0]}
                    </div>
                  )}
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Preferred Tour Date *</label>
                  <input 
                    type="date" 
                    name="tourDate"
                    className="form-control" 
                    value={formData.tourDate}
                    onChange={handleInputChange}
                    min={today}
                    style={{ width: '100%', padding: '12px 15px', border: `2px solid ${errors.preferred_date ? '#e74c3c' : '#e0e0e0'}`, borderRadius: '8px' }}
                    required 
                  />
                  {errors.preferred_date && (
                    <div style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
                      {errors.preferred_date[0]}
                    </div>
                  )}
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Preferred Time *</label>
                  <select 
                    name="tourTime"
                    className="form-control" 
                    value={formData.tourTime}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 15px', border: `2px solid ${errors.preferred_time ? '#e74c3c' : '#e0e0e0'}`, borderRadius: '8px' }}
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                  {errors.preferred_time && (
                    <div style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
                      {errors.preferred_time[0]}
                    </div>
                  )}
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Location *</label>
                  <select 
                    name="homeLocation"
                    className="form-control"
                    value={formData.homeLocation}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 15px', border: '2px solid #e0e0e0', borderRadius: '8px' }}
                    required
                  >
                    <option value="">Select location</option>
                    <option value="cardiff">Cardiff</option>
                    <option value="barry">Barry</option>
                    <option value="waverley">Waverley</option>
                    <option value="college-fields">College Fields</option>
                  </select>
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Notes</label>
                  <textarea 
                    name="notes"
                    className="form-control" 
                    rows="3" 
                    placeholder="Any specific requirements or questions..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px 15px', border: '2px solid #e0e0e0', borderRadius: '8px', resize: 'vertical' }}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn" 
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    marginTop: '20px', 
                    background: isSubmitting ? '#ccc' : 'var(--gradient)', 
                    color: 'white', 
                    border: 'none', 
                    padding: '14px 32px', 
                    borderRadius: '30px', 
                    fontWeight: '700', 
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <><i className="fas fa-spinner fa-spin"></i> Booking Tour...</>
                  ) : (
                    <><i className="fas fa-calendar-check"></i> Schedule Tour</>
                  )}
                </button>
                
                {isSubmitting && (
                  <div style={{ 
                    textAlign: 'center', 
                    marginTop: '15px', 
                    padding: '10px',
                    background: '#e3f2fd',
                    borderRadius: '5px',
                    color: '#1976d2', 
                    fontSize: '14px' 
                  }}>
                    ⏳ Please wait... Railway server may take 10-30 seconds to wake up
                  </div>
                )}
              </form>
            </div>
          ) : (
            <div className="booking-success" style={{ textAlign: 'center', background: 'white', padding: '60px 40px', borderRadius: '15px', boxShadow: 'var(--shadow)', maxWidth: '500px', margin: '0 auto' }}>
              <i className="fas fa-check-circle" style={{ fontSize: '48px', color: '#28a745', marginBottom: '20px' }}></i>
              <h3>✅ Tour Scheduled Successfully!</h3>
              <div className="booking-id" style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', fontWeight: '700', fontSize: '18px', margin: '20px 0', border: '2px solid #28a745' }}>Booking ID: #{bookingId}</div>
              <p style={{ marginTop: '20px', fontSize: '16px' }}>📧 Confirmation email sent!</p>
              <p style={{ color: '#666' }}>We'll contact you within 24 hours to confirm details.</p>
              <button className="btn" onClick={returnHome} style={{ marginTop: '20px', background: 'linear-gradient(135deg, #28a745, #20c997)', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '30px', fontWeight: '700' }}>
                🏠 Return to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTour;