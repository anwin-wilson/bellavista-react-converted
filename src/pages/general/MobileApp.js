import React from 'react';

const MobileApp = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bellavista Mobile App</h1>
          <p>Stay connected with your loved ones anytime, anywhere</p>
        </div>
      </div>
      
      <div className="container">
        <div className="app-content">
          <h2>Download Our Mobile App</h2>
          <p>Our mobile application makes it easier than ever to stay connected with residents and access important information about our care homes.</p>
          
          <div className="app-features">
            <h3>App Features</h3>
            <div className="features-grid">
              <div className="feature">
                <i className="fas fa-video"></i>
                <h4>Video Calls</h4>
                <p>Schedule and conduct video calls with residents</p>
              </div>
              <div className="feature">
                <i className="fas fa-calendar"></i>
                <h4>Visit Scheduling</h4>
                <p>Book visits and manage appointments easily</p>
              </div>
              <div className="feature">
                <i className="fas fa-bell"></i>
                <h4>Updates & Notifications</h4>
                <p>Receive important updates about your loved one</p>
              </div>
              <div className="feature">
                <i className="fas fa-images"></i>
                <h4>Photo Sharing</h4>
                <p>View and share photos of activities and events</p>
              </div>
              <div className="feature">
                <i className="fas fa-comments"></i>
                <h4>Messaging</h4>
                <p>Communicate directly with care team members</p>
              </div>
              <div className="feature">
                <i className="fas fa-file-medical"></i>
                <h4>Care Updates</h4>
                <p>Access care plans and health information</p>
              </div>
            </div>
          </div>
          
          <div className="download-section">
            <h3>Download Now</h3>
            <p>Available for both iOS and Android devices</p>
            <div className="download-buttons">
              <a href="#" className="download-btn">
                <i className="fab fa-apple"></i>
                <div>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href="#" className="download-btn">
                <i className="fab fa-google-play"></i>
                <div>
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>
          
          <div className="app-support">
            <h3>Need Help?</h3>
            <p>Our support team is available to help you get started with the mobile app.</p>
            <ul>
              <li>Step-by-step setup guide</li>
              <li>Video tutorials</li>
              <li>24/7 technical support</li>
              <li>In-person assistance available</li>
            </ul>
            <button className="btn-primary">Get Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;