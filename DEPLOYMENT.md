# TripTap Deployment Guide

This project is split into:
- `backend/`: Node.js + Express + Socket.IO API
- `frontend/`: Vite + React app

Below is a reliable production setup that works well on platforms like Railway/Render/Fly.io (backend) + Vercel/Netlify (frontend).

---

## 1) Prerequisites

- Node.js 20+ (recommended)
- A MongoDB connection string (MongoDB Atlas recommended)
- Google Maps API key(s)
- OpenWeather API key

---

## 2) Environment Variables

### Backend (`backend/.env`)

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
OPENWEATHER_API_KEY=your_openweather_api_key
GOOGLE_MAPS_API=your_google_maps_api_key
GOOGLE_MAPS_API_2=your_google_maps_api_key_2
```

### Frontend (`frontend/.env`)

```bash
VITE_BASE_URL=https://your-backend-domain.com
```

> `VITE_BASE_URL` must point to your deployed backend URL (including `https://`), because API requests and Socket.IO use it.

---

## 3) Local Production Smoke Test

Run this once before deploying:

```bash
# Backend
cd backend
npm ci
npm start

# Frontend (new terminal)
cd frontend
npm ci
npm run build
npm run preview
```

Open the preview URL and confirm login/signup, ride flow, and captain flow connect correctly.

---

## 4) Deploy Backend

Use these settings on your backend host:

- **Root Directory:** `backend`
- **Install Command:** `npm ci`
- **Start Command:** `npm start`
- **Node Version:** 20+

Set all backend environment variables from section 2.

### Important backend notes

- The app currently allows open CORS via `app.use(cors())`. In production, restrict origins to your frontend domain for better security.
- Keep `JWT_SECRET` private and rotate it if exposed.

---

## 5) Deploy Frontend

Use these settings on your frontend host:

- **Root Directory:** `frontend`
- **Install Command:** `npm ci`
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

Set:

- `VITE_BASE_URL=https://your-backend-domain.com`

After deployment, verify:

1. Browser can load frontend.
2. Auth requests succeed.
3. Socket connection succeeds (check browser console for connection logs).

---

## 6) Post-Deployment Checklist

- [ ] Backend health route responds (`GET /` returns `Hello World`)
- [ ] User signup/login works
- [ ] Captain signup/login works
- [ ] Ride fare estimation and ride creation work
- [ ] Admin ad upload flow works
- [ ] Uploaded images served from `/uploads/...`

---

## 7) Troubleshooting

### Frontend cannot call backend

- Verify `VITE_BASE_URL` is correct and includes `https://`
- Rebuild frontend after changing env vars

### Socket.IO does not connect

- Confirm backend URL is reachable from browser
- Check host supports WebSockets

### 500 errors on APIs

- Confirm `MONGO_URI` is valid and reachable
- Confirm API keys are present in backend environment

### CORS errors

- If you lock down CORS, ensure frontend domain is whitelisted exactly

