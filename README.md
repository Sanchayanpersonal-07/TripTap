# 🚖 TripTap: Optimized Cab Booking System

TripTap is an innovative cab booking platform designed to provide users with a seamless ride-hailing experience. Our system leverages advanced algorithms for price prediction, real-time tracking, and efficient ride management. With a focus on affordability, transparency, and user satisfaction, TripTap stands out as a next-generation cab booking solution.

---

## 🚀 Key Features

- **Dynamic Price Prediction**: Adapts to real-time factors like traffic, weather, and route complexity.
- **Real-Time Tracking**: Users can track their rides live on an interactive map.
- **Multi-Vehicle Support**: Choose from cars, autos, and motorcycles based on preference and budget.
- **Secure Authentication**: Role-based authentication for users, captains, and admins.
- **Ad Management**: Admins can upload city-specific ads to enhance user engagement.
- **Captain Earnings Tracking**: Captains can monitor their earnings and ride history.

---

## 🧠 Novelty: Advanced Price Prediction

TripTap's price prediction model outperforms traditional systems by incorporating:

1. **Dynamic Traffic Multiplier**: Adjusts pricing based on peak and off-peak hours.
2. **Weather-Based Adjustments**: Modifies fares based on rain and temperature.
3. **Route Complexity Multiplier**: Uses duration-to-distance ratio to simulate complexity.
4. **Happy Hour Discounts**: Offers ride discounts during specific hours.
5. **Safety Surcharge**: Adds charges for late-night rides.
6. **Eco-Friendly Discounts**: Reduced fares for eco-friendly vehicles like motorcycles.

---

## 📊 Data Flow

### 1. User Flow
- **Signup/Login** → **Ride Booking** → **Fare Prediction** → **Ride Confirmation** → **Live Tracking** → **Ride Completion**

### 2. Captain Flow
- **Signup/Login** → **Ride Requests** → **Ride Management** → **Earnings Tracking**

### 3. Admin Flow
- **Ad Management** → **Ride Monitoring**

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/TripTap.git
cd TripTap
```

### 2. Backend Setup
```bash
cd backend  
npm install
```
Create a .env file in backend directory.
Start the backend server:
```bash
npm start
```

### 2. Frontend Setup
```bash
cd frontend  
npm install
```
Create a .env file in frontend directory.
Start the frontend development server:
```bash
npm run dev
```
---

## ☁️ Deployment

For production deployment (backend + frontend hosting, env var setup, and troubleshooting), see:

- [`DEPLOYMENT.md`](./DEPLOYMENT.md)

---

## 📂 Project Structure

### Backend

```bash
backend/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── uploads/
├── app.js
├── server.js

```
### Frontend

```bash
frontend/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
├── assets/
├── public/
├── index.html
```
---

## 🧪 Sample .env Files

### Backend

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENWEATHER_API_KEY=your_openweather_api_key
GOOGLE_MAPS_API=your_google_maps_api_key
GOOGLE_MAPS_API_2=your_google_maps_api_key_2
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### Frontend

```bash
VITE_BASE_URL=http://localhost:5000
```
---

## 🛡️ Security Features

1. **JWT-based authentication for secure user sessions**
2. **Role-based access control for users, captains, and admins**
3. **Token blacklisting to prevent unauthorized access**

---

## 📈 Future Enhancements

1. **Integration with payment gateways for seamless transactions**
2. **Advanced analytics for ride patterns and user behavior**
3. **AI-based route optimization for captains**

---
