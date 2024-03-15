import React, { useState, useEffect } from 'react';
import './FullScreenVideo.css';
import { useNavigate } from 'react-router-dom';

const FullScreenVideo = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const texts = ["In the summer of 1914, a distant European conflict ignited flames that reached across the Atlantic to touch the tranquil shores of Canada.", 
  "With a sense of duty and allegiance to the British Empire, Canadian men eagerly answered the call to arms.", 
  "From the verdant fields of Quebec to the rugged landscapes of British Columbia, a nation rallied together, unified in purpose, unaware of the harrowing trials and sacrifices that lay ahead.",
  "From the muddy trenches of Vimy Ridge to the blood-soaked fields of Passchendaele, Canadian valor and sacrifice became synonymous with the struggle for freedom and justice in the crucible of World War I.", 
  "As the Great War unfolded, Canada emerged as a formidable force on the world stage, leaving an indelible mark on its history and shaping its identity for generations to come.", 
  ""]; // Add your intro text here
  const intervalDuration = 20000; // Interval duration in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, intervalDuration);

    if (currentIndex === texts.length - 1) {
        navigate('/map');
    }
    
    return () => clearInterval(interval);
  }, [texts.length, currentIndex, navigate]);
  
  
  const handleVideoEnds = () => {
    setVideoEnded(true);
    console.log("closing video");
  };

  const exitButtonPressed = () => {
    navigate('/map');
  }

  return (
    <div className="intro-sequence">
      <div className="intro-text">
        <h1 className="fade-in-out">{texts[currentIndex]}</h1>
      </div>
      <div className={`fullscreen-video ${videoEnded ? 'video-ended' : ''}`}>
      <video
        ref={null}
        className="video"
        autoPlay
        onEnded={handleVideoEnds}
      >
        <source src="introvideo.mp4" type="video/mp4" />
        {/* Add more video sources as needed */}
      </video>
      </div>
      <button className="exit-button" onClick={exitButtonPressed}>X</button>
    </div>
  );
};

export default FullScreenVideo;