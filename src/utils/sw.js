const CACHE_NAME = 'bellavista-v1';
const urlsToCache = [
  '/',
  '/assets/css/styles.css',
  '/assets/css/custom.css',
  '/assets/css/modern-styles.css',
  '/assets/css/nav-modern.css'
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
      .then(response => response || fetch(event.request))
  );
});