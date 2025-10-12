import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ChatWidget from './components/ChatWidget';

const Home = lazy(() => import('./pages/general/Home'));
const OurHomes = lazy(() => import('./pages/general/OurHomes'));
const Contact = lazy(() => import('./pages/general/Contact'));
const About = lazy(() => import('./pages/general/About'));
const Services = lazy(() => import('./pages/general/Services'));
const ScheduleTour = lazy(() => import('./pages/general/ScheduleTour'));
const Enquiry = lazy(() => import('./pages/general/Enquiry'));
const Activities = lazy(() => import('./pages/general/Activities'));
const Facilities = lazy(() => import('./pages/general/Facilities'));
const News = lazy(() => import('./pages/general/News'));
const Testimonials = lazy(() => import('./pages/general/Testimonials'));
const FAQ = lazy(() => import('./pages/general/FAQ'));
const Career = lazy(() => import('./pages/general/Career'));
const Barry = lazy(() => import('./pages/locations/Barry'));
const Cardiff = lazy(() => import('./pages/locations/Cardiff'));
const CollegeFields = lazy(() => import('./pages/locations/CollegeFields'));
const Waverley = lazy(() => import('./pages/locations/Waverley'));
const CareAssessment = lazy(() => import('./pages/general/CareAssessment'));
const CareResources = lazy(() => import('./pages/general/CareResources'));
const OurCare = lazy(() => import('./pages/general/OurCare'));
const Gallery = lazy(() => import('./pages/general/Gallery'));
const QualityDashboard = lazy(() => import('./pages/general/QualityDashboard'));
const CovidUpdate = lazy(() => import('./pages/general/CovidUpdate'));
const MobileApp = lazy(() => import('./pages/general/MobileApp'));
const AdminConsole = lazy(() => import('./pages/admin/AdminConsole'));
const CardiffAdmin = lazy(() => import('./pages/admin/CardiffAdmin'));
const Login = lazy(() => import('./pages/admin/Login'));
const Signup = lazy(() => import('./pages/admin/Signup'));
const StaffDashboard = lazy(() => import('./pages/admin/StaffDashboard'));
const UserDashboard = lazy(() => import('./pages/admin/UserDashboard'));
const BarryEnquiry = lazy(() => import('./pages/locations/BarryEnquiry'));
const BarryNews = lazy(() => import('./pages/locations/BarryNews'));
const BarryScheduleVisit = lazy(() => import('./pages/locations/BarryScheduleVisit'));
const CardiffEnquiry = lazy(() => import('./pages/locations/CardiffEnquiry'));
const CardiffNews = lazy(() => import('./pages/locations/CardiffNews'));
const CardiffScheduleVisit = lazy(() => import('./pages/locations/CardiffScheduleVisit'));
const CollegeFieldsEnquiry = lazy(() => import('./pages/locations/CollegeFieldsEnquiry'));
const CollegeFieldsNews = lazy(() => import('./pages/locations/CollegeFieldsNews'));
const CollegeFieldsScheduleVisit = lazy(() => import('./pages/locations/CollegeFieldsScheduleVisit'));
const WaverleyEnquiry = lazy(() => import('./pages/locations/WaverleyEnquiry'));
const WaverleyNews = lazy(() => import('./pages/locations/WaverleyNews'));
const WaverleyScheduleVisit = lazy(() => import('./pages/locations/WaverleyScheduleVisit'));

const NotFound = () => (
  <div style={{padding: '50px', textAlign: 'center'}}>
    <h2>Page Not Found</h2>
    <p>This page is coming soon.</p>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin-console' || location.pathname === '/cardiff-admin';

  if (isAdminRoute) {
    return (
      <div className="App">
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            <Route path="/admin-console" element={<AdminConsole />} />
            <Route path="/cardiff-admin" element={<CardiffAdmin />} />
          </Routes>
        </Suspense>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-homes" element={<OurHomes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/schedule-tour" element={<ScheduleTour />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/news" element={<News />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/career" element={<Career />} />
            <Route path="/barry" element={<Barry />} />
            <Route path="/cardiff" element={<Cardiff />} />
            <Route path="/college-fields" element={<CollegeFields />} />
            <Route path="/waverley" element={<Waverley />} />
            <Route path="/care-assessment" element={<CareAssessment />} />
            <Route path="/care-resources" element={<CareResources />} />
            <Route path="/our-care" element={<OurCare />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/quality-dashboard" element={<QualityDashboard />} />
            <Route path="/covid-update" element={<CovidUpdate />} />
            <Route path="/mobile-app" element={<MobileApp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/staff-dashboard" element={<StaffDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/barry-enquiry" element={<BarryEnquiry />} />
            <Route path="/barry-news" element={<BarryNews />} />
            <Route path="/barry-schedule-visit" element={<BarryScheduleVisit />} />
            <Route path="/cardiff-enquiry" element={<CardiffEnquiry />} />
            <Route path="/cardiff-news" element={<CardiffNews />} />
            <Route path="/cardiff-schedule-visit" element={<CardiffScheduleVisit />} />
            <Route path="/college-fields-enquiry" element={<CollegeFieldsEnquiry />} />
            <Route path="/college-fields-news" element={<CollegeFieldsNews />} />
            <Route path="/college-fields-schedule-visit" element={<CollegeFieldsScheduleVisit />} />
            <Route path="/waverley-enquiry" element={<WaverleyEnquiry />} />
            <Route path="/waverley-news" element={<WaverleyNews />} />
            <Route path="/waverley-schedule-visit" element={<WaverleyScheduleVisit />} />
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
    <Router basename="/bellavista-react-converted">
      <AppContent />
    </Router>
  );
}

export default App;