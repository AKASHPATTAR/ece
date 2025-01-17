# Deployment Documentation

## Project Structure
- Backend: Node.js/Express API
- Frontend: React/Vite Customer Application
- Admin: React/Vite Admin Panel

## Multi-Platform Deployment Strategy

### 1. Backend (Render.com)
- Platform: Render.com (Web Service)
- Type: Node.js application
- Why Render?: 
  - Free tier available
  - Automatic HTTPS
  - Continuous deployment from GitHub
  - Easy environment variable management

### 2. Frontend & Admin (Vercel)
- Platform: Vercel
- Type: Static web applications
- Why Vercel?:
  - Optimized for React/Vite applications
  - Automatic builds and deployments
  - Free SSL certificates
  - Edge network for fast loading

## Environment Variables Setup

### 1. Backend Environment Variables (Render.com)
```env
MONGODB_URI=mongodb+srv://viveklokannavar5058:123456viv@cluster0.6sdhs.mongodb.net/restMenu
PORT=4000
```
How to set:
1. Go to Render Dashboard
2. Select your web service
3. Click "Environment"
4. Add variables

### 2. Frontend Environment Variables (Vercel)
```env
VITE_API_URL=https://ece-3c6i.onrender.com
```
How to set:
1. Go to Vercel Project Settings
2. Environment Variables section
3. Add variable
4. Deploy to apply changes

### 3. Admin Panel Environment Variables (Vercel)
```env
VITE_API_URL=https://ece-3c6i.onrender.com
```
Set up same way as frontend

## Why Use Environment Variables?

1. Security:
   - Sensitive data not in code
   - Different values for development/production
   - Protect database credentials

2. Flexibility:
   - Easy to change values without code changes
   - Different configurations per environment
   - No need to rebuild for URL changes

3. Best Practices:
   - Following 12-factor app methodology
   - Environment-specific configuration
   - No hardcoded values

## Deployment Process

### Backend Deployment (Render.com):
1. Push code to GitHub
2. Connect to Render.com:
   ```
   Build Command: npm install
   Start Command: npm start
   ```
3. Set environment variables:
   - Add MongoDB URI
   - Set PORT if needed

### Frontend/Admin Deployment (Vercel):
1. Push code to GitHub
2. Create new project on Vercel:
   ```
   Framework Preset: Vite
   Root Directory: /frontend or /admin
   Build Command: npm run build
   Output Directory: dist
   ```
3. Set environment variables:
   - Add VITE_API_URL pointing to backend

## Code Changes for Environment Variables

### Backend (db.js):
```javascript
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://viveklokannavar5058:123456viv@cluster0.6sdhs.mongodb.net/restMenu';
try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB Connected");
} catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
}
```

### Frontend (StoreContext.jsx):
```javascript
const url = import.meta.env.VITE_API_URL || "http://localhost:4000"
```

### Admin (assets.js):
```javascript
export const url = import.meta.env.VITE_API_URL || 'http://localhost:4000'
```

## Multiple Platform Benefits

1. Separation of Concerns:
   - Backend: Render.com for API hosting
   - Frontend: Vercel for static site hosting
   - Database: MongoDB Atlas for data storage

2. Scalability:
   - Each component can scale independently
   - Different resource allocation per component
   - Easy to upgrade specific parts

3. Reliability:
   - No single point of failure
   - Independent deployments
   - Easier maintenance

## Monitoring and Maintenance

1. Render.com Dashboard:
   - Monitor backend logs
   - Check server status
   - View deployment history

2. Vercel Dashboard:
   - Monitor build status
   - Check deployment logs
   - View analytics

3. MongoDB Atlas:
   - Monitor database performance
   - Check connection status
   - View data metrics

## GitHub Repository
Repository: https://github.com/AKASHPATTAR/ece.git

## Code Changes Made
1. Updated API URLs in frontend and admin to use environment variables
2. Improved MongoDB connection handling in backend
3. All changes were committed with message: "Updated API URLs to use environment variables"

## Testing the Deployment
1. Backend API test: https://ece-3c6i.onrender.com/api/food/list
2. Frontend: Access the Vercel-provided URL
3. Admin Panel: Access the Vercel-provided URL
