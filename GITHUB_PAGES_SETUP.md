# GitHub Pages Setup Guide

## Quick Fix Steps

### 1. Update package.json homepage
Replace `yourusername` with your actual GitHub username:
```json
"homepage": "https://anwin-wilson.github.io/bellavista-react-converted"
```

### 2. Deploy to GitHub Pages
```bash
npm run build
npm run deploy
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Source: Deploy from a branch
4. Branch: gh-pages
5. Folder: / (root)
6. Save

## What Was Fixed

### ✅ Router Configuration
- Changed from `BrowserRouter` to `HashRouter`
- GitHub Pages doesn't support client-side routing with BrowserRouter
- HashRouter uses URL fragments (#) which work on static hosts

### ✅ Homepage URL
- Set correct GitHub Pages URL in package.json
- This tells React where the app will be deployed

### ✅ 404 Handling
- Added 404.html for GitHub Pages SPA routing
- Redirects all routes to index.html with proper path handling

### ✅ Build Configuration
- Added deployment scripts
- Created GitHub Actions workflow for auto-deployment

## Manual Deployment
```bash
# Build and deploy
npm run deploy-gh

# Or step by step
npm run build
npm run deploy
```

## Auto Deployment
- Push to main/master branch
- GitHub Actions will automatically build and deploy
- Check Actions tab for deployment status

## Troubleshooting

### URLs not working?
1. Check if homepage in package.json matches your GitHub Pages URL
2. Ensure you're using HashRouter (already fixed)
3. Verify GitHub Pages is enabled in repository settings

### Images not loading?
- All images should be in public/images/ folder
- Use relative paths: `/images/filename.jpg`

### API calls failing?
- Update API base URL for production
- Check CORS settings on backend
- Verify API endpoints are accessible

## Testing Locally
```bash
npm start
# Test at http://localhost:3000
```

## Production URL
After deployment, your site will be available at:
`https://yourusername.github.io/bellavista-react-converted`

Replace `yourusername` with your actual GitHub username.