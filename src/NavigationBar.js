import React from 'react';
import { Link } from 'react-router-dom';
import './basicStyle.css';

const NavigationBar = ({ toggleSideMenu, toggleInstructions, currentRoute }) => {

  const handleInfoButtonClick = () => {
    // Show the instructions overlay
    toggleInstructions();
  };  

 // Conditional rendering based on currentRoute
 const renderHeader = () => {
  if (currentRoute === '/accHome') {
    return (
      <header className="acc-home-header">
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
  } else {
    return (
      <header className="reg-header">
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
  }
};

return renderHeader();
};

export default NavigationBar;