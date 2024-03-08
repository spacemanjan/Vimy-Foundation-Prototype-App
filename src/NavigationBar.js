import React from 'react';
import { Link } from 'react-router-dom';
import './basicStyle.css';

const NavigationBar = ({ toggleSideMenu, toggleInstructions }) => {

  const handleInfoButtonClick = () => {
    // Show the instructions overlay
    toggleInstructions();
  };  

  return (
    <header>
      <div className="logo">
        <Link to="/">LIVED</Link>
      </div>
      <div className='navRight'>
        <img className="infoBtn" src='info.png' alt='instructions' onClick={handleInfoButtonClick}></img>
        <div className="menu-toggle" onClick={toggleSideMenu}>
          <div className="hamburger"></div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;