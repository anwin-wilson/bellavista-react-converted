import React, { useState } from 'react';
import '../../styles/cardiff.css';

const CollegeFields = () => {
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
        title: 'Countryside Residential Care',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-home"></i> Rural Living Environment</h4>
            <p>Our residential care combines comfortable accommodation with the serenity of countryside living, offering rooms with field views.</p>
            <h4><i className="fas fa-seedling"></i> Countryside Benefits</h4>
            <ul>
              <li>Field view rooms with natural light and peaceful surroundings</li>
              <li>Direct access to therapeutic gardens and walking paths</li>
              <li>Proximity to local countryside amenities</li>
              <li>Quiet rural environment for relaxation</li>
            </ul>
            <h4><i className="fas fa-heart"></i> Personalized Care</h4>
            <p>Each resident receives individualized care plans that incorporate the unique advantages of our countryside location for enhanced wellbeing.</p>
          </div>
        `
      },
      nursing: {
        title: 'Countryside Nursing Care',
        content: `
          <div class="service-detail">
            <h4><i className="fas fa-user-nurse"></i> Professional Rural Care</h4>
            <p>24/7 nursing care enhanced by our peaceful countryside location, where nature therapy and rural access complement our care.</p>
            <h4><i className="fas fa-stethoscope"></i> Medical Excellence</h4>
            <ul>
              <li>Qualified nursing staff with rural care expertise</li>
              <li>Access to local medical facilities and specialists</li>
              <li>Integration of nature therapy in treatment plans</li>
              <li>Partnerships with local countryside health services</li>
            </ul>
            <h4><i className="fas fa-leaf"></i> Natural Healing</h4>
            <p>Our countryside location provides natural therapeutic benefits that complement traditional nursing care for improved health outcomes.</p>
          </div>
        `
      },
      dementia: {
        title: 'Countryside Dementia Care',
        content: `
          <div class="service-detail">
            <h4><i className="fas fa-brain"></i> Rural Memory Care</h4>
            <p>Specialized dementia care in a calming countryside environment where field activities and rural familiarity provide therapeutic benefits.</p>
            <h4><i className="fas fa-seedling"></i> Nature Therapy</h4>
            <ul>
              <li>Sensory stimulation through field scents and peaceful surroundings</li>
              <li>Therapeutic countryside walks and outdoor activities</li>
              <li>Rural reminiscence activities</li>
              <li>Familiar countryside environment to reduce confusion</li>
            </ul>
            <h4><i className="fas fa-tree"></i> Rural Activities</h4>
            <p>Specially designed programs that use our countryside location to stimulate memory and provide comfort through nature and rural experiences.</p>
          </div>
        `
      },
      respite: {
        title: 'Countryside Respite Care',
        content: `
          <div class="service-detail">
            <h4><i className="fas fa-seedling"></i> Rural Breaks</h4>
            <p>Short-term countryside respite care that provides families with peace of mind while their loved ones enjoy the tranquility of College Fields.</p>
            <h4><i className="fas fa-calendar-alt"></i> Flexible Rural Stays</h4>
            <ul>
              <li>Weekend peaceful breaks to week-long stays</li>
              <li>Access to all countryside and nature activities</li>
              <li>Field view accommodation options</li>
              <li>Easy access to local village shops and services</li>
            </ul>
            <h4><i className="fas fa-heart"></i> Restorative Environment</h4>
            <p>Our countryside setting provides a naturally restorative environment that benefits both temporary and permanent residents.</p>
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
          <h1>Welcome to Bellavista College Fields</h1>
          <p>A serene countryside care home providing exceptional residential, nursing, and dementia care in a peaceful rural setting with beautiful fields and therapeutic natural landscapes.</p>

          <button className="read-more-btn" id="readMoreBtn" onClick={toggleHeroContent}>
            <i className="fas fa-chevron-down"></i> {heroExpanded ? 'Read Less' : 'Read More'}
          </button>

          <div className={`hero-expanded-content ${heroExpanded ? 'expanded' : ''}`} id="heroExpandedContent">
            <div className="expanded-text">
              <p>Bellavista College Fields is nestled in the peaceful countryside, offering residents the perfect blend of rural tranquility and professional care. Our home seamlessly integrates modern care facilities with the restorative power of nature and rural charm.</p>
              <p>We believe in the healing benefits of countryside living, where residents can enjoy beautiful fields, natural landscapes, and the peacefulness that enhances both physical and mental wellbeing.</p>
              <p>Our dedicated team understands the unique advantages of rural care, incorporating nature therapy, countryside walks, and outdoor wellness programs that take full advantage of our rural location.</p>
              <p>The home is registered to provide residential care, nursing care, dementia care, and respite services, all enhanced by our beautiful countryside setting that provides access to nature and rural amenities.</p>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">35</span>
              <span className="stat-label">Field View Rooms</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Countryside Suites</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">70+</span>
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
              <h2 className="section-title">Find Us - College Fields Countryside Location</h2>
              <p>Located in peaceful College Fields with beautiful fields and rural access</p>
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
                    <i className="fas fa-map-marked-alt"></i> Route to College Fields Countryside Home
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
                      <span>College Fields Countryside Home</span>
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
          <p className="section-subtitle">Comprehensive care services enhanced by our peaceful countryside location</p>
          <div className="care-grid">
            <div className="card clickable-card" onClick={() => openModal('residential')}>
              <i className="fas fa-home" style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '20px' }}></i>
              <h4>Residential Care</h4>
              <p>Comfortable countryside living with personalized care and field views</p>
            </div>
            <div className="card clickable-card" onClick={() => openModal('nursing')}>
              <i className="fas fa-user-nurse" style={{ fontSize: '3rem', color: 'var(--primary-green)', marginBottom: '20px' }}></i>
              <h4>Nursing Care</h4>
              <p>24/7 professional nursing care with access to rural facilities</p>
            </div>
            <div className="card clickable-card" onClick={() => openModal('dementia')}>
              <i className="fas fa-brain" style={{ fontSize: '3rem', color: 'var(--primary-purple)', marginBottom: '20px' }}></i>
              <h4>Dementia Care</h4>
              <p>Memory care enhanced by field activities and rural familiarity</p>
            </div>
            <div className="card clickable-card" onClick={() => openModal('respite')}>
              <i className="fas fa-umbrella-beach" style={{ fontSize: '3rem', color: 'var(--primary-orange)', marginBottom: '20px' }}></i>
              <h4>Countryside Respite</h4>
              <p>Short-term breaks providing families with peace of mind in the countryside</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Countryside Team</h2>
          <p className="section-subtitle">Experienced professionals who understand the benefits of rural care</p>
          <div className="team-grid">
            <div className="card">
              <img src="https://picsum.photos/seed/collegefields-manager/200/200" alt="Robert Davies" />
              <h4>Robert Davies</h4>
              <p>Home Manager</p>
              <p>20+ years experience in countryside care facilities</p>
            </div>
            <div className="card">
              <img src="https://picsum.photos/seed/collegefields-nurse1/200/200" alt="Dr. Emma Roberts" />
              <h4>Dr. Emma Roberts</h4>
              <p>Senior Nurse</p>
              <p>Specialist in rural healthcare and nature therapy</p>
            </div>
            <div className="card">
              <img src="https://picsum.photos/seed/collegefields-nurse2/200/200" alt="Sophie Jones" />
              <h4>Sophie Jones</h4>
              <p>Activities Coordinator</p>
              <p>Organizing countryside activities and nature outings</p>
            </div>
            <div className="card">
              <img src="https://picsum.photos/seed/collegefields-physio/200/200" alt="David Evans" />
              <h4>David Evans</h4>
              <p>Physiotherapist</p>
              <p>Specializing in countryside walks and nature-based therapy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose College Fields Countryside?</h2>
          <p className="section-subtitle">Unique countryside advantages for health, wellbeing, and quality of life</p>
          <div className="care-grid">
            <div className="card">
              <i className="fas fa-seedling" style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '20px' }}></i>
              <h4>Beautiful Fields</h4>
              <p>Therapeutic countryside and natural landscapes promoting relaxation and wellbeing</p>
            </div>
            <div className="card">
              <i className="fas fa-users" style={{ fontSize: '3rem', color: 'var(--primary-green)', marginBottom: '20px' }}></i>
              <h4>Rural Community</h4>
              <p>Strong rural community connections and local support networks</p>
            </div>
            <div className="card">
              <i className="fas fa-leaf" style={{ fontSize: '3rem', color: 'var(--primary-orange)', marginBottom: '20px' }}></i>
              <h4>Nature Therapy</h4>
              <p>Field walks, nature activities, and outdoor therapy programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news" id="news">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest College Fields Countryside News</h2>
            <p className="section-subtitle">Stay connected with rural developments, countryside events & wellness innovations</p>
          </div>
          <div className="news-showcase">
            <div className="news-featured">
              <div className="news-image-large">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Countryside Fields" />
                <div className="news-badge-large">🌾 College Fields Countryside Update</div>
              </div>
              <div className="news-info-large">
                <div className="news-meta">
                  <span className="news-category featured">Facility Enhancement</span>
                  <span className="news-date-large">Dec 15, 2024</span>
                </div>
                <h3>New Therapeutic Fields & Nature Pathways Opens</h3>
                <p>Our beautiful new therapeutic fields with nature pathways is now open, featuring healing landscapes, accessible walking routes, and countryside gathering spaces for all residents to enjoy the restorative benefits of our rural location.</p>
                <div className="news-stats">
                  <span><i className="fas fa-eye"></i> 2.5K views</span>
                  <span><i className="fas fa-heart"></i> <span className="like-count">89</span> likes</span>
                  <span><i className="fas fa-share"></i> <span className="share-count">58</span> shares</span>
                </div>
                <a href="/collegefields-news" className="btn btn-primary">Read Full Update</a>
              </div>
            </div>
          </div>
          <div className="news-filters">
            <button className={`filter-btn ${newsFilter === 'all' ? 'active' : ''}`} onClick={() => filterNews('all')}>All College Fields News</button>
            <button className={`filter-btn ${newsFilter === 'health' ? 'active' : ''}`} onClick={() => filterNews('health')}>Health Updates</button>
            <button className={`filter-btn ${newsFilter === 'awards' ? 'active' : ''}`} onClick={() => filterNews('awards')}>Awards</button>
            <button className={`filter-btn ${newsFilter === 'events' ? 'active' : ''}`} onClick={() => filterNews('events')}>Rural Events</button>
            <button className={`filter-btn ${newsFilter === 'activities' ? 'active' : ''}`} onClick={() => filterNews('activities')}>Nature Activities</button>
            <button className={`filter-btn ${newsFilter === 'community' ? 'active' : ''}`} onClick={() => filterNews('community')}>Community</button>
          </div>
          <div className="news-grid modern">
            <div className={`news-card modern ${newsFilter === 'all' || newsFilter === 'events' ? 'news-visible' : ''}`} data-category="events">
              <div className="news-image">
                <img alt="Rural Festival" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="news-content">
                <div className="news-category events">🌾 Rural Events</div>
                <h4>College Fields Countryside Harvest Festival</h4>
                <p>Join us for field tours, rural performances, and special events celebrating our countryside location.</p>
                <div className="news-engagement">
                  <span><i className="fas fa-calendar"></i> Dec 20-27</span>
                  <span><i className="fas fa-map-marker-alt"></i> College Fields Countryside</span>
                </div>
                <a className="news-link modern" href="/collegefields-news">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className={`news-card modern ${newsFilter === 'all' || newsFilter === 'awards' ? 'news-visible' : ''}`} data-category="awards">
              <div className="news-image">
                <img alt="Rural Care Award" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="news-content">
                <div className="news-category awards">🏆 Awards</div>
                <h4>Rural Care Excellence Award 2024</h4>
                <p>Bellavista College Fields receives recognition for innovative nature therapy programs and outstanding countryside care environment.</p>
                <div className="news-engagement">
                  <span><i className="fas fa-trophy"></i> Rural Award</span>
                  <span><i className="fas fa-seedling"></i> Nature Care</span>
                </div>
                <a className="news-link modern" href="/collegefields-news">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className={`news-card modern ${newsFilter === 'all' || newsFilter === 'activities' ? 'news-visible' : ''}`} data-category="activities">
              <div className="news-image">
                <img alt="Nature Therapy" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="news-content">
                <div className="news-category activities">🌱 Nature Activities</div>
                <h4>New Nature Therapy Program Launch</h4>
                <p>Introducing guided countryside walks, nature therapy sessions, and rural wellness programs for enhanced resident wellbeing.</p>
                <div className="news-engagement">
                  <span><i className="fas fa-seedling"></i> Nature Therapy</span>
                  <span><i className="fas fa-heart"></i> Rural Wellness</span>
                </div>
                <a className="news-link modern" href="/collegefields-news">Read More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="news-cta">
            <a href="/collegefields-news" className="btn btn-outline">
              <i className="fas fa-newspaper"></i> View All College Fields News
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
              <span>College Fields Countryside, South Wales - Peaceful rural location with field access</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>01443 567 890</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>collegefields@bellavistanursinghome.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Visiting Hours: 9:00 AM - 8:00 PM Daily (Extended for countryside activities)</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-wheelchair"></i>
              <span>Fully accessible with field ramps and countryside pathway access</span>
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

export default CollegeFields;
