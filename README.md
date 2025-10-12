# Bellavista Care Homes - React App

A modern, responsive React application for Bellavista Care Homes, converted from the original HTML/CSS/JavaScript implementation.

## ✨ Features

- **Modern React Architecture** - Built with React 18, hooks, and functional components
- **Responsive Design** - Mobile-first approach with optimized layouts
- **Performance Optimized** - Lazy loading, code splitting, and error boundaries
- **SEO Friendly** - Proper meta tags and semantic HTML structure
- **Accessible** - WCAG compliant with proper ARIA labels
- **Clean Code** - Well-organized components and reusable utilities
- **PWA Ready** - Progressive Web App capabilities

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm start
```

3. **Build for production:**
```bash
npm run build
```

## 📦 GitHub Pages Deployment

1. **Update homepage in package.json:**
```json
"homepage": "https://yourusername.github.io/repository-name"
```

2. **Deploy to GitHub Pages:**
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Header.js
│   ├── Footer.js
│   ├── BackToTop.js
│   └── ChatWidget.js
├── pages/         # Route-based page components
│   ├── Home.js
│   ├── OurHomes.js
│   ├── Services.js
│   ├── About.js
│   ├── Contact.js
│   ├── ScheduleTour.js
│   ├── Enquiry.js
│   ├── Activities.js
│   ├── Facilities.js
│   ├── News.js
│   ├── Testimonials.js
│   ├── FAQ.js
│   └── Career.js
├── utils/         # Helper functions and constants
│   └── constants.js
├── App.js         # Main application component
├── index.js       # Application entry point
└── index.css      # Global styles
```

## 📱 Pages

- **Home** - Hero slideshow, statistics, homes preview, news, activities, care promise, facilities
- **Our Homes** - Detailed information about all care facilities
- **Services** - Comprehensive care services overview
- **About** - Company mission, vision, and values
- **Contact** - Contact form and location information
- **Schedule Tour** - Tour booking form (localStorage-based)
- **Enquiry** - Care enquiry form
- **Activities** - Activities and events information
- **Facilities** - Facilities and amenities details
- **News** - Latest news and updates
- **Testimonials** - Customer testimonials
- **FAQ** - Frequently asked questions
- **Career** - Career opportunities

## 🛠 Technologies

- **React 18** - Latest React with concurrent features
- **React Router DOM** - Client-side routing
- **CSS3** - Modern CSS with custom properties
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Inter & Playfair Display)

## 🎨 Design System

- **Colors** - Professional blue/teal gradient theme
- **Typography** - Inter for body text, Playfair Display for headings
- **Layout** - CSS Grid and Flexbox for responsive layouts
- **Components** - Modular, reusable component architecture

## 🔧 Development

- Follow the existing code style and component patterns
- Test responsiveness across different screen sizes
- Ensure accessibility compliance
- All forms use localStorage for data persistence

## 📦 Build & Deploy

The app builds to static files in the `build/` directory, ready for deployment to GitHub Pages or any static hosting service.

## 🔄 Conversion Notes

This React application was converted from the original HTML/CSS/JavaScript implementation while maintaining:
- All original functionality and features
- Responsive design and mobile optimization
- Visual design and styling
- Interactive elements and animations
- Form functionality (using localStorage)
- PWA capabilities

The conversion provides:
- Better code organization and maintainability
- Modern React patterns and best practices
- Improved performance through code splitting
- Enhanced developer experience