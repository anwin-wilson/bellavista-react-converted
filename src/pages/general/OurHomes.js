import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/homes-scroll.css';

const HOMES_DATA = [
  {
    name: 'Cardiff Bay',
    description: 'Modern nursing home with stunning Cardiff Bay views. Purpose-built with state-of-the-art facilities.',
    image: `${process.env.PUBLIC_URL}/images/bellavista-cardiff.jpeg`,
    badge: { type: 'featured', text: '⭐ Featured' },
    rating: '4.9',
    link: '/homes/cardiff',
    htmlLink: 'cardiff.html',
    features: [
      { icon: 'fas fa-water', text: 'Bay Views' },
      { icon: 'fas fa-shield-alt', text: '24/7 Care' },
      { icon: 'fas fa-utensils', text: 'Fine Dining' }
    ]
  },
  {
    name: 'Barry Seaside',
    description: 'Coastal care home with spectacular sea views and therapeutic seaside environment.',
    image: `${process.env.PUBLIC_URL}/images/bellavista-college-fields.jpeg`,
    badge: { type: 'new', text: '🆕 Recently Renovated' },
    rating: '4.8',
    link: '/homes/barry',
    htmlLink: 'barry.html',
    features: [
      { icon: 'fas fa-water', text: 'Sea Views' },
      { icon: 'fas fa-leaf', text: 'Therapeutic' },
      { icon: 'fas fa-users', text: 'Family Focused' }
    ]
  },
  {
    name: 'Waverley Centre',
    description: 'Peaceful suburban care home with beautiful gardens and community-focused environment.',
    image: `${process.env.PUBLIC_URL}/images/bellavista-waverly.jpeg`,
    badge: '',
    rating: '4.9',
    link: '/homes/waverley',
    htmlLink: 'waverley.html',
    features: [
      { icon: 'fas fa-home', text: 'Home Comfort' },
      { icon: 'fas fa-leaf', text: 'Gardens' },
      { icon: 'fas fa-heart', text: 'Dementia Care' }
    ]
  },
  {
    name: 'College Fields',
    description: 'Rural care home surrounded by countryside, offering peaceful environment and nature therapy.',
    image: `${process.env.PUBLIC_URL}/images/bellavista-college-fields.jpeg`,
    badge: '',
    rating: '4.7',
    link: '/homes/college-fields',
    htmlLink: 'college-fields.html',
    features: [
      { icon: 'fas fa-tree', text: 'Countryside' },
      { icon: 'fas fa-spa', text: 'Wellness' },
      { icon: 'fas fa-users', text: 'Community' }
    ]
  }
];

const OurHomes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = scrollContainer.querySelector('.home-card')?.offsetWidth || 320;
      const gap = 20;
      const totalWidth = cardWidth + gap;
      const newIndex = Math.round(scrollLeft / totalWidth);
      setCurrentIndex(Math.max(0, Math.min(newIndex, HOMES_DATA.length - 1)));
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const cardWidth = scrollContainer.querySelector('.home-card')?.offsetWidth || 320;
      const gap = 20;
      const scrollLeft = index * (cardWidth + gap);
      scrollContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section className="our-homes">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Care Homes</h2>
          <p className="section-subtitle">
            Discover our modern care homes across South Wales, each designed with comfort, safety & wellbeing in mind.
          </p>
        </div>
        
        {/* Horizontal Scrollable Homes Section */}
        <div className="homes-horizontal-scroll">
          <div className="homes-scroll-container" ref={scrollRef}>
            {HOMES_DATA.map((home, index) => (
              <Link key={index} to={home.link} className="home-card modern">
                <div className="home-image">
                  <img alt={home.name} src={home.image} />
                  {home.badge?.text && <div className={`home-badge ${home.badge.type}`}>{home.badge.text}</div>}
                  <div className="home-overlay">
                    <div className="home-features">
                      {home.features.map((feature, idx) => (
                        <span key={idx}>
                          <i className={feature.icon}></i> {feature.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="home-content">
                  <div className="home-header">
                    <h3>{home.name}</h3>
                    <div className="home-rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                      <span>{home.rating}</span>
                    </div>
                  </div>
                  <p>{home.description}</p>
                  <div className="home-actions">
                    <span className="btn-small">Explore <i className="fas fa-arrow-right"></i></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="scroll-indicators">
            {HOMES_DATA.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => scrollToIndex(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="homes-cta">
          <Link to="/our-homes" className="btn btn-outline-large">
            <i className="fas fa-map-marked-alt"></i> View All Locations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurHomes;