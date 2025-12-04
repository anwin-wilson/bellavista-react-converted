import React, { useState } from 'react';
import '../../styles/cardiff.css';

const Waverley = () => {
  const [heroExpanded, setHeroExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [mapShown, setMapShown] = useState(false);
  const [locationInput, setLocationInput] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [newsFilter, setNewsFilter] = useState('all');

  const toggleHeroContent = () => {
    setHeroExpanded(!heroExpanded);
  };

  const openModal = (serviceType) => {
    const serviceDetails = {
      residential: {
        title: 'Suburban Residential Care',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-home"></i> Peaceful Suburban Living</h4>
            <p>Our residential care combines comfortable accommodation with the tranquility of suburban living, offering rooms with garden views.</p>
            <h4><i className="fas fa-tree"></i> Garden Benefits</h4>
            <ul>
              <li>Garden view rooms with natural light and peaceful surroundings</li>
              <li>Direct access to therapeutic gardens and walking paths</li>
              <li>Proximity to local community facilities</li>
              <li>Quiet suburban environment for relaxation</li>
            </ul>
            <h4><i className="fas fa-heart"></i> Personalized Care</h4>
            <p>Each resident receives individualized care plans that incorporate the unique advantages of our suburban location for enhanced wellbeing.</p>
          </div>
        `
      },
      nursing: {
        title: 'Suburban Nursing Care',
        content: `
          <div class="service-detail">
            <h4><i className="fas fa-user-nurse"></i> Professional Suburban Care</h4>
            <p>24/7 nursing care enhanced by our peaceful suburban location, where garden therapy and community access complement our care.</p>
            <h4><i className="fas fa-stethoscope"></i> Medical Excellence</h4>
            <ul>
              <li>Qualified nursing staff with community care expertise</li>
              <li>Access to local medical facilities and specialists</li>
              <li>Integration of garden therapy in treatment plans</li>
              <li>Partnerships with local suburban health services</li>
            </ul>
            <h4><i className="fas fa-leaf"></i> Natural Healing</h4>
            <p>Our suburban location provides natural therapeutic benefits that complement traditional nursing care for improved health outcomes.</p>
          </div>
        `
      },
      dementia: {
        title: 'Suburban Dementia Care',
        content: `
          <div class="service-detail">
            <h4><i className="fas fa-brain"></i> Community Memory Care</h4>
            <p>Specialized dementia care in a calming suburban environment where garden activities and community familiarity provide therapeutic benefits.</p>
            <h4><i className="fas fa-tree"></i> Garden Therapy</h4>
            <ul>
              <li>Sensory stimulation through garden scents and peaceful surroundings</li>
              <li>Therapeutic garden walks and outdoor activities</li>
              <li>Community reminiscence activities</li>
              <li>Familiar suburban environment to reduce confusion</li>
            </ul>
            <h4><i className="fas fa-seedling"></i> Nature Activities</h4>
            <p>Specially designed programs that use our suburban location to stimulate memory and provide comfort through nature and community experiences.</p>
          </div>
        `
      },
      respite: {
        title: 'Suburban Respite Care',
        content: `
          <div class="service-detail">
            <h4><i className="fas fa-tree"></i> Peaceful Breaks</h4>
            <p>Short-term suburban respite care that provides families with peace of mind while their loved ones enjoy the tranquility of Waverley.</p>
            <h4><i className="fas fa-calendar-alt"></i> Flexible Suburban Stays</h4>
            <ul>
              <li>Weekend peaceful breaks to week-long stays</li>
              <li>Access to all garden and community activities</li>
              <li>Garden view accommodation options</li>
              <li>Easy access to local shops and services</li>
            </ul>
            <h4><i className="fas fa-heart"></i> Restorative Environment</h4>
            <p>Our suburban setting provides a naturally restorative environment that benefits both temporary and permanent residents.</p>
          </div>
        `
      }
    };

    const service = serviceDetails[serviceType];
    setModalContent(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const findDirections = () => {
    if (locationInput.trim()) {
      setMapShown(true);
      setDistance(`${Math.floor(Math.random() * 10 + 1)} miles`);
      setDuration(`${Math.floor(Math.random() * 20 + 5)} minutes`);
    }
  };

  const closeMap = () => {
    setMapShown(false);
  };

  const filterNews = (filter) => {
    setNewsFilter(filter);
  };

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className={`home-hero ${heroExpanded ? 'expanded' : ''}`} id="heroSection">
        <div className="container">
          <h1>Welcome to Bellavista Waverley</h1>
          <p>A peaceful suburban care home providing exceptional residential, nursing, and dementia care in a tranquil community setting with beautiful gardens and therapeutic green spaces.</p>

          <button className="read-more-btn" id="readMoreBtn" onClick={toggleHeroContent}>
            <i className="fas fa-chevron-down"></i> {heroExpanded ? 'Read Less' : 'Read More'}
          </button>

          <div className={`hero-expanded-content ${heroExpanded ? 'expanded' : ''}`} id="heroExpandedContent">
            <div className="expanded-text">
              <p>Bellavista Waverley is nestled in the peaceful suburbs, offering residents the perfect blend of tranquility and community living combined with professional care. Our home seamlessly integrates modern care facilities with the restorative power of nature and suburban charm.</p>
              <p>We believe in the healing benefits of suburban living, where residents can enjoy beautiful gardens, community connections, and the peacefulness that enhances both physical and mental wellbeing.</p>
              <p>Our dedicated team understands the unique advantages of community care, incorporating garden therapy, local outings, and nature-based wellness programs that take full advantage of our suburban location.</p>
              <p>The home is registered to provide residential care, nursing care, dementia care, and respite services, all enhanced by our beautiful suburban setting that provides access to nature and community amenities.</p>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">40</span>
              <span className="stat-label">Garden View Rooms</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">Garden Suites</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">75+</span>
              <span className="stat-label">Caring Staff</span>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="find-home">
        <div className="container">
          <div className={`find-home-layout ${mapShown ? 'map-active' : ''}`} id="findHomeLayout">
            <div className={`find-home-content ${mapShown ? 'hidden' : ''}`} id="findHomeContent">
              <h2 className="section-title">Find Us - Waverley Suburban Location</h2>
              <p>Located in peaceful Waverley with beautiful gardens and community access</p>
              <div className="find-home-search">
                <input
                  className="search-input"
                  id="locationInput"
                  placeholder="Enter your postcode to get directions"
                  type="text"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                />
                <button className="search-btn" onClick={findDirections}>
                  <i className="fas fa-directions"></i>
                </button>
              </div>
            </div>
            {mapShown && (
              <div className="map-container" id="mapContainer">
                <div className="demo-map">
                  <div className="map-header">
                    <i className="fas fa-map-marked-alt"></i> Route to Waverley Suburban Home
                    <button className="close-map-btn" onClick={closeMap}>
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="map-content">
                    <div className="route-line"></div>
                    <div className="location-marker user-marker">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Your Location</span>
                    </div>
                    <div className="location-marker home-marker">
                      <i className="fas fa-home"></i>
                      <span>Waverley Suburban Home</span>
                    </div>
                  </div>
                  <div className="map-info">
                    <div className="info-item">
                      <i className="fas fa-route"></i>
                      <span id="distance">{distance}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-clock"></i>
                      <span id="duration">{duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Care Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Care Services</h2>
          <p className="section-subtitle">Comprehensive care services enhanced by our peaceful suburban location</p>
          <div className="care-grid">
            <div className="card clickable-card" onClick={() => openModal('residential')}>
              <i className="fas fa-home" style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '20px' }}></i>
              <h4>Residential Care</h4>
              <p>Comfortable suburban living with personalized care and garden views</p>
            </div>
            <div className="card clickable-card" onClick={() => openModal('nursing')}>
              <i className="fas fa-user-nurse" style={{ fontSize: '3rem', color: 'var(--primary-green)', marginBottom: '20px' }}></i>
              <h4>Nursing Care</h4>
              <p>24/7 professional nursing care with access to community facilities</p>
            </div>
            <div className="card clickable-card" onClick={() => openModal('dementia')}>
              <i className="fas fa-brain" style={{ fontSize: '3rem', color: 'var(--primary-purple)', marginBottom: '20px' }}></i>
              <h4>Dementia Care</h4>
              <p>Memory care enhanced by garden activities and community familiarity</p>
            </div>
            <div className="card clickable-card" onClick={() => openModal('respite')}>
              <i className="fas fa-umbrella-beach" style={{ fontSize: '3rem', color: 'var(--primary-orange)', marginBottom: '20px' }}></i>
              <h4>Suburban Respite</h4>
              <p>Short-term breaks providing families with peace of mind in the suburbs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Suburban Team</h2>
          <p className="section-subtitle">Experienced professionals who understand the benefits of community care</p>
          <div className="team-grid">
            <div className="card">
              <img src="https://picsum.photos/seed/waverley-manager/200/200" alt="Andrew Phillips" />
              <h4>Andrew Phillips</h4>
              <p>Home Manager</p>
              <p>18+ years experience in suburban care facilities</p>
            </div>
            <div className="card">
              <img src="https://picsum.photos/seed/waverley-nurse1/200/200" alt="Dr. Lisa Jenkins" />
              <h4>Dr. Lisa Jenkins</h4>
              <p>Senior Nurse</p>
              <p>Specialist in community healthcare and garden therapy</p>
            </div>
            <div className="card">
              <img src="https://picsum.photos/seed/waverley-nurse2/200/200" alt="Claire Williams" />
              <h4>Claire Williams</h4>
              <p>Activities Coordinator</p>
              <p>Organizing garden activities and community outings</p>
            </div>
            <div className="card">
              <img src="https://picsum.photos/seed/waverley-physio/200/200" alt="Mark Thompson" />
              <h4>Mark Thompson</h4>
              <p>Physiotherapist</p>
              <p>Specializing in garden walks and nature-based therapy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Waverley Suburban?</h2>
          <p className="section-subtitle">Unique suburban advantages for health, wellbeing, and quality of life</p>
          <div className="care-grid">
            <div className="card">
              <i className="fas fa-tree" style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '20px' }}></i>
              <h4>Beautiful Gardens</h4>
              <p>Therapeutic gardens and green spaces promoting relaxation and wellbeing</p>
            </div>
            <div className="card">
              <i className="fas fa-users" style={{ fontSize: '3rem', color: 'var(--primary-green)', marginBottom: '20px' }}></i>
              <h4>Community Focus</h4>
              <p>Strong community connections and local support networks</p>
            </div>
            <div className="card">
              <i className="fas fa-leaf" style={{ fontSize: '3rem', color: 'var(--primary-orange)', marginBottom: '20px' }}></i>
              <h4>Nature Therapy</h4>
              <p>Garden walks, nature activities, and outdoor therapy programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news" id="news">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Waverley Suburban News</h2>
            <p className="section-subtitle">Stay connected with community developments, garden events & wellness innovations</p>
          </div>
          <div className="news-showcase">
            <div className="news-featured">
              <div className="news-image-large">
                <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Suburban Garden" />
                <div className="news-badge-large">🌳 Waverley Suburban Update</div>
              </div>
              <div className="news-info-large">
                <div className="news-meta">
                  <span className="news-category featured">Facility Enhancement</span>
                  <span className="news-date-large">Dec 15, 2024</span>
                </div>
                <h3>New Therapeutic Garden & Community Pathways Opens</h3>
                <p>Our beautiful new therapeutic garden with community pathways is now open, featuring healing plants, accessible walking routes, and community gathering spaces for all residents to enjoy the restorative benefits of our suburban location.</p>
                <div className="news-stats">
                  <span><i className="fas fa-eye"></i> 2.7K views</span>
                  <span><i className="fas fa-heart"></i> <span className="like-count">98</span> likes</span>
                  <span><i className="fas fa-share"></i> <span className="share-count">65</span> shares</span>
                </div>
                <a href="/waverley-news" className="btn btn-primary">Read Full Update</a>
              </div>
            </div>
          </div>
          <div className="news-filters">
            <button className={`filter-btn ${newsFilter === 'all' ? 'active' : ''}`} onClick={() => filterNews('all')}>All Waverley News</button>
            <button className={`filter-btn ${newsFilter === 'health' ? 'active' : ''}`} onClick={() => filterNews('health')}>Health Updates</button>
            <button className={`filter-btn ${newsFilter === 'awards' ? 'active' : ''}`} onClick={() => filterNews('awards')}>Awards</button>
            <button className={`filter-btn ${newsFilter === 'events' ? 'active' : ''}`} onClick={() => filterNews('events')}>Community Events</button>
            <button className={`filter-btn ${newsFilter === 'activities' ? 'active' : ''}`} onClick={() => filterNews('activities')}>Garden Activities</button>
            <button className={`filter-btn ${newsFilter === 'community' ? 'active' : ''}`} onClick={() => filterNews('community')}>Community</button>
          </div>
          <div className="news-grid modern">
            <div className={`news-card modern ${newsFilter === 'all' || newsFilter === 'events' ? 'news-visible' : ''}`} data-category="events">
              <div className="news-image">
                <img alt="Community Festival" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="news-content">
                <div className="news-category events">🎪 Community Events</div>
                <h4>Waverley Community Garden Festival</h4>
                <p>Join us for garden tours, community performances, and special events celebrating our suburban location.</p>
                <div className="news-engagement">
                  <span><i className="fas fa-calendar"></i> Dec 20-27</span>
                  <span><i className="fas fa-map-marker-alt"></i> Waverley Suburban</span>
                </div>
                <a className="news-link modern" href="/waverley-news">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className={`news-card modern ${newsFilter === 'all' || newsFilter === 'awards' ? 'news-visible' : ''}`} data-category="awards">
              <div className="news-image">
                <img alt="Community Care Award" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="news-content">
                <div className="news-category awards">🏆 Awards</div>
                <h4>Community Care Excellence Award 2024</h4>
                <p>Bellavista Waverley receives recognition for innovative garden therapy programs and outstanding suburban care environment.</p>
                <div className="news-engagement">
                  <span><i className="fas fa-trophy"></i> Community Award</span>
                  <span><i className="fas fa-tree"></i> Garden Care</span>
                </div>
                <a className="news-link modern" href="/waverley-news">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className={`news-card modern ${newsFilter === 'all' || newsFilter === 'activities' ? 'news-visible' : ''}`} data-category="activities">
              <div className="news-image">
                <img alt="Garden Therapy" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="news-content">
                <div className="news-category activities">🌱 Garden Activities</div>
                <h4>New Garden Therapy Program Launch</h4>
                <p>Introducing guided garden walks, horticulture therapy sessions, and nature-based wellness programs for enhanced resident wellbeing.</p>
                <div className="news-engagement">
                  <span><i className="fas fa-seedling"></i> Garden Therapy</span>
                  <span><i className="fas fa-heart"></i> Nature Wellness</span>
                </div>
                <a className="news-link modern" href="/waverley-news">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="news-cta">
            <a href="/waverley-news" className="btn btn-outline">
              <i className="fas fa-newspaper"></i> View All Waverley News
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Waverley Suburban, South Wales - Peaceful community location with garden access</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>01656 789 012</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>waverley@bellavistanursinghome.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Visiting Hours: 9:00 AM - 8:00 PM Daily (Extended for garden activities)</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-wheelchair"></i>
              <span>Fully accessible with garden ramps and community pathway access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {modalOpen && (
        <div className="modal-overlay" id="modalOverlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 id="modalTitle">{modalContent.title}</h3>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body" id="modalBody" dangerouslySetInnerHTML={{ __html: modalContent.content }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Waverley;
