// Service Worker for Bellavista Care Homes PWA
const CACHE_NAME = 'bellavista-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/assets/css/modern-styles.css',
  '/assets/js/main.js',
  '/assets/images/bellavistacare.jpg',
  '/assets/images/bellavistafamily.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      }
    )
  );
});