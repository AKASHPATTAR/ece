# Deployment Documentation

## Project Structure
- Backend: Node.js/Express API
- Frontend: React/Vite Customer Application
- Admin: React/Vite Admin Panel

## 1. Backend Deployment (Render.com)
- URL: https://ece-3c6i.onrender.com
- MongoDB Connection: mongodb+srv://viveklokannavar5058:123456viv@cluster0.6sdhs.mongodb.net/restMenu

### Backend Changes Made:
1. Updated `backend/config/db.js`:
```javascript
export const connectDB = async () => {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://viveklokannavar5058:123456viv@cluster0.6sdhs.mongodb.net/restMenu';
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
}
```

## 2. Frontend Deployment (Vercel)

### Frontend Changes Made:
1. Updated `frontend/src/Context/StoreContext.jsx`:
```javascript
// Changed from hardcoded localhost to environment variable
const url = import.meta.env.VITE_API_URL || "http://localhost:4000"
```

### Frontend Environment Variables:
```
VITE_API_URL=https://ece-3c6i.onrender.com
```

## 3. Admin Panel Deployment (Vercel)

### Admin Changes Made:
1. Updated `admin/src/assets/assets.js`:
```javascript
// Changed from hardcoded localhost to environment variable
export const url = import.meta.env.VITE_API_URL || 'http://localhost:4000'
```

### Admin Environment Variables:
```
VITE_API_URL=https://ece-3c6i.onrender.com
```

## Deployment Steps Taken

### 1. Backend Deployment (Render.com):
1. Created new Web Service on Render
2. Connected GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Added environment variables:
   - MONGODB_URI=mongodb+srv://viveklokannavar5058:123456viv@cluster0.6sdhs.mongodb.net/restMenu

### 2. Frontend & Admin Deployment (Vercel):
1. Created new projects on Vercel
2. Connected GitHub repository
3. Set framework preset to Vite
4. Set root directories:
   - Frontend: `/frontend`
   - Admin: `/admin`
5. Added environment variables:
   - VITE_API_URL=https://ece-3c6i.onrender.com

## Testing the Deployment
1. Backend API test: https://ece-3c6i.onrender.com/api/food/list
2. Frontend: Access the Vercel-provided URL
3. Admin Panel: Access the Vercel-provided URL

## GitHub Repository
Repository: https://github.com/AKASHPATTAR/ece.git

## Code Changes Made
1. Updated API URLs in frontend and admin to use environment variables
2. Improved MongoDB connection handling in backend
3. All changes were committed with message: "Updated API URLs to use environment variables"

## Maintenance
- Monitor backend on Render.com dashboard
- Monitor frontend/admin on Vercel dashboard
- Check MongoDB Atlas for database performance
