import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to our Travel Booking System!</h2>
      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>
    </div>
  );
}

export default Home;
