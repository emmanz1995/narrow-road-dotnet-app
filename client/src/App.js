import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import PrayerDashboard from "./pages/prayers/PrayerDashboard";
import Navbar from "./components/navbar/Navbar";
import CreatePrayer from "./pages/prayers/CreatePrayer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PrayerDashboard />} />
        <Route path="/create-prayer" element={<CreatePrayer />} />
      </Routes>
    </div>
  );
}

export default App;
