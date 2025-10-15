const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build the project
console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Add CNAME file if using custom domain (optional)
// const cnameContent = 'your-domain.com';
// fs.writeFileSync(path.join(__dirname, 'build', 'CNAME'), cnameContent);

// Deploy to GitHub Pages
console.log('Deploying to GitHub Pages...');
execSync('npm run deploy', { stdio: 'inherit' });

console.log('Deployment complete!');