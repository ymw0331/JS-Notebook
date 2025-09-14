# Vercel Deployment Guide for React TypeScript Code Editor

## Overview
This is a monorepo with three packages that need different deployment strategies:
- **local-client**: React app (can be deployed to Vercel)
- **local-api**: Express API server (needs serverless functions or separate deployment)
- **cli**: NPM package (published to NPM registry)

## Option 1: Deploy Frontend Only (Recommended for Demo)

### Steps:
1. **Create vercel.json in packages/local-client**:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

2. **Deploy via Vercel CLI**:
```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to the React app
cd packages/local-client

# Deploy
vercel

# Follow prompts:
# - Set up and deploy
# - Select account
# - Link to existing project? No
# - Project name: react-code-editor
# - Directory: ./
# - Override settings? No
```

3. **Deploy via GitHub (Recommended)**:
   - Push your code to GitHub
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Create React App
     - Root Directory: `packages/local-client`
     - Build Command: `npm run build`
     - Output Directory: `build`
     - Install Command: `npm install`

### Environment Variables:
No environment variables needed for frontend-only deployment.

### Limitations:
- This deploys only the React frontend
- File persistence won't work (needs backend API)
- Code will run in browser but won't save

## Option 2: Full Stack Deployment (Advanced)

### A. Deploy Frontend to Vercel + Backend to Railway/Render

1. **Frontend on Vercel** (same as Option 1)

2. **Backend on Railway**:
   - Create account at https://railway.app
   - New Project → Deploy from GitHub
   - Select your repository
   - Set root directory: `packages/local-api`
   - Add build command: `npm run prepublishOnly`
   - Add start command: `node dist/index.js`

3. **Update Frontend to use Backend API**:
   Create `.env.production` in `packages/local-client`:
   ```
   REACT_APP_API_URL=https://your-backend.railway.app
   ```

### B. Serverless Functions Approach

1. **Create api directory** in project root:
```bash
mkdir api
```

2. **Create serverless function** `api/cells.js`:
```javascript
const express = require('express');
const { createCellsRouter } = require('../packages/local-api/dist/routes/cells');

const app = express();
app.use(createCellsRouter('notebook.js', '/tmp'));

module.exports = app;
```

3. **Update vercel.json** in root:
```json
{
  "functions": {
    "api/*.js": {
      "maxDuration": 30
    }
  },
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/packages/local-client/build/$1" }
  ]
}
```

## Option 3: Static Export with Monaco Editor (Simplified)

1. **Create a standalone version**:
   - Build the local-client: `cd packages/local-client && npm run build`
   - The build folder contains everything needed
   - Deploy build folder directly to Vercel

2. **Deploy command**:
```bash
cd packages/local-client
npm run build
vercel --prod ./build
```

## Recommended Approach for Your Use Case

Since this is a code editor with in-browser execution:

1. **Deploy frontend only** (Option 1)
2. **Add a note** that this is a demo version without persistence
3. **Consider adding localStorage** for client-side persistence

### Quick Deploy Steps:
```bash
# 1. Ensure everything is committed
git add .
git commit -m "Prepare for Vercel deployment"
git push origin master

# 2. Install Vercel CLI
npm i -g vercel

# 3. Deploy frontend
cd packages/local-client
vercel --prod

# 4. You'll get a URL like: https://react-code-editor.vercel.app
```

## Post-Deployment Configuration

### Custom Domain:
1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Performance Optimization:
1. Enable Edge Functions for faster response
2. Configure caching headers
3. Enable compression

### Security:
1. Add Content Security Policy headers
2. Configure CORS if using external API
3. Add rate limiting for API routes

## Troubleshooting

### Build Failures:
- Check Node version (use 18.x or higher)
- Verify all dependencies are installed
- Check build logs in Vercel dashboard

### Monaco Editor Issues:
- Ensure webpack config includes necessary loaders
- Check that worker files are included in build

### Large Bundle Size:
- Current bundle is ~900KB (expected for Monaco Editor)
- Consider lazy loading for better initial load

## Alternative: GitHub Pages (Free, Static Only)

1. **Add homepage to package.json**:
```json
"homepage": "https://yourusername.github.io/react-typescript-code-editor"
```

2. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

3. **Add deploy scripts**:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. **Deploy**:
```bash
npm run deploy
```

## Next Steps

1. Choose deployment option based on your needs
2. Set up CI/CD with GitHub Actions
3. Add monitoring (Vercel Analytics)
4. Consider adding authentication if needed
5. Implement cloud storage for notebooks

## Support

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- GitHub Pages: https://pages.github.com