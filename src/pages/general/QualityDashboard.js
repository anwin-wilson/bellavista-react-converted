import React from 'react';

const QualityDashboard = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Quality Dashboard</h1>
          <p>Transparency in our care quality and performance metrics</p>
        </div>
      </div>
      
      <div className="container">
        <div className="dashboard-content">
          <h2>Our Commitment to Quality</h2>
          <p>We believe in transparency and accountability. Our quality dashboard provides insight into our performance across key care metrics.</p>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">98%</div>
              <div className="metric-label">Resident Satisfaction</div>
              <div className="metric-description">Based on quarterly resident and family surveys</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">95%</div>
              <div className="metric-label">Staff Retention</div>
              <div className="metric-description">Annual staff retention rate across all homes</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">4.8/5</div>
              <div className="metric-label">CQC Rating</div>
              <div className="metric-description">Average rating across all our care homes</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">100%</div>
              <div className="metric-label">Compliance</div>
              <div className="metric-description">Regulatory compliance across all standards</div>
            </div>
          </div>
          
          <div className="quality-areas">
            <h3>Quality Focus Areas</h3>
            <div className="areas-list">
              <div className="area-item">
                <i className="fas fa-shield-alt"></i>
                <div>
                  <h4>Safety & Security</h4>
                  <p>Comprehensive safety protocols and 24/7 monitoring</p>
                </div>
              </div>
              <div className="area-item">
                <i className="fas fa-heart"></i>
                <div>
                  <h4>Care Excellence</h4>
                  <p>Person-centered care plans and regular assessments</p>
                </div>
              </div>
              <div className="area-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>Staff Development</h4>
                  <p>Continuous training and professional development programs</p>
                </div>
              </div>
              <div className="area-item">
                <i className="fas fa-comments"></i>
                <div>
                  <h4>Communication</h4>
                  <p>Regular feedback sessions and family involvement</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="improvement-initiatives">
            <h3>Continuous Improvement</h3>
            <p>We regularly review our performance and implement improvements based on feedback and best practices in care.</p>
            <ul>
              <li>Monthly quality audits and assessments</li>
              <li>Regular staff training and development programs</li>
              <li>Resident and family feedback integration</li>
              <li>Technology upgrades for better care delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityDashboard;