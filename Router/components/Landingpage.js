import React from 'react';
import './landingpage.css';
import bannerImage from '../assets/Banner.jpg'; 

function LandingPage() {
  return (
    <div className="landing-page">
      <img src={bannerImage} alt="Banner" /> 
    </div>
  );
}

export default LandingPage;
