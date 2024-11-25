// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this file exists in the same folder as Header.jsx

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/" className="nav-link">About</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
