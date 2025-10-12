import React from 'react';

const Gallery = () => {
  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Gallery</h1>
          <p>Take a visual tour of our care homes and facilities</p>
        </div>
      </div>
      
      <div className="container">
        <div className="gallery-content">
          <h2>Our Facilities</h2>
          <p>Explore our modern, comfortable care homes designed to provide a warm, welcoming environment for all our residents.</p>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/facility1.jpg" alt="Reception Area" />
              <h3>Reception & Welcome Area</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility2.jpg" alt="Dining Room" />
              <h3>Dining Room</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility11.jpg" alt="Lounge Area" />
              <h3>Comfortable Lounge</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility12.jpg" alt="Garden" />
              <h3>Beautiful Gardens</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility13.jpg" alt="Activity Room" />
              <h3>Activity Room</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility14.jpg" alt="Bedroom" />
              <h3>Resident Bedroom</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility15.jpg" alt="Therapy Room" />
              <h3>Therapy Room</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility16.jpg" alt="Library" />
              <h3>Library & Reading Area</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility17.jpg" alt="Kitchen" />
              <h3>Modern Kitchen</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility18.jpg" alt="Bathroom" />
              <h3>En-suite Bathroom</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility19.jpg" alt="Outdoor Space" />
              <h3>Outdoor Seating Area</h3>
            </div>
            <div className="gallery-item">
              <img src="/images/facility21.jpg" alt="Common Area" />
              <h3>Common Area</h3>
            </div>
          </div>
          
          <div className="gallery-cta">
            <h3>See More in Person</h3>
            <p>Schedule a visit to experience our facilities firsthand and meet our caring team.</p>
            <button className="btn-primary">Schedule a Tour</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;