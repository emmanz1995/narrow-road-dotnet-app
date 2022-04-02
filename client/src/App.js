import React from 'react';
import './sass/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrayerWall from "./pages/prayerWall/PrayerWall";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<PrayerWall />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
