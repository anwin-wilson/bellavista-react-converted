import React, { useState } from 'react';
import '../../styles/cardiff.css';


const Barry = () => {
  const [heroExpanded, setHeroExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [mapShown, setMapShown] = useState(false);
  const [locationInput, setLocationInput] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [newsFilter, setNewsFilter] = useState('all');
  const [activitiesExpanded, setActivitiesExpanded] = useState(false);
  const [facilitiesExpanded, setFacilitiesExpanded] = useState(false);

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
      },
      chc: {
        title: 'CHC Nursing Care',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-heartbeat"></i> Continuing Healthcare Support</h4>
            <p>Specialist nursing care for residents eligible for Continuing Healthcare (CHC), delivered with comprehensive clinical oversight and coordinated multi-disciplinary support.</p>
            <h4><i class="fas fa-file-medical"></i> Clinical Coordination</h4>
            <ul>
              <li>Personalised CHC care plans and ongoing reviews</li>
              <li>Close liaison with NHS teams and commissioners</li>
              <li>Advanced medication management and monitoring</li>
              <li>Support for complex and long-term clinical needs</li>
            </ul>
            <h4><i class="fas fa-water"></i> Therapeutic Environment</h4>
            <p>Care delivered in our calming seaside setting that promotes comfort, stability and wellbeing for residents with high clinical needs.</p>
          </div>
        `
      },
      endOfLife: {
        title: 'End-of-Life Care',
        content: `
          <div class="service-detail">
            <h4><i class="fas fa-dove"></i> Compassionate Palliative Support</h4>
            <p>Dignified, person-centred palliative care focused on comfort, respect and individual preferences, with sensitive support for residents and families.</p>
            <h4><i class="fas fa-hand-holding-heart"></i> Comfort & Dignity</h4>
            <ul>
              <li>Pain and symptom management with specialist input</li>
              <li>Private, peaceful spaces for family time</li>
              <li>Emotional, cultural and spiritual needs respected</li>
              <li>Personalised care plans and 24/7 attentive support</li>
            </ul>
            <h4><i class="fas fa-water"></i> Peaceful Setting</h4>
            <p>Our tranquil coastal environment supports serenity and comfort, helping residents and families find peace and moments of reflection.</p>
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

  const toggleActivities = () => {
    setActivitiesExpanded(!activitiesExpanded);
  };

  const toggleFacilities = () => {
    setFacilitiesExpanded(!facilitiesExpanded);
  };

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className={`home-hero ${heroExpanded ? 'expanded' : ''}`} id="heroSection">
        <div className="container">
          <h1>Welcome to Bellavista Barry</h1>
          <p>Bellavista Barry is a long-established 39-bedded nursing home providing high-quality, person-centred dementia, nursing, residential, respite, CHC and end-of-life care with trained staff, a supportive environment, and a strong focus on dignity, independence and community.</p>

          <button className="read-more-btn" id="readMoreBtn" onClick={toggleHeroContent}>
            <i className="fas fa-chevron-down"></i> {heroExpanded ? 'Read Less' : 'Read More'}
          </button>

          <div className={`hero-expanded-content ${heroExpanded ? 'expanded' : ''}`} id="heroExpandedContent">
            <div className="expanded-text">
              <p>Bellavista Barry is a long-established quality nursing home situated in the seaside of Barry with spectacular views over the Bristol channel and has been running since 2007 to enable elderly people to continue living as independently as possible by receiving care and support consistent with their needs.</p>
              <p>Bellavista Barry is a 39-bedded registered care home providing accommodation and nursing care for older people. Our main aim is to provide a continuum of care, which takes account of increasing needs and frailty. The privacy, dignity, independence, rights and choices of our clients are central throughout their stay in Bellavista. Individual care needs are carefully identified and a personalised care program created. We aim to nurture the social care needs of our clients and maintain the strong links with the local community. Above all, we work to ensure that the home has a relaxed and happy environment.</p>
              <p>We offer professional social care and nursing services for the elderly. The home is registered to provide high level of  dementia nursing , Dementia Residential,General Nursing,  Respite ,CHC Nursing and End of Life care . We offer you and your loved ones the perfect mix of peace and tranquillity, privacy and companionship, all within a safe, secure and High-Quality Nursing caring environment. All staff within are appropriately qualified to deliver good standards of care. A continuous staff-training programme has been to ensure that standards are maintained in line with the legislation and regulations and with the requirements of the Care Inspectorate for Wales (CIW).</p>
              <p>All residents are assured that they will be treated with respect and dignity according to their individual needs and wishes. Our cheerful and highly qualified staff are on hand 24-hours a day to enable the very best quality of life for our residents.We have a dedicated activity team who tailored person centred activity to our residents. We trying to improve our quality of care  and support our staff through various training and development programs .</p>
              <p className="dining-announcement">We are delighted to announce the opening of our brand new dining area in our Barry Bellavista ,which indeed reflects in each and every corner of the room to create a Dementia Friendly Dining Experience in a warm and welcoming environment for our beloved and well-deserved Residents. We are very proud of our new dining facilities and staff here at Bellavista Nursing Home Barry</p>
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
            <div className="card clickable-card" onClick={() => openModal('chc')}>
              <i className="fas fa-heartbeat" style={{ fontSize: '3rem', color: 'var(--primary-teal)', marginBottom: '20px' }}></i>
              <h4>CHC Nursing Care</h4>
              <p>Specialist CHC support with coordinated clinical oversight</p>
            </div>
            <div className="card clickable-card" onClick={() => openModal('endOfLife')}>
              <i className="fas fa-dove" style={{ fontSize: '3rem', color: 'var(--primary-pink)', marginBottom: '20px' }}></i>
              <h4>End-of-Life Care</h4>
              <p>Compassionate, dignified palliative care for residents and families</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Seaside Team</h2>
          <p className="section-subtitle">Experienced professionals who understand the benefits of coastal care</p>
          <p>Bellavista Barry has 35 members of staff working in our nursing home and we’re extremely proud of all of them. We select our staff because of their caring attitude, and we train them in all aspects of care so you have peace of mind that your loved one is in good hands. Most of them have been with us for a long time, forming a well‑knit team dedicated to providing care of the highest standard. Our wonderful team comprises nurses, nursing assistants, carers, activities coordinator, chefs, kitchen assistants, housekeepers, maintenance, and more — all here to ensure residents enjoy their time at the home and are supported to live life to the fullest.</p>
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

      <section className="section">
        <div className="container">
          <h2 className="section-title">Activities at Bellavista Barry</h2>
          <p className="section-subtitle">Encouraging active, stimulating, and social experiences every day</p>
          <p>At Bellavista Nursing Home Barry, we believe encouraging our clients to be as active as possible is a key part of maintaining good physical and mental wellbeing.</p>
          <button className="toggle-btn" onClick={toggleActivities}>{activitiesExpanded ? 'Show Less' : 'Read More'}</button>
          <div className={`section-expanded-content ${activitiesExpanded ? 'expanded' : ''}`}>
            <div className="section-expanded">
              <p>We have a dedicated in‑house Activities Coordinator who arranges a varied activity program for all of our residents. As an organisation, we encourage residents to take part in stimulating activities and events in their day‑to‑day life. The activities are stimulating, fun and promote socialisation amongst those in our care.</p>
              <p>Bellavista Nursing Home Barry has in‑house musical performances from artists of varied genres as well as theatre productions and choice performances. We host coffee mornings and welcome families to join us to share their views on life at Bellavista Barry. Weather permitting, we make the most of our lovely outdoor patio areas and adjoining gardens. We also encourage strong links with local communities, providing entertainment such as sing‑alongs and performances that engage with the nostalgia residents enjoy reminiscing over.</p>
              <p>We look at each of the residents who are participating to see whether there are any adjustments we need to make to help them get the most out of sessions. Although we want to encourage our residents to push themselves, it’s essential that they don’t feel uncomfortable at any time. The dignity of our residents and our respect for them is at the centre of everything we do — especially in the activities department. We often review and assess the activities designed by the coordinator whilst also providing on‑going training and development.</p>

              <h3>Activities We Offer</h3>
              <ul>
                <li>Flower arranging</li>
                <li>Arts and crafts</li>
                <li>Bingo</li>
                <li>Meals out</li>
                <li>Sensory therapy</li>
                <li>Playing cards</li>
                <li>Sing‑along / Karaoke</li>
                <li>Board games</li>
                <li>Painting competitions</li>
                <li>Trips out</li>
                <li>Baking & cooking</li>
                <li>Massage</li>
                <li>Gardening</li>
                <li>Sewing</li>
                <li>Singers and musicians performing</li>
                <li>Local schools visiting</li>
                <li>Church service</li>
                <li>Armchair exercises</li>
                <li>Garden activities</li>
                <li>Newspaper reading</li>
                <li>Seasonal activities</li>
                <li>Film days</li>
                <li>1‑to‑1 reminiscing</li>
              </ul>

              <h3>Our Activities Gallery</h3>
              <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '12px' }}>
                <img alt="Activity Room" src={`${process.env.PUBLIC_URL}/images/activity-room.jpg`} />
                <img alt="Music Therapy" src={`${process.env.PUBLIC_URL}/images/music-therapy.jpeg`} />
                <img alt="Outdoor Terrace" src={`${process.env.PUBLIC_URL}/images/outdoor-terrace.jpg`} />
                <img alt="Garden Activities" src={`${process.env.PUBLIC_URL}/images/garden-facility.jpeg`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Facilities & Services</h2>
          <p>Bellavista Barry is a 39‑bedded registered care home providing accommodation and nursing care for older people.</p>
          <button className="toggle-btn" onClick={toggleFacilities}>{facilitiesExpanded ? 'Show Less' : 'Read More'}</button>
          <div className={`section-expanded-content ${facilitiesExpanded ? 'expanded' : ''}`}>
            <div className="section-expanded">
              <p>Our main aim is to provide a continuum of care, which takes account of increasing needs and frailty.</p>
              <p>All bedrooms are connected to a nurse call system and have privacy locks on doors with a lockable facility to secure valuables and personal items. All room sizes meet or exceed the national minimum standard.</p>
              <p>We attach high importance to our residents’ meals and our cooks spend time with them to learn their tastes and preferences and in deciding how best to present their meals. We have varied menus to accommodate everyone’s taste and need. We take care to help people when they need it and to do so sensitively. We encourage relatives to join us for meals.</p>
              <p className="dining-announcement">We are delighted to announce the opening of our brand new dining area in our Barry Bellavista, which reflects in every corner of the room to create a Dementia‑Friendly Dining Experience in a warm and welcoming environment for our beloved and well‑deserved residents. We are very proud of our new dining facilities and staff here at Bellavista Nursing Home Barry.</p>

              <h3>Facilities</h3>
              <ul>
                <li>Ground‑floor lounge hosting music mornings, games afternoons, singers, and music therapy</li>
                <li>Communal lounges and dining rooms</li>
                <li>Wheelchair‑friendly, landscaped gardens for gentle strolls and relaxing walks</li>
                <li>Cinema lounge with big projector cinema</li>
                <li>Gardens and patio area</li>
                <li>Hairdressing facilities</li>
                <li>Dining room supporting arts & crafts, painting, gardening club and bingo</li>
                <li>Regular pet therapy sessions</li>
                <li>Dedicated housekeeping and laundry team</li>
                <li>On‑site laundry for washing and drying</li>
              </ul>

              <h3>Our Facilities Gallery</h3>
              <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '12px' }}>
                <img alt="Communal Lounge" src={`${process.env.PUBLIC_URL}/images/lounge-area.jpg`} />
                <img alt="Dining Room" src={`${process.env.PUBLIC_URL}/images/dining-room.jpg`} />
                <img alt="Cinema Lounge" src={`${process.env.PUBLIC_URL}/images/cinema-facility.jpeg`} />
                <img alt="Kitchen Area" src={`${process.env.PUBLIC_URL}/images/kitchen-area.jpg`} />
                <img alt="Landscaped Garden" src={`${process.env.PUBLIC_URL}/images/garden-facility.jpeg`} />
              </div>

              <div style={{ marginTop: '20px' }}>
                <a className="btn" href={`${process.env.PUBLIC_URL}/ciw-report-barry.pdf`} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-file-pdf"></i>&nbsp; View CIW Report (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <img alt="Private Room" src={`${process.env.PUBLIC_URL}/images/private-room.jpg`} />
            <img alt="Reception" src={`${process.env.PUBLIC_URL}/images/reception-facility.jpeg`} />
            <img alt="Therapy Room" src={`${process.env.PUBLIC_URL}/images/therapy-room.jpg`} />
            <img alt="Library" src={`${process.env.PUBLIC_URL}/images/library-facility.jpeg`} />
            <img alt="Outdoor Patio" src={`${process.env.PUBLIC_URL}/images/outdoor-terrace.jpg`} />
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
          <div className="care-grid">
            <div className="card">
              <i className="fas fa-home" style={{ fontSize: '2rem', color: 'var(--primary-blue)' }}></i>
              <h4>Bellavista Barry</h4>
              <p>106-108 Tynewydd Road</p>
              <p>Barry, CF62 8BB</p>
            </div>
            <div className="card">
              <i className="fas fa-phone" style={{ fontSize: '2rem', color: 'var(--primary-green)' }}></i>
              <h4>Call Us</h4>
              <p>01446 743893</p>
            </div>
            <div className="card">
              <i className="fas fa-envelope" style={{ fontSize: '2rem', color: 'var(--primary-orange)' }}></i>
              <h4>Email</h4>
              <p>admin@bellavistanursinghome.com</p>
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
