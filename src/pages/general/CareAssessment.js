import React from 'react';

const CareAssessment = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Care Assessment</h1>
          <p>Comprehensive assessment process for personalized care</p>
        </div>
      </div>
      
      <div className="container">
        <div className="assessment-content">
          <h2>Our Assessment Process</h2>
          <p>We conduct thorough assessments to understand each individual's unique needs and preferences, ensuring we provide the most appropriate care and support.</p>
          
          <div className="assessment-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>Discussion of care needs, preferences, and expectations</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Comprehensive Assessment</h3>
              <p>Detailed evaluation of physical, emotional, and social needs</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Care Plan Development</h3>
              <p>Creation of personalized care plan based on assessment findings</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Regular Reviews</h3>
              <p>Ongoing assessment and adjustment of care plans as needs change</p>
            </div>
          </div>
          
          <div className="assessment-areas">
            <h3>Assessment Areas</h3>
            <div className="areas-grid">
              <div className="area">
                <i className="fas fa-heartbeat"></i>
                <h4>Physical Health</h4>
                <p>Medical conditions, mobility, and physical care needs</p>
              </div>
              <div className="area">
                <i className="fas fa-brain"></i>
                <h4>Mental Wellbeing</h4>
                <p>Cognitive function, emotional health, and mental stimulation needs</p>
              </div>
              <div className="area">
                <i className="fas fa-users"></i>
                <h4>Social Needs</h4>
                <p>Relationships, activities, and community involvement preferences</p>
              </div>
              <div className="area">
                <i className="fas fa-home"></i>
                <h4>Personal Preferences</h4>
                <p>Lifestyle choices, routines, and individual requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareAssessment;