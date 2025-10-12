import React from 'react';

const BarryNews = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Barry News</h1>
          <p>Latest updates from Bellavista Barry</p>
        </div>
      </div>
      
      <div className="container">
        <div className="news-content">
          <div className="news-grid">
            <div className="news-card">
              <h3>Summer Garden Party</h3>
              <p className="news-date">June 15, 2024</p>
              <p>Residents enjoyed a wonderful summer garden party with live music and refreshments.</p>
            </div>
            <div className="news-card">
              <h3>New Activity Program</h3>
              <p className="news-date">June 10, 2024</p>
              <p>We've launched a new arts and crafts program for all residents to enjoy.</p>
            </div>
            <div className="news-card">
              <h3>Staff Recognition</h3>
              <p className="news-date">June 5, 2024</p>
              <p>Congratulations to our care team for their outstanding dedication and service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarryNews;