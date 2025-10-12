import React from 'react';

const CovidUpdate = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>COVID-19 Updates</h1>
          <p>Our commitment to safety during the pandemic</p>
        </div>
      </div>
      
      <div className="container">
        <div className="covid-content">
          <h2>Our Response to COVID-19</h2>
          <p>The health and safety of our residents, families, and staff remains our top priority. We have implemented comprehensive measures to protect everyone in our care homes.</p>
          
          <div className="safety-measures">
            <h3>Safety Protocols</h3>
            <div className="measures-grid">
              <div className="measure">
                <i className="fas fa-shield-virus"></i>
                <h4>Enhanced Cleaning</h4>
                <p>Increased frequency of cleaning and disinfection of all areas</p>
              </div>
              <div className="measure">
                <i className="fas fa-user-md"></i>
                <h4>Health Screening</h4>
                <p>Daily health checks for all residents, staff, and visitors</p>
              </div>
              <div className="measure">
                <i className="fas fa-mask"></i>
                <h4>PPE Requirements</h4>
                <p>Proper use of personal protective equipment by all staff</p>
              </div>
              <div className="measure">
                <i className="fas fa-syringe"></i>
                <h4>Vaccination Program</h4>
                <p>Supporting vaccination efforts for residents and staff</p>
              </div>
            </div>
          </div>
          
          <div className="visitor-guidelines">
            <h3>Visitor Guidelines</h3>
            <ul>
              <li>All visitors must complete health screening upon arrival</li>
              <li>Face masks required in all common areas</li>
              <li>Hand sanitization before and after visits</li>
              <li>Limited number of visitors per resident</li>
              <li>Visits may be conducted outdoors when weather permits</li>
            </ul>
          </div>
          
          <div className="communication">
            <h3>Staying Connected</h3>
            <p>We understand the importance of family connections. We offer various ways to stay in touch:</p>
            <ul>
              <li>Video calls with residents</li>
              <li>Regular updates from care teams</li>
              <li>Window visits when appropriate</li>
              <li>Digital photo sharing</li>
            </ul>
          </div>
          
          <div className="contact-covid">
            <h3>Questions or Concerns?</h3>
            <p>If you have any questions about our COVID-19 protocols or would like to schedule a visit, please contact us.</p>
            <button className="btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidUpdate;