import React, { useState, useEffect } from 'react';
import './TitleScreen.css';
import FullScreenVideo from './FullScreenVideo'; // Import the FullScreenVideo component


const TitleScreen = ({ onEnter, setCurrentRoute }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleEnterClick = () => {
    setShowVideo(true);
    onEnter();
  };

  useEffect(() => {
    setCurrentRoute('/');
  }, []);

  return (
    <div className="title-screen">
      <h1 className="title">LIVED</h1>
      <button className="enter-button" onClick={handleEnterClick}>discover the homefront</button>
      {showVideo && <FullScreenVideo onClose={() => setShowVideo(false)} />}
    </div>
  );
};

export default TitleScreen;