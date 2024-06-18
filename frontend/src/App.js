import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Booking from './components/Booking';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
