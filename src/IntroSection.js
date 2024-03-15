import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroSection.css';

const IntroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Text 1", "Text 2", "Text 3",""]; // Add your intro text here
  const intervalDuration = 10000; // Interval duration in milliseconds
  const navigate = useNavigate(); // Initialize the navigate function


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, intervalDuration);

    if (currentIndex === texts.length - 1) {
        navigate('/map');
    }
    
    return () => clearInterval(interval) && navigate('/map');
  }, [texts.length, currentIndex, navigate]);


  return (
    <div className="intro-text">
      <h1 className="fade-in-out">{texts[currentIndex]}</h1>
    </div>
  );
};

export default IntroSection;