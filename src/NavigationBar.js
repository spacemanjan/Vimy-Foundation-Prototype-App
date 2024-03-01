import React from 'react';
import { Link } from 'react-router-dom';
import './basicStyle.css';

const NavigationBar = ({ toggleSideMenu }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">LIVED</Link>
      </div>
      <div className="menu-toggle" onClick={toggleSideMenu}>
        <div className="hamburger"></div>
      </div>
    </header>
  );
};

export default NavigationBar;