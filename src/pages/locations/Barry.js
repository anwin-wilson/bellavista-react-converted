import React, { useState } from 'react';


const Barry = () => {
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
        title: 'Seaside Residential Care',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-home"></i> Coastal Living Environment</h4>
            <p>Our residential care combines comfortable accommodation with the therapeutic benefits of seaside living, offering rooms with stunning ocean views.</p>
            <h4><i class="fas fa-water"></i> Seaside Benefits</h4>
            <ul>
              <li>Sea view rooms with natural light and ocean breezes</li>
              <li>Direct access to coastal gardens and beach areas</li>
              <li>Therapeutic sea air for respiratory health</li>
              <li>Calming sounds of waves for better sleep</li>
            </ul>
            <h4><i class="fas fa-heart"></i> Personalized Care</h4>
            <p>Each resident receives individualized care plans that incorporate the unique advantages of our coastal location for enhanced wellbeing.</p>
          </div>
        `
      },
      nursing: {
        title: 'Coastal Nursing Care',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-user-nurse"></i> Professional Seaside Care</h4>
            <p>24/7 nursing care enhanced by our therapeutic coastal environment, where sea air and ocean views contribute to healing and recovery.</p>
            <h4><i class="fas fa-stethoscope"></i> Medical Excellence</h4>
            <ul>
              <li>Qualified nursing staff with coastal care expertise</li>
              <li>Specialized equipment for seaside healthcare</li>
              <li>Integration of sea air therapy in treatment plans</li>
              <li>Partnerships with local coastal health services</li>
            </ul>
            <h4><i class="fas fa-wind"></i> Natural Healing</h4>
            <p>Our coastal location provides natural therapeutic benefits that complement traditional nursing care for improved health outcomes.</p>
          </div>
        `
      },
      dementia: {
        title: 'Seaside Dementia Care',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-brain"></i> Coastal Memory Care</h4>
            <p>Specialized dementia care in a calming seaside environment where the rhythm of the ocean and coastal views provide natural therapeutic benefits.</p>
            <h4><i class="fas fa-water"></i> Ocean Therapy</h4>
            <ul>
              <li>Sensory stimulation through ocean sounds and sea breezes</li>
              <li>Coastal walking paths for gentle exercise</li>
              <li>Beach-themed reminiscence activities</li>
              <li>Calming sea views to reduce agitation</li>
            </ul>
            <h4><i class="fas fa-umbrella-beach"></i> Seaside Activities</h4>
            <p>Specially designed programs that use our coastal location to stimulate memory and provide comfort through familiar seaside experiences.</p>
          </div>
        `
      },
      respite: {
        title: 'Seaside Respite Care',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-umbrella-beach"></i> Coastal Breaks</h4>
            <p>Short-term seaside respite care that provides families with peace of mind while their loved ones enjoy the therapeutic benefits of our coastal location.</p>
            <h4><i class="fas fa-calendar-alt"></i> Flexible Seaside Stays</h4>
            <ul>
              <li>Weekend coastal breaks to week-long stays</li>
              <li>Access to all seaside activities and therapies</li>
              <li>Sea view accommodation options</li>
              <li>Beach access and coastal excursions</li>
            </ul>
            <h4><i class="fas fa-heart"></i> Restorative Environment</h4>
            <p>Our seaside setting provides a naturally restorative environment that benefits both temporary and permanent residents.</p>
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
          <h1>Welcome to Bellavista Barry</h1>
          <p>A coastal care home with spectacular sea views and therapeutic seaside environment. We provide high-quality residential, nursing, and dementia care in a beautiful seaside setting where the healing power of the ocean enhances our residents' wellbeing.</p>

          <button className="read-more-btn" id="readMoreBtn" onClick={toggleHeroContent}>
            <i className="fas fa-chevron-down"></i> {heroExpanded ? 'Read Less' : 'Read More'}
          </button>

          <div className={`hero-expanded-content ${heroExpanded ? 'expanded' : ''}`} id="heroExpandedContent">
            <div className="expanded-text">
              <p>Bellavista Barry is uniquely positioned on the beautiful Welsh coast, offering residents the therapeutic benefits of sea air and stunning ocean views. Our home combines modern care facilities with the natural healing environment of the seaside.</p>
              <p>We believe in the restorative power of coastal living, where residents can enjoy gentle sea breezes, watch the changing tides, and participate in seaside activities that promote both physical and mental wellbeing.</p>
              <p>Our dedicated team understands the unique advantages of seaside care, incorporating coastal walks, beach therapy, and outdoor activities that take full advantage of our prime waterfront location.</p>
              <p>The home is registered to provide residential care, nursing care, dementia care, and respite services, all enhanced by our beautiful coastal setting that provides a naturally calming and therapeutic environment.</p>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">38</span>
              <span className="stat-label">Sea View Rooms</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Coastal Suites</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">80+</span>
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
              <h2 className="section-title">Find Us - Barry Seaside Location</h2>
              <p>Located on the beautiful Welsh coast with stunning sea views</p>
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
                    <i className="fas fa-map-marked-alt"></i> Route to Barry Seaside Home
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
                      <span>Barry Seaside Home</span>
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
          <p className="section-subtitle">Comprehensive care services enhanced by our therapeutic seaside environment</p>
          <div className="care-grid">
            <div className="card clickable-card" onClick={() => openModal('residential')}>
              <i className="fas fa-home" style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '20px' }}></i>
              <h4>Residential Care</h4>
              <p>Comfortable seaside living with personalized care and ocean views</p>
            </div>
            <div className="card clickable-card" onClick={() => openModal('nursing')}>
              <i className="fas fa-user-nurse" style={{ fontSize: '3rem', color: 'var(--primary-green)', marginBottom: '20px' }}></i>
              <h4>Nursing Care</h4>
              <p>24/7 professional nursing care in a therapeutic coastal environment</p>
            </div>
            <div className="card clickable-card" onClick={() => openModal('dementia')}>
              <i className="fas fa-brain" style={{ fontSize: '3rem', color: 'var(--primary-purple)', marginBottom: '20px' }}></i>
              <h4>Dementia Care</h4>
              <p>Memory care enhanced by the calming effects of seaside living</p>
            </div>
            <div className="card clickable-card" onClick={() => openModal('respite')}>
              <i className="fas fa-umbrella-beach" style={{ fontSize: '3rem', color: 'var(--primary-orange)', marginBottom: '20px' }}></i>
              <h4>Seaside Respite</h4>
              <p>Short-term coastal breaks providing families with peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Seaside Team</h2>
          <p className="section-subtitle">Experienced professionals who understand the benefits of coastal care</p>
          <div className="team-grid">
            <div className="card">
              <img src="https://picsum.photos/seed/barry-manager/200/200" alt="Michael Davies" />
              <h4>Michael Davies</h4>
              <p>Home Manager</p>
              <p>20+ years experience in seaside care facilities</p>
            </div>
            <div className="card">
              <img src="https://picsum.photos/seed/barry-nurse1/200/200" alt="Dr. Helen Roberts" />
              <h4>Dr. Helen Roberts</h4>
              <p>Senior Nurse</p>
              <p>Specialist in coastal healthcare and wellness therapy</p>
            </div>
            <div className="card">
              <img src="https://picsum.photos/seed/barry-nurse2/200/200" alt="Sarah Williams" />
              <h4>Sarah Williams</h4>
              <p>Activities Coordinator</p>
              <p>Organizing seaside activities and beach therapy sessions</p>
            </div>
            <div className="card">
              <img src="https://picsum.photos/seed/barry-physio/200/200" alt="David Jones" />
              <h4>David Jones</h4>
              <p>Physiotherapist</p>
              <p>Specializing in coastal walks and sea air therapy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Barry Seaside?</h2>
          <p className="section-subtitle">Unique coastal advantages for health, wellbeing, and quality of life</p>
          <div className="care-grid">
            <div className="card">
              <i className="fas fa-water" style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '20px' }}></i>
              <h4>Spectacular Sea Views</h4>
              <p>Stunning ocean vistas from rooms and communal areas promoting tranquility and wellbeing</p>
            </div>
            <div className="card">
              <i className="fas fa-wind" style={{ fontSize: '3rem', color: 'var(--primary-green)', marginBottom: '20px' }}></i>
              <h4>Therapeutic Sea Air</h4>
              <p>Natural health benefits from fresh coastal air and maritime environment</p>
            </div>
            <div className="card">
              <i className="fas fa-umbrella-beach" style={{ fontSize: '3rem', color: 'var(--primary-orange)', marginBottom: '20px' }}></i>
              <h4>Beach Activities</h4>
              <p>Supervised beach walks, coastal excursions, and seaside therapy programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news" id="news">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Barry Seaside News</h2>
            <p className="section-subtitle">Stay connected with coastal developments, seaside events & wellness innovations</p>
          </div>
          <div className="news-showcase">
            <div className="news-featured">
              <div className="news-image-large">
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Seaside Garden" />
                <div className="news-badge-large">🌊 Barry Seaside Update</div>
              </div>
              <div className="news-info-large">
                <div className="news-meta">
                  <span className="news-category featured">Facility Enhancement</span>
                  <span className="news-date-large">Dec 15, 2024</span>
                </div>
                <h3>New Coastal Garden & Beach Access Path Opens</h3>
                <p>Our beautiful new seaside garden with direct beach access is now open, featuring therapeutic coastal plants, sea-view seating areas, and accessible pathways for all residents to enjoy the healing benefits of our oceanfront location.</p>
                <div className="news-stats">
                  <span><i className="fas fa-eye"></i> 2.8K views</span>
                  <span><i className="fas fa-heart"></i> <span className="like-count">94</span> likes</span>
                  <span><i className="fas fa-share"></i> <span className="share-count">67</span> shares</span>
                </div>
                <a href="/barry-news" className="btn btn-primary">Read Full Update</a>
              </div>
            </div>
          </div>
          <div className="news-filters">
            <button className={`filter-btn ${newsFilter === 'all' ? 'active' : ''}`} onClick={() => filterNews('all')}>All Barry News</button>
            <button className={`filter-btn ${newsFilter === 'health' ? 'active' : ''}`} onClick={() => filterNews('health')}>Health Updates</button>
            <button className={`filter-btn ${newsFilter === 'awards' ? 'active' : ''}`} onClick={() => filterNews('awards')}>Awards</button>
            <button className={`filter-btn ${newsFilter === 'events' ? 'active' : ''}`} onClick={() => filterNews('events')}>Seaside Events</button>
            <button className={`filter-btn ${newsFilter === 'activities' ? 'active' : ''}`} onClick={() => filterNews('activities')}>Beach Activities</button>
            <button className={`filter-btn ${newsFilter === 'community' ? 'active' : ''}`} onClick={() => filterNews('community')}>Community</button>
          </div>
          <div className="news-grid modern">
            <div className={`news-card modern ${newsFilter === 'all' || newsFilter === 'events' ? 'news-visible' : ''}`} data-category="events">
              <div className="news-image">
                <img alt="Beach Christmas" src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="news-content">
                <div className="news-category events">🎄 Seaside Events</div>
                <h4>Christmas by the Sea Celebration</h4>
                <p>Join us for festive seaside activities, carol singing with ocean views, and special holiday meals featuring fresh local seafood.</p>
                <div className="news-engagement">
                  <span><i className="fas fa-calendar"></i> Dec 20-27</span>
                  <span><i className="fas fa-map-marker-alt"></i> Barry Seaside</span>
                </div>
                <a className="news-link modern" href="/barry-news">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className={`news-card modern ${newsFilter === 'all' || newsFilter === 'awards' ? 'news-visible' : ''}`} data-category="awards">
              <div className="news-image">
                <img alt="Coastal Care Award" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="news-content">
                <div className="news-category awards">🏆 Awards</div>
                <h4>Coastal Care Excellence Award 2024</h4>
                <p>Bellavista Barry receives recognition for innovative seaside therapy programs and outstanding coastal care environment.</p>
                <div className="news-engagement">
                  <span><i className="fas fa-trophy"></i> Regional Award</span>
                  <span><i className="fas fa-water"></i> Seaside Care</span>
                </div>
                <a className="news-link modern" href="/barry-news">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className={`news-card modern ${newsFilter === 'all' || newsFilter === 'activities' ? 'news-visible' : ''}`} data-category="activities">
              <div className="news-image">
                <img alt="Beach Therapy" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="news-content">
                <div className="news-category activities">🏖️ Beach Activities</div>
                <h4>New Beach Therapy Program Launch</h4>
                <p>Introducing supervised beach walks, sand therapy sessions, and coastal meditation programs for enhanced resident wellbeing.</p>
                <div className="news-engagement">
                  <span><i className="fas fa-umbrella-beach"></i> Beach Therapy</span>
                  <span><i className="fas fa-heart"></i> Wellness</span>
                </div>
                <a className="news-link modern" href="/barry-news">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="news-cta">
            <a href="/barry-news" className="btn btn-outline">
              <i className="fas fa-newspaper"></i> View All Barry News
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
              <span>Barry Seaside, Vale of Glamorgan - Waterfront location with beach access</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>01446 735 200</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>barry@bellavistanursinghome.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Visiting Hours: 9:00 AM - 8:00 PM Daily (Extended for sunset viewing)</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-wheelchair"></i>
              <span>Fully accessible with beach access ramps and coastal pathways</span>
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

export default Barry;
