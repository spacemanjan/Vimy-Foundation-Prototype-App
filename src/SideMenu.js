import React from 'react';
import { Link } from 'react-router-dom';
import './basicStyle.css';

const SideMenu = ({ isOpen, toggleMenu }) => {
    const handleCloseButtonClick = () => {
      toggleMenu();
    };

    return (
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <button className="navX" onClick={handleCloseButtonClick}>X</button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li><Link to="/accHome">Accesibility</Link></li>
        </ul>
      </div>
    );
  };

export default SideMenu;