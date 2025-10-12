import React from 'react';

const StaffDashboard = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Staff Dashboard</h1>
          <p>Your daily care management tools</p>
        </div>
      </div>
      
      <div className="container">
        <div className="dashboard-content">
          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>My Residents</h3>
              <div className="stat-number">12</div>
            </div>
            <div className="stat-card">
              <h3>Tasks Today</h3>
              <div className="stat-number">8</div>
            </div>
            <div className="stat-card">
              <h3>Medications Due</h3>
              <div className="stat-number">5</div>
            </div>
          </div>
          
          <div className="dashboard-sections">
            <div className="dashboard-section">
              <h3>Today's Schedule</h3>
              <ul>
                <li>9:00 AM - Medication round</li>
                <li>11:00 AM - Activity session</li>
                <li>2:00 PM - Care assessments</li>
                <li>4:00 PM - Family meetings</li>
              </ul>
            </div>
            
            <div className="dashboard-section">
              <h3>Quick Actions</h3>
              <div className="actions-grid">
                <button className="action-btn">
                  <i className="fas fa-pills"></i>
                  <span>Log Medication</span>
                </button>
                <button className="action-btn">
                  <i className="fas fa-notes-medical"></i>
                  <span>Update Care Notes</span>
                </button>
                <button className="action-btn">
                  <i className="fas fa-calendar-check"></i>
                  <span>Mark Tasks Complete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;