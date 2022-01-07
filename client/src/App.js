import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import PrayerDashboard from './pages/prayers/PrayerDashboard';
import Navbar from './components/navbar/Navbar';
import CreatePrayer from './pages/prayers/CreatePrayer';
import UpdatePrayer from './pages/prayers/UpdatePrayer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PrayerDashboard />} />
        <Route path="/create-prayer" element={<CreatePrayer />} />
        <Route path="/update-prayer/:id" element={<UpdatePrayer />} />
      </Routes>
    </div>
  );
}

export default App;
