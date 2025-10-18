import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';
import OurHomes from './OurHomes';

import { newsData } from './OurNews';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('living');
  const [activeFilter, setActiveFilter] = useState('all');

  // eslint-disable-next-line no-unused-vars
  const [showMap, setShowMap] = useState(false);
  const [nearestHome, setNearestHome] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedHome, setSelectedHome] = useState({});
  const [userLocationLabel, setUserLocationLabel] = useState('Your Location');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Care homes data (unused but kept for potential future use)
  // eslint-disable-next-line no-unused-vars
  const careHomes = [
    { name: 'Bellavista Cardiff', distance: '2.3 miles', duration: '8 minutes', phone: '029 2000 0000' },
    { name: 'Bellavista Barry', distance: '3.1 miles', duration: '12 minutes', phone: '01446 700 000' },
    { name: 'Waverley Care Centre', distance: '1.8 miles', duration: '6 minutes', phone: '029 2100 0000' },
    { name: 'College Fields', distance: '4.2 miles', duration: '15 minutes', phone: '029 2200 0000' }
  ];

  const slides = [
    `${process.env.PUBLIC_URL}/images/hero-care-staff.jpg`,
    `${process.env.PUBLIC_URL}/images/hero-family-visit.jpg`,
    `${process.env.PUBLIC_URL}/images/hero-resident-selfie.jpg`,
    `${process.env.PUBLIC_URL}/images/hero-wheelchair-assistance.jpg`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const findNearestHome = async () => {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value.trim();

    if (!location) {
      alert('Please enter your location');
      return;
    }

    try {
      // Call the backend API
      const response = await fetch(`https://bellavista-backend-3.onrender.com/api/tours/find-nearest-home/?location=${encodeURIComponent(location)}`);
      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Error finding nearest home');
        return;
      }

      setNearestHome(data.nearest_home);
      setUserLocationLabel(location);
      setSelectedHome({
        name: data.nearest_home,
        distance: data.distance,
        duration: data.duration,
        phone: data.phone,
        maps_url: data.maps_url
      });
      setShowResults(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to server. Please try again.');
    }
  };

  const useCurrentLocation = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      return;
    }

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        });
      });

      const { latitude, longitude } = position.coords;

      // Call the backend API with coordinates
      const response = await fetch(`https://bellavista-backend-3.onrender.com/api/tours/find-nearest-home/?lat=${latitude}&lon=${longitude}`);
      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Error finding nearest home');
        return;
      }

      setNearestHome(data.nearest_home);
      setUserLocationLabel('Current Location');
      setSelectedHome({
        name: data.nearest_home,
        distance: data.distance,
        duration: data.duration,
        phone: data.phone,
        maps_url: data.maps_url
      });
      setShowResults(true);
    } catch (error) {
      if (error.code === error.PERMISSION_DENIED) {
        alert('Location access denied. Please enable location permissions and try again.');
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        alert('Location information is unavailable. Please try entering your location manually.');
      } else if (error.code === error.TIMEOUT) {
        alert('Location request timed out. Please try again.');
      } else {
        console.error('Error:', error);
        alert('Error getting your location. Please try entering your location manually.');
      }
    }
  };

  const closeMap = () => {
    setShowResults(false);
  };



  const openModal = (serviceType) => {
    const serviceDetails = {
      comfort: {
        title: 'Home Comfort - A Warm, Welcoming Environment',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-home"></i> Creating a Home-Like Atmosphere</h4>
            <p>At Bellavista, we believe that comfort begins with creating an environment that truly feels like home.</p>
            <h4><i class="fas fa-couch"></i> Comfortable Living Spaces</h4>
            <ul>
              <li>Beautifully furnished communal lounges with comfortable seating</li>
              <li>Private en-suite bedrooms with personal touches encouraged</li>
              <li>Quiet reading areas and peaceful garden spaces</li>
              <li>Family-friendly visiting areas for quality time together</li>
            </ul>
          </div>
        `
      },
      safety: {
        title: 'Safety First - Advanced Protection & Emergency Response',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-shield-alt"></i> Comprehensive Safety Systems</h4>
            <p>The safety and security of our residents is our top priority.</p>
            <h4><i class="fas fa-bell"></i> Emergency Response</h4>
            <ul>
              <li>24/7 nurse call systems in every room</li>
              <li>Trained emergency response team on-site at all times</li>
              <li>Direct links to local emergency services</li>
              <li>Regular emergency drills and staff training</li>
            </ul>
          </div>
        `
      },
      community: {
        title: 'Community - Vibrant Social Life & Meaningful Connections',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-users"></i> Building Lasting Friendships</h4>
            <p>We foster a vibrant community where residents can form meaningful friendships.</p>
            <h4><i class="fas fa-calendar-alt"></i> Daily Activities & Events</h4>
            <ul>
              <li>Group exercise classes and gentle fitness programs</li>
              <li>Arts and crafts workshops with seasonal themes</li>
              <li>Music therapy sessions and sing-alongs</li>
              <li>Games nights, bingo, and quiz competitions</li>
            </ul>
          </div>
        `
      },
      wellness: {
        title: 'Wellness Focus - Holistic Health & Wellbeing',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-leaf"></i> Holistic Approach to Wellbeing</h4>
            <p>We believe in caring for the whole person - mind, body, and spirit.</p>
            <h4><i class="fas fa-dumbbell"></i> Physical Wellness</h4>
            <ul>
              <li>Physiotherapy and occupational therapy services</li>
              <li>Chair exercises and gentle movement programs</li>
              <li>Accessible garden areas for outdoor activities</li>
              <li>Nutritious, balanced meals tailored to dietary needs</li>
            </ul>
          </div>
        `
      }
    };

    const service = serviceDetails[serviceType];
    setModalContent(service);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const filterNews = (filter) => {
    setActiveFilter(filter);
    const newsCards = document.querySelectorAll('.news-card[data-category]');

    newsCards.forEach(card => {
      if (filter === 'all') {
        if (card.classList.contains('news-visible')) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      } else if (card.dataset.category === filter) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.5s ease';
      } else {
        card.style.display = 'none';
      }
    });
  };

  const toggleLike = (e) => {
    const likeCount = e.target.parentElement.querySelector('.like-count');
    const currentCount = parseInt(likeCount.textContent);
    const isLiked = e.target.classList.contains('liked');

    if (isLiked) {
      e.target.classList.remove('liked');
      likeCount.textContent = currentCount - 1;
      e.target.style.color = '#666';
    } else {
      e.target.classList.add('liked');
      likeCount.textContent = currentCount + 1;
      e.target.style.color = '#e74c3c';
    }
  };

  const shareNews = () => {
    const shareCount = document.querySelector('.share-count');
    const currentCount = parseInt(shareCount.textContent);

    const shareUrl = window.location.origin + '/bellavista-react-converted/news';

    if (navigator.share) {
      navigator.share({
        title: 'COVID-19 Update - Bellavista Cardiff & Barry',
        text: 'Important visiting update from Bellavista Nursing Homes',
        url: shareUrl
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }

    shareCount.textContent = currentCount + 1;
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-slideshow">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide} alt={`Bellavista ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="container hero-content">
          <h1>Bellavista Care Homes</h1>
          <p className="hero-tagline">A Home From Home</p>
          <p className="hero-description">Premium residential & nursing care across South Wales. Experience personalized attention in our modern, home-like environments designed for dignity, comfort & wellbeing.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/schedule-tour">
              <i className="fas fa-calendar-check"></i> Book a Tour
            </Link>
            <Link className="btn btn-outline" to="/enquiry">
              <i className="fas fa-heart"></i> Care Enquiry
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Premium Locations</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Professional Care</span>
            </div>
          </div>
        </div>

      </section>

      <section className="find-home">
        <div className="container">
          <div className={`find-home-layout ${showResults ? 'map-active' : ''}`} id="findHomeLayout">
            <div className={`find-home-content ${showResults ? 'hidden' : ''}`} id="findHomeContent">
              <h2 className="section-title">Find Your Nearby Home</h2>
              <p>Enter your location to find the closest Bellavista home to you</p>
              <div className="find-home-search">
                <input className="search-input" id="locationInput" placeholder="Enter your postcode or city" type="text"/>
                <button className="search-btn" onClick={findNearestHome}><i className="fas fa-search"></i></button>
                <button className="location-btn" onClick={useCurrentLocation} title="Use current location">
                  <i className="fas fa-map-marker-alt"></i>
                </button>
              </div>
              <div id="results" style={{display: showResults ? 'block' : 'none', marginTop: '20px'}}></div>
            </div>
            <div className={`map-container ${showResults ? 'show' : ''}`} id="mapContainer">
              <div className="demo-map">
                <div className="map-header">
                  <i className="fas fa-map-marked-alt"></i> Route to Nearest Care Home
                  <button className="close-map-btn" onClick={closeMap}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="map-content">
                  <div className="route-line"></div>
                  <div className="location-marker user-marker">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{userLocationLabel}</span>
                  </div>
                  <div className="location-marker home-marker">
                    <i className="fas fa-home"></i>
                    <span id="nearestHomeName">{nearestHome || 'Care Home'}</span>
                  </div>
                </div>
                <div className="map-info">
                  <div className="info-item">
                    <i className="fas fa-route"></i>
                    <span id="distance">{selectedHome ? selectedHome.distance : '2.3 miles'}</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-clock"></i>
                    <span id="duration">{selectedHome ? selectedHome.duration : '8 minutes'}</span>
                  </div>
                  {selectedHome && selectedHome.maps_url && (
                    <div className="info-item">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => window.open(selectedHome.maps_url, '_blank')}
                        style={{ marginTop: '10px', fontSize: '12px', padding: '5px 10px' }}
                      >
                        <i className="fas fa-directions"></i> Get Directions
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurHomes />

      <section className="news" id="news">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest News & Updates</h2>
            <p className="section-subtitle">Stay connected with our community through the latest developments, events & care innovations.</p>
          </div>
          <div className="news-showcase">
            <div className="news-featured">
              <div className="news-image-large">
                <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="COVID-19 Update"/>
                <div className="news-badge-large">🚨 Important Update</div>
              </div>
              <div className="news-info-large">
                <div className="news-meta">
                  <span className="news-category featured">Health & Safety</span>
                  <span className="news-date-large">Dec 21, 2020</span>
                </div>
                <h3>Important COVID-19 Visiting Update - Cardiff & Barry Homes</h3>
                <p>Due to the increase in Coronavirus confirmed cases throughout Wales and Cardiff area, we are suspending all pod visits at our Cardiff & Barry homes until further review.</p>
                <div className="news-stats">
                  <span><i className="fas fa-eye"></i> 5.2K views</span>
                  <span><i className="fas fa-heart" onClick={toggleLike}></i> <span className="like-count">89</span> likes</span>
                  <span><i className="fas fa-share" onClick={shareNews}></i> <span className="share-count">156</span> shares</span>
                </div>
                <Link to="/news" className="btn btn-primary">Read Full Update</Link>
              </div>
            </div>
          </div>
          <div className="news-filters">
            <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => filterNews('all')}>All News</button>
            <button className={`filter-btn ${activeFilter === 'health' ? 'active' : ''}`} onClick={() => filterNews('health')}>Health Updates</button>
            <button className={`filter-btn ${activeFilter === 'awards' ? 'active' : ''}`} onClick={() => filterNews('awards')}>Awards</button>
            <button className={`filter-btn ${activeFilter === 'events' ? 'active' : ''}`} onClick={() => filterNews('events')}>Events</button>
            <button className={`filter-btn ${activeFilter === 'innovation' ? 'active' : ''}`} onClick={() => filterNews('innovation')}>Innovation</button>
            <button className={`filter-btn ${activeFilter === 'community' ? 'active' : ''}`} onClick={() => filterNews('community')}>Community</button>
          </div>
          <div className="news-grid modern">
            {newsData.map((news, index) => (
              <div key={index} className="news-card modern news-visible" data-category={news.category}>
                <div className="news-image">
                  <img alt={news.title} src={news.image}/>
                </div>
                <div className="news-content">
                  <div className={`news-category ${news.category}`}>{news.category.charAt(0).toUpperCase() + news.category.slice(1)}</div>
                  <h4>{news.title}</h4>
                  <p>{news.excerpt}</p>
                  <div className="news-engagement">
                    <span><i className="fas fa-calendar"></i> {news.date}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {news.location}</span>
                  </div>
                  <Link to={`/news/${news.id}`} className="news-link modern">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="news-cta">
            <Link to="/news" className="btn btn-outline-large">
              <i className="fas fa-newspaper"></i> View All News
            </Link>
          </div>
        </div>
      </section>

      <section className="activities" id="activities">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enriching Activities & Wellness</h2>
            <p className="section-subtitle">Engaging programs designed to promote physical, mental & social wellbeing for all residents.</p>
          </div>
          <div className="activities-showcase">
            <div className="activity-featured">
              <div className="activity-image">
                <img src={`${process.env.PUBLIC_URL}/images/music-therapy.jpeg`} alt="Music Therapy"/>
                <div className="activity-play-btn">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="activity-info">
                <div className="activity-badge">🎵 Popular</div>
                <h3>Music & Arts Therapy</h3>
                <p>Professional music therapy sessions, art classes, and creative workshops that stimulate memory and promote emotional wellbeing.</p>
                <div className="activity-schedule">
                  <span><i className="fas fa-calendar"></i> Daily Sessions</span>
                  <span><i className="fas fa-users"></i> All Abilities</span>
                  <span><i className="fas fa-clock"></i> 45 mins</span>
                </div>
              </div>
            </div>
          </div>
          <div className="activity-grid">
            <div className="activity-card">
              <div className="activity-icon physical">
                <i className="fas fa-heartbeat" style={{fontSize: '30px'}}></i>
              </div>
              <h4>Physical Wellness</h4>
              <p>Chair exercises, physiotherapy, gentle yoga</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon creative">
                <i className="fas fa-palette" style={{fontSize: '30px'}}></i>
              </div>
              <h4>Creative Arts</h4>
              <p>Painting, crafts, pottery, creative writing</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon social">
                <i className="fas fa-users" style={{fontSize: '30px'}}></i>
              </div>
              <h4>Social & Games</h4>
              <p>Bingo, quiz nights, social hours, outings</p>
            </div>
            <div className="activity-card">
              <div className="activity-icon therapeutic">
                <i className="fas fa-leaf" style={{fontSize: '30px'}}></i>
              </div>
              <h4>Therapeutic Care</h4>
              <p>Pet therapy, aromatherapy, meditation</p>
            </div>
          </div>
          <div className="activities-cta">
            <Link to="/activities" className="btn btn-primary">
              <i className="fas fa-calendar-alt"></i> View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      <section className="care-promise" id="care-promise">
        <div className="container">
          <div className="section-header centered">
            <h2 className="section-title">Our Care Promise</h2>
            <p className="section-subtitle">Committed to excellence in every aspect of care, comfort & community.</p>
          </div>
          <div className="promise-showcase">
            <div className="promise-main">
              <div className="promise-image">
                <img src={`${process.env.PUBLIC_URL}/images/careplans.jpeg`} alt="Compassionate Care"/>
                <div className="promise-badge">💝 Our Commitment</div>
              </div>
              <div className="promise-details">
                <h3>Personalized Care Plans</h3>
                <p>Every resident receives an individually tailored care plan developed by our multidisciplinary team, ensuring their unique needs, preferences, and dignity are always respected.</p>
                <div className="promise-features">
                  <div className="feature-item">
                    <i className="fas fa-user-md"></i>
                    <span>Qualified Nursing Staff</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-clock"></i>
                    <span>24/7 Care Available</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-heart"></i>
                    <span>Family-Centered Approach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="promise-scroll-container">
            <div className="promise-scroll-hint">Swipe to explore our promises</div>
            <div className="promise-grid">
              <div className="promise-card clickable-card" onClick={() => openModal('comfort')}>
                <div className="promise-icon comfort"><i className="fas fa-home"></i></div>
                <h4>Home Comfort</h4>
                <p>Warm, welcoming environments designed to feel like home</p>
              </div>
              <div className="promise-card clickable-card" onClick={() => openModal('safety')}>
                <div className="promise-icon safety"><i className="fas fa-shield-alt"></i></div>
                <h4>Safety First</h4>
                <p>Advanced safety systems and trained emergency response</p>
              </div>
              <div className="promise-card clickable-card" onClick={() => openModal('community')}>
                <div className="promise-icon community"><i className="fas fa-users"></i></div>
                <h4>Community</h4>
                <p>Vibrant social activities and meaningful connections</p>
              </div>
              <div className="promise-card clickable-card" onClick={() => openModal('wellness')}>
                <div className="promise-icon wellness"><i className="fas fa-leaf"></i></div>
                <h4>Wellness Focus</h4>
                <p>Holistic approach to physical and mental wellbeing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="facilities" id="facilities">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Modern Facilities & Amenities</h2>
            <p className="section-subtitle">State-of-the-art facilities designed for comfort, safety & enriching experiences.</p>
          </div>
          <div className="facilities-showcase">
            <div className="facility-tabs">
              <button className={`tab-btn ${activeTab === 'living' ? 'active' : ''}`} onClick={() => setActiveTab('living')}>Living Spaces</button>
              <button className={`tab-btn ${activeTab === 'wellness' ? 'active' : ''}`} onClick={() => setActiveTab('wellness')}>Wellness & Care</button>
              <button className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`} onClick={() => setActiveTab('activities')}>Activities & Social</button>
              <button className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`} onClick={() => setActiveTab('services')}>Services</button>
            </div>
            <div className={`tab-content ${activeTab === 'living' ? 'active' : ''}`}>
              <div className="facilities-grid compact">
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Private Rooms" src={`${process.env.PUBLIC_URL}/images/private-room.jpg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-bed"></i> Private Rooms</h4>
                    <p>Comfortable en-suite rooms with personal touches</p>
                  </div>
                </div>
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Communal Lounges" src={`${process.env.PUBLIC_URL}/images/lounge-area.jpg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-couch"></i> Communal Lounges</h4>
                    <p>Spacious social areas for relaxation & activities</p>
                  </div>
                </div>
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Gardens" src={`${process.env.PUBLIC_URL}/images/garden-facility.jpeg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-leaf"></i> Landscaped Gardens</h4>
                    <p>Accessible outdoor spaces for fresh air & nature</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-content ${activeTab === 'wellness' ? 'active' : ''}`}>
              <div className="facilities-grid compact">
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Medical Suite" src={`${process.env.PUBLIC_URL}/images/medical-suite.jpg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-stethoscope"></i> Medical Suite</h4>
                    <p>On-site medical care & health monitoring</p>
                  </div>
                </div>
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Physiotherapy" src={`${process.env.PUBLIC_URL}/images/physiotherapy-room.jpg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-dumbbell"></i> Therapy Rooms</h4>
                    <p>Physiotherapy & occupational therapy spaces</p>
                  </div>
                </div>
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Spa" src={`${process.env.PUBLIC_URL}/images/wellness-spa.jpg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-spa"></i> Wellness Spa</h4>
                    <p>Hair salon, beauty treatments & relaxation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-content ${activeTab === 'activities' ? 'active' : ''}`}>
              <div className="facilities-grid compact">
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Cinema" src={`${process.env.PUBLIC_URL}/images/cinema-facility.jpeg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-film"></i> Cinema Room</h4>
                    <p>Movie nights & entertainment screenings</p>
                  </div>
                </div>
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Arts Studio" src={`${process.env.PUBLIC_URL}/images/arts-facility.jpeg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-palette"></i> Arts Studio</h4>
                    <p>Creative workshops & artistic expression</p>
                  </div>
                </div>
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Library" src={`${process.env.PUBLIC_URL}/images/library-facility.jpeg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-book"></i> Library Corner</h4>
                    <p>Quiet reading & reminiscence activities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-content ${activeTab === 'services' ? 'active' : ''}`}>
              <div className="facilities-grid compact">
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Dining" src={`${process.env.PUBLIC_URL}/images/dining-room.jpg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-utensils"></i> Restaurant Dining</h4>
                    <p>Nutritious meals in elegant dining rooms</p>
                  </div>
                </div>
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Laundry" src={`${process.env.PUBLIC_URL}/images/laundry-service.jpg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-tshirt"></i> Laundry Service</h4>
                    <p>Professional cleaning & garment care</p>
                  </div>
                </div>
                <div className="facility-card modern">
                  <div className="facility-image">
                    <img alt="Reception" src={`${process.env.PUBLIC_URL}/images/reception-facility.jpeg`}/>
                  </div>
                  <div className="facility-info">
                    <h4><i className="fas fa-concierge-bell"></i> 24/7 Reception</h4>
                    <p>Round-the-clock support & assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalContent.title}</h3>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body" dangerouslySetInnerHTML={{__html: modalContent.content}}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;