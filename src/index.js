import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Handle GitHub Pages SPA redirect
if (window.location.search.startsWith('/?')) {
  const path = window.location.search.slice(2);
  window.history.replaceState(null, null, path);
}

// Additional redirect handling for direct page loads
if (window.location.pathname.startsWith('/bellavista-react-converted/') && window.location.pathname !== '/bellavista-react-converted/') {
  const path = window.location.pathname.replace('/bellavista-react-converted', '');
  if (path) {
    window.history.replaceState(null, null, path);
  }
}

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/bellavista-react-converted/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
