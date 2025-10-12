import React from 'react';

const CollegeFieldsNews = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>College Fields News</h1>
          <p>Latest updates from Bellavista College Fields</p>
        </div>
      </div>
      
      <div className="container">
        <div className="news-content">
          <div className="news-grid">
            <div className="news-card">
              <h3>Pet Therapy Program</h3>
              <p className="news-date">June 18, 2024</p>
              <p>Our new pet therapy program brings joy and comfort to residents.</p>
            </div>
            <div className="news-card">
              <h3>Garden Makeover</h3>
              <p className="news-date">June 12, 2024</p>
              <p>The beautiful garden renovation is complete with new seating areas.</p>
            </div>
            <div className="news-card">
              <h3>Cooking Club</h3>
              <p className="news-date">June 6, 2024</p>
              <p>Residents enjoyed making traditional Welsh cakes in our cooking club.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFieldsNews;