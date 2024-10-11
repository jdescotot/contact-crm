// src/components/Home/Home.js
import React from 'react';
import Navigation from '../Navigation/Navigation';
import '../../Styles/Home/HomeStyle.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Contact</h1>
        <Navigation />
      </div>
    </div>
  );
};

export default Home;
