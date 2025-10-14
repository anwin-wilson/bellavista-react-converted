import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const closeSideMenu = () => {
    setSideMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuOpen && !event.target.closest('.left-menu-wrapper')) {
        setSideMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [sideMenuOpen]);

  return (
    <header>
      <div className="container header-container">
        <div className="left-menu-wrapper">
          <div className="left-menu-toggle" onClick={toggleSideMenu}>
            <i className="fas fa-bars"></i>
          </div>
          <div className={`side-dropdown-menu ${sideMenuOpen ? 'active' : ''}`}>
            <div className="nav-header">
              <div className="nav-logo">
                <i className="fas fa-home"></i>
                <span>Bellavista</span>
              </div>
            </div>
            <div className="close-menu" onClick={closeSideMenu}>
              <i className="fas fa-times"></i>
            </div>
            <div className="nav-scrollable">
              <ul>
                <div className="nav-category">Main</div>
                <li><Link to="/" onClick={closeSideMenu}>Home</Link></li>
                <li><Link to="/our-homes" onClick={closeSideMenu}>Our Homes</Link></li>
                <div className="nav-category">Services</div>
                <li><Link to="/activities" onClick={closeSideMenu}>Activities & Events</Link></li>
                <li><Link to="/facilities" onClick={closeSideMenu}>Facilities</Link></li>
                <li><Link to="/services" onClick={closeSideMenu}>Care Services</Link></li>
                <div className="nav-category">Get Started</div>
                <li><Link to="/enquiry" onClick={closeSideMenu}>Care Enquiry</Link></li>
                <li><Link to="/schedule-tour" onClick={closeSideMenu}>Schedule a Tour</Link></li>
                <div className="nav-category">Information</div>
                <li><Link to="/testimonials" onClick={closeSideMenu}>Reviews</Link></li>
                <li><Link to="/news" onClick={closeSideMenu}>News & Updates</Link></li>
                <li><Link to="/faq" onClick={closeSideMenu}>FAQ</Link></li>
                <div className="nav-category">Support</div>
                <li><Link to="/contact" onClick={closeSideMenu}>Contact Us</Link></li>
                <li><Link to="/career" onClick={closeSideMenu}>Careers</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <Link to="/" className="logo">
          <div className="logo-icon">
            <i className="fas fa-home"></i>
          </div>
          <div className="logo-text-group">
            <div className="logo-text">Bellavista <span>Nursing Homes</span></div>
            <div className="tagline">A Home From Home</div>
          </div>
        </Link>
        
        <nav>
          <ul>
            <li className="has-dropdown">
              <Link to="/our-homes">Our Homes <i className="fas fa-chevron-down"></i></Link>
              <ul className="dropdown-menu">
                <li><Link to="/cardiff">Cardiff</Link></li>
                <li><Link to="/barry">Barry</Link></li>
                <li><Link to="/waverley">Waverley</Link></li>
                <li><Link to="/college-fields">College Fields</Link></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <Link to="/services">Services <i className="fas fa-chevron-down"></i></Link>
              <ul className="dropdown-menu">
                <li><Link to="/services">Care Services</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                <li><Link to="/schedule-tour">Schedule Tour</Link></li>
              </ul>
            </li>
            <li><Link to="/testimonials">Reviews</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li>
              <div className="auth-links">
                <Link className="auth-link" to="/login">Login</Link>
                <span>|</span>
                <Link className="auth-link" to="/signup">Signup</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;