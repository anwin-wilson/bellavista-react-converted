# 🏠 Bellavista Care Homes - Frontend

Modern React application for Bellavista Care Homes with tour booking functionality.

## 🚀 Quick Start

### Development
```bash
npm install
npm start
```

### Production Build
```bash
npm run build
```

## 🌐 Live Demo
- **Production**: [Your deployed URL]
- **Backend API**: https://bellavista-backend-production.up.railway.app

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── BackToTop.js    # Scroll to top button
│   └── ChatWidget.js   # Chat functionality
├── pages/              # Page components
│   ├── general/        # Main site pages
│   ├── locations/      # Care home specific pages
│   └── admin/          # Admin dashboard pages
├── styles/             # CSS stylesheets
├── utils/              # Utilities and configuration
│   ├── api.js         # API endpoints and functions
│   ├── constants.js   # Site configuration
│   └── news.js        # News data
└── App.js             # Main app component
```

## 🔗 API Integration

The frontend connects to the Django backend API:

### Main Endpoints Used:
- `POST /api/tours/book/` - Create tour booking
- `GET /api/tours/available-slots/` - Get available time slots
- `GET /api/tours/test/` - Test API connection

### API Configuration:
- Production: `https://bellavista-backend-production.up.railway.app`
- Development: `http://localhost:8000`

## 🎯 Key Features

### ✅ Tour Booking System
- Interactive booking form
- Real-time validation
- Email confirmation
- Available time slots

### ✅ Care Home Locations
- Cardiff Bay
- Barry Seaside  
- Waverley Centre
- College Fields

### ✅ Modern UI/UX
- Responsive design
- Lazy loading
- Clean navigation
- Mobile-friendly

## 🛠️ Technologies

- **React 18** - Modern React with hooks
- **React Router 6** - Client-side routing
- **CSS3** - Custom styling with CSS variables
- **Font Awesome** - Icons
- **Fetch API** - HTTP requests

## 📱 Responsive Design

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1440px+)

## 🔧 Environment Variables

```bash
# App Configuration
REACT_APP_NAME=Bellavista Care Homes
REACT_APP_VERSION=1.0.0

# API URLs
REACT_APP_API_BASE_URL=https://bellavista-backend-production.up.railway.app/api/tours
REACT_APP_LOCAL_API_URL=http://localhost:8000/api/tours
```

## 🚀 Deployment

### Netlify (Recommended)
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`
4. Add environment variables

### Vercel
1. Import GitHub repository
2. Framework preset: Create React App
3. Add environment variables

## 📋 Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🎨 Styling

Uses CSS custom properties for consistent theming:

```css
:root {
  --primary: #2c5530;
  --primary-light: #4a7c59;
  --secondary: #8b4513;
  --accent: #d4af37;
  --bg-light: #f8f9fa;
  --text-dark: #2c3e50;
  --gradient: linear-gradient(135deg, #2c5530, #4a7c59);
}
```

## 🔍 SEO Optimized

- Meta tags for all pages
- Semantic HTML structure
- Alt text for images
- Structured data markup

## 📞 Support

For technical support or questions:
- Email: info@bellavista.com
- Phone: (555) 123-4567

---

**Built with ❤️ for Bellavista Care Homes**