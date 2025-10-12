import React from 'react';

const OurCare = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Our Care Philosophy</h1>
          <p>Person-centered care that honors dignity, choice, and wellbeing</p>
        </div>
      </div>
      
      <div className="container">
        <div className="care-philosophy">
          <h2>Our Approach to Care</h2>
          <p>At Bellavista Care Homes, we believe that every individual deserves to live with dignity, respect, and purpose. Our care philosophy centers on the person, not just their care needs.</p>
          
          <div className="care-principles">
            <div className="principle">
              <i className="fas fa-heart"></i>
              <h3>Person-Centered Care</h3>
              <p>Every care plan is tailored to the individual's unique needs, preferences, and life story.</p>
            </div>
            <div className="principle">
              <i className="fas fa-hands-helping"></i>
              <h3>Dignity & Respect</h3>
              <p>We honor each resident's autonomy and treat everyone with the utmost dignity and respect.</p>
            </div>
            <div className="principle">
              <i className="fas fa-home"></i>
              <h3>Home-Like Environment</h3>
              <p>Creating warm, welcoming spaces that feel like home, not an institution.</p>
            </div>
            <div className="principle">
              <i className="fas fa-users"></i>
              <h3>Family Involvement</h3>
              <p>Encouraging family participation in care decisions and maintaining important relationships.</p>
            </div>
          </div>
          
          <div className="care-standards">
            <h3>Our Care Standards</h3>
            <div className="standards-grid">
              <div className="standard">
                <h4>Quality Assurance</h4>
                <p>Regular monitoring and continuous improvement of care quality</p>
              </div>
              <div className="standard">
                <h4>Staff Training</h4>
                <p>Ongoing professional development for all care team members</p>
              </div>
              <div className="standard">
                <h4>Safety First</h4>
                <p>Comprehensive safety protocols and risk management procedures</p>
              </div>
              <div className="standard">
                <h4>Transparency</h4>
                <p>Open communication with residents and families about all aspects of care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCare;