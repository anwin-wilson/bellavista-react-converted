// Main App Component for Bellavista Care Homes
// Clean routing structure with lazy loading for performance

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ChatWidget from './components/ChatWidget';

// =============================================================================
// LAZY LOADED COMPONENTS FOR PERFORMANCE
// =============================================================================

// Main Pages
const Home = lazy(() => import('./pages/general/Home'));
const About = lazy(() => import('./pages/general/About'));
const Contact = lazy(() => import('./pages/general/Contact'));
const Services = lazy(() => import('./pages/general/Services'));
const ScheduleTour = lazy(() => import('./pages/general/ScheduleTour'));
const Enquiry = lazy(() => import('./pages/general/Enquiry'));

// Care Home Locations
const OurHomes = lazy(() => import('./pages/general/OurHomes'));
const Barry = lazy(() => import('./pages/locations/Barry'));
const Cardiff = lazy(() => import('./pages/locations/Cardiff'));
const CollegeFields = lazy(() => import('./pages/locations/CollegeFields'));
const Waverley = lazy(() => import('./pages/locations/Waverley'));

// Additional Pages
const Activities = lazy(() => import('./pages/general/Activities'));
const Facilities = lazy(() => import('./pages/general/Facilities'));
const News = lazy(() => import('./pages/general/News'));
const Testimonials = lazy(() => import('./pages/general/Testimonials'));
const FAQ = lazy(() => import('./pages/general/FAQ'));
const Career = lazy(() => import('./pages/general/Career'));
const Gallery = lazy(() => import('./pages/general/Gallery'));
const ApiTestPage = lazy(() => import('./pages/general/ApiTest'));
const EmailTest = lazy(() => import('./pages/general/EmailTest'));

// Admin Pages
const AdminConsole = lazy(() => import('./pages/admin/AdminConsole'));
const Login = lazy(() => import('./pages/admin/Login'));

// =============================================================================
// LOADING AND ERROR COMPONENTS
// =============================================================================

const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontSize: '18px'
  }}>
    <i className="fas fa-spinner fa-spin" style={{ marginRight: '10px' }}></i>
    Loading...
  </div>
);

const NotFound = () => (
  <div style={{ padding: '100px 20px', textAlign: 'center', background: 'var(--bg-light)' }}>
    <div className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary)' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'var(--text-medium)' }}>The page you're looking for doesn't exist.</p>
      <a href="/" className="btn" style={{ background: 'var(--gradient)', color: 'white', padding: '12px 30px', borderRadius: '25px', textDecoration: 'none' }}>
        Return Home
      </a>
    </div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname === '/admin-console';

  if (isAdminRoute) {
    return (
      <div className="App">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/admin" element={<AdminConsole />} />
            <Route path="/admin-console" element={<AdminConsole />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            
            {/* Booking & Enquiry */}
            <Route path="/schedule-tour" element={<ScheduleTour />} />
            <Route path="/enquiry" element={<Enquiry />} />
            
            {/* Care Homes */}
            <Route path="/our-homes" element={<OurHomes />} />
            <Route path="/homes/barry" element={<Barry />} />
            <Route path="/homes/cardiff" element={<Cardiff />} />
            <Route path="/homes/college-fields" element={<CollegeFields />} />
            <Route path="/homes/waverley" element={<Waverley />} />
            
            {/* Legacy location routes (redirect) */}
            <Route path="/barry" element={<Barry />} />
            <Route path="/cardiff" element={<Cardiff />} />
            <Route path="/college-fields" element={<CollegeFields />} />
            <Route path="/waverley" element={<Waverley />} />
            
            {/* Additional Pages */}
            <Route path="/activities" element={<Activities />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/news" element={<News />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/career" element={<Career />} />
            <Route path="/gallery" element={<Gallery />} />
            
            {/* Admin & Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/api-test" element={<ApiTestPage />} />
            <Route path="/email-test" element={<EmailTest />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;