import React from 'react';

const CareResources = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Care Resources</h1>
          <p>Helpful information and resources for families and residents</p>
        </div>
      </div>
      
      <div className="container">
        <div className="resources-content">
          <h2>Information & Support</h2>
          <p>We provide comprehensive resources to help families make informed decisions about care options and support residents in their journey.</p>
          
          <div className="resources-grid">
            <div className="resource-category">
              <h3><i className="fas fa-book"></i> Care Guides</h3>
              <ul>
                <li>Understanding Care Home Options</li>
                <li>Preparing for Care Home Admission</li>
                <li>Supporting a Loved One in Care</li>
                <li>Managing the Transition</li>
              </ul>
            </div>
            
            <div className="resource-category">
              <h3><i className="fas fa-file-alt"></i> Forms & Documents</h3>
              <ul>
                <li>Admission Forms</li>
                <li>Care Assessment Forms</li>
                <li>Medical Information Forms</li>
                <li>Personal Preferences Questionnaire</li>
              </ul>
            </div>
            
            <div className="resource-category">
              <h3><i className="fas fa-phone"></i> Support Services</h3>
              <ul>
                <li>Family Support Groups</li>
                <li>Counseling Services</li>
                <li>Financial Advice</li>
                <li>Legal Guidance</li>
              </ul>
            </div>
            
            <div className="resource-category">
              <h3><i className="fas fa-link"></i> Useful Links</h3>
              <ul>
                <li>Age UK</li>
                <li>Alzheimer's Society</li>
                <li>Care Quality Commission</li>
                <li>NHS Care Services</li>
              </ul>
            </div>
          </div>
          
          <div className="contact-support">
            <h3>Need Additional Support?</h3>
            <p>Our team is here to help you navigate the care process. Contact us for personalized guidance and support.</p>
            <button className="btn-primary">Contact Our Support Team</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareResources;