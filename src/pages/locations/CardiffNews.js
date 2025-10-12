import React from 'react';

const CardiffNews = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Cardiff News</h1>
          <p>Latest updates from Bellavista Cardiff</p>
        </div>
      </div>
      
      <div className="container">
        <div className="news-content">
          <div className="news-grid">
            <div className="news-card">
              <h3>Welsh Culture Day</h3>
              <p className="news-date">June 20, 2024</p>
              <p>Residents celebrated Welsh heritage with traditional music and storytelling.</p>
            </div>
            <div className="news-card">
              <h3>New Therapy Garden</h3>
              <p className="news-date">June 15, 2024</p>
              <p>Our beautiful new therapy garden is now open for residents to enjoy.</p>
            </div>
            <div className="news-card">
              <h3>Family Fun Day</h3>
              <p className="news-date">June 8, 2024</p>
              <p>A wonderful day of activities and entertainment for residents and families.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardiffNews;