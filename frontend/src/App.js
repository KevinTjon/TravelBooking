import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';
import BookingDetails from './components/BookingDetails';
import UserProfile from './components/UserProfile';
import AdminDashboard from './components/AdminDashboard';
import NavbarComponent from './components/NavbarComponent';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

const sampleResults = [
  { id: 1, title: 'Flight to New York', price: 299, availability: 'Available', ratings: 4.5 },
  { id: 2, title: 'Hotel in Paris', price: 199, availability: 'Available', ratings: 4.7 },
  { id: 3, title: 'Rental Car in Los Angeles', price: 99, availability: 'Limited', ratings: 4.3 },
  // Add more sample results as needed
];

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchResults results={sampleResults} />} />
        <Route path="/booking/:id" element={<BookingDetails />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
