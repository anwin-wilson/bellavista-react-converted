import React from 'react';

const UserDashboard = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Family Dashboard</h1>
          <p>Stay connected with your loved one</p>
        </div>
      </div>
      
      <div className="container">
        <div className="dashboard-content">
          <div className="resident-info">
            <h3>Resident Information</h3>
            <div className="resident-card">
              <h4>John Smith</h4>
              <p>Room 12B, Cardiff Care Home</p>
              <p>Care Plan: Residential Care</p>
            </div>
          </div>
          
          <div className="dashboard-sections">
            <div className="dashboard-section">
              <h3>Recent Updates</h3>
              <ul>
                <li>Enjoyed today's music therapy session</li>
                <li>Had a good night's sleep</li>
                <li>Participated in garden activities</li>
              </ul>
            </div>
            
            <div className="dashboard-section">
              <h3>Upcoming Events</h3>
              <ul>
                <li>Family visit scheduled for tomorrow</li>
                <li>Doctor's appointment next week</li>
                <li>Birthday celebration this Friday</li>
              </ul>
            </div>
            
            <div className="dashboard-section">
              <h3>Quick Actions</h3>
              <div className="actions-grid">
                <button className="action-btn">
                  <i className="fas fa-video"></i>
                  <span>Video Call</span>
                </button>
                <button className="action-btn">
                  <i className="fas fa-calendar"></i>
                  <span>Schedule Visit</span>
                </button>
                <button className="action-btn">
                  <i className="fas fa-envelope"></i>
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;