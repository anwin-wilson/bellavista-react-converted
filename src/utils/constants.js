export const SITE_CONFIG = {
  name: 'Bellavista Care Homes',
  tagline: 'A Home From Home',
  description: 'Premium residential & nursing care across South Wales',
  phone: '(555) 123-4567',
  email: 'info@bellavista.com',
  location: 'South Wales, UK'
};

export const HOMES_DATA = [
  {
    id: 'cardiff',
    name: 'Cardiff Bay',
    description: 'Modern nursing home with stunning Cardiff Bay views. Purpose-built with state-of-the-art facilities.',
    badge: { type: 'featured', text: '⭐ Featured' },
    image: `${process.env.PUBLIC_URL}/images/bellavista-cardiff.jpeg`,
    rating: '4.9',
    link: '/homes/cardiff',
    htmlLink: 'cardiff.html',
    features: [
      { icon: 'fas fa-bed', text: '45 Rooms' },
      { icon: 'fas fa-leaf', text: 'Garden Views' },
      { icon: 'fas fa-wheelchair', text: 'Accessible' }
    ]
  },
  {
    id: 'barry',
    name: 'Barry Seaside',
    description: 'Coastal care home with spectacular sea views and therapeutic seaside environment.',
    badge: { type: 'new', text: '🆕 Recently Renovated' },
    image: `${process.env.PUBLIC_URL}/images/bellavista-cardiff.jpeg`,
    rating: '4.8',
    link: '/homes/barry',
    htmlLink: 'barry.html',
    features: [
      { icon: 'fas fa-bed', text: '38 Rooms' },
      { icon: 'fas fa-water', text: 'Seaside' },
      { icon: 'fas fa-spa', text: 'Wellness Center' }
    ]
  },
  {
    id: 'waverley',
    name: 'Waverley Centre',
    description: 'Specialized dementia care with warm, family-centered approach and personalized attention.',
    badge: { type: '', text: '' },
    image: `${process.env.PUBLIC_URL}/images/bellavista-waverly.jpeg`,
    rating: '4.9',
    link: '/homes/waverley',
    htmlLink: 'waverley.html',
    features: [
      { icon: 'fas fa-bed', text: '42 Rooms' },
      { icon: 'fas fa-heart', text: 'Dementia Care' },
      { icon: 'fas fa-users', text: 'Family Focused' }
    ]
  },
  {
    id: 'college-fields',
    name: 'College Fields',
    description: 'Tranquil parkland setting with comprehensive medical care and therapeutic environments.',
    badge: { type: '', text: '' },
    image: `${process.env.PUBLIC_URL}/images/bellavista-college-fields.jpeg`,
    rating: '4.7',
    link: '/homes/college-fields',
    htmlLink: 'college-fields.html',
    features: [
      { icon: 'fas fa-bed', text: '35 Rooms' },
      { icon: 'fas fa-tree', text: 'Parkland' },
      { icon: 'fas fa-stethoscope', text: 'Medical Care' }
    ]
  }
];