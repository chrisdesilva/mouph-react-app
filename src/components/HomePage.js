import React from 'react';
import HomePageCarousel from './HomePageCarousel'
import '../styles/homepage.css'

const HomePage = () => (
  <div>
    <h1 className="bandHeader">Mouphtaou Artist Management</h1>
    <h2>AUSTIN-BASED INDEPENDENT BOOKING AGENCY CONNECTING ARTISTS AND VENUES SINCE 2016</h2>
    <HomePageCarousel />
  </div>
);

export default HomePage;