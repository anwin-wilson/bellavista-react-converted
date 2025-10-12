import React from 'react';

const WaverleyNews = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Waverley News</h1>
          <p>Latest updates from Bellavista Waverley</p>
        </div>
      </div>
      
      <div className="container">
        <div className="news-content">
          <div className="news-grid">
            <div className="news-card">
              <h3>Music Therapy Success</h3>
              <p className="news-date">June 22, 2024</p>
              <p>Our music therapy sessions continue to bring joy and therapeutic benefits.</p>
            </div>
            <div className="news-card">
              <h3>Community Outreach</h3>
              <p className="news-date">June 16, 2024</p>
              <p>Local school children visited to share stories and artwork with residents.</p>
            </div>
            <div className="news-card">
              <h3>Exercise Program</h3>
              <p className="news-date">June 9, 2024</p>
              <p>New gentle exercise classes are helping residents stay active and healthy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaverleyNews;