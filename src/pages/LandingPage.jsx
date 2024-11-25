import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import vid from '../assets/images/vid.mp4';  // Import video

function LandingPage({ setShowLanding }) {
  // Handle button click to hide LandingPage
  const handleButtonClick = () => {
    setShowLanding(false); // Hide the LandingPage
  };

  return (
    <div className="landing-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>Your description or tagline here</p>

        {/* Button to navigate to other pages */}
        <Link to="/about">
          <button className="discover-btn" onClick={handleButtonClick}>
            Discover My Work
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
