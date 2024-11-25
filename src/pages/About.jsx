import React from 'react';
import pic from '../assets/images/pic.jpg';  // Import the image

function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',  // Ensures the image covers the entire container
        backgroundPosition: 'center',  // Centers the image
        height: '100vh',  // Full viewport height
        color: 'white',  // Make sure text is readable against the background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>About Me</h1>
      <p>This is some text over the background image.</p>
    </div>
  );
}

export default About;
